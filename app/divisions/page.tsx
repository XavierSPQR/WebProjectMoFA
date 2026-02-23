'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronRight } from 'lucide-react';

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

const bilateralSubDivisions = [
  'South Asia',
  'Middle East',
  'Africa',
  'Europe & North America',
  'East Asia & Pacific'
];

export default function DivisionsPage() {
  const [selectedDivision, setSelectedDivision] = useState(divisions[0]);
  const [isBilateralExpanded, setIsBilateralExpanded] = useState(true);
  const [selectedSubDivision, setSelectedSubDivision] = useState(bilateralSubDivisions[0]);

  const handleDivisionClick = (division: typeof divisions[0]) => {
    setSelectedDivision(division);
    if (division.path === 'bilateral-affairs') {
      setIsBilateralExpanded(!isBilateralExpanded);
    }
  };

  const handleSubDivisionClick = (sub: string) => {
    setSelectedDivision(divisions[0]); // Ensure Bilateral Affairs is the active main division
    setSelectedSubDivision(sub);
  };

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
        <aside className="w-full md:w-1/4 bg-gray-50 p-4 rounded-lg self-start shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-navy mb-4 border-b-2 border-yellow inline-block">Divisions</h2>
          <nav className="flex flex-col gap-1">
            {divisions.map((division) => (
              <div key={division.path} className="flex flex-col">
                <button
                  onClick={() => handleDivisionClick(division)}
                  className={`w-full flex items-center justify-between text-left px-4 py-3 rounded-md transition-all duration-200 cursor-pointer ${
                    selectedDivision.path === division.path
                      ? 'bg-navy text-yellow font-bold shadow-md'
                      : 'text-gray-700 hover:bg-gray-200 hover:text-navy'
                  }`}
                >
                  <span className="flex-grow">{division.name}</span>
                  {division.path === 'bilateral-affairs' && (
                    <span className="ml-2">
                      {isBilateralExpanded ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                    </span>
                  )}
                </button>

                {division.path === 'bilateral-affairs' && isBilateralExpanded && (
                  <div className="ml-4 mt-1 mb-2 flex flex-col gap-1 border-l-2 border-gray-200 pl-2">
                    {bilateralSubDivisions.map((sub) => (
                      <button
                        key={sub}
                        onClick={() => handleSubDivisionClick(sub)}
                        className={`text-left px-4 py-2 text-sm rounded-md transition-all duration-200 cursor-pointer ${
                          selectedDivision.path === 'bilateral-affairs' && selectedSubDivision === sub
                            ? 'bg-navy/10 text-navy font-bold'
                            : 'text-gray-600 hover:bg-gray-200 hover:text-navy'
                        }`}
                      >
                        {sub}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </aside>

        {/* Content Area (3/4 width) */}
        <section className="w-full md:w-3/4">
          {/* Horizontal Sub-Navigation Tabs */}
          {selectedDivision.path === 'bilateral-affairs' && (
            <div className="flex flex-wrap gap-1 mb-6 border-b border-gray-200">
              {bilateralSubDivisions.map((sub) => (
                <button
                  key={sub}
                  onClick={() => handleSubDivisionClick(sub)}
                  className={`px-4 py-2 text-sm font-semibold transition-all duration-200 cursor-pointer border-b-4 ${
                    selectedSubDivision === sub
                      ? 'border-navy text-navy bg-navy/5'
                      : 'border-transparent text-gray-500 hover:text-navy hover:bg-gray-50'
                  }`}
                >
                  {sub}
                </button>
              ))}
            </div>
          )}

          <div className="mb-8">
            <h1 className="text-3xl font-bold text-navy border-b-4 border-yellow inline-block mb-2">
              {selectedDivision.path === 'bilateral-affairs' ? selectedSubDivision : selectedDivision.name}
            </h1>
          </div>

          <div className="bg-white p-10 rounded shadow-md border border-gray-100 min-h-[400px]">
            <p className="text-gray-700 text-lg italic">
              {selectedDivision.path === 'bilateral-affairs'
                ? 'Information for this region will be updated soon.'
                : 'Detailed information for this division will be updated soon.'}
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
