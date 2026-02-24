"use client";

import React, { useState } from 'react';
import { Flag } from 'lucide-react';
import Image from 'next/image';

export default function Page() {
  const [activeTab, setActiveTab] = useState('Overview');

  const timelineData = [
    {
      year: "1931",
      title: "Universal Franchies ",
      image: "/assets/1931.jpg",
      description: <p>At the first election to the State Council of Ceylon (the unicameral legislature) in June 1931, the universal franchise was extended to all people, to elect 50 members to the legislature.
Ceylon is regarded as the oldest democracy in Asia, with Universal Adult Franchise (right to vote) being extended to both men and women, before it’s independence, and before being extended in many other countries.
.</p>,
      side: "right"
    },

    {
      year: "1945",
      title: "Diplomatic Relations with Australia",
      image: "/assets/1945.jpg",
      description:<p>Australia and Sri Lanka have built a strong and enduring relationship since the establishment of diplomatic relations in 1947. May 2017 marked 70 years of diplomatic ties between Australia and Sri Lanka.
Australia's Prime Minister Malcolm Turnbull visited Sri Lanka on 2 November 2017 and held productive discussions with President Maithripala Sirisena and Prime Minister Ranil Wickremesinghe. The visit coincided with the 70th anniversary of bilateral relations and were part of a series of high level visits between the two countries. Sri Lankan Prime Minister Ranil Wickremesinghe visited Australia from 13–17 February 2017 and President Maithrpala Sirisena undertook a State Visit to Australia from 24-26 May 2017.
During the visit, Prime Minister Turnbull and Prime Minister Ranil Wickremesinghe witnessed the signing of a bilateral Trade and Investment Framework Arrangement, which would establish regular senior officials' talks to facilitate trade and investment. The Framework follows on from the Joint Declaration on Enhanced Cooperation signed during President Sirisena's visit to Australia in May 2017.</p>,
      side: "left"
    },

    {
      year: "1947",
      title: "Free Education Policy in Sri Lanka",
      image: "/assets/1947.png",
      description:<p>October 1945, the Free Education Policy came into effect;  stating that every child above the age of 5 and not more than 16 is entitled to free education.
This has benefited generations of students and has enabled Sri Lanka to succeed in achieving the Millennium Development Goal of Universal Primary Education.</p>,
      side: "right"
    },
    {
      year: "1948",
      title: "Sri Lanka (Ceylon) gains Independence",
      image: "/assets/1948.jpg",
      description: <p>On February 4, 1948, Ceylon was granted independence as the Dominion of Ceylon. Dominion status within the British Commonwealth was retained for the next 24 years until May 22, 1972 when it became a republic and was renamed the Republic of Sri Lanka.</p>,
      side:"left"
    },
    
    {
      year: "1948",
      title: "Diplomatic Relations With India",
      image: "/assets/1948 img 1.png",
      description: "Diplomatic Relations with the Republic of India established in 1948.",
      side: "right"
    },
    {
      year: "1948",
      title: "Opening Of The First Overseas Mission: The High Commission Of Sri Lanka In New Delhi, India.",
      image: "/assets/1948-img-2.jpg",
      description: "The High Commission premises today.",
      side: "left"
    },
    {
      year: "1948",
      title: "Diplomatic Relations With France",
      image: "/assets/1948-img-3.png",
      description: "Diplomatic Relations with the French Republic established on 27 October 1948.",
      side: "right"
    },
    {
      year: "1948",
      title: "Diplomatic Relations With USA",
      image: "/assets/1948 img 4.png",
      description:<p>Diplomatic Relations with the United States of America was established on 29 October 1948, with the Embassy of Ceylon opening in Washington, D.C. with Sir Claude Corea as Ambassador.</p> ,
      side: "left"
    },
    {
      year: "1948",
      title: "Diplomatic Relations With Turkey",
      image: "/assets/1948 img 5.png",
      description: "Diplomatic Relations with the Republic of Turkey established.",
      side: "right"
    },
    {
      year: "1948",
      title: "Opening of the High Commission of Sri Lanka in London, United Kingdom",
      side: "left"
    },
    {
      year: "1948",
      title: "Opening of the Embassy of Sri Lanka in Washington DC, USA.",
      side: "right"
    },
    {
      year: "1949",
      title: "Diplomatic Relations With USA",
      side: "left"
    },
    {
      year: "1949",
      title: "Diplomatic Relations with Myanmar",
      image: "/assets/1949.png",
      description: "Diplomatic Relations with the Republic of the Union of Myanmar established.",
      side: "right"
    },
    {
      year: "1949",
      title: "Opening of the Embassy of Sri Lanka in Rangoon, Myanmar.",
      side: "left"
    },
    {
      year: "1949",
      title: "Diplomatic Relations with Sweden",
      image: "/assets/1949 img 1.png",
      description: "Diplomatic Relations with the Kingdom of Sweden established on 18 November 1949.",
      side: "right"
    },
    {
      year: "1950",
      title: "Colombo Commonwealth Conference on Foreign Affairs",
      image: "/assets/1950.jpg",
      description:<p>The Colombo Commonwealth Conference on Foreign Affairs held in January 1950, conceives of  “The Colombo Plan” (The Colombo Plan for Cooperative Economic Development in South and Southeast Asia), as a forum to cooperate on socio-economic development.</p> ,
      side: "left"
    },
    {
      year: "1950",
      title: "Diplomatic Relations with Indonesia",
      image: "/assets/1950 img 1.jpeg",
      description: "Diplomatic Relations with the Republic of Indonesia established.",
      side: "right"
    },
    {
      year: "1950",
      title: "Diplomatic Relations with Norway",
      image: "/assets/1950 img 2.png",
      description:"Diplomatic Relations with the Kingdom of Norway established in October 1950.",
      side: "left"
    },
    {
      year: "1950",
      title: "Opening of the High Commission of Sri Lanka in Islamabad, Pakistan.",
      image: "/assets/1950 img 3.jpg",
      description: "present day High Commission in Islamabad, opened on 22 February 1950.",
      side: "right"
    },
    {
      year: "1951",
      title: "The Colombo Plan launched",
      image: "/assets/1951.png",
      description:<p>The Colombo Plan launched on 1st July 1951.In 1977, after adopted a new constitution, its name was changed to “The Colombo Plan for Cooperative Economic and Social Development in Asia and the Pacific” to reflect the expanded composition of its enhanced membership and the scope of its activities, from its original 7 members.</p> ,
      side: "left"
    },
    {
      year: "1951",
      title: "Free Health Policy in Sri Lanka",
      image: "/assets/1951 img 1.jpg",
      description: "The adoption of the Free Health Policy, comprising system of grass-root level workers including Public Health Midwives and Public Health Inspectors; National and Base hospitals around the country has enabled Sri Lanka to achieve the highest social development indicators in the region and most parts of the world.",
      side: "right"
    },
    {
      year: "1952",
      title: "Opening of the Embassy of Sri Lanka in Jakarta, Indonesia.",
      side: "left"
    },
    {
      year: "1952",
      title: "Diplomatic Relations with Japan",
      image: "/assets/1952.png",
      description: "Diplomatic Relations with Japan established.",
      side: "right"
    },
    {
      year: "1952",
      title: "Diplomatic Relations with Italy",
      image: "/assets/1952 img 2.png",
      description: "Diplomatic Relations with the Italian Republic established.",
      side: "left"
    },
    {
      year: "1952",
      title: "Opening of the Embassy of Sri Lanka in Rome, Italy.",
      side: "right"
    },
    {
      year: "1953",
      title: "Diplomatic Relations with Belgium",
      image: "/assets/1953.png",
      description: "Diplomatic Relations with the Kingdom of Belgium established.",
      side: "left"
    },
    {
      year: "1953",
      title: "Diplomatic Relations with Germany",
      image: "/assets/1953 img1.png",
      description: "Diplomatic Relations with the Federal Republic of Germany established on 9 December 1953.",
      side: "right"
    },
    {
      year: "1953",
      title: "Opening of the Embassy of Sri Lanka in Tokyo, Japan.",
      side: "left"
    },
    {
      year: "1954",
      title: "Colombo Powers Conference",
      description: "The Colombo Powers conference hosted by Ceylon in Kandy from 28 April to 2 May 1954, is regarded as having provided the momentum to discuss Asian- African solidarity and lead to the 1955 Bandung Conference.",
      side: "right"
    },
    {
      year: "1955",
      title: "Bandung Conference",
      image: "/assets/1955.jpg",
      description:"In April 1955, Sri Lanka (then Ceylon) with 29 countries from Africa and Asia, met in Bandung, Indonesia to discuss Afro-Asian solidarity and laid foundation for the Non-Aligned Movement (NAM).",
      side: "left"
    },
    {
      year: "1955",
      title: "Sri Lanka joins the United Nations",
      image: "/assets/1955 img 1.png",
      description: "Sri Lanka, then Ceylon, obtained membership of the United Nations on 14 December 1955, along with nine other countries.Sir Senerat Gunawardena, Sri Lanka’s first Permanent Representative to the UN, hoists the national flag at the UN Headquarters in New York.",
      side: "right"
    },
    {
      year: "1955",
      title: "Diplomatic Relations with Thailand",
      image: "/assets/1955 img 2.png",
      description:"Diplomatic Relations with the Kingdom of Thailand established in November 1955.",
      side: "left"
    },
    {
      year: "1956",
      title: "Diplomatic Relations with Israel",
      image: "/assets/1956.png",
      description: "Diplomatic Relations with the State of Israel established on 1 June 1956.",
      side: "right"
    },
    {
      year: "1956",
      title: "Ceylon’s Representative to the UN presents credentials",
      image: "/assets/1956 img 2.jpg",
      description:"Sir Senerat Gunewardene was appointed Ambassador to the United States in 1953 and served as the Government’s observer to the 1955 session of the United Nations General Assembly.In 1956 he presented credentials as the first Representative to the United Nations.",
      side: "left"
    },
    {
      year: "1956",
      title: "Opening of the Embassy of Sri Lanka in Paris, France.",
      side: "right"
    },
    {
      year: "1956",
      title: "First Statement made by Head of Government of Ceylon at UN",
      image: "/assets/1956 img 3.jpg",
      description:<p>Prime Minister, S. W. R. D. Bandaranaike was the first Head of Government of Sri Lanka to address the United Nations General Assembly.An excerpt from his speech at the 11th UN General Assembly: “My country is a small one, a weak one and a poor one, but I venture to think that today, particularly in an organization such as this, the service that a country can render – that a member can render – is not to be measured alone by the size of that country, its population, its power or its strength. This is an organization which expresses itself most effectively by bringing to bear a certain moral force, the collective moral force and decency of human beings”.</p> ,
      side: "left"
    },
    {
      year: "1957",
      title: "Diplomatic Relations with China",
      image: "/assets/1957.png",
      description: "Diplomatic Relations with the People’s Republic of China established on 7 February 1957.",
      side: "right"
    },
    {
      year: "1957",
      title: "Opening of the Embassy of Sri Lanka in Beijing, China",
      side: "left"
    },
    {
      year: "1957",
      title: "Establishment of Diplomatic Relations with Egypt",
      image: "/assets/1957 img 1.png",
      description: "Establishment of Diplomatic Relations with Egypt",
      side: "right"
    },
    {
      year: "1957",
      title: "Diplomatic Relations with Nepal",
      image: "/assets/1957 img 2.png",
      description:"Diplomatic Relations with the Kingdom of Nepal established on 1 July 1957. (In June 2017 Nepal became a Federal Democratic Republic).",
      side: "left"
    },
    {
      year: "1957",
      title: "Opening of the Deputy High Commission of Sri Lanka in Chennai, India.",
      side: "right"
    },
    {
      year: "1957",
      title: "Diplomatic Relations with Malaysia",
      image: "/assets/1957 img 3.png",
      description:"Diplomatic Relations with Malaysia established",
      side: "left"
    },
    {
      year: "1957",
      title: "Establishment of Diplomatic Relations with Egypt",
      image: "/assets/1957 img 4.png",
      description: "Establishment of Diplomatic Relations with Egypt",
      side: "right"
    },
    {
      year: "1957",
      title: "Opening of the High Commission of Sri Lanka in Kuala Lampur, Malaysia.",
      side: "left"
    },
    {
      year: "1957",
      title: "Diplomatic Relations with the Soviet Union",
      image: "/assets/1957 img 5.png",
      description: "Diplomatic Relations with the Soviet Union established on 19 February 1957.",
      side: "right"
    },
    {
      year: "1957",
      title: "Opening of the Embassy Sri Lanka in Moscow, Russia.",
      side: "left"
    },
    {
      year: "1958",
      title: "Establishment of Diplomatic Relations with Canada",
      image: "/assets/1958.png",
      side: "right"
    },
    {
      year: "1958",
      title: "Opening of the High Commission of Sri Lanka in Ottawa, Canada.",
      image: "/assets/1958 img 1.jpg",
      side: "left"
    },
    {
      year: "1958",
      title: "Opening of the Embassy of Sri Lanka in Cairo, Egypt.",
      side: "right"
    },
    {
      year: "1958",
      title: "Opening of the Embassy of Sri Lanka in Bonn, Germany.",
      side: "left"
    },
    {
      year: "1959",
      title: "Diplomatic Relations with IndonesiaEstablishment of Diplomatic Relations with Cuba",
      image: "/assets/1959.png",
      description: "Establishment of Diplomatic Relations with Cuba",
      side: "right"
    },
    {
      year: "1960",
      title: "World’s First Female Prime Minister",
      image: "/assets/1960.jpg",
      description:"Sirimavo Bandaranaike was elected as the world’s first female Prime Minister on 21 July 1960. She addressed the 26th session of the United Nations General Assembly in 1971.",
      side: "left"
    },
    {
      year: "1960",
      title: "Sri Lanka (Ceylon) becomes a Member of the UN Security Council",
      image: "/assets/1960 img 1.jpg",
      description: "Ceylon was elected as a member of the United Nations Security Council in 1960.  Sir Claude Corea became the first-ever President of the United Nations Security Council from Ceylon in May 1960.",
      side: "right"
    },
    {
      year: "1960",
      title: "Sri Lanka (Ceylon) first participated in a United Nations Peacekeeping mission",
      image: "/assets/1960 img 2.jpg",
      description:"Sri Lanka first contribution to a United Nations Peacekeeping mission in 1960, by deploying Six peacekeepers to the UN Mission in the Democratic Republic of Congo (MONUC).",
      side: "left"
    },
    {
      year: "1961",
      title: "Establishment of Diplomatic Relations with Iran",
      image: "/assets/1961.png",
      description: "Diplomatic Relations with Iran",
      side: "right"
    },
    {
      year: "1961",
      title: "Establishment of Diplomatic Relations with the Philippines",
      image: "/assets/1961 img 1.png",
      description:"Diplomatic Relations with the Philippines",
      side: "left"
    },
    {
      year: "1961",
      title: "Opening of the Embassy of Sri Lanka in Manila, Philippines.",
      side: "right"
    },
    {
      year: "1962",
      title: "Establishment of Diplomatic Relations with the European Commission",
      image: "/assets/1962.png",
      description:"Diplomatic Relations with the European Commission established.",
      side: "left"
    },
    {
      year: "1965",
      title: "Establishment of Diplomatic Relations with the Maldives",
      image: "/assets/1965.png",
      description: "Diplomatic Relations with the Republic of Maldives established on 26 July 1956.",
      side: "right"
    },
    {
      year: "1965",
      title: "Opening of the Permanent Mission to the UN in Geneva, Switzerland.",
      side: "left"
    },
    {
      year: "1966",
      title: "Opening of the Embassy of Sri Lanka in Bangkok, Thailand.",
      side: "right"
    },
    {
      year: "1967",
      title: "Visit of UN Secretary General U Thant to Sri Lanka",
      image: "/assets/1967.jpg",
      description:"The United Nations Compound in Colombo opened on 10 April 1967 by United Nations Secretary-General U Thant during his visit to Sri Lanka.",
      side: "left"
    },
    {
      year: "1968",
      title: "Consulate opened in Sydney, Australia November 1968",
      side: "right"
    },
    {
      year: "1970",
      title: "Establishment of Diplomatic Relations with Singapore",
      image: "/assets/1970.png",
      description:"Diplomatic Relations with the Republic of Singapore established on 27 July 1970.",
      side: "left"
    },
    {
      year: "1970",
      title: "Opening of the Embassy of Sri Lanka in Stockholm, Sweden.",
      side: "right"
    },
    {
      year: "1970",
      title: "Establishment of Diplomatic Relations with Kenya",
      image: "/assets/1970 img 1.png",
      description:"Diplomatic Relations with Kenya",
      side: "left"
    },
    {
      year: "1970",
      title: "Establishment of the High Commission of Sri Lanka in Nairobi, Kenya.",
      side: "right"
    },
    {
      year: "1971",
      title: "Establishment of Diplomatic Relations with Kuwait",
      image: "/assets/1971.png",
      description:"Diplomatic Relations with Kuwait established on 19 February 1971.",
      side: "left"
    },
    {
      year: "1971",
      title: "Opening of the High Commission of Sri Lanka in Singapore.g",
      side: "right"
    },



















































































































































































































  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'Overview':
        return (
          <>
            <p className="mb-4">
              The Ministry of Foreign Affairs, Foreign Employment and Tourism coordinates and carries out the foreign policy of the Government of Sri Lanka. The Ministry consists of the Ministry headquarters in Colombo and Sri Lanka Missions abroad.
            </p>
            <p>
              The Ministry was formally established in 1948 following the independence of Ceylon as the Ministry of External Affairs and Defence, coming under the direct control of the Prime Minister of Ceylon. In 1977, the government divided the ministry in two, forming the Ministry of Defence and the Ministry of Foreign Affairs. A.C.S Hameed was appointed as the first Minister of Foreign Affairs on 4 February 1978.
            </p>
          </>
        );
      case 'Vision':
        return (
          <div className="flex flex-col items-center justify-center text-center py-12 space-y-6">
            <h2 className="text-4xl font-bold text-[#2B6CB0]">Vision</h2>
            <p className="text-[#2B6CB0] text-2xl max-w-3xl leading-relaxed">
              To be a responsible nation within the international community and to maintain friendly relations with all countries.
            </p>
          </div>
        );
      case 'Mission':
        return (
          <div className="flex flex-col items-center justify-center text-center py-12 space-y-6">
            <h2 className="text-4xl font-bold text-[#2B6CB0]">Mission</h2>
            <p className="text-[#2B6CB0] text-2xl max-w-4xl leading-relaxed">
              The promotion, projection, and protection of Sri Lanka&apos;s national interests internationally, in accordance with the foreign policy of the Government and to advise the Government on managing foreign relations in keeping with Sri Lanka&apos;s national interests.
            </p>
          </div>
        );
      case 'History':
        return (
          <div className="relative py-10">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-sky-500 hidden md:block" />

            <div className="space-y-12">
              {timelineData.map((item, index) => (
                <div key={index} className={`flex items-center w-full ${item.side === 'left' ? 'md:flex-row-reverse' : 'md:flex-row'} flex-col relative`}>
                  {/* Year */}
                  <div className={`w-full md:w-1/2 flex px-8 ${item.side === 'left' ? 'md:justify-start' : 'md:justify-end'}`}>
                    <span className="text-2xl font-bold text-sky-700">
                      {item.year}
                    </span>
                  </div>

                  {/* Icon Circle */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full border-4 border-sky-500 bg-white flex items-center justify-center z-10 hidden md:flex">
                    <Flag className="w-6 h-6 text-sky-600" />
                  </div>

                  {/* Card */}
                  <div className="w-full md:w-1/2 px-8 mt-4 md:mt-0">
                    <div className="relative bg-sky-50 rounded-xl shadow-lg overflow-hidden border border-sky-100">
                      {/* Caret */}
                      <div className={`absolute top-6 w-4 h-4 bg-navy transform rotate-45 hidden md:block ${
                        item.side === 'left' ? '-right-2' : '-left-2'
                      }`} />

                      {/* Header */}
                      <div className="bg-navy text-white p-4 relative z-10">
                        <h3 className="font-bold text-lg leading-tight">{item.title}</h3>
                      </div>

                      {/* Body */}
                      <div className="p-4 flex flex-col sm:flex-row gap-4 items-start bg-sky-50">
                        <div className="relative w-32 h-24 flex-shrink-0">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <main className="flex-grow container mx-auto px-4 py-8 space-y-8 text-black">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-navy mb-8 border-b-4 border-yellow inline-block">
        About Us
      </h1>

      {/* Tabs Row */}
      <div className="flex flex-wrap justify-center gap-4">
        {['Overview', 'Vision', 'Mission', 'History'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-8 py-2 rounded-md font-medium text-center min-w-[120px] cursor-pointer border transition-colors ${
              activeTab === tab
                ? 'bg-navy text-yellow border-navy'
                : 'bg-white text-navy border-gray-200 hover:bg-gray-50'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content Container */}
      <div className={`${activeTab === 'Overview' ? 'bg-teal-100' : 'bg-white'} rounded-3xl p-8 text-lg leading-relaxed shadow-sm min-h-[200px]`}>
        {renderContent()}
      </div>

      {/* Profiles */}
      <div className="bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Profiles</h2>
        <ul className="space-y-2 list-none">
          <li>Minister</li>
          <li>Deputy Minister of Foreign Affairs and Foreign Employment</li>
          <li>Deputy Minister of Tourism</li>
          <li>Secretary</li>
          <li>Additional Secretaries</li>
        </ul>
      </div>

      {/* Bottom Action Buttons */}
      <div className="flex flex-col gap-4">
        <button className="bg-gray-300 hover:bg-gray-400 text-black font-semibold py-3 px-6 rounded-md w-full transition-colors text-center cursor-pointer">
          Organizational Structure
        </button>
        
      </div>
    </main>
  );
}
