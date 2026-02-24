'use client';


import { useState } from 'react';

import { 

  ChevronDown, Building2, User, 

  Users, Mail, Phone 

} from 'lucide-react';


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

  'Latin Ameruca and Caribbean Division',

  'Middle East',

  'South Asia and SAARC',

  'Southeast Asia and Central Asia'

];


// --- CONTACT DATA STRUCTURE ---

// Maps to either the division 'path' or the sub-division 'name'

const CONTACTS_MAP: Record<string, any[]> = {

  // Bilateral Sub-Divisions

  'Africa Affairs': [

    { role: 'Actg. Director General', name: 'Mr. Thushara Rodrigo', email: 'dgpd(at)mfa.gov.lk', phone: '+94 11 2 345678' },

    { role: 'Director', name: 'Mr. Chathura Weerasekara', email: 'chathura.weerasekara(at)mfa.gov.lk', phone: '+94 112 473 944' },

    { role: 'Assistant Director', name: 'Ms. Arosha Kariyawasam', email: 'arosha.kariyawasam(at)mfa.gov.lk', phone: '+94 112 473 946' },

    { role: 'Assistant Director', name: 'Mr. Maharoof Murshid', email: 'maharoof.murshid(at)mfa.gov.lk', phone: '+94 112 473 946' },

    { role: 'Head of Branch', name: 'Ms. Sripathmini Konamalai', email: 'publicity(at)mfa.gov.lk', phone: '+94 112 437 633' },

  ],

  'East Asia and Oceania': [

    { role: 'Director General', name: 'Officer Name', email: 'eastasia(at)mfa.gov.lk', phone: '+94 112 111 222' },

    { role: 'Director', name: 'Officer Name', email: 'dir.eo(at)mfa.gov.lk', phone: '+94 112 333 444' }

  ],

  'Europe & North America': [

    { role: 'Director General', name: 'Officer Name', email: 'europe(at)mfa.gov.lk', phone: '+94 112 555 666' }

  ],

  'Latin Ameruca and Caribbean Division': [

    { role: 'Director', name: 'Officer Name', email: 'latin(at)mfa.gov.lk', phone: '+94 112 777 888' }

  ],

  'Middle East': [

    { role: 'Director General', name: 'Officer Name', email: 'me(at)mfa.gov.lk', phone: '+94 112 999 000' }

  ],

  'South Asia and SAARC': [

    { role: 'Director General', name: 'Officer Name', email: 'saarc(at)mfa.gov.lk', phone: '+94 112 121 212' }

  ],

  'Southeast Asia and Central Asia': [

    { role: 'Director General', name: 'Officer Name', email: 'seasia(at)mfa.gov.lk', phone: '+94 112 343 434' }

  ],


  // Main Divisions

  'multilateral-affairs': [

    { role: 'Director General', name: 'Officer Name', email: 'un(at)mfa.gov.lk', phone: '+94 112 454 545' }

  ],

  'economic-affairs': [

    { role: 'Director General', name: 'Officer Name', email: 'econ(at)mfa.gov.lk', phone: '+94 112 676 767' }

  ],

  'protocols': [

    { role: 'Chief of Protocol', name: 'Officer Name', email: 'protocol(at)mfa.gov.lk', phone: '+94 112 898 989' }

  ],

  'consular-affairs': [

    { role: 'Director General', name: 'Officer Name', email: 'consular(at)mfa.gov.lk', phone: '+94 112 010 101' }

  ],

  'legal': [

    { role: 'Legal Advisor', name: 'Officer Name', email: 'legal(at)mfa.gov.lk', phone: '+94 112 232 323' }

  ],

  'ocean-affairs': [

    { role: 'Director', name: 'Officer Name', email: 'ocean(at)mfa.gov.lk', phone: '+94 112 454 545' }

  ],

  'performance-review': [

    { role: 'Director', name: 'Officer Name', email: 'performance(at)mfa.gov.lk', phone: '+94 112 676 767' }

  ],

  'international-security': [

    { role: 'Director', name: 'Officer Name', email: 'security(at)mfa.gov.lk', phone: '+94 112 898 989' }

  ],

  'hr-research-training': [

    { role: 'Director', name: 'Officer Name', email: 'training(at)mfa.gov.lk', phone: '+94 112 010 101' }

  ],

  'hr-mission-management': [

    { role: 'Director General', name: 'Officer Name', email: 'oad(at)mfa.gov.lk', phone: '+94 112 232 323' }

  ],

  'overseas-assets': [

    { role: 'Director', name: 'Officer Name', email: 'assets(at)mfa.gov.lk', phone: '+94 112 454 545' }

  ],

  'general-administration': [

    { role: 'Director General', name: 'Officer Name', email: 'admin(at)mfa.gov.lk', phone: '+94 112 676 767' }

  ],

  'finance': [

    { role: 'Director (Finance)', name: 'Officer Name', email: 'finance(at)mfa.gov.lk', phone: '+94 112 898 989' }

  ],

  'internal-audit': [

    { role: 'Chief Internal Auditor', name: 'Officer Name', email: 'audit(at)mfa.gov.lk', phone: '+94 112 010 101' }

  ],

};


