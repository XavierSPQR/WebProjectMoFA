'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { db } from '../firebase';
import { collection, getDocs, query, orderBy, Timestamp } from 'firebase/firestore';

interface FeaturedNews {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
}

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [featuredNews, setFeaturedNews] = useState<FeaturedNews[]>([]);
  const [newsLoading, setNewsLoading] = useState(true);
  const [newsError, setNewsError] = useState<string | null>(null);
  const [expandedItems, setExpandedItems] = useState<{[key: string]: boolean}>({});

  const toggleItem = (id: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const heroSlides = [
    {
      title: "A cordial conversation with the President of the United States, Donald Trump",
      image: "/placeholder-diplomatic.jpg"
    },
    {
      title: "24th Council of Ministers Meeting of the Indian Ocean Rim Association (IORA)",
      subtitle: "21 May 2025, Colombo / Virtual Format",
      image: "/placeholder-iora.jpg"
    },
    {
      title: "President Anura Kumara Dissanayake sworn in as the 9th Executive President of Sri Lanka",
      image: "/placeholder-president.jpg"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  useEffect(() => {
    const fetchFeaturedNews = async () => {
      try {
        const newsCollection = collection(db, 'news');
        const q = query(newsCollection, orderBy('date', 'desc'));
        const querySnapshot = await getDocs(q);

        const newsItems = querySnapshot.docs.reduce<FeaturedNews[]>((acc, doc) => {
          const data = doc.data();
          if (data.date && typeof data.date.seconds === 'number') {
            const firestoreTimestamp = new Timestamp(data.date.seconds, data.date.nanoseconds);
            const jsDate = firestoreTimestamp.toDate();
            const date = jsDate.toLocaleDateString('en-GB', {
              day: '2-digit',
              month: 'long',
              year: 'numeric'
            });

            acc.push({
              id: doc.id,
              title: data.title,
              excerpt: data.excerpt,
              content: data.content || data.excerpt,
              date: date,
            });
          }
          return acc;
        }, []);

        setFeaturedNews(newsItems);
      } catch (err) {
        console.error("Failed to fetch featured news:", err);
        setNewsError("Could not load latest news.");
      } finally {
        setNewsLoading(false);
      }
    };

    fetchFeaturedNews();
  }, []);

  const quickLinks = [
    { title: "PARLIAMENT OF SRI LANKA", url: "https://www.parliament.lk", external: true },
    { title: "PRIME MINISTER OF SRI LANKA", url: "https://www.pmoffice.gov.lk", external: true },
    { title: "PRESIDENT OF SRI LANKA", url: "https://www.president.gov.lk", external: true },
    { title: "OFFICIAL WEB PORTAL OF THE GOVERNMENT OF SRI LANKA", url: "https://www.gov.lk", external: true },
    { title: "MINISTRY OF FINANCE", url: "https://www.treasury.gov.lk", external: true },
    { title: "SRI LANKA TOURISM", url: "https://www.srilanka.travel", external: true },
    { title: "ELECTRONIC TRAVEL AUTHORIZATION SYSTEM", url: "https://www.eta.gov.lk", external: true },
    { title: "LAKSHMAN KADIRGAMAR INSTITUTE (LKI)", url: "https://www.lki.lk", external: true },
    { title: "AIRPORT & AVIATION SERVICES (SRI LANKA) LIMITED", url: "https://www.airport.lk", external: true },
    { title: "BANDARANAIKE INTERNATIONAL DIPLOMATIC TRAINING INSTITUTE (BIDTI)", url: "/about", external: false }
  ];

  return (
    <main className="flex-1 bg-white">
      {/* Hero Slider */}
      <section className="relative h-[500px] bg-gray-900 overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#392F5A]/90 to-[#392F5A]/70" />
            <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center">
              <div className="text-white max-w-3xl">
                <h2 className="text-4xl font-bold mb-4 leading-tight">
                  {slide.title}
                </h2>
                {slide.subtitle && (
                  <p className="text-xl text-white/90">{slide.subtitle}</p>
                )}
              </div>
            </div>
          </div>
        ))}

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${index === currentSlide
                  ? 'bg-[#F4D06F] w-8'
                  : 'bg-white/50 hover:bg-white/75'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content - Featured News */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-[#392F5A] mb-6 border-b-4 border-[#F4D06F] pb-2">
              Latest News
            </h2>

            <div className="max-h-[75vh] overflow-y-auto pr-4 custom-scrollbar">
              <div className="space-y-8">
                {newsLoading && <p>Loading news...</p>}
                {newsError && <p className="text-red-500">{newsError}</p>}
                {!newsLoading && !newsError && featuredNews.map((news) => {
                  const isExpanded = expandedItems[news.id];
                  return (
                    <div key={news.id} className="group border-b border-gray-100 pb-8 last:border-0">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {news.title}
                      </h3>
                      <p className="text-sm text-gray-500 mt-2 mb-4">{news.date}</p>
                      
                      <div className="text-gray-600 text-lg leading-relaxed transition-all duration-300">
                        {isExpanded ? (
                          <p>{news.content}</p> 
                        ) : (
                          <p className="line-clamp-3">{news.excerpt}</p>
                        )}
                      </div>

                      <button 
                        onClick={() => toggleItem(news.id)} 
                        className="text-sm font-semibold text-[#392F5A] hover:underline mt-4"
                      >
                        {isExpanded ? 'See less' : 'See more'}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Sidebar - Quick Links */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-[#392F5A] mb-4 border-b-4 border-[#F4D06F] pb-2">
              Quick Links
            </h2>

            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                link.external ? (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-gray-50 border border-gray-200 p-4 hover:bg-[#F4D06F]/20 hover:border-[#392F5A] transition-all text-sm"
                  >
                    <span className="text-gray-800 font-medium">
                      {link.title}
                    </span>
                  </a>
                ) : (
                  <Link
                    key={index}
                    href={link.url}
                    className="block bg-gray-50 border border-gray-200 p-4 hover:bg-[#F4D06F]/20 hover:border-[#392F5A] transition-all text-sm"
                  >
                    <span className="text-gray-800 font-medium">
                      {link.title}
                    </span>
                  </Link>
                )
              ))}
            </div>

            {/* Important Services */}
            <div className="mt-8">
              <h3 className="text-xl font-bold text-[#392F5A] mb-4 border-b-4 border-[#F4D06F] pb-2">
                Services
              </h3>
              <div className="space-y-2">
                <Link
                  href="/divisions?id=consular-affairs"
                  className="block bg-[#392F5A] text-white p-3 hover:bg-[#4a3f6a] transition-colors"
                >
                  Consular Services
                </Link>
                <Link
                  href="/public-diplomacy"
                  className="block bg-[#392F5A] text-white p-3 hover:bg-[#4a3f6a] transition-colors"
                >
                  Foreign Employment
                </Link>
                <Link
                  href="/divisions"
                  className="block bg-[#392F5A] text-white p-3 hover:bg-[#4a3f6a] transition-colors"
                >
                  Tourism Information
                </Link>
                <Link
                  href="/contact-sl"
                  className="block bg-[#F4D06F] text-[#392F5A] p-3 hover:bg-yellow-400 transition-colors font-semibold"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
