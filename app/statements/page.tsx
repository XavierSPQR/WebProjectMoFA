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
  BookOpen, 
  Calendar, 
  ChevronUp 
} from 'lucide-react';

// Define the shape of a single statement
interface Statement {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  fullContent: string; 
}

const categories = [
  { id: 'president', name: 'H.E. President', icon: User },
  { id: 'pm', name: 'Hon. Prime Minister', icon: Award },
  { id: 'minister', name: 'Hon. Minister', icon: Mic2 },
  { id: 'deputy-minister', name: 'Hon. Deputy Minister', icon: Users },
  { id: 'secretary', name: 'Foreign Secretary', icon: BookOpen },
  { id: 'mission', name: 'Mission', icon: Globe },
];

const missionSubCategories = ['Geneva', 'New York', 'Other'];

const STATEMENTS_DATA: Record<string, Statement[] | Record<string, Statement[]>> = {
  'president': [
    {
      id: 'p1',
      title: '2026 New Year Message of H.E. the President of Sri Lanka',
      date: '01.01.2026',
      excerpt: 'As we step into the New Year 2026, we do so as a nation that has shouldered the greatest reform programme...',
      fullContent: 'As we step into the New Year 2026, we do so as a nation that has shouldered the greatest reform programme and reconstruction effort in our modern history. Despite numerous challenges, the year 2025 laid the foundation for a resilient economy. Our focus remains on social justice, transparency, and ensuring that the benefits of growth reach every citizen. Let this year be a testament to our collective strength and unity.',
    },
    {
      id: 'p2',
      title: 'Japan–Sri Lanka Joint Statement Tokyo, 29 September 2025',
      date: '29.09.2025',
      excerpt: 'The Prime Minister of Japan, ISHIBA Shigeru met with the President of Sri Lanka in Tokyo...',
      fullContent: 'The Prime Minister of Japan, ISHIBA Shigeru met with the President of Democratic Socialist Republic of Sri Lanka, Anura Kumara Dissanayaka, in Tokyo during his Official Visit to Japan from September 27 to 30. Both leaders reaffirmed their commitment to bilateral cooperation and discussed regional stability and economic partnership.',
    },
    {
      id: 'p3',
      title: 'Address by His Excellency Anura Kumara Dissanayaka at the 80th General Assembly of the United Nations 24 September 2025',
      date: '25.09.2025',
      excerpt: 'Theme: "Better together: 80 Years and more for Peace, Development and Human Rights"...',
      fullContent: 'Theme: "Better together: 80 Years and more for Peace, Development and Human Rights". Madam President, Mr. General Secretary, honoured invitees, distinguished delegates. Allow me, Madam Annalena Baerbock, to begin by offering our vision for a multilateral approach rooted in sovereign equality.',
    },
    {
        id: 'p4',
        title: 'Statement to the media by H.E. the President of Sri Lanka during the State Visit to Maldives, 28 July 2025',
        date: '28.07.2025',
        excerpt: 'His Excellency President Mohamed Muizzu Honourable Ministers... It is indeed a pleasure to be in Malé...',
        fullContent: 'His Excellency President Mohamed Muizzu Honourable Ministers Excellencies Ladies and Gentlemen Friends from the media Ayubowan, Assalamualaikum, Good Afternoon! It is indeed a pleasure to be in Malé on my first State Visit to the Maldives. We discussed our shared maritime interests and the deep-rooted cultural ties that bind our two nations.',
      }
  ],
  'pm': [
    {
      id: 'pm1',
      title: 'Thai Pongal Day Message of Hon. Prime Minister of Sri Lanka',
      date: '14.01.2026',
      excerpt: 'A message of cultural heritage and national harmony...',
      fullContent: 'On this auspicious occasion of Thai Pongal, the festival of harvest, I extend my warmest greetings to all Hindus in Sri Lanka and across the globe. This festival symbolizes the deep connection between humanity and nature, reminding us of the importance of gratitude and communal harmony.',
    },
    {
      id: 'pm2',
      title: 'New Year Message from the Hon. Prime Minister',
      date: '01.01.2026',
      excerpt: 'As we move forward to the New Year of 2026, it is timely to reflect on the year 2025 that has passed...',
      fullContent: 'As we move forward to the New Year of 2026, it is timely to reflect on the year 2025 that has passed. The year 2025 can be granted as a year having made a number of decisive and progressive steps with a people oriented government.',
    },
    {
        id: 'pm3',
        title: 'Visit of the Prime Minister of Sri Lanka to India 16 – 18 October 2025',
        date: '28.10.2025',
        excerpt: 'The Prime Minister of Sri Lanka, Honourable Dr. Harini Amarasuriya undertook an official visit to India...',
        fullContent: 'The Prime Minister of Sri Lanka, Honourable Dr. Harini Amarasuriya undertook an official visit to India from 16-18 October 2025 – her first official visit to India since assuming office. On 17 October, The Prime Minister met with Indian leadership to discuss regional security and economic integration.',
      }
  ],
  'minister': [
    {
      id: 'm1',
      title: 'Media Statement: Ambassador of China calls on Hon. Minister Vijitha Herath',
      date: '02.01.2026',
      excerpt: 'Ambassador Qi Zhenhong discussed multi-faceted support to be considered for Sri Lanka...',
      fullContent: 'Ambassador of the People\'s Republic of China to Sri Lanka Qi Zhenhong called on Minister of Foreign Affairs, Foreign Employment and Tourism Vijitha Herath recently, to discuss multi-faceted support to be considered for Sri Lanka.',
    },
    {
        id: 'm2',
        title: '2026 New Year Message of Minister of Foreign Affairs, Foreign Employment and Tourism',
        date: '01.01.2026',
        excerpt: 'As Sri Lanka enters the New Year 2026, the Ministry reaffirms its commitment...',
        fullContent: 'As Sri Lanka enters the New Year 2026, the Ministry reaffirms its commitment to rebuilding the nation through principled global engagement, dignified foreign employment, and a modern, sustainable tourism economy.',
      },
      {
        id: 'm3',
        title: 'Statement to the Media by the Hon. Minister Vijitha Herath following the Working Meeting with Archbishop Paul Richard Gallagher, 04th November 2025',
        date: '04.11.2025',
        excerpt: 'Your Excellency, Archbishop Paul Richard Gallagher... It is with great honour that I welcome you...',
        fullContent: 'Your Excellency, Archbishop Paul Richard Gallagher, Secretary for Relations with States and International Organizations of the Holy See Distinguished Members/ friends from the Media, It is with great honour that I welcome this opportunity to discuss religious harmony and international cooperation.',
      },
      {
        id: 'm4',
        title: 'Special Statement made by Hon. Minister Vijitha Herath in the Parliament on Geneva Decisions',
        date: '09.10.2025',
        excerpt: 'Honorable Speaker, I wish to take this opportunity to highlight matters pertaining to the 60th session of the UNHRC...',
        fullContent: 'Honorable Speaker, I wish to take this opportunity to highlight to this House a few matters pertaining to the 60th session of the UN Human Rights Council that took place last month, and the resolution adopted at its conclusion.',
      }
  ],
  'deputy-minister': [
    {
      id: 'dm1',
      title: 'State Minister of Foreign Affairs at the Ministerial Meeting of the Coordinating Bureau of NAM in Baku',
      date: '11.07.2023',
      excerpt: 'H.E. Mr. Jeyhun Bayramov... I am pleased to represent Sri Lanka at this Ministerial Meeting...',
      fullContent: 'H.E. Mr. Jeyhun Bayramov, Minister of Foreign Affairs of the Republic of Azerbaijan, Excellencies, Ladies & Gentlemen, I am pleased to represent Sri Lanka at this Ministerial Meeting and congratulate the Republic of Azerbaijan for hosting this dialogue.',
    },
    {
        id: 'dm2',
        title: 'Address by the State Minister Tharaka Balasuriya, at the 4th Ministerial Meeting (MM-4) of the AIS Forum',
        date: '06.12.2022',
        excerpt: 'Excellency Luhut B. Panjaitan... I wish to extend my deep appreciation on behalf of...',
        fullContent: 'Excellency Luhut B. Panjaitan, Coordinating Minister for Maritime Affairs of Indonesia, Excellencies, Distinguished delegates, Ladies and Gentlemen, At the outset, I wish to extend my deep appreciation, on behalf of the Government of Sri Lanka, for the Indonesia-led initiative of the AIS Forum.',
      },
      {
        id: 'dm3',
        title: 'Final Keynote Address Hon. Tharaka Balasuriya at the "Youth in Climate Action Virtual Conference"',
        date: '29.10.2021',
        excerpt: 'Ms. Maryaam Rehman... It is my great pleasure to deliver this final keynote address...',
        fullContent: 'Ms. Maryaam Rehman, Director, British Council Excellencies, Ladies and gentlemen, It is my great pleasure to deliver this final keynote address at the “Youth in Climate Action” Virtual Conference.',
      }
  ],
  'secretary': [
    {
      id: 's1',
      title: 'Joint Press Release: 25th Session of the Sri Lanka – EU Joint Commission',
      date: '15.05.2023',
      excerpt: 'The 25th Session of the Joint Commission was convened in Colombo on 09 May 2023...',
      fullContent: 'The 25th Session of the Joint Commission between Sri Lanka and the European Union was convened in Colombo on 09 May 2023, in a constructive and cordial atmosphere. It reviewed bilateral relations ranging from reconciliation to economic trade.',
    },
    {
        id: 's2',
        title: 'Sri Lanka Participates in the 6th Ministerial Meeting of CICA',
        date: '13.10.2021',
        excerpt: 'Foreign Secretary Admiral Prof. Jayanath Colombage delivering the country statement...',
        fullContent: 'Foreign Secretary Admiral Prof. Jayanath Colombage, delivering the country statement virtually at the Sixth Meeting of the Ministers of Foreign Affairs of the Conference of Interaction and Confidence Building Measures (CICA).',
      },
      {
        id: 's3',
        title: 'Opening Remarks by Admiral Professor Jayanath Colombage at the Second Meeting of the IORA Working Group',
        date: '18.03.2021',
        excerpt: 'Good morning Ladies and Gentlemen... Dr. Gatot H. Gunawan, Acting Secretary General of IORA...',
        fullContent: 'Good morning Ladies and Gentlemen, Excellencies, Hannah Singer, the U.N. Resident Coordinator in Colombo Dr. Gatot H. Gunawan, Acting Secretary General of IORA, Your Excellencies, Members of the Diplomatic Corps, it is a privilege to address you on maritime safety.',
      },
      {
        id: 's4',
        title: '23rd meeting of the EU-Sri Lanka Joint Commission',
        date: '25.01.2021',
        excerpt: 'The EU and Sri Lanka held their 23rd meeting of the Joint Commission on 25 January 2021...',
        fullContent: 'The European Union (EU) and the Democratic Socialist Republic of Sri Lanka held their 23rd meeting of the Joint Commission on 25 January 2021, via video conference. This was the first Joint Commission under the new leadership in Sri Lanka.',
      }
  ],
  'mission': { 
    'Geneva': [
      {
        id: 'g1',
        title: 'Statement by Sri Lanka during consideration of draft resolution HRC. 60/L.1/Rev.1',
        date: '07.10.2025',
        excerpt: 'Sri Lanka participated in discussions on this resolution in a spirit of open engagement...',
        fullContent: 'Mr. President, Sri Lanka participated in discussions on this resolution in a spirit of open and constructive engagement, that we have demonstrated throughout in our interactions with this Council. We appreciate the continued dialogue.',
      },
      {
        id: 'g2',
        title: 'Sri Lanka reaffirms its commitment to the UN Committee on Enforced Disappearances',
        date: '30.09.2025',
        excerpt: 'Minister of Justice Harshana Nanayakkara led the delegation to the report presentation...',
        fullContent: 'Minister of Justice and National Integration, Harshana Nanayakkara led the Sri Lanka delegation to the presentation of Sri Lanka’s initial Report under the International Convention for the Protection of All Persons from Enforced Disappearance.',
      },
      {
        id: 'g3',
        title: 'Statement delivered by Hon. Vijitha Herath at the 60th Session of the Human Rights Council in Geneva',
        date: '08.09.2025',
        excerpt: 'Mr. President... I speak to you at a time when my country has embarked on a historic journey...',
        fullContent: 'Mr. President, High Commissioner, Excellencies, ladies and gentlemen, I speak to you on behalf of the Government of Sri Lanka at a time when my country has embarked on a historic journey towards transformational change.',
      }
    ], 
    'New York': [
      {
        id: 'ny1',
        title: '79th Session of the UNGA General Debate Statement by H.E. Mohan Pieris',
        date: '01.10.2024',
        excerpt: 'Theme: "Leaving no one behind: Acting together for the advancement of peace..."',
        fullContent: 'Statement delivered by H.E. Mohan Pieris, Permanent Representative of Sri Lanka to the United Nations, New York 30 September 2024. The theme was "Leaving no one behind: Acting together for the advancement of peace, sustainable development and human dignity for present and future generations".',
      },
      {
        id: 'ny2',
        title: 'Statement by Hon. M.U.M. Ali Sabry at the Conference on Disarmament 26 February 2024',
        date: '29.02.2024',
        excerpt: 'Mr. President Madam Secretary-General... I extend my felicitations on assuming the Presidency...',
        fullContent: 'Mr. President Madam Secretary-General of the Conference on Disarmament Excellencies Ladies and Gentlemen I extend my felicitations to you Mr. President on assuming the Presidency of this Conference and assure you of Sri Lanka\'s support.',
      },
      {
        id: 'ny3',
        title: 'Statement by Ambassador Mohan Pieris at the 3rd UN Chiefs of Police Summit (UNCOPS)',
        date: '20.01.2023',
        excerpt: 'Statement made by H.E. Mr. Mohan Pieris... at the Third United Nations Chiefs of Police Summit...',
        fullContent: 'Statement made by H.E. Mr. Mohan Pieris, Permanent Representative of Sri Lanka to the United Nations at the Third United Nations Chiefs of Police Summit (UNCOPS) highlighting our commitment to global peacekeeping standards.',
      }
    ], 
    'Other': [
        {
          id: 'oth1',
          title: 'UN Ocean Conference, Lisbon, Portugal Sri Lanka Country Statement',
          date: '08.07.2022',
          excerpt: 'Chairman, Excellencies... For over two millennia, Sri Lanka has played a vital role in international trade...',
          fullContent: 'Chairman, Excellencies, Ladies and Gentlemen, For over two millennia, Sri Lanka has played a vital role in international trade and commerce, principally connecting the east to the west through the ancient silk route across the ocean. We are committed to sustainable ocean management.',
        }
    ] 
  }
};