const CONTENT_MAP: Record<string, any> = {

    'bilateral-affairs': {

        'Africa Affairs': (

          <div className="space-y-4">

            <p>The Africa Affairs Division deals with matters pertaining to relations with 54 countries in the African continent and the African Union (AU).</p>

            <p>Sri Lanka has 6 resident Missions in the region (Egypt, South Africa, Nigeria, Kenya, Seychelles, Ethiopia).</p>

          </div>

        ),

        'Middle East': (

          <div className="space-y-4">

            <p>This division manages strategic partnerships with Middle Eastern nations, focusing on energy security and labor migration.</p>

          </div>

        ),

        'South Asia and SAARC': (

            <div className="space-y-4">

              <p>Centered on the &quot;Neighborhood First&quot; policy, this division manages ties with SAARC member states.</p>

            </div>

        )

    },

    'economic-affairs': (

      <div className="space-y-4">

        <p>Driving Sri Lanka&apos;s &quot;Economic Diplomacy&quot; agenda to boost exports and investment.</p>

      </div>

    ),

    // ... add other content as needed

};


// --- CONTACT CARD UI ---

const ContactCard = ({ role, name, email, phone }: { role: string; name: string; email: string; phone: string }) => (

  <div className="flex flex-col items-center text-center group min-w-[180px]">

    <div className="w-24 h-24 rounded-full bg-slate-50 border-[6px] border-[#97D8D8] flex items-center justify-center mb-4 shadow-sm">

      <div className="w-full h-full rounded-full bg-black flex items-center justify-center">

        <User size={44} className="text-[#97D8D8]" />

      </div>

    </div>

    <h4 className="text-[#002B5B] font-bold text-sm mb-1 uppercase tracking-tight h-10 flex items-center">

      {role}

    </h4>

    <p className="text-slate-600 text-xs mb-2 font-medium">{name}</p>

    <div className="flex flex-col items-center">

      <span className="text-blue-500 text-[10px] lowercase mb-1 cursor-pointer hover:underline">{email}</span>

      <span className="text-slate-500 text-[10px] font-semibold">{phone}</span>

    </div>

  </div>

);


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


  const currentKey = selectedDivision.path === 'bilateral-affairs' ? selectedSubDivision : selectedDivision.path;

  const currentContacts = CONTACTS_MAP[currentKey] || [];


  return (

    <main className="flex-grow p-6 md:p-10 container mx-auto bg-[#fdfdfd]">

      <div className="flex flex-col lg:flex-row gap-10">

        {/* Sidebar */}

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

                      {bilateralSubDivisions.map((sub) => (

                        <button

                          key={sub}

                          onClick={() => handleSubDivisionClick(sub)}

                          className={`text-left px-3 py-2 text-base rounded-lg transition-all ${

                            selectedDivision.path === 'bilateral-affairs' && selectedSubDivision === sub ? 'bg-navy text-white font-medium' : 'text-slate-500 hover:bg-slate-100'

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


        {/* Content */}

        <section className="w-full lg:w-3/4">

          <div className="mb-8">

            <h1 className="text-4xl font-extrabold text-navy tracking-tight">

              {selectedDivision.path === 'bilateral-affairs' ? selectedSubDivision : selectedDivision.name}

            </h1>

            <div className="h-1.5 w-20 bg-yellow mt-4 rounded-full"></div>

          </div>


          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-slate-200/40 border border-slate-100 min-h-[600px]">

            <div className="text-slate-700 leading-relaxed text-lg mb-16">

                {(selectedDivision.path === 'bilateral-affairs' ? CONTENT_MAP['bilateral-affairs'][selectedSubDivision] : CONTENT_MAP[selectedDivision.path]) || <p>Content is being updated for this division.</p>}

            </div>


            {/* Contact Section */}

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