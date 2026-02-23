'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface Division {
  id: string;
  title: string;
  content: string;
  subDivisions?: Division[];
}

const AFRICA_CONTENT = `The Africa Affairs Division deals with matters pertaining to relations with 54 countries in the African continent and the African Union (AU).

The Division is assigned with the task of following political and socio-economic developments as well as coordinating bilateral relations with these countries.

It also directs Sri Lanka’s foreign policy with these countries in the political, economic, security, education and social spheres. Technical cooperation and development assistance, investment relations, tourism and cultural promotion through bilateral, regional and multilateral engagements are part of the responsibilities of the Division.

Sri Lanka’s Resident Missions in Africa:
- Egypt
- South Africa
- Nigeria
- Kenya
- Seychelles
- Ethiopia`;

const DIVISIONS_DATA: Division[] = [
  {
    id: 'bilateral-affairs',
    title: 'Bilateral Affairs',
    content: 'The Bilateral Affairs division manages Sri Lanka\'s relations with individual countries and regional organizations.',
    subDivisions: [
      { id: 'africa', title: 'Africa Affairs', content: AFRICA_CONTENT },
      { id: 'east-asia', title: 'East Asia and Oceania', content: 'Detailed information for East Asia and Oceania is currently being updated.' },
      { id: 'europe', title: 'Europe and North America', content: 'Detailed information for Europe and North America is currently being updated.' },
      { id: 'latin-america', title: 'Latin America and Caribbean Division', content: 'Detailed information for Latin America and Caribbean Division is currently being updated.' },
      { id: 'middle-east', title: 'Middle East', content: 'Detailed information for Middle East is currently being updated.' },
      { id: 'south-asia', title: 'South Asia and SAARC', content: 'Detailed information for South Asia and SAARC is currently being updated.' },
      { id: 'southeast-asia', title: 'Southeast Asia and Central Asia', content: 'Detailed information for Southeast Asia and Central Asia is currently being updated.' },
    ]
  },
  { id: 'multilateral-affairs', title: 'Multilateral Affairs', content: 'Detailed information for Multilateral Affairs is currently being updated.' },
  { id: 'economic-affairs', title: 'Economic Affairs', content: 'Detailed information for Economic Affairs is currently being updated.' },
  { id: 'protocols', title: 'Protocols', content: 'Detailed information for Protocols is currently being updated.' },
  { id: 'consular-affairs', title: 'Consular Affairs', content: 'Detailed information for Consular Affairs is currently being updated.' },
  { id: 'legal', title: 'Legal Division', content: 'Detailed information for Legal Division is currently being updated.' },
  { id: 'ocean-affairs', title: 'Ocean Affairs, Environment and Climate Change', content: 'Detailed information for Ocean Affairs, Environment and Climate Change is currently being updated.' },
  { id: 'performance-review', title: 'Performance Review and Implementation', content: 'Detailed information for Performance Review and Implementation is currently being updated.' },
  { id: 'international-security', title: 'International Security Corporation', content: 'Detailed information for International Security Corporation is currently being updated.' },
  { id: 'hr-research-training', title: 'Human Resource Development, Research and Training', content: 'Detailed information for Human Resource Development, Research and Training is currently being updated.' },
  { id: 'hr-mission-management', title: 'HR and Mission Management', content: 'Detailed information for HR and Mission Management is currently being updated.' },
  { id: 'overseas-assets', title: 'Overseas Asset Management and Development', content: 'Detailed information for Overseas Asset Management and Development is currently being updated.' },
  { id: 'general-administration', title: 'General Administration', content: 'Detailed information for General Administration is currently being updated.' },
  { id: 'finance', title: 'Finance', content: 'Detailed information for Finance is currently being updated.' },
  { id: 'internal-audit', title: 'Internal Audit and Investigation', content: 'Detailed information for Internal Audit and Investigation is currently being updated.' },
];

export default function DivisionsPage() {
  const [activeDivision, setActiveDivision] = useState<Division>(DIVISIONS_DATA[0]);
  const [activeSubDivision, setActiveSubDivision] = useState<Division | null>(
    DIVISIONS_DATA[0].subDivisions ? DIVISIONS_DATA[0].subDivisions[0] : null
  );
  const [isBilateralExpanded, setIsBilateralExpanded] = useState(true);

  const handleDivisionClick = (division: Division) => {
    setActiveDivision(division);
    if (division.id === 'bilateral-affairs') {
      setIsBilateralExpanded(!isBilateralExpanded);
    } else {
      setActiveSubDivision(null);
    }
  };

  const handleSubDivisionClick = (sub: Division) => {
    setActiveDivision(DIVISIONS_DATA[0]);
    setActiveSubDivision(sub);
  };

  const displayTitle = activeSubDivision ? activeSubDivision.title : activeDivision.title;
  const displayContent = activeSubDivision ? activeSubDivision.content : activeDivision.content;

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
            {DIVISIONS_DATA.map((division) => (
              <div key={division.id} className="flex flex-col">
                <button
                  onClick={() => handleDivisionClick(division)}
                  className={`w-full flex items-center justify-between text-left px-4 py-3 rounded-md transition-all duration-200 cursor-pointer ${
                    activeDivision.id === division.id
                      ? 'bg-navy text-yellow font-bold shadow-md'
                      : 'text-gray-700 hover:bg-gray-200 hover:text-navy'
                  }`}
                >
                  <span className="flex-grow">{division.title}</span>
                  {division.subDivisions && (
                    <span className="ml-2">
                      {isBilateralExpanded && division.id === 'bilateral-affairs' ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                    </span>
                  )}
                </button>

                {division.id === 'bilateral-affairs' && isBilateralExpanded && division.subDivisions && (
                  <div className="ml-4 mt-1 mb-2 flex flex-col gap-1 border-l-2 border-gray-200 pl-2">
                    {division.subDivisions.map((sub) => (
                      <button
                        key={sub.id}
                        onClick={() => handleSubDivisionClick(sub)}
                        className={`text-left px-4 py-2 text-sm rounded-md transition-all duration-200 cursor-pointer ${
                          activeSubDivision?.id === sub.id
                            ? 'bg-navy/10 text-navy font-bold'
                            : 'text-gray-600 hover:bg-gray-200 hover:text-navy'
                        }`}
                      >
                        {sub.title}
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
          {activeDivision.id === 'bilateral-affairs' && activeDivision.subDivisions && (
            <div className="flex flex-wrap gap-1 mb-6 border-b border-gray-200">
              {activeDivision.subDivisions.map((sub) => (
                <button
                  key={sub.id}
                  onClick={() => handleSubDivisionClick(sub)}
                  className={`px-4 py-2 text-sm font-semibold transition-all duration-200 cursor-pointer border-b-4 ${
                    activeSubDivision?.id === sub.id
                      ? 'border-navy text-navy bg-navy/5'
                      : 'border-transparent text-gray-500 hover:text-navy hover:bg-gray-50'
                  }`}
                >
                  {sub.title}
                </button>
              ))}
            </div>
          )}

          <div className="mb-8">
            <h1 className="text-3xl font-bold text-navy border-b-4 border-yellow inline-block mb-2">
              {displayTitle}
            </h1>
          </div>

          <div className="bg-white p-10 rounded shadow-md border border-gray-100 min-h-[400px]">
            <p className="text-gray-700 text-lg whitespace-pre-line">
              {displayContent}
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
