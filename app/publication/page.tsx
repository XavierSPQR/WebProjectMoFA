"use client";

import React, { useState } from "react";
import Link from "next/link";

// Define the TypeScript interface for a Publication
interface Publication {
  year: string;
  reportName: string;
  filePath: string;
}

// List of Ministry Publications
const ministryPublications: Publication[] = [
  {
    year: "2024",
    reportName: "Annual Performance Report of The Ministry Of Foreign Affairs",
    filePath: "/assets/2024_compressed.pdf",
  },
  {
    year: "2023",
    reportName: "Annual Performance Report of The Ministry Of Foreign Affairs",
    filePath: "/assets/2023.pdf",
  },
  {
    year: "2022",
    reportName: "Annual Performance Report of The Ministry Of Foreign Affairs",
    filePath: "/assets/2022_compressed.pdf",
  },
  {
    year: "2021",
    reportName: "Annual Performance Report of The Ministry Of Foreign Affairs",
    filePath: "/assets/2021.pdf",
  },
  {
    year: "2020",
    reportName: "Annual Performance Report of The Ministry Of Foreign Affairs",
    filePath: "/assets/2020.pdf",
  },
  {
    year: "2019",
    reportName: "Annual Performance Report of The Ministry Of Foreign Affairs",
    filePath: "/assets/2019_compressed.pdf",
  },
  {
    year: "2018",
    reportName: "Annual Performance Report of The Ministry Of Foreign Affairs",
    filePath: "/assets/2018.pdf",
  },
  {
    year: "2017",
    reportName: "Annual Performance Report of The Ministry Of Foreign Affairs",
    filePath: "/assets/2017.pdf",
  },
  {
    year: "2016",
    reportName: "Annual Performance Report of The Ministry Of Foreign Affairs",
    filePath: "/assets/2016.pdf",
  },
  {
    year: "2015",
    reportName: "Annual Performance Report of The Ministry Of Foreign Affairs",
    filePath: "/assets/2015.pdf",
  },
];

// List of Other Publications
const otherPublications: Publication[] = [
  {
    year: "2023",
    reportName:
      "National Policy on Anti-Money Laundering and Countering the Financing of Terrorism (AML/CFT) of Sri Lanka 2023-2028",
    filePath: "/assets/other_2023.pdf",
  },
  {
    year: "2021",
    reportName: "National Money Laundering and Terrorist Financing Risk Assessment of Sri Lanka",
    filePath: "/assets/other_2021.pdf",
  },
];

export default function PublicationPage() {
  // State to manage which tab is active
  const [activeTab, setActiveTab] = useState("Ministry Publication");

  // Select which publications to display based on active tab
  const publications =
    activeTab === "Ministry Publication" ? ministryPublications : otherPublications;

  return (
    <main className="flex-grow p-8 container mx-auto">
    

      {/* Page title */}
      <h1 className="text-3xl font-bold text-navy mb-8 border-b-4 border-yellow inline-block">
        Publication
      </h1>

      {/* Tab buttons for Ministry vs Other Publications */}
      <div className="flex mb-6 gap-2">
      <button
          onClick={() => setActiveTab("Ministry Publication")}
          className={`px-6 py-2 font-bold text-lg transition-colors cursor-pointer border border-gray-300 ${
            activeTab === "Ministry Publication"
              ? "bg-white text-black"
              : "bg-gray-50 text-gray-500"
          } rounded-lg`} // <-- Added rounded corners
      >
        Ministry Publication
        </button>

      <button
          onClick={() => setActiveTab("Other Publication")}
          className={`px-6 py-2 font-bold text-lg transition-colors cursor-pointer border border-gray-300 ${
          activeTab === "Other Publication"
              ? "bg-white text-black"
              : "bg-gray-50 text-gray-500"
        } rounded-lg`} // <-- Added rounded corners
      >
        Other Publication
      </button>
</div>
      {/* Publication list container */}
      <div className="bg-[#8DA8B1] p-12 min-h-[400px]">
        <div className="max-w-5xl mx-auto">
          {/* Table header */}
          <div className="flex mb-6 text-2xl font-bold text-black">
            <div className="w-1/4 text-center">Year</div>
            <div className="w-3/4 text-center">Report Name</div>
          </div>

          {/* Publication entries */}
          <div className="space-y-0 shadow-sm">
            {publications.length > 0 ? (
              publications.map((pub, index) => (
                <a
                  key={index}
                  href={pub.filePath} // PDF file path
                  target="_blank" // open in new tab
                  rel="noopener noreferrer"
                  className={`flex items-center min-h-[100px] cursor-pointer ${
                    index % 2 === 0 ? "bg-[#6F8B94]" : "bg-[#D1DCE0]"
                  }`}
                >
                  {/* Year */}
                  <div className="w-1/4 text-center font-bold text-2xl px-6 text-black">
                    {pub.year}
                  </div>
                  {/* Report Name */}
                  <div className="w-3/4 text-center font-bold text-2xl px-6 py-4 text-black">
                    {pub.reportName}
                  </div>
                </a>
              ))
            ) : (
              // Show this message if no publications exist for this tab
              <div className="text-center py-20 text-white font-bold text-2xl">
                No publications found for this category.
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}