export default function StatementsPage() {
  const [selectedCat, setSelectedCat] = useState(categories[0]);
  const [isMissionExpanded, setIsMissionExpanded] = useState(false);
  const [selectedSubCat, setSelectedSubCat] = useState(missionSubCategories[0]);
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

  const toggleExpand = (id: string) => {
    const newExpanded = new Set(expandedIds);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedIds(newExpanded);
  };

  const handleCategoryClick = (cat: typeof categories[0]) => {
    setSelectedCat(cat);
    if (cat.id === 'mission') setIsMissionExpanded(!isMissionExpanded);
    setExpandedIds(new Set()); 
  };

  const getActiveList = (): Statement[] => {
    if (selectedCat.id === 'mission') {
      return (STATEMENTS_DATA['mission'] as Record<string, Statement[]>)[selectedSubCat] || [];
    }
    return (STATEMENTS_DATA[selectedCat.id] as Statement[]) || [];
  };

  const activeStatements = getActiveList();

  return (
    <main className="flex-grow p-6 md:p-10 container mx-auto bg-[#fdfdfd]">
    

      <div className="flex flex-col lg:flex-row gap-10">
        <aside className="w-full lg:w-1/4">
          <div className="sticky top-8 bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden">
            <div className="p-6 bg-navy text-white flex items-center gap-3">
              <FileText className="text-yellow" size={22} />
              <h2 className="text-lg font-bold">Statements</h2>
            </div>
            <nav className="p-3 flex flex-col gap-1">
              {categories.map((cat) => (
                <div key={cat.id}>
                  <button
                    onClick={() => handleCategoryClick(cat)}
                    className={`w-full flex items-center justify-between px-4 py-4 rounded-2xl transition-all ${
                      selectedCat.id === cat.id ? 'bg-blue-50 text-navy font-bold' : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <cat.icon size={20} className={selectedCat.id === cat.id ? 'text-navy' : 'text-slate-400'} />
                      <span className="text-base">{cat.name}</span>
                    </div>
                    {cat.id === 'mission' && <ChevronDown size={16} className={isMissionExpanded ? 'rotate-180' : ''} />}
                  </button>
                  {cat.id === 'mission' && isMissionExpanded && (
                    <div className="ml-11 my-1 flex flex-col gap-1 border-l-2 border-slate-100 pl-3">
                      {missionSubCategories.map((sub) => (
                        <button
                          key={sub}
                          onClick={() => { setSelectedCat(cat); setSelectedSubCat(sub); }}
                          className={`text-left px-3 py-2 text-base rounded-lg ${selectedSubCat === sub ? 'text-navy font-bold bg-slate-100' : 'text-slate-500'}`}
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

        <section className="w-full lg:w-3/4">
          <div className="mb-8">
            <h1 className="text-4xl font-extrabold text-navy tracking-tight">
              {selectedCat.id === 'mission' ? `${selectedSubCat} Mission` : selectedCat.name}
            </h1>
            <div className="h-1.5 w-24 bg-yellow mt-4 rounded-full"></div>
          </div>

          <div className="space-y-6">
            {activeStatements.length > 0 ? (
              activeStatements.map((item) => {
                const isExpanded = expandedIds.has(item.id);
                return (
                  <div key={item.id} className="bg-white rounded-[32px] shadow-sm border border-slate-100 overflow-hidden transition-all duration-300">
                    <div className="p-8">
                      <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
                        <h3 className="text-xl md:text-2xl font-bold text-navy leading-tight">{item.title}</h3>
                        <div className="flex items-center gap-2 text-slate-400 bg-slate-50 px-3 py-1 rounded-full text-base h-fit whitespace-nowrap">
                          <Calendar size={14} /> {item.date}
                        </div>
                      </div>
                      
                      {!isExpanded && <p className="text-slate-600 leading-relaxed mb-6 line-clamp-2 italic">{item.excerpt}</p>}

                      <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[2000px] opacity-100 mb-8' : 'max-h-0 opacity-0'}`}>
                        <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed border-t border-slate-100 pt-6">
                          {item.fullContent}
                        </div>
                      </div>

                      <button onClick={() => toggleExpand(item.id)} className="inline-flex items-center gap-2 text-navy font-bold hover:text-blue-700 transition-colors text-base">
                        {isExpanded ? (<>Show Less <ChevronUp size={16} /></>) : (<>Read Full Statement <ChevronDown size={16} /></>)}
                      </button>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="bg-white p-20 rounded-[40px] border border-dashed border-slate-200 text-center">
                <FileText className="text-slate-300 mx-auto mb-4" size={32} />
                <p className="text-slate-400">Latest statements are being indexed.</p>
              </div>
            )}
          </div>
        </section>
      </div>

      <style jsx global>{`
        .text-navy { color: #002B5B; }
        .bg-navy { background-color: #002B5B; }
        .bg-yellow { background-color: #FFCC00; }
      `}</style>
    </main>
  );
}