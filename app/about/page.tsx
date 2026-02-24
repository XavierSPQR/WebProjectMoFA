"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Page() {
  const [activeTab, setActiveTab] = useState("Overview");

  const renderContent = () => {
    switch (activeTab) {
      case "Overview":
        return (
          <>
            <p className="mb-4">
              The Ministry of Foreign Affairs, Foreign Employment and Tourism
              coordinates and carries out the foreign policy of the Government
              of Sri Lanka. The Ministry consists of the Ministry headquarters
              in Colombo and Sri Lanka Missions abroad.
            </p>
            <p>
              The Ministry was formally established in 1948 following the
              independence of Ceylon as the Ministry of External Affairs and
              Defence, coming under the direct control of the Prime Minister of
              Ceylon. In 1977, the government divided the ministry in two,
              forming the Ministry of Defence and the Ministry of Foreign
              Affairs. A.C.S Hameed was appointed as the first Minister of
              Foreign Affairs on 4 February 1978.
            </p>
          </>
        );

      case "Vision":
        return (
          <div className="flex flex-col items-center justify-center text-center py-12 space-y-6">
            <h2 className="text-4xl font-bold text-[#2B6CB0]">Vision</h2>
            <p className="text-[#2B6CB0] text-2xl max-w-3xl leading-relaxed">
              To be a responsible nation within the international community and
              to maintain friendly relations with all countries.
            </p>
          </div>
        );

      case "Mission":
        return (
          <div className="flex flex-col items-center justify-center text-center py-12 space-y-6">
            <h2 className="text-4xl font-bold text-[#2B6CB0]">Mission</h2>
            <p className="text-[#2B6CB0] text-2xl max-w-4xl leading-relaxed">
              The promotion, projection, and protection of Sri Lanka's national
              interests internationally, in accordance with the foreign policy
              of the Government and to advise the Government on managing foreign
              relations in keeping with Sri Lanka's national interests.
            </p>
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

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4">
        {["Overview", "Vision", "Mission"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-8 py-2 rounded-md font-medium text-center min-w-[120px] cursor-pointer border transition-colors ${
              activeTab === tab
                ? "bg-navy text-yellow border-navy"
                : "bg-white text-navy border-gray-200 hover:bg-gray-50"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content Box */}
      <div
        className={`${
          activeTab === "Overview" ? "bg-teal-100" : "bg-white"
        } rounded-3xl p-8 text-lg leading-relaxed shadow-sm min-h-[200px]`}
      >
        {renderContent()}
      </div>

      {/* History Button */}
      <div className="flex justify-center">
        <Link href="/about/history">
          <button className="bg-navy hover:bg-blue-900 text-yellow font-semibold py-3 px-8 rounded-md transition-colors">
            View Full History
          </button>
        </Link>
      </div>

      {/* Profiles Section */}
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

      {/* Bottom Action Button */}
      <div className="flex flex-col gap-4">
        <button className="bg-gray-300 hover:bg-gray-400 text-black font-semibold py-3 px-6 rounded-md w-full transition-colors text-center cursor-pointer">
          Organizational Structure
        </button>
      </div>
    </main>
  );
}