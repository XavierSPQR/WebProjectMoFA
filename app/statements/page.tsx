'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  ChevronDown, 
  ChevronRight, 
  User, 
  Mic2, 
  Globe, 
  FileText, 
  Users, 
  Award,
  BookOpen
} from 'lucide-react';

const categories = [
  { id: 'president', name: 'H.E. President', icon: User },
  { id: 'pm', name: 'Hon. Prime Minister', icon: Award },
  { id: 'minister', name: 'Hon. Minister', icon: Mic2 },
  { id: 'deputy-minister', name: 'Hon. Deputy Minister', icon: Users },
  { id: 'secretary', name: 'Foreign Secretary', icon: BookOpen },
  { id: 'mission', name: 'Mission', icon: Globe },
];

const missionSubCategories = ['Geneva', 'New York', 'Other'];

const STATEMENTS_MAP: Record<string, any> = {
  'president': (
    <div className="space-y-6">
      <div className="border-l-4 border-navy pl-4 italic text-slate-600">
        "Our foreign policy is rooted in neutrality and the pursuit of global peace."
      </div>
      <div className="space-y-4">
        <h4 className="font-bold text-xl">Address to the 78th UN General Assembly</h4>
        <p>H.E. the President outlined the nation's vision for sustainable development and regional stability, emphasizing the importance of sovereign equality.</p>
        <Link href="#" className="text-navy font-semibold hover:underline flex items-center gap-1">
          Read Full Statement <ChevronRight size={14} />
        </Link>
      </div>
    </div>
  ),
  'pm': (
    <div className="space-y-4">
      <h4 className="font-bold text-xl">Economic Integration Summit</h4>
      <p>The Hon. Prime Minister emphasized the role of digital transformation in modernizing the regional trade infrastructure.</p>
      <ul className="list-disc ml-6 space-y-2 text-slate-600">
        <li>Bilateral trade agreement milestones.</li>
        <li>Commitment to South-South cooperation.</li>
        <li>Investment incentives for renewable energy.</li>
      </ul>
    </div>
  ),
  'mission': {
    'Geneva': (
      <div className="space-y-4">
        <h4 className="font-bold text-xl underline decoration-yellow">UNHRC 54th Session</h4>
        <p>Statement delivered by the Permanent Representative on progress regarding domestic reconciliation mechanisms and human rights protections.</p>
        <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
          <p className="text-sm font-medium text-navy">Key Highlight: Update on the National Unity and Reconciliation Commission.</p>
        </div>
      </div>
    ),
    'New York': (
      <div className="space-y-4">
        <h4 className="font-bold text-xl">Security Council Open Debate</h4>
        <p>Focusing on the maintenance of international peace and security in the context of maritime trade routes.</p>
      </div>
    ),
    'Other': (
      <div className="text-center py-12">
        <FileText size={48} className="mx-auto text-slate-300 mb-4" />
        <p className="text-slate-500">Select a specific mission to view archived statements.</p>
      </div>
    )
  },
  // Default placeholders for others
  'minister': <p className="italic text-slate-500">Latest statements from the Hon. Minister are being indexed.</p>,
  'deputy-minister': <p className="italic text-slate-500">Latest statements from the Hon. Deputy Minister are being indexed.</p>,
  'secretary': <p className="italic text-slate-500">Press briefings and administrative statements from the Foreign Secretary.</p>,
};

export default function StatementsPage() {
  const [selectedCat, setSelectedCat] = useState(categories[0]);
  const [isMissionExpanded, setIsMissionExpanded] = useState(false);
  const [selectedSubCat, setSelectedSubCat] = useState(missionSubCategories[0]);

  const handleCategoryClick = (cat: typeof categories[0]) => {
    setSelectedCat(cat);
    if (cat.id === 'mission') {
      setIsMissionExpanded(!isMissionExpanded);
    }
  };

  const renderContent = () => {
    if (selectedCat.id === 'mission') {
      return STATEMENTS_MAP['mission'][selectedSubCat] || <p>No statement found.</p>;
    }
    return STATEMENTS_MAP[selectedCat.id] || <p>Coming soon.</p>;
  };

  return (
    <main className="flex-grow p-6 md:p-10 container mx-auto bg-[#fdfdfd]">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm flex items-center gap-2 text-slate-400">
        <Link href="/" className="hover:text-navy transition-colors">Home</Link>
        <ChevronRight size={14} />
        <span className="text-navy font-semibold">Media & Statements</span>
      </nav>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Interactive Sidebar */}
        <aside className="w-full lg:w-1/4">
          <div className="sticky top-8 bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden">
            <div className="p-6 bg-navy text-white flex items-center gap-3">
              <FileText className="text-yellow" size={22} />
              <h2 className="text-lg font-bold">Statements</h2>
            </div>
            
            <nav className="p-3 flex flex-col gap-1">
              {categories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <div key={cat.id} className="flex flex-col">
                    <button
                      onClick={() => handleCategoryClick(cat)}
                      className={`w-full flex items-center justify-between px-4 py-3.5 rounded-2xl transition-all duration-200 group ${
                        selectedCat.id === cat.id
                          ? 'bg-blue-50 text-navy font-bold'
                          : 'text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon size={18} className={selectedCat.id === cat.id ? 'text-navy' : 'text-slate-400'} />
                        <span className="text-sm">{cat.name}</span>
                      </div>
                      {cat.id === 'mission' && (
                        <span className={`${isMissionExpanded ? 'rotate-180' : ''} transition-transform`}>
                          <ChevronDown size={14} />
                        </span>
                      )}
                    </button>

                    {cat.id === 'mission' && isMissionExpanded && (
                      <div className="ml-11 my-1 flex flex-col gap-1 border-l-2 border-slate-100 pl-3">
                        {missionSubCategories.map((sub) => (
                          <button
                            key={sub}
                            onClick={() => {
                              setSelectedCat(cat);
                              setSelectedSubCat(sub);
                            }}
                            className={`text-left px-3 py-2 text-xs rounded-lg transition-all ${
                              selectedCat.id === 'mission' && selectedSubCat === sub
                                ? 'text-navy font-bold bg-slate-100'
                                : 'text-slate-500 hover:text-navy'
                            }`}
                          >
                            {sub}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>
          </div>
        </aside>

        {/* Content Area */}
        <section className="w-full lg:w-3/4">
          <div className="mb-8">
            <h1 className="text-4xl font-extrabold text-navy tracking-tight">
              {selectedCat.id === 'mission' ? `${selectedSubCat} Mission Statements` : `${selectedCat.name} Statements`}
            </h1>
            <div className="h-1.5 w-24 bg-yellow mt-4 rounded-full"></div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-xl shadow-slate-200/50 border border-slate-100 min-h-[500px] text-slate-700 leading-relaxed">
            {renderContent()}
          </div>
        </section>
      </div>

      <style jsx global>{`
        .text-navy { color: #002B5B; }
        .bg-navy { background-color: #002B5B; }
        .text-yellow { color: #FFCC00; }
        .bg-yellow { background-color: #FFCC00; }
      `}</style>
    </main>
  );
}