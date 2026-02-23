'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

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
  const [selectedDivision, setSelectedDivision] = useState<null | { path: string; name: string }>(null);

  if (selectedDivision) {
    return (
      <main className="flex-grow p-8 container mx-auto">
        <nav className="mb-6 text-sm">
          <Link href="/" className="text-gray-500 hover:underline">Home</Link>
          <span className="mx-2">/</span>
          <button
            onClick={() => setSelectedDivision(null)}
            className="text-gray-500 hover:underline cursor-pointer"
          >
            Divisions
          </button>
          <span className="mx-2">/</span>
          <span className="text-gray-500">{selectedDivision.name}</span>
        </nav>

        <div className="mb-8">
           <button
            onClick={() => setSelectedDivision(null)}
            className="flex items-center gap-2 text-navy hover:text-blue-800 transition-colors mb-4 cursor-pointer"
          >
            <ArrowLeft size={20} />
            <span>Back to Divisions</span>
          </button>
          <h1 className="text-3xl font-bold text-navy border-b-4 border-yellow inline-block">
            {selectedDivision.name}
          </h1>
        </div>

        <div className="bg-white p-10 rounded shadow-md border border-gray-100">
          <p className="text-gray-700">Detailed information for this division will be updated soon.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-grow p-8 container mx-auto">
       <nav className="mb-6 text-sm">
        <Link href="/" className="text-gray-500 hover:underline">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-500">Divisions</span>
      </nav>
      <h1 className="text-3xl font-bold text-navy mb-8 border-b-4 border-yellow inline-block">Divisions</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {divisions.map((division) => (
          <button
            key={division.path}
            onClick={() => setSelectedDivision(division)}
            className="block text-left group w-full cursor-pointer"
          >
            <div className="bg-white p-6 rounded shadow-sm border border-gray-100 h-full flex flex-col justify-between transition-shadow duration-300 hover:shadow-md relative">
              <h2 className="text-xl font-semibold text-navy group-hover:text-blue-800 transition-colors pr-6">
                {division.name}
              </h2>
              <div className="absolute bottom-4 right-4 text-yellow text-2xl font-bold">
                +
              </div>
            </div>
          </button>
        ))}
      </div>
    </main>
  );
}
