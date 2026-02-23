'use client';

import { useState } from 'react';
import Link from 'next/link';

const divisions = [
  { path: 'bilateral-affairs', name: 'Bilateral Affairs' },
  { path: 'multilateral-affairs', name: 'Multilateral Affairs' },
  { path: 'economic-affairs', name: 'Economic Affairs' },
  { path: 'protocols', name: 'Protocols' },
  { path: 'consular-affairs', name: 'Consular Affairs' },
  { path: 'legal', name: 'Legal' },
  { path: 'ocean-affairs', name: 'Ocean Affairs, Environment and Climate Change' },
  { path: 'performance-review', name: 'Performance Review and Implementation' },
  { path: 'international-security', name: 'International Security Corporation' },
  { path: 'hr-research-training', name: 'Human Resources Development, Research and Training' },
  { path: 'hr-mission-management', name: 'HR and Mission Management' },
  { path: 'overseas-assets', name: 'Overseas Asset Management and Development' },
  { path: 'general-administration', name: 'General Administration' },
  { path: 'finance', name: 'Finance' },
  { path: 'internal-audit', name: 'Internal Audit and Investigation' },
];

export default function DivisionsPage() {
  const [selectedDivision, setSelectedDivision] = useState(divisions[0]);

  return (
    <main className="flex-grow p-8 container mx-auto">
      {/* Breadcrumbs */}
      <nav className="mb-6 text-sm">
        <Link href="/" className="text-gray-500 hover:underline">Home</Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-500">Divisions</span>
      </nav>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Sidebar (1/4 width) */}
        <aside className="w-full md:w-1/4">
          <h2 className="text-xl font-bold text-navy mb-4 border-b-2 border-yellow inline-block">Divisions</h2>
          <nav className="flex flex-col gap-1">
            {divisions.map((division) => (
              <button
                key={division.path}
                onClick={() => setSelectedDivision(division)}
                className={`text-left px-4 py-3 rounded-md transition-all duration-200 cursor-pointer ${
                  selectedDivision.path === division.path
                    ? 'bg-navy text-yellow font-bold shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100 hover:text-navy'
                }`}
              >
                {division.name}
              </button>
            ))}
          </nav>
        </aside>

        {/* Content Area (3/4 width) */}
        <section className="w-full md:w-3/4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-navy border-b-4 border-yellow inline-block mb-2">
              {selectedDivision.name}
            </h1>
          </div>

          <div className="bg-white p-10 rounded shadow-md border border-gray-100 min-h-[400px]">
            <p className="text-gray-700 text-lg italic">
              Detailed information for this division will be updated soon.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
