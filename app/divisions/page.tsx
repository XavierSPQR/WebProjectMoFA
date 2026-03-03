'use client';

import { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { 
  ChevronDown, Building2, User, 
  Users 
} from 'lucide-react';

// --- DATA STRUCTURES ---

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
  'East Asia and Oceania',
  'Europe & North America',
  'Latin America and Caribbean Division',
  'Middle East',
  'South Asia and SAARC',
  'Southeast Asia and Central Asia'
];

interface Contact {
  role: string;
  name: string;
  email: string;
  phone: string;
}

// --- CONTENT AND CONTACT MAPS ---

const CONTACTS_MAP: Record<string, Contact[]> = {
  'Africa Affairs': [
    { role: 'Director General', name: 'Ms. Dilani Weerakoon', email: 'africa.dg(at)mfa.gov.lk', phone: '+94 112 473 944' },
    { role: 'Director', name: 'Mr. Chathura Weerasekara', email: 'chathura.w(at)mfa.gov.lk', phone: '+94 112 473 946' }
  ],
  'East Asia and Oceania': [
    { role: 'Director General', name: 'Officer Name', email: 'eastasia(at)mfa.gov.lk', phone: '+94 112 323 111' }
  ],
  'Europe & North America': [
    { role: 'Director General', name: 'Officer Name', email: 'europe(at)mfa.gov.lk', phone: '+94 112 323 222' }
  ],
  'Latin America and Caribbean Division': [
    { role: 'Director', name: 'Officer Name', email: 'latin(at)mfa.gov.lk', phone: '+94 112 323 333' }
  ],
  'Middle East': [
    { role: 'Director General', name: 'Officer Name', email: 'me(at)mfa.gov.lk', phone: '+94 112 323 444' }
  ],
  'South Asia and SAARC': [
    { role: 'Director General', name: 'Officer Name', email: 'saarc(at)mfa.gov.lk', phone: '+94 112 323 555' }
  ],
  'Southeast Asia and Central Asia': [
    { role: 'Director General', name: 'Officer Name', email: 'seasia(at)mfa.gov.lk', phone: '+94 112 323 666' }
  ],
  'multilateral-affairs': [
    { role: 'Director General', name: 'Officer Name', email: 'un(at)mfa.gov.lk', phone: '+94 112 323 777' }
  ],
  'economic-affairs': [
    { role: 'Director General', name: 'Officer Name', email: 'econ(at)mfa.gov.lk', phone: '+94 112 323 888' }
  ],
  'protocols': [
    { role: 'Chief of Protocol', name: 'Officer Name', email: 'protocol(at)mfa.gov.lk', phone: '+94 112 323 999' }
  ],
  'consular-affairs': [
    { role: 'Director General', name: 'Officer Name', email: 'consular(at)mfa.gov.lk', phone: '+94 112 444 000' }
  ],
  'legal': [
    { role: 'Legal Advisor', name: 'Officer Name', email: 'legal(at)mfa.gov.lk', phone: '+94 112 444 111' }
  ],
  'ocean-affairs': [
    { role: 'Director', name: 'Officer Name', email: 'ocean(at)mfa.gov.lk', phone: '+94 112 444 222' }
  ],
  'performance-review': [
    { role: 'Director', name: 'Officer Name', email: 'performance(at)mfa.gov.lk', phone: '+94 112 444 333' }
  ],
  'international-security': [
    { role: 'Director', name: 'Officer Name', email: 'security(at)mfa.gov.lk', phone: '+94 112 444 444' }
  ],
  'hr-research-training': [
    { role: 'Director', name: 'Officer Name', email: 'training(at)mfa.gov.lk', phone: '+94 112 444 555' }
  ],
  'hr-mission-management': [
    { role: 'Director General', name: 'Officer Name', email: 'oad(at)mfa.gov.lk', phone: '+94 112 444 666' }
  ],
  'overseas-assets': [
    { role: 'Director', name: 'Officer Name', email: 'assets(at)mfa.gov.lk', phone: '+94 112 444 777' }
  ],
  'general-administration': [
    { role: 'Director General', name: 'Officer Name', email: 'admin(at)mfa.gov.lk', phone: '+94 112 444 888' }
  ],
  'finance': [
    { role: 'Director (Finance)', name: 'Officer Name', email: 'finance(at)mfa.gov.lk', phone: '+94 112 444 999' }
  ],
  'internal-audit': [
    { role: 'Chief Internal Auditor', name: 'Officer Name', email: 'audit(at)mfa.gov.lk', phone: '+94 112 555 000' }
  ],
};

const CONTENT_MAP: Record<string, any> = {
  'bilateral-affairs': {
    'Africa Affairs': (
      <div className="space-y-4">
        <p>The Africa Affairs Division oversees relations with 54 African nations and the African Union. It focuses on expanding Sri Lanka’s footprint through new trade agreements and technical cooperation.</p>
        <p>Current priorities include strengthening ties with Egypt, Ethiopia, and Kenya.</p>
      </div>
    ),
    'East Asia and Oceania': <p>Managing relations with key partners including China, Japan, South Korea, and Australia. This division focuses on regional stability and maritime security.</p>,
    'Europe & North America': <p>This division maintains diplomatic ties with the EU, UK, USA, and Canada, focusing on trade, the GSP+ scheme, and diaspora engagement.</p>,
    'Latin America and Caribbean Division': <p>Focusing on emerging markets in Brazil, Mexico, and Chile, and fostering cooperation in agriculture and renewable energy.</p>,
    'Middle East': <p>Strategic management of ties with GCC countries, primarily focused on energy security and the welfare of the Sri Lankan migrant workforce.</p>,
    'South Asia and SAARC': <p>Implementation of the &quot;Neighborhood First&quot; policy and coordinating regional cooperation through the SAARC framework.</p>,
    'Southeast Asia and Central Asia': <p>Enhancing ties with ASEAN member states and exploring new trade routes with Central Asian republics.</p>,
  },
  'multilateral-affairs': <p>Coordinates Sri Lanka&apos;s engagement with the United Nations, Human Rights Council, and other international organizations to uphold national interests on the global stage.</p>,
  'economic-affairs': <p>The engine of Sri Lanka&apos;s Economic Diplomacy, tasked with boosting foreign direct investment (FDI) and promoting Sri Lankan exports globally.</p>,
  'protocols': <p>Managing high-level state visits, diplomatic immunities, and the accreditation of foreign diplomats in Sri Lanka.</p>,
  'consular-affairs': <p>Providing vital services including document attestation, assistance to citizens in distress abroad, and visa coordination.</p>,
  'legal': <p>Providing legal counsel on international treaties, bilateral agreements, and maritime boundary issues.</p>,
  'ocean-affairs': <p>Leading policy on the Blue Economy, environmental conservation, and Sri Lanka&apos;s commitments under climate change accords.</p>,
  'performance-review': <p>Monitoring the implementation of Ministry goals and ensuring accountability across all departments and overseas missions.</p>,
  'international-security': <p>Coordinating with global partners on counter-terrorism, maritime safety, and cyber-security initiatives.</p>,
  'hr-research-training': <p>Operating the Foreign Service Institute to provide world-class training to diplomatic staff and conducting strategic research.</p>,
  'hr-mission-management': <p>Responsible for the staffing, welfare, and logistical management of Sri Lanka&apos;s missions around the world.</p>,
  'overseas-assets': <p>Managing the acquisition, maintenance, and development of government-owned properties and chanceries abroad.</p>,
  'general-administration': <p>Handling the day-to-day internal operations, logistics, and maintenance of the Ministry headquarters.</p>,
  'finance': <p>Managing the Ministry&apos;s budget, ensuring financial transparency, and allocating funds for overseas missions.</p>,
  'internal-audit': <p>Conducting independent reviews of financial and operational processes to ensure strict adherence to government regulations.</p>,
};

// --- SUB-COMPONENTS ---

const ContactCard = ({ role, name, email, phone }: Contact) => (
  <div className="flex flex-col items-center text-center group min-w-[180px]">
    <div className="w-24 h-24 rounded-full bg-slate-50 border-[6px] border-[#97D8D8] flex items-center justify-center mb-4 shadow-sm">
      <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
        <User size={44} className="text-[#97D8D8]" />
      </div>
    </div>
    <h4 className="text-[#002B5B] font-bold text-sm mb-1 uppercase tracking-tight h-10 flex items-center justify-center">
      {role}
    </h4>
    <p className="text-slate-600 text-xs mb-2 font-medium">{name}</p>
    <div className="flex flex-col items-center">
      <span className="text-blue-500 text-[10px] lowercase mb-1 cursor-pointer hover:underline">{email}</span>
      <span className="text-slate-500 text-[10px] font-semibold">{phone || 'Contact MFA'}</span>
    </div>
  </div>
);

function DivisionsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const id = searchParams.get('id') || 'bilateral-affairs';
  const sub = searchParams.get('sub');

  const selectedDivision = divisions.find(d => d.path === id) || divisions[0];
  const selectedSubDivision = (id === 'bilateral-affairs' && sub && bilateralSubDivisions.includes(sub)) 
    ? sub 
    : bilateralSubDivisions[0];

  const [isBilateralExpanded, setIsBilateralExpanded] = useState(id === 'bilateral-affairs');

  const handleDivisionClick = (division: typeof divisions[0]) => {
    if (division.path === 'bilateral-affairs') {
      setIsBilateralExpanded(!isBilateralExpanded);
      router.push(`/divisions?id=${division.path}&sub=${selectedSubDivision}`);
    } else {
      router.push(`/divisions?id=${division.path}`);
    }
  };

  const handleSubDivisionClick = (subName: string) => {
    router.push(`/divisions?id=bilateral-affairs&sub=${subName}`);
  };

  const currentKey = selectedDivision.path === 'bilateral-affairs' ? selectedSubDivision : selectedDivision.path;
  const currentContacts = CONTACTS_MAP[currentKey] || [];

  return (
    <main className="flex-grow p-6 md:p-10 container mx-auto bg-[#fdfdfd]">
      <div className="flex flex-col lg:flex-row gap-10">
        <aside className="w-full lg:w-1/4">
          <div className="sticky top-8 bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
            <div className="p-5 bg-navy text-white flex items-center gap-3">
              <Building2 className="text-yellow" size={24} />
              <h2 className="text-lg font-bold">MFA Directory</h2>
            </div>
            <nav className="p-2 flex flex-col gap-1 max-h-[70vh] overflow-y-auto custom-scrollbar">
              {divisions.map((division) => (
                <div key={division.path}>
                  <button
                    onClick={() => handleDivisionClick(division)}
                    className={`w-full flex items-center justify-between text-left px-4 py-3 rounded-xl transition-all ${
                      selectedDivision.path === division.path ? 'bg-blue-50 text-navy font-bold border-l-4 border-navy' : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <span className="text-base">{division.name}</span>
                    {division.path === 'bilateral-affairs' && <ChevronDown size={14} className={isBilateralExpanded ? 'rotate-180' : ''} />}
                  </button>
                  {division.path === 'bilateral-affairs' && isBilateralExpanded && (
                    <div className="ml-6 my-2 border-l border-slate-200 pl-2 flex flex-col gap-1">
                      {bilateralSubDivisions.map((subName) => (
                        <button
                          key={subName}
                          onClick={() => handleSubDivisionClick(subName)}
                          className={`text-left px-3 py-2 text-base rounded-lg transition-all ${
                            selectedDivision.path === 'bilateral-affairs' && selectedSubDivision === subName ? 'bg-navy text-white font-medium' : 'text-slate-500 hover:bg-slate-100'
                          }`}
                        >
                          {subName}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </aside>

        <section className="w-full lg:w-3/4">
          <div className="mb-8">
            <h1 className="text-4xl font-extrabold text-navy tracking-tight">
              {selectedDivision.path === 'bilateral-affairs' ? selectedSubDivision : selectedDivision.name}
            </h1>
            <div className="h-1.5 w-20 bg-yellow mt-4 rounded-full"></div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-slate-200/40 border border-slate-100 min-h-[600px]">
            <div className="text-slate-700 leading-relaxed text-lg mb-16">
                {(selectedDivision.path === 'bilateral-affairs' 
                  ? CONTENT_MAP['bilateral-affairs'][selectedSubDivision] 
                  : CONTENT_MAP[selectedDivision.path]) || <p>Content is currently being updated by the Ministry of Foreign Affairs.</p>}
            </div>

            {currentContacts.length > 0 && (
              <div className="pt-10 border-t border-slate-100">
                <h3 className="text-xl font-bold text-navy mb-12 flex items-center gap-2">
                    <Users size={20} className="text-yellow" />
                    CONTACT INFORMATION
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-y-12 gap-x-4">
                  {currentContacts.map((contact, idx) => (
                    <ContactCard key={idx} {...contact} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 5px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 10px; }
        .text-navy { color: #002B5B; }
        .bg-navy { background-color: #002B5B; }
        .text-yellow { color: #FFCC00; }
        .bg-yellow { background-color: #FFCC00; }
      `}</style>
    </main>
  );
}

export default function DivisionsPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading Directory...</div>}>
      <DivisionsContent />
    </Suspense>
  );
}