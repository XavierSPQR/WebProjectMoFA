'use client'; // Required for useState in Next.js App Router

import { useState } from 'react';
import Link from 'next/link';
import { Clock, ChevronDown, ChevronUp } from 'lucide-react';

// 1. CONTENT MAP: Add 'fullContent' for the expanded view
const CONTENT_MAP = [
  {
    id: 1,
    title: "Media Briefing on Foreign Minister Gunawardena appreciates support of countries at UNHRC",
    summary: "Foreign Minister Dinesh Gunawardena held a media conference at the Foreign Ministry today, 23 March 2021...",
    fullContent: "The Foreign Minister appreciated the support extended by member states during the UNHRC sessions in Geneva. He highlighted the importance of sovereignty and the constructive engagement of the international community in Sri Lanka's domestic processes. Further discussions were held regarding the upcoming resolutions and the country's strategic position on human rights benchmarks.",
    date: "23.03.2021",
  },
  {
    id: 2,
    title: "Media Briefing on Hon. Dinesh Gunawardena following Bilateral Talks with India",
    summary: "Media Briefing by Hon. Dinesh Gunawardena following his Bilateral Talks with the visiting Indian Minister of External Affairs...",
    fullContent: "The discussion focused on enhancing bilateral cooperation in sectors such as energy, IT, and agriculture. Dr. S. Jaishankar reaffirmed India's commitment to the 'Neighborhood First' policy, while Minister Gunawardena expressed gratitude for the ongoing vaccine support and developmental projects facilitated by the Indian government.",
    date: "06.01.2021",
  },
  {
    id: 3,
    title: "Joint Press Briefing by Foreign Minister and Michael Pompeo, US Secretary of State",
    summary: "Joint Press Briefing by Hon. Dinesh Gunawardena, Foreign Minister and Hon. Michael Pompeo, US Secretary of State on 28 October 2020...",
    fullContent: "The high-level visit emphasized the strong democratic ties between the US and Sri Lanka. Discussions included maritime security in the Indian Ocean, trade investment opportunities, and the shared commitment to a free and open Indo-Pacific region. Video link: https://m.youtube.com/watch?v=olue3-v6LEk",
    date: "28.10.2020",
  }
];

export default function MediaBriefingsPage() {
  // State to track which item IDs are expanded
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpand = (id) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <main className="flex-grow bg-[#F5EBEB] pb-12 min-h-screen font-sans">
      <div className="container mx-auto px-4 pt-8 max-w-5xl">
        <div className="bg-[#6F5C5C] text-white py-3 px-6 rounded-xl text-xl font-semibold mb-8 flex items-center justify-center gap-2">
          <Link href="/public-diplomacy" className="hover:underline">Public Diplomacy</Link>
          <span>&gt;</span>
          <h1 className="cursor-default text-gray-300">Media Briefings</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-5xl">
        <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-sm border border-gray-100">
          
          {/* SCROLLABLE CONTAINER */}
          <div className="max-h-[75vh] overflow-y-auto pr-4 custom-scrollbar">
            <div className="space-y-8">
              {CONTENT_MAP.map((briefing) => {
                const isExpanded = expandedItems[briefing.id];
                
                return (
                  <div key={briefing.id} className="group border-b border-gray-100 pb-8 last:border-0">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-800 leading-tight mb-4">
                      {briefing.title}
                    </h2>
                    
                    {/* Summary / Content Toggle */}
                    <div className="text-gray-600 text-lg leading-relaxed transition-all duration-300">
                      {isExpanded ? (
                        <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#6F5C5C] animate-in fade-in slide-in-from-top-2">
                          {briefing.fullContent}
                        </div>
                      ) : (
                        <p>{briefing.summary}</p>
                      )}
                    </div>
                    
                    <div className="flex justify-between items-center mt-6">
                      {/* SEE MORE TOGGLE BUTTON */}
                      <button 
                        onClick={() => toggleExpand(briefing.id)}
                        className="flex items-center gap-1 text-[#6F5C5C] font-bold hover:text-[#4a3d3d] transition-colors"
                      >
                        {isExpanded ? (
                          <>Show Less <ChevronUp size={20} /></>
                        ) : (
                          <>See More... <ChevronDown size={20} /></>
                        )}
                      </button>

                      <div className="flex items-center gap-2 text-gray-400">
                        <Clock size={18} />
                        <span className="text-sm font-medium">{briefing.date}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Basic CSS for a cleaner scrollbar */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #f1f1f1; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #6F5C5C; border-radius: 10px; }
      `}</style>
    </main>
  );
}