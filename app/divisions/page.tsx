'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronRight } from 'lucide-react';

/**
 * DIVISIONS_DATA Content Map
 *
 * To add or update a division's description:
 * 1. Find the division key (e.g., 'asia-affairs').
 * 2. Update or add the 'description' field.
 * 3. To add a new division, add a new key-value pair following the structure.
 */
const DIVISIONS_DATA: Record<string, {
  name: string;
  description?: string;
  subDivisions?: Record<string, { name: string; description?: string }>;
}> = {
  'bilateral-affairs': {
    name: 'Bilateral Affairs',
    description: '',
    subDivisions: {
      'south-asia': { name: 'South Asia', description: '' },
      'middle-east': { name: 'Middle East', description: '' },
      'africa': { name: 'Africa', description: '' },
      'europe-north-america': { name: 'Europe & North America', description: '' },
      'east-asia-pacific': { name: 'East Asia & Pacific', description: '' },
    }
  },
  'multilateral-affairs': { name: 'Multilateral Affairs', description: '' },
  'economic-affairs': { name: 'Economic Affairs', description: '' },
  'protocols': { name: 'Protocols', description: '' },
  'consular-affairs': { name: 'Consular Affairs', description: '' },
  'legal': { name: 'Legal', description: '' },
  'ocean-affairs': { name: 'Ocean Affairs, Environment and Climate Change', description: '' },
  'performance-review': { name: 'Performance Review and Implementation', description: '' },
  'international-security': { name: 'International Security Corporation', description: '' },
  'hr-research-training': { name: 'Human Resources Development, Research and Training', description: '' },
  'hr-mission-management': { name: 'HR and Mission Management', description: '' },
  'overseas-assets': { name: 'Overseas Asset Management and Development', description: '' },
  'general-administration': { name: 'General Administration', description: '' },
  'finance': { name: 'Finance', description: '' },
  'internal-audit': { name: 'Internal Audit and Investigation', description: '' },
};

const divisions = Object.keys(DIVISIONS_DATA).map(key => ({
  path: key,
  name: DIVISIONS_DATA[key].name
}));

const bilateralSubDivisions = Object.keys(DIVISIONS_DATA['bilateral-affairs'].subDivisions || {});

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

  const currentDescription = selectedDivision.path === 'bilateral-affairs'
    ? DIVISIONS_DATA['bilateral-affairs'].subDivisions?.[selectedSubDivision]?.description
    : DIVISIONS_DATA[selectedDivision.path]?.description;

  const displayDescription = currentDescription || 'Detailed information for this section is currently being updated.';

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
                        {DIVISIONS_DATA['bilateral-affairs'].subDivisions?.[sub]?.name || sub}
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
                  {DIVISIONS_DATA['bilateral-affairs'].subDivisions?.[sub]?.name || sub}
                </button>
              ))}
            </div>
          )}

          <div className="mb-8">
            <h1 className="text-3xl font-bold text-navy border-b-4 border-yellow inline-block mb-2">
              {selectedDivision.path === 'bilateral-affairs'
                ? DIVISIONS_DATA['bilateral-affairs'].subDivisions?.[selectedSubDivision]?.name || selectedSubDivision
                : selectedDivision.name}
            </h1>
          </div>

          <div className="bg-white p-10 rounded shadow-md border border-gray-100 min-h-[400px]">
            <p className="text-gray-700 text-lg italic whitespace-pre-line">
              {displayDescription}
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
