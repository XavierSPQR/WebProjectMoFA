'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

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

  const featuredNews = [
    {
      title: "Visiting External Affairs Minister of India Dr. S. Jaishankar holds talks with Foreign Minister Vijitha Herath",
      link: "/statements",
      image: "/placeholder-minister.jpg"
    },
    {
      title: "First Official Visit to India",
      description: "President Anura Kumara Dissanayake sworn in as the 9th Executive President of Sri Lanka",
      link: "/statements",
      image: "/placeholder-india.jpg"
    },
    {
      title: "Sri Lanka celebrates IORA Day under its Chairmanship at Galle Face Green",
      link: "/statements",
      image: "/placeholder-iora-day.jpg"
    }
  ];

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

            <div className="space-y-6">
              {featuredNews.map((news, index) => (
                <Link
                  key={index}
                  href={news.link}
                  className="block border border-gray-200 hover:border-[#392F5A] transition-colors"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 hover:text-[#392F5A] mb-2">
                      {news.title}
                    </h3>
                    {news.description && (
                      <p className="text-gray-600">{news.description}</p>
                    )}
                  </div>
                </Link>
              ))}
            </div>

            {/* View All Link */}
            <div className="mt-6">
              <Link
                href="/statements"
                className="inline-block bg-[#392F5A] text-white px-6 py-3 hover:bg-[#4a3f6a] transition-colors"
              >
                View All News & Statements →
              </Link>
            </div>

            {/* About Republic Building */}
            <div className="mt-12 border-t-4 border-[#F4D06F] pt-8">
              <div className="bg-gray-50 p-6">
                <h3 className="text-2xl font-bold text-[#392F5A] mb-4">
                  The Republic Building
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The historic Republic Building has housed the Foreign Ministry since 1948. Located in Colombo, this iconic building represents Sri Lanka&apos;s diplomatic heritage and continues to serve as the headquarters for the Ministry of Foreign Affairs, Foreign Employment and Tourism.
                </p>
                <p className="text-gray-600 italic">
                  ඵෙතිහාසික ජනරජ ගොඩනැඟිල්ල 1948 වසරේ සිට විදේශ කටයුතු අමාත්‍යාංශයේ නිවහනයි.
                </p>
                <Link
                  href="/about"
                  className="inline-block mt-4 text-[#392F5A] font-semibold hover:underline"
                >
                  Learn More About Our History →
                </Link>
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
                  href="/divisions/consular-services"
                  className="block bg-[#392F5A] text-white p-3 hover:bg-[#4a3f6a] transition-colors"
                >
                  Consular Services
                </Link>
                <Link
                  href="/divisions/foreign-employment"
                  className="block bg-[#392F5A] text-white p-3 hover:bg-[#4a3f6a] transition-colors"
                >
                  Foreign Employment
                </Link>
                <Link
                  href="/divisions/tourism"
                  className="block bg-[#392F5A] text-white p-3 hover:bg-[#4a3f6a] transition-colors"
                >
                  Tourism Information
                </Link>
                <Link
                  href="/contact"
                  className="block bg-[#F4D06F] text-[#392F5A] p-3 hover:bg-yellow-400 transition-colors font-semibold"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Social Media / Emergency Contact */}
            <div className="mt-8 bg-red-50 border-2 border-red-200 p-4">
              <h3 className="text-lg font-bold text-red-800 mb-2">
                Emergency Contact
              </h3>
              <p className="text-sm text-gray-700 mb-2">
                For urgent consular assistance for Sri Lankan citizens abroad
              </p>
              <a
                href="/divisions/emergency-response-unit"
                className="block bg-red-600 text-white text-center p-2 hover:bg-red-700 transition-colors font-semibold"
              >
                Emergency Response Unit
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <section className="bg-[#392F5A] text-white py-12 mt-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
              <p className="text-white/90">
                To safeguard and promote Sri Lanka&apos;s interests abroad through effective diplomacy
              </p>
              <Link
                href="/about"
                className="inline-block mt-4 text-[#F4D06F] hover:underline font-semibold"
              >
                Learn More →
              </Link>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Diplomatic Missions</h3>
              <p className="text-white/90">
                Sri Lanka maintains diplomatic relations with countries worldwide
              </p>
              <Link
                href="/divisions"
                className="inline-block mt-4 text-[#F4D06F] hover:underline font-semibold"
              >
                View Missions →
              </Link>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Get Assistance</h3>
              <p className="text-white/90">
                Access consular services and support for Sri Lankan citizens
              </p>
              <Link
                href="/contact"
                className="inline-block mt-4 text-[#F4D06F] hover:underline font-semibold"
              >
                Contact Us →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
