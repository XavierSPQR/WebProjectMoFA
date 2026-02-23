"use client";

import React, { useState } from 'react';
import { Flag } from 'lucide-react';
import Image from 'next/image';

export default function Page() {
  const [activeTab, setActiveTab] = useState('Overview');

  const timelineData = [
    {
      year: "1931",
      title: "Universal Franchies ",
      image: "/assets/1931.jpg",
      description: <p>At the first election to the State Council of Ceylon (the unicameral legislature) in June 1931, the universal franchise was extended to all people, to elect 50 members to the legislature.
Ceylon is regarded as the oldest democracy in Asia, with Universal Adult Franchise (right to vote) being extended to both men and women, before it’s independence, and before being extended in many other countries.
.</p>,
      side: "right"
    },

    {
      year: "1945",
      title: "Diplomatic Relations with Australia",
      image: "/assets/1945.jpg",
      description:<p>Australia and Sri Lanka have built a strong and enduring relationship since the establishment of diplomatic relations in 1947. May 2017 marked 70 years of diplomatic ties between Australia and Sri Lanka.
Australia's Prime Minister Malcolm Turnbull visited Sri Lanka on 2 November 2017 and held productive discussions with President Maithripala Sirisena and Prime Minister Ranil Wickremesinghe. The visit coincided with the 70th anniversary of bilateral relations and were part of a series of high level visits between the two countries. Sri Lankan Prime Minister Ranil Wickremesinghe visited Australia from 13–17 February 2017 and President Maithrpala Sirisena undertook a State Visit to Australia from 24-26 May 2017.
During the visit, Prime Minister Turnbull and Prime Minister Ranil Wickremesinghe witnessed the signing of a bilateral Trade and Investment Framework Arrangement, which would establish regular senior officials' talks to facilitate trade and investment. The Framework follows on from the Joint Declaration on Enhanced Cooperation signed during President Sirisena's visit to Australia in May 2017.</p>,
      side: "left"
    },

    {
      year: "1947",
      title: "Free Education Policy in Sri Lanka",
      image: "/assets/1947.png",
      description:<p>October 1945, the Free Education Policy came into effect;  stating that every child above the age of 5 and not more than 16 is entitled to free education.
This has benefited generations of students and has enabled Sri Lanka to succeed in achieving the Millennium Development Goal of Universal Primary Education.</p>,
      side: "right"
    },

    
    
    
    
    {
      year: "1948",
      title: "Diplomatic Relations With India",
      image: "/assets/1948-img-1.png",
      description: "Diplomatic Relations with the Republic of India established in 1948.",
      side: "right"
    },
    {
      year: "1948",
      title: "Opening Of The First Overseas Mission: The High Commission Of Sri Lanka In New Delhi, India.",
      image: "/assets/1948-img-2.jpg",
      description: "The High Commission premises today.",
      side: "left"
    },
    {
      year: "1948",
      title: "Diplomatic Relations With France",
      image: "/assets/1948-img-3.png",
      description: "Diplomatic Relations with the French Republic established on 27 October 1948.",
      side: "right"
    }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'Overview':
        return (
          <>
            <p className="mb-4">
              The Ministry of Foreign Affairs, Foreign Employment and Tourism coordinates and carries out the foreign policy of the Government of Sri Lanka. The Ministry consists of the Ministry headquarters in Colombo and Sri Lanka Missions abroad.
            </p>
            <p>
              The Ministry was formally established in 1948 following the independence of Ceylon as the Ministry of External Affairs and Defence, coming under the direct control of the Prime Minister of Ceylon. In 1977, the government divided the ministry in two, forming the Ministry of Defence and the Ministry of Foreign Affairs. A.C.S Hameed was appointed as the first Minister of Foreign Affairs on 4 February 1978.
            </p>
          </>
        );
      case 'Vision':
        return (
          <p>
            A professional, dedicated and innovative diplomatic service that proactively promotes Sri Lanka&apos;s interests globally.
          </p>
        );
      case 'Mission':
        return (
          <p>
            To safeguard and promote Sri Lanka&apos;s interests abroad through effective diplomacy
          </p>
        );
      case 'History':
        return (
          <div className="relative py-10">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-sky-500 hidden md:block" />

            <div className="space-y-12">
              {timelineData.map((item, index) => (
                <div key={index} className={`flex items-center w-full ${item.side === 'left' ? 'md:flex-row-reverse' : 'md:flex-row'} flex-col relative`}>
                  {/* Year */}
                  <div className={`w-full md:w-1/2 flex px-8 ${item.side === 'left' ? 'md:justify-start' : 'md:justify-end'}`}>
                    <span className="text-2xl font-bold text-sky-700">
                      {item.year}
                    </span>
                  </div>

                  {/* Icon Circle */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full border-4 border-sky-500 bg-white flex items-center justify-center z-10 hidden md:flex">
                    <Flag className="w-6 h-6 text-sky-600" />
                  </div>

                  {/* Card */}
                  <div className="w-full md:w-1/2 px-8 mt-4 md:mt-0">
                    <div className="relative bg-sky-50 rounded-xl shadow-lg overflow-hidden border border-sky-100">
                      {/* Caret */}
                      <div className={`absolute top-6 w-4 h-4 bg-navy transform rotate-45 hidden md:block ${
                        item.side === 'left' ? '-right-2' : '-left-2'
                      }`} />

                      {/* Header */}
                      <div className="bg-navy text-white p-4 relative z-10">
                        <h3 className="font-bold text-lg leading-tight">{item.title}</h3>
                      </div>

                      {/* Body */}
                      <div className="p-4 flex flex-col sm:flex-row gap-4 items-start bg-sky-50">
                        <div className="relative w-32 h-24 flex-shrink-0">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <main className="flex-grow container mx-auto px-4 py-8 space-y-8 text-black">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-navy mb-8 border-b-4 border-yellow inline-block">
        About Us
      </h1>

      {/* Tabs Row */}
      <div className="flex flex-wrap justify-center gap-4">
        {['Overview', 'Vision', 'Mission', 'History'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-8 py-2 rounded-md font-medium text-center min-w-[120px] cursor-pointer border transition-colors ${
              activeTab === tab
                ? 'bg-navy text-yellow border-navy'
                : 'bg-white text-navy border-gray-200 hover:bg-gray-50'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content Container */}
      <div className={`${activeTab === 'History' ? 'bg-white' : 'bg-teal-100'} rounded-3xl p-8 text-lg leading-relaxed shadow-sm min-h-[200px]`}>
        {renderContent()}
      </div>

      {/* Profiles */}
      <div className="bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Profiles</h2>
        <ul className="space-y-2 list-none">
          <li>Minister</li>
          <li>Deputy Minister of Foreign Affairs and Foreign Employment</li>
          <li>Deputy Minister of Tourism</li>
          <li>Secretary</li>
          <li>Additional Secretaries</li>
        </ul>
      </div>

      {/* Bottom Action Buttons */}
      <div className="flex flex-col gap-4">
        <button className="bg-gray-300 hover:bg-gray-400 text-black font-semibold py-3 px-6 rounded-md w-full transition-colors text-center cursor-pointer">
          Organizational Structure
        </button>
        
      </div>
    </main>
  );
}
