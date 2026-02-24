'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronRight, Building2, Globe, ShieldCheck, Landmark, Briefcase, Anchor, Scale, Users, FileBarChart, HardHat, DollarSign, Search } from 'lucide-react';

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
  'Africa Affairs',
  'Middle East',
  'South Asia & SAARC',
  'Europe & North America',
  'East Asia & Pacific'
];

const CONTENT_MAP: Record<string, any> = {
  'bilateral-affairs': {
    'Africa Affairs': (
      <div className="space-y-4">
        <p>The Africa Affairs Division oversees Sri Lanka&apos;s diplomatic relations with 54 African nations. Its primary focus is on expanding Sri Lanka&apos;s diplomatic footprint and revitalizing ties through South-South cooperation.</p>
        <ul className="list-disc ml-6 space-y-1">
          <li>Strengthening political ties through the opening of new resident missions.</li>
          <li>Promoting trade in tea, rubber, and value-added agricultural products.</li>
          <li>Coordinating technical cooperation in the fields of healthcare and education.</li>
        </ul>
      </div>
    ),
    'Middle East': (
      <div className="space-y-4">
        <p>This division manages strategic partnerships with Middle Eastern nations, focusing on energy security, labor migration, and investment. It coordinates closely with the Sri Lanka Bureau of Foreign Employment (SLBFE).</p>
        <ul className="list-disc ml-6 space-y-1">
          <li>Ensuring the welfare of over 1.5 million Sri Lankan migrant workers.</li>
          <li>Securing uninterrupted energy and fuel supply lines.</li>
          <li>Attracting Foreign Direct Investment (FDI) from Sovereign Wealth Funds.</li>
        </ul>
      </div>
    ),
    'South Asia & SAARC': (
      <div className="space-y-4">
        <p>Centered on the &quot;Neighborhood First&quot; policy, this division manages ties with SAARC member states and coordinates regional cooperation initiatives.</p>
        <ul className="list-disc ml-6 space-y-1">
          <li>Managing the Indo-Sri Lanka Free Trade Agreement (ISFTA).</li>
          <li>Coordinating regional connectivity projects (road, rail, and sea).</li>
          <li>Facilitating bilateral discussions on maritime security and counter-terrorism.</li>
        </ul>
      </div>
    ),
    'Europe & North America': (
      <div className="space-y-4">
        <p>Responsible for relations with the EU, UK, USA, and Canada. Key focus areas include trade concessions (GSP+), development assistance, and human rights engagement.</p>
        <ul className="list-disc ml-6 space-y-1">
          <li>Negotiating trade preferences and export quotas.</li>
          <li>Engaging with the Sri Lankan diaspora in Western nations.</li>
          <li>Facilitating educational and scientific research exchanges.</li>
        </ul>
      </div>
    ),
    'East Asia & Pacific': (
      <div className="space-y-4">
        <p>Manages relations with major powers like China and Japan, as well as ASEAN and Oceanic nations. It focuses on infrastructure financing and maritime stability.</p>
        <ul className="list-disc ml-6 space-y-1">
          <li>Overseeing Belt and Road Initiative (BRI) projects.</li>
          <li>Coordinating with Japan on the &quot;Free and Open Indo-Pacific&quot; vision.</li>
          <li>Fostering relations with Australia and New Zealand on border security.</li>
        </ul>
      </div>
    ),
  },
  'multilateral-affairs': (
    <div className="space-y-4">
      <p>The Multilateral Affairs Division coordinates Sri Lanka&apos;s representation in international organizations, primarily the United Nations and its specialized agencies.</p>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-4 bg-blue-50 rounded-lg">
          <h4 className="font-bold mb-2">Human Rights</h4>
          <p className="text-sm">Engaging with the UNHRC in Geneva regarding reconciliation and social justice.</p>
        </div>
        <div className="p-4 bg-yellow-50 rounded-lg">
          <h4 className="font-bold mb-2">International Security</h4>
          <p className="text-sm">Coordinating disarmament, non-proliferation, and global counter-terrorism efforts.</p>
        </div>
      </div>
    </div>
  ),
  'economic-affairs': (
    <div className="space-y-4">
      <p>This division drives Sri Lanka&apos;s &quot;Economic Diplomacy&quot; agenda to boost exports, tourism, and investment. It acts as the focal point for regional economic bodies.</p>
      <ul className="list-disc ml-6 space-y-2">
        <li><strong>IORA:</strong> Leading the Indian Ocean Rim Association as the current Chair.</li>
        <li><strong>BIMSTEC:</strong> Fostering technical and economic cooperation in the Bay of Bengal.</li>
        <li><strong>WTO:</strong> Ensuring compliance with global trade regulations and dispute settlement.</li>
      </ul>
    </div>
  ),
  'protocols': (
    <div className="space-y-4">
      <p>The Protocol Division manages the privileges and immunities of foreign diplomats and organizes ceremonial functions for State and Official visits.</p>
      <ul className="list-disc ml-6 space-y-1">
        <li>Issuance of Diplomatic and Official Passports.</li>
        <li>Accreditation of foreign Heads of Missions and Consular officers.</li>
        <li>Management of the VIP Lounge at Bandaranaike International Airport.</li>
      </ul>
    </div>
  ),
  'consular-affairs': (
    <div className="space-y-4">
      <p>As the public-facing arm of the Ministry, this division provides essential documentation services and assists Sri Lankans in distress abroad.</p>
      <div className="bg-slate-50 p-4 border rounded-lg">
        <h4 className="font-bold text-navy mb-2">Core Services</h4>
        <ul className="grid grid-cols-2 gap-2 text-sm">
          <li>• Document Authentication (e-DAS)</li>
          <li>• Repatriation of human remains</li>
          <li>• Birth/Marriage registrations abroad</li>
          <li>• Assistance for stranded fishers</li>
        </ul>
      </div>
    </div>
  ),
  'legal': (
    <div className="space-y-4">
      <p>Provides legal counsel on international law, treaty negotiations, and judicial cooperation. It maintains the National Treaty Index.</p>
      <ul className="list-disc ml-6 space-y-1">
        <li>Drafting and reviewing Bilateral Investment Treaties (BITs).</li>
        <li>Handling Extradition requests and Mutual Legal Assistance (MLA).</li>
        <li>Representing MFA in domestic court proceedings (Writs/FR cases).</li>
      </ul>
    </div>
  ),
  'ocean-affairs': (
    <div className="space-y-4">
      <p>Focuses on Sri Lanka&apos;s strategic interests in the Indian Ocean, climate change mitigation, and environmental conservation policies.</p>
      <ul className="list-disc ml-6 space-y-1">
        <li>Coordinating the &quot;Blue Economy&quot; sustainable development framework.</li>
        <li>Overseeing Mangrove restoration projects with international partners.</li>
        <li>Engagement in the UN Convention on the Law of the Sea (UNCLOS).</li>
      </ul>
    </div>
  ),
  'performance-review': (
    <div className="space-y-4">
      <p>Established to ensure accountability and efficiency, this division monitors the progress of the Ministry&apos;s strategic goals.</p>
      <ul className="list-disc ml-6 space-y-1">
        <li>Preparation of the Ministry&apos;s Annual Action Plan and Performance Report.</li>
        <li>Monitoring the implementation status of MoUs signed with foreign nations.</li>
        <li>Coordinating with the Committee on Public Accounts (COPA).</li>
      </ul>
    </div>
  ),
  'international-security': (
    <div className="space-y-4">
      <p>Acts as the focal point for defense and security matters. It collaborates with international intelligence and law enforcement agencies.</p>
      <ul className="list-disc ml-6 space-y-1">
        <li>Combatting separatist terrorism and violent extremism.</li>
        <li>Managing international cooperation on drug trafficking and human smuggling.</li>
        <li>Support for proscription listings of terrorist groups.</li>
      </ul>
    </div>
  ),
  'hr-research-training': (
    <div className="space-y-4">
      <p>Dedicated to the professional development of the Sri Lanka Foreign Service (SLFS) and administrative staff.</p>
      <ul className="list-disc ml-6 space-y-1">
        <li>Organizing diplomatic training through the BIDTI.</li>
        <li>Coordinating foreign scholarships and long-term training for officers.</li>
        <li>Conducting research on emerging geopolitical trends.</li>
      </ul>
    </div>
  ),
  'hr-mission-management': (
    <div className="space-y-4">
      <p>Also known as the Overseas Administration Division (OAD), it facilitates the day-to-day administration of Sri Lanka&apos;s 60+ missions abroad.</p>
      <ul className="list-disc ml-6 space-y-1">
        <li>Handling the transfer cycles of diplomatic and local staff.</li>
        <li>Managing mission communication through the secure &quot;Security Mail&quot; system.</li>
        <li>Providing IT infrastructure support to overseas posts.</li>
      </ul>
    </div>
  ),
  'overseas-assets': (
    <div className="space-y-4">
      <p>Manages the acquisition, maintenance, and development of State-owned properties (Chanceries and Residences) globally.</p>
      <ul className="list-disc ml-6 space-y-1">
        <li>Supervising major construction and renovation projects abroad.</li>
        <li>Maintenance of historical Republic Buildings in Colombo.</li>
        <li>Optimizing the use of the Ministry&apos;s overseas real estate portfolio.</li>
      </ul>
    </div>
  ),
  'general-administration': (
    <div className="space-y-4">
      <p>Responsible for personnel administration for non-foreign service staff, procurement, and logistics management within the Republic Building.</p>
      <ul className="list-disc ml-6 space-y-1">
        <li>Management of the Ministry&apos;s vehicle fleet and transport.</li>
        <li>Procurement of office supplies and asset inventory control.</li>
        <li>Handling internal parliamentary and cabinet affairs.</li>
      </ul>
    </div>
  ),
  'finance': (
    <div className="space-y-4">
      <p>Manages all accounting and budgetary functions. It ensures financial discipline across the Ministry and its overseas missions.</p>
      <ul className="list-disc ml-6 space-y-1">
        <li>Management of Mission Accounts and fund transfers.</li>
        <li>Budgetary control and preparation of annual estimates.</li>
        <li>Electronic data processing of payments to the Treasury.</li>
      </ul>
    </div>
  ),
  'internal-audit': (
    <div className="space-y-4">
      <p>Provides independent oversight to ensure financial regularity and the adequacy of internal controls within the Ministry.</p>
      <ul className="list-disc ml-6 space-y-1">
        <li>Conducting internal audits of Missions and Posts abroad.</li>
        <li>Evaluating staff performance and compliance with Financial Regulations.</li>
        <li>Special investigations into fraud or wastage.</li>
      </ul>
    </div>
  ),
};

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
    setSelectedDivision(divisions[0]);
    setSelectedSubDivision(sub);
  };

  const renderContent = () => {
    if (selectedDivision.path === 'bilateral-affairs') {
      return CONTENT_MAP['bilateral-affairs'][selectedSubDivision] || <p>Content coming soon.</p>;
    }
    return CONTENT_MAP[selectedDivision.path] || <p>Content coming soon.</p>;
  };

  return (
    <main className="flex-grow p-6 md:p-10 container mx-auto bg-[#fdfdfd]">
      <nav className="mb-8 text-sm flex items-center gap-2 text-slate-400">
        <Link href="/" className="hover:text-navy transition-colors">Home</Link>
        <ChevronRight size={14} />
        <span className="text-navy font-semibold">Divisions</span>
      </nav>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Sidebar */}
        <aside className="w-full lg:w-1/4">
          <div className="sticky top-8 bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
            <div className="p-5 bg-navy text-white flex items-center gap-3">
              <Building2 className="text-yellow" size={24} />
              <h2 className="text-lg font-bold">MFA Directory</h2>
            </div>
            
            <nav className="p-2 flex flex-col gap-1 max-h-[70vh] overflow-y-auto custom-scrollbar">
              {divisions.map((division) => (
                <div key={division.path} className="flex flex-col">
                  <button
                    onClick={() => handleDivisionClick(division)}
                    className={`w-full flex items-center justify-between text-left px-4 py-3 rounded-xl transition-all duration-200 group ${
                      selectedDivision.path === division.path
                        ? 'bg-blue-50 text-navy font-bold border-l-4 border-navy'
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <span className="text-[13px] leading-tight">{division.name}</span>
                    {division.path === 'bilateral-affairs' && (
                      <span className={`${isBilateralExpanded ? 'rotate-180' : ''} transition-transform`}>
                        <ChevronDown size={14} />
                      </span>
                    )}
                  </button>

                  {division.path === 'bilateral-affairs' && isBilateralExpanded && (
                    <div className="ml-6 my-2 flex flex-col gap-1 border-l border-slate-200 pl-2">
                      {bilateralSubDivisions.map((sub) => (
                        <button
                          key={sub}
                          onClick={() => handleSubDivisionClick(sub)}
                          className={`text-left px-3 py-2 text-[12px] rounded-lg transition-all duration-200 ${
                            selectedDivision.path === 'bilateral-affairs' && selectedSubDivision === sub
                              ? 'bg-navy text-white font-medium shadow-sm'
                              : 'text-slate-500 hover:text-navy hover:bg-slate-100'
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
          </div>
        </aside>

        {/* Content Area */}
        <section className="w-full lg:w-3/4">
          {/* Horizontal Nav Tabs for Bilateral */}
          {selectedDivision.path === 'bilateral-affairs' && (
            <div className="flex flex-wrap gap-2 mb-8 bg-slate-100/50 p-1.5 rounded-xl border border-slate-200">
              {bilateralSubDivisions.map((sub) => (
                <button
                  key={sub}
                  onClick={() => handleSubDivisionClick(sub)}
                  className={`px-4 py-2 text-xs font-bold rounded-lg transition-all duration-200 ${
                    selectedSubDivision === sub
                      ? 'bg-white text-navy shadow-sm border border-slate-200'
                      : 'text-slate-500 hover:text-navy'
                  }`}
                >
                  {sub}
                </button>
              ))}
            </div>
          )}

          <div className="mb-8">
            <h1 className="text-4xl font-extrabold text-navy tracking-tight leading-tight">
              {selectedDivision.path === 'bilateral-affairs' ? selectedSubDivision : selectedDivision.name}
            </h1>
            <div className="h-1.5 w-20 bg-yellow mt-4 rounded-full"></div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-slate-200/40 border border-slate-100 min-h-[550px] text-slate-700 leading-relaxed text-lg">
            {renderContent()}
          </div>
        </section>
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 5px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 10px; }
        .text-navy { color: #002B5B; }
        .bg-navy { background-color: #002B5B; }
        .text-yellow { color: #FFCC00; }
        .bg-yellow { background-color: #FFCC00; }
      `}</style>
    </main>
  );
}