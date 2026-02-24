"use client";

import React, { useState } from 'react';
import Link from 'next/link';

interface Publication {
  year: string;
  reportName: string;
}

const ministryPublications: Publication[] = [
  {
    year: "2023",
    reportName: "National Policy on Anti -Money Laundering and Counting the financing of Terrorism AML /CFT of Sri Lanka",
  },
  {
    year: "2021/2022",
    reportName: "National Money Laundering and Terrorist Financing Risk Assessment Of Sri Lanka 2021-2022",
  },
];

const otherPublications: Publication[] = [];

export default function PublicationPage() {
  const [activeTab, setActiveTab] = useState('Ministry Publication');

  const publications = activeTab === 'Ministry Publication' ? ministryPublications : otherPublications;

  return (
    <main className="flex-grow p-8 container mx-auto">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm">
        <Link href="/" className="text-gray-500 hover:underline">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-500">Publication</span>
      </nav>

      {/* Page Title */}
      <h1 className="text-3xl font-bold text-navy mb-8 border-b-4 border-yellow inline-block">
        Publication
      </h1>

      {/* Tabs */}
      <div className="flex">
        <button
          onClick={() => setActiveTab('Ministry Publication')}
          className={`px-4 py-2 font-bold text-lg border-t border-l border-r border-gray-300 transition-colors cursor-pointer ${
            activeTab === 'Ministry Publication' ? 'bg-white text-black' : 'bg-gray-50 text-gray-500'
          }`}
        >
          Ministry Publication
        </button>
        <button
          onClick={() => setActiveTab('Other Publication')}
          className={`px-4 py-2 font-bold text-lg border-t border-r border-gray-300 transition-colors cursor-pointer ${
            activeTab === 'Other Publication' ? 'bg-white text-black' : 'bg-gray-50 text-gray-500'
          }`}
        >
          Other Publication
        </button>
      </div>

      {/* Table Container */}
      <div className="bg-[#8DA8B1] p-12 min-h-[400px]">
        <div className="max-w-5xl mx-auto">
          {/* Table Header */}
          <div className="flex mb-6 text-2xl font-bold text-black">
            <div className="w-1/4 text-center">Year</div>
            <div className="w-3/4 text-center">Report Name</div>
          </div>

          {/* Table Rows */}
          <div className="space-y-0 shadow-sm">
            {publications.length > 0 ? (
              publications.map((pub, index) => (
                <div
                  key={index}
                  className={`flex items-center min-h-[100px] ${
                    index % 2 === 0 ? 'bg-[#6F8B94]' : 'bg-[#D1DCE0]'
                  }`}
                >
                  <div className="w-1/4 text-center font-bold text-2xl px-6 text-black">{pub.year}</div>
                  <div className="w-3/4 text-center font-bold text-2xl px-6 py-4 text-black">{pub.reportName}</div>
                </div>
              ))
            ) : (
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
