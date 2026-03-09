"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Reusable Profile Card Component
const ProfileCard = ({ title, isOpen, onClick, children }) => {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden mb-2 bg-white shadow-sm">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="text-lg font-semibold text-navy">{title}</span>
        <span className={`transform transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>
          ▼
        </span>
      </button>
      {isOpen && (
        <div className="p-1 border-t border-gray-100 bg-white">
          {children}
        </div>
      )}
    </div>
  );
};

export default function Page() {
  const [activeTab, setActiveTab] = useState("Overview");
  const [expandedProfile, setExpandedProfile] = useState("Minister");
  const [isOCExpanded, setIsOCExpanded] = useState(false);

  const toggleProfile = (profile) => {
    setExpandedProfile(expandedProfile === profile ? null : profile);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Overview":
        return (
          <>
            <p className="mb-4">
              The Ministry of Foreign Affairs, Foreign Employment and Tourism
              coordinates and carries out the foreign policy of the Government
              of Sri Lanka.
            </p>
            <p>
              The Ministry was formally established in 1948 following the
              independence of Ceylon.
            </p>
          </>
        );
      case "Vision":
        return (
          <div className="flex flex-col items-center justify-center text-center py-6 md:py-12 space-y-4 md:space-y-6">
            <h2 className="text-2xl md:text-4xl font-bold text-[#2B6CB0]">Vision</h2>
            <p className="text-[#2B6CB0] text-lg md:text-2xl max-w-3xl leading-relaxed">
              To be a responsible nation within the international community.
            </p>
          </div>
        );
      case "Mission":
        return (
          <div className="flex flex-col items-center justify-center text-center py-6 md:py-12 space-y-4 md:space-y-6">
            <h2 className="text-2xl md:text-4xl font-bold text-[#2B6CB0]">Mission</h2>
            <p className="text-[#2B6CB0] text-lg md:text-2xl max-w-4xl leading-relaxed">
              The promotion, projection, and protection of Sri Lanka&apos;s national interests.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <main className="flex-grow container mx-auto px-4 py-8 space-y-8 text-black">
      <h1 className="text-2xl md:text-3xl font-bold text-navy mb-4 md:mb-8 border-b-4 border-yellow inline-block">
        About Us
      </h1>

      <div className="flex flex-wrap justify-center gap-2 md:gap-4">
        {["Overview", "Vision", "Mission"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 md:px-8 py-2 rounded-md font-medium text-center flex-1 md:flex-none min-w-[100px] cursor-pointer border transition-colors ${
              activeTab === tab
                ? "bg-navy text-yellow border-navy"
                : "bg-white text-navy border-gray-200 hover:bg-gray-50"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className={`${activeTab === "Overview" ? "bg-teal-100" : "bg-white"} rounded-2xl md:rounded-3xl p-6 md:p-8 text-base md:text-lg leading-relaxed shadow-sm min-h-[150px] md:min-h-[200px]`}>
        {renderContent()}
      </div>

      <div className="flex justify-center">
        <Link href="/about/history" className="w-full md:w-auto">
          <button className="bg-navy hover:bg-blue-900 text-yellow font-semibold py-3 px-8 rounded-md transition-colors w-full md:w-auto">
            View Full History
          </button>
        </Link>
      </div>

      <div className="bg-gray-100 p-4 md:p-6 rounded-lg">
        <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Profiles</h2>
        
        <div className="space-y-4">
          {/* Minister Profile */}
          <ProfileCard title="Minister" isOpen={expandedProfile === "Minister"} onClick={() => toggleProfile("Minister")}>
            <div className="bg-[#1a4a6e] text-white p-4 md:p-10 rounded-lg flex flex-col md:flex-row gap-6 md:gap-8">
              <div className="md:w-1/3 flex flex-col items-center">
                <div className="text-center mb-4 md:mb-6">
                    <h3 className="text-lg md:text-xl font-semibold text-blue-200">Hon. Vijitha Herath, MP</h3>
                    <p className="text-xs md:text-sm font-bold uppercase tracking-wide mt-1">Minister of Foreign Affairs, Foreign Employment & Tourism</p>
                </div>
                <div className="relative w-full max-w-[300px] aspect-[4/3] border-4 border-white overflow-hidden shadow-lg">
                  <Image
                    src="/minister.jpg"
                    alt="Hon. Vijitha Herath"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3 space-y-3 md:space-y-4 text-sm md:text-base leading-relaxed">
                <p>Vijitha Herath was sworn in as the Minister of Foreign Affairs, Foreign Employment, and Tourism on 18 November 2024.</p>

                <p>A seasoned politician, Minister Herath has been serving as a Member of the Sri Lanka Parliament for the Gampaha District since 2000. At the 2024 General Election, he was re-elected with the highest number of preferential votes ever recorded in history.</p>

                <p>He plays a key leadership role in the National People&apos;s Power (NPP) movement. Previously, he served as the Minister of Cultural Affairs and National Heritage (2004-2005).</p>

                <p>He holds a bachelor&apos;s degree in science from the University of Kelaniya. In his 26-year career, he has remained a committed advocate for democratic governance and anti-corruption.</p>              </div>
            </div>
          </ProfileCard>

          {/* Secretary Profile */}
          <ProfileCard title="Secretary" isOpen={expandedProfile === "Secretary"} onClick={() => toggleProfile("Secretary")}>
            <div className="bg-[#1a4a6e] text-white p-4 md:p-10 rounded-lg flex flex-col md:flex-row gap-6 md:gap-8">
              <div className="md:w-1/3 flex flex-col items-center">
                <div className="text-center mb-4 md:mb-6">
                    <h3 className="text-lg md:text-xl font-semibold text-blue-200">Ms. Aruni Ranaraja</h3>
                    <p className="text-xs md:text-sm font-bold uppercase tracking-wide mt-1">Secretary, Ministry of Foreign Affairs</p>
                </div>
                <div className="relative w-full max-w-[300px] aspect-[4/3] border-4 border-white overflow-hidden shadow-lg">
                  <Image
                    src="/aruni-ranaraja.jpg"
                    alt="Ms. Aruni Ranaraja"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3 space-y-3 md:space-y-4 text-sm md:text-base leading-relaxed">
                <p>Ms. Aruni Ranaraja joined the Sri Lanka Foreign Service in 1996. During her diplomatic career spanning twenty-eight years, she has served in several capacities both at the Ministry of Foreign Affairs and Sri Lanka Missions Abroad.</p>

                <p>Prior to her appointment as Secretary, she was Additional Secretary & Chief of Protocol of the Ministry. She served as Ambassador of Sri Lanka to the Kingdom of the Netherlands (2021-2024) and Ambassador to the Philippines (2015-2019), where she was awarded the Order of Sikatuna, Grand Cross.</p>

                <p>Her overseas assignments include Rome, Moscow, Bangkok, and Belgium. At headquarters, she has served as Director General for South Asia and SAARC, Africa, United Nations, Multilateral Affairs, and Consular Affairs.</p>

                <p>Ms. Ranaraja holds a Master&apos;s and Bachelor&apos;s Degree in International Relations from the State University of Ukraine and a Postgraduate Diploma from BCIS, Colombo. She is fluent in English and Russian and understands Japanese.</p>

              </div>
              
            </div>
          </ProfileCard>

          {/* Deputy Minister FA Profile */}
          <ProfileCard title="Deputy Minister of Foreign Affairs" isOpen={expandedProfile === "DeputyMinisterFA"} onClick={() => toggleProfile("DeputyMinisterFA")}>
            <div className="bg-[#1a4a6e] text-white p-4 md:p-10 rounded-lg flex flex-col md:flex-row gap-6 md:gap-8">
              <div className="md:w-1/3 flex flex-col items-center">
                <div className="text-center mb-4 md:mb-6">
                    <h3 className="text-lg md:text-xl font-semibold text-blue-200">Hon. Arun Hemachandra, MP</h3>
                    <p className="text-xs md:text-sm font-bold uppercase tracking-wide mt-1">Deputy Minister</p>
                </div>
                <div className="relative w-full max-w-[300px] aspect-[4/3] border-4 border-white overflow-hidden shadow-lg">
                  <Image
                    src="/arun-hemachandra.jpg"
                    alt="Hon. Arun Hemachandra"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3 space-y-3 md:space-y-4 text-sm md:text-base leading-relaxed">
                <p>Hon. Arun Hemachandra was sworn in on 21 November 2024 representing the Trincomalee District. He is a member of the NPP National Executive Committee and Chairman of the Trincomalee District Coordination Committee.</p>

                  <p>He holds a BSc in Biology from Angeles University Foundation and an LLB from the University of London.</p>
              </div>
            </div>
          </ProfileCard>

          {/* Deputy Minister of Tourism Profile */}
          <ProfileCard title="Deputy Minister of Tourism" isOpen={expandedProfile === "DeputyMinisterTourism"} onClick={() => toggleProfile("DeputyMinisterTourism")}>
            <div className="bg-[#1a4a6e] text-white p-4 md:p-10 rounded-lg flex flex-col md:flex-row gap-6 md:gap-8">
              <div className="md:w-1/3 flex flex-col items-center">
                <div className="text-center mb-4 md:mb-6">
                    <h3 className="text-lg md:text-xl font-semibold text-blue-200">Hon. Prof. Ruwan Ranasinghe, MP</h3>
                    <p className="text-xs md:text-sm font-bold uppercase tracking-wide mt-1">Deputy Minister</p>
                </div>
                <div className="relative w-full max-w-[300px] aspect-[4/3] border-4 border-white overflow-hidden shadow-lg">
                  <Image
                    src="/ruwan-ranasinghe.jpg"
                    alt="Hon. Prof. Ruwan Ranasinghe"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3 space-y-3 md:space-y-4 text-sm md:text-base leading-relaxed">
                <p>Hon. Prof. Ruwan Ranasinghe assumed duties in 2024 representing the Badulla District. An academic by profession, he holds a PhD in Tourism Management and has served as a researcher and professor.</p>
              </div>
            </div>
          </ProfileCard>
        </div>
      </div>
      
      <div className="flex flex-col gap-4">
        <button 
          onClick={() => setIsOCExpanded(!isOCExpanded)}
          className="bg-gray-300 hover:bg-gray-400 text-black font-semibold py-3 px-6 rounded-md w-full transition-colors text-center cursor-pointer flex justify-center items-center gap-2"
        >
          Organizational Structure
          <span className={`transform transition-transform duration-200 ${isOCExpanded ? "rotate-180" : ""}`}>
            ▼
          </span>
        </button>

        {isOCExpanded && (
          <div className="w-full border border-gray-200 rounded-lg overflow-hidden bg-white p-2">
            <div className="relative w-full h-auto">
              <Image 
                src="/assets/oc.jpg" 
                alt="Organizational Structure" 
                width={1200} 
                height={800} 
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
