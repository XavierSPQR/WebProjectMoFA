'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Clock, ChevronDown, ChevronUp } from 'lucide-react';

// CONTENT MAP
// 1. CONTENT MAP: Add 'fullContent' for the expanded view
const CONTENT_MAP = [
  {
    id: 1,
    title: "Media Briefing on Foreign Minister Gunawardena appreciates support of countries at UNHRC",
    summary: "Foreign Minister Dinesh Gunawardena held a media conference at the Foreign Ministry today, 23 March 2021...",
    fullContent: "The Foreign Minister appreciated the support extended by member states during the UNHRC sessions in Geneva. He highlighted the importance of sovereignty and the constructive engagement of the international community in Sri Lanka&apos;s domestic processes. Further discussions were held regarding the upcoming resolutions and the country&apos;s strategic position on human rights benchmarks.",
    date: "23.03.2021",
  },
  {
    id: 2,
    title: "Media Briefing on Hon. Dinesh Gunawardena following Bilateral Talks with India",
    summary: "Media Briefing by Hon. Dinesh Gunawardena following his Bilateral Talks with the visiting Indian Minister of External Affairs...",
    fullContent: "The discussion focused on enhancing bilateral cooperation in sectors such as energy, IT, and agriculture. Dr. S. Jaishankar reaffirmed India&apos;s commitment to the &apos;Neighborhood First&apos; policy, while Minister Gunawardena expressed gratitude for the ongoing vaccine support and developmental projects facilitated by the Indian government.",
    date: "06.01.2021",
  },
  {
    id: 3,
    title: "Joint Press Briefing by Foreign Minister and Michael Pompeo, US Secretary of State",
    summary: "Joint Press Briefing by Hon. Dinesh Gunawardena, Foreign Minister and Hon. Michael Pompeo, US Secretary of State on 28 October 2020...",
    fullContent: "The high-level visit emphasized the strong democratic ties between the US and Sri Lanka. Discussions included maritime security in the Indian Ocean, trade investment opportunities, and the shared commitment to a free and open Indo-Pacific region. Video link: https://m.youtube.com/watch?v=olue3-v6LEk",
    date: "28.10.2020",
  },
  {
    id :4,
    title:"Joint Media Briefing  by Minister of Foreign Relations and Russian Foreign Minister :15 January 2020",
    summary:"Joint Media briefing  by Minister of Foreign Relations Dinesh Gunawardena and Russian Minister of Foreign Affairs Sergey Lavrov, at the Ministry of Foreign Relations on 15 January 2020 ",
    fullContent:"Joint Media briefing  by Minister of Foreign Relations Dinesh Gunawardena and Russian Minister of Foreign Affairs Sergey Lavrov, at the Ministry of Foreign Relations on 15 January 2020.Video link: https://m.youtube.com/watch?v=E4eHSCxc3lw",
    date: "15.01.2020",
  
  }
  ,
  {
    id :5,
    title:"Media briefing by Minister of Foreign Relations : 04 December 2019",
    summary:"Media briefing by Foreign Relations Minister Dinesh Gunawardena on the alleged incident relating to a staff member of the Swiss Embassy in Colombo on 4 December 2019.",
    fullContent:"Media briefing by Foreign Relations Minister Dinesh Gunawardena on the alleged incident relating to a staff member of the Swiss Embassy in Colombo on 4 December 2019.Video link: https://m.youtube.com/watch?v=E4eHSCxc3lw",
    date: "04.10.2020",
  
  }
,
  {
    id :6,
    title:"Response by Ministry of Foreign Affairs to media query from The Sunday Times",
    summary:"Question and Response in English. (Sinhala and Tamil Translations are also below) Question: Will Sri Lanka recognise Jerusalem as the capital of Israel and shift its embassy there.  Response: Sri Lanka has always sto ...",
    fullContent:<div>
  <h3>Response by Ministry of Foreign Affairs to media query from The Sunday Times</h3>

  <p><strong>Question:</strong></p>
  <p>
    Will Sri Lanka recognise Jerusalem as the capital of Israel and shift its embassy there?
  </p>

  <p><strong>Response:</strong></p>
  <p>
  Sri Lanka has always stood by the position that Jerusalem is a final-status issue that must be resolved through negotiations between the two parties on the basis of the relevant United Nations resolutions, taking into account the legitimate concerns of both parties – Palestinians and Israelis, and that Jerusalem should be the shared capital of the Israeli and Palestinian states.
  </p><br></br>
  <p>
    Sri Lanka continues to stand by its position that it is only by realizing the vision of two states living side-by-side in peace, security and mutual recognition, with Jerusalem as the capital of Israel and Palestine, with all matters resolved permanently through negotiations, that the legitimate aspirations of both parties and sustainable peace can be achieved.
 </p><br></br>
  <p>
    Therefore, Sri Lanka continues to urge all parties in the region to work with restraint, and focus on creating conditions for direct and meaningful negotiations that can resolve all final status issues required for a negotiated settlement.
  </p><br></br>
  <p>
    In this context, the question of shifting Sri Lanka’s Embassy, does not arise.
  </p><br></br>
  <p> Text of Ministry Response was published in The Sunday Times Newspaper on Sunday, 10 December 2017 in article &quot;Jerusalem Crisis: Lankan Embassy will remain in Tel Aviv&quot;</p>
  <a
  href=" http://www.sundaytimes.lk/171210/news/jerusalem-crisis-lankan-embassy-will-remain-in-tel-aviv-272462.html"
  target="_blank"
  rel="noopener noreferrer"
>
  <b>Available at</b>
</a><br></br><br></br>
  <p><strong>ප්‍රශ්නය:</strong></p>
  <p>
  ශ්‍රී ලංකාව, ජෙරුසලම ඊශ්‍රායලයේ අගනුවර ලෙස පිළිගෙන සිය තානාපති කාර්යාලය ඒ නගරය වෙත රැගෙන යන්නේද ?
  </p>

  <p><strong>පිළිතුර :</strong></p>
  <p>
 ජෙරුසලම යනු පලස්තීනය සහ ඊශ්‍රායලය යන දෙපාර්ශ්වයේම නීත්‍යානුකූල අභිලාෂයන් සැලකිල්ලට ගනිමින්, එක්සත් ජාතීන්ගේ අදාල යෝජනා සම්මතයන් මත පදනම්ව දෙපාර්ශ්වය අතර සාකච්ඡා මගින් විසඳා ගත යුතු, තවමත් නොවිසැඳුණු ගැටලුවක් බවත් ජෙරුසලම, ඊශ්‍රායලය සහ පලස්තීනය යන රාජ්‍යයන් දෙකෙහිම පොදු අගනුවර විය යුතු බවත් යන ආස්ථානයේ ශ්‍රී ලංකාව සෑමවිටම රැඳී සිට තිබේ.
  </p><br></br>
  <p>
   සාකච්ඡා මාර්ගයෙන් සියලුම ගැටලු නිත්‍ය ලෙස විසැඳුණු , ඊශ්‍රායලය සහ පලස්තීනයේ පොදු අගනුවර බවට ජෙරුසලම පත්වූ, එකිනෙකා අසල පිහිටි රාජ්‍ය දෙකක් ලෙස සාමයෙන්, සුරක්ෂිතබවෙන් සහ අන්‍යොන්‍ය පිළිගැනීමෙන් යුතුව ජීවත්වීමේ දැක්ම යථාර්ථයක් කරගැනීමෙන් පමණක් දෙපාර්ශ්වයේම නීත්‍යානුකූල අපේක්ෂාවන් ඉටු කරගෙන තිරසර සාමය උදාකරගත හැකිය යන ස්ථාවරයේ ශ්‍රී ලංකාව තවදුරටත් රැඳී සිටිනු ඇත.
 </p><br></br>
  <p>
    එබැවින්, සංයමයෙන් යුතුව කටයුතු කරන ලෙසත්, සාකච්ඡා මාර්ගික විසැඳුමකට එළැඹීම සඳහා අවශ්‍ය කරන, සියලුම නොවිසැඳුණු ගැටලු නිරාකරණය කරගත හැකි ඍජු සහ අර්ථාන්විත සාකච්ඡාවලට අවශ්‍ය තත්ත්වයන් නිර්මාණය කිරීම සඳහා අවධානය යොමු කරන ලෙසත් කලාපයේ සිටින සියලුම පාර්ශ්වවලින් ශ්‍රී ලංකාව උදක්ම ඉල්ලා සිටියි.
  </p><br></br>
  <p>
   මෙම සන්දර්භය තුළ, ශ්‍රී ලංකා තානාපති කාර්යාලය ජෙරුසලම වෙත රැගෙන යන්නේද යන ප්‍රශ්නය පැන නොනගියි.
 </p>
</div> 
  },
  {
    id :7,
    title:"Media Invitation: Joint Press Conference by Foreign Secretary & US Under Secretary of State for Political Affairs: Monday 6 Nov 2017 at 1930hours",
    summary:"Media Advisory Mr. Prasad Kariyawasam, Secretary, Ministry of Foreign Affairs and visiting US Under Secretary of State for Political Affairs, Ambassador Thomas A. Shannon, will be holding a Joint Press Conference on Mon ...",
    fullContent:<div>
      <h3><strong>Media Advisory</strong></h3>
      <p>Mr. Prasad Kariyawasam, Secretary, Ministry of Foreign Affairs and visiting US Under Secretary of State for Political Affairs, Ambassador Thomas A. Shannon, will be holding a Joint Press Conference on Monday 6 November 2017 at 19:30 hours (7:30PM) at the Main Conference Hall of the Ministry of Foreign Affairs, Republic Building, Colombo-01, following conclusion of US-Sri Lanka Partnership Dialogue.</p>
      <br />
      <p>
        All Media are invited to attend. Copy of
       <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
       
        >
        <b> Invitation Letter. </b>
     </a>
     </p>
     <br />
     <p><strong>Print Media are kindly requested to arrive by 7.00 p.m. on 06th November 2017, while Electronic Media are kindly advised to be at the venue by 6.30 p.m. to ensure adequate time to set up camera equipment.</strong></p>
     <br />
     <p><strong>It would be appreciated to receive confirmation of media representative/(s) who would attend the Press Conference by 3.00 p.m. on Monday, 06th November 2017, to assist with logistical arrangements.</strong></p>
   

   <p>
      To assist with arrangements, media are requested to send confirmation of attendence on the attached media reply form and return by e-mail to
       
        <b> publicity@mfa.gov.lk </b>or by fax to <b>2472488</b>.
   

     </p><br /><br />
     <div className="text-sm font-sans text-gray-700">
     <p>
      Public Communications Division <br />
      Ministry of Foreign Affairs
     </p>
     </div>
      </div>
  
  },
  {
    id :8,
    title:"Response by Spokesperson to Query received from Island Journalist",
    summary:"Question and Response are in English. (Sinhala & Tamil Translations are also below) Question: Whether, on the basis of Lord Naseby’s Statement made on October 12th 2017, there is a likelihood of GoSL requesting UK an ...",
    fullContent: <div>
      <h3>Question:</h3>
      <p><strong>Whether, on the basis of Lord Naseby’s Statement made on October 12th 2017, there is a likelihood of GoSL requesting UK and the UN Human Rights Council to review allegations regarding 40,000 civilians killed during the Vanni campaign</strong></p>
      <br />
      <h3>Answer:</h3>
      <br />
      <p>As you would recall, the 100 Day Programme &apos;United for a Change. Dawn of Maithri Rule. A New Country in 100 Days&apos;, in point 93, stated the following:</p>
      <br /><br />
      <p>&quot;Since Sri Lanka is not a signatory to the Rome Statute regarding international jurisdiction with regard to war crimes, ensuring justice with regard to such matters will be the business of <b>national independent judicial mechanisms</b>.&quot;</p>
       <br />
       <p>What this means is that the new Government of Sri Lanka pledged to re-assert lost sovereignty by taking ownership of processes that were in the international domain, by bringing them to the local domain, and that the Government of Sri Lanka, as a sovereign state that is responsible for all its citizens, and responsible to uphold the rule of law, democracy, and justice, would take responsibility for credible investigations, locally (by this time, as you would recall, there was already an international investigation on Sri Lanka by the OHCHR Investigation on Sri Lanka (OISL), set up by Resolution 25/1 of March 2014).</p>
       <br />
       <p>As promised to the people by the 100 Day Programme (point 93), the National Unity Government proceeded to present its own set of national proposals for a transitional justice process, involving truth, justice, reparation, and guarantees of non-recurrence. For the first time, people were invited to present their views through a consultation process on reconciliation mechanisms that was set up locally, so that anyone could present their own ideas for reconciliation mechanisms to the Government.</p>
       <br />
       <p>The Government of Sri Lanka remains committed to national processes aimed at realising the vision of a reconciled, stable, peaceful and prosperous nation.  Engaging in arguments and debates  in the international domain over the number of civilians who may have died at a particular time in the country will not help resolve any issues, in a meaningful manner, locally, except a feel good factor for a few individuals who may think that they have won a debate or scored points over someone or the other.</p>
       <br />
       <p>This country has seen violence many times - for example in 1971, and also during the period between 1987 and 1989 when civilians died and went missing in the south. Once again, after the end of the conflict in May 2009, certain incidents took place in the south, such as the Welikada Prison incident, shooting at protesters in Rathupaswala and in the Katunayake Free Trade Zone. And today,  there are attempts  once again to  instigate violence in the south by branding people as traitors and trying to create divisions in society. These indicate,  whatever community one belongs to, one cannot be guaranteed of safety. All communities have been affected by violence at some point or the other in this country.</p>
       <br />
       <p>Therefore, systems that restore trust in investigations and judicial processes, and systems that strengthen individual rights  will benefit all communities and also enhance social trust over the long-term. This is what the Government seeks to carry out, for the benefit of all citizens,  present and future, in the interest of long-term stability and prosperity of the nation.</p>
       <p>As The Island of 27 October 2017 carried the response of the Spokesperson under a misleading title that read <b>Govt won&apos;t act on Lord Naseby&apos;s statement</b>,
        <a href="http://www.island.lk/index.php?page_cat=article-details&page=article-details&code_title=173955"  style={{ color: "blue" }}>
           (http://www.island.lk/index.php?page_cat=article-details&page=article-details&code_title=173955), 
        </a>
         the following response was sent to The Island on 27 October 2017:
       </p>
      <br />
      <p>&ldquo;As you are aware, the statement by the Ministry was in response to a question raised by The Island. We regret that the title of the news report - &apos;Govt won&apos;t act on Lord Naseby&apos;s statement&apos; - does not accurately reflect the spirit or the substance of the statement/ response by the Ministry.</p>
      <br /><br />
      <p>With regard to Lord Naseby&apos;s statement, the Government fully recognizes its contribution to the Transitional Justice/ Reconciliation process in Sri Lanka.&rdquo;</p>
    </div>
   
   
  
  },
  {
    id :9,
    title:"Media Invitation: Assumption of duties of Foreign Minister : 18 August 2017",
    summary:"Media Advisory: All Media are hereby invited to a Media Reporting & Photo opportunity event, where Hon. Tilak Marapana, Minister of Foreign Affairs will assume duties at the Foreign Ministry on Friday, 18 August 2017 ...",
    fullContent: <div></div>
  
  }
];

export default function MediaBriefingsPage() {
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
          <Link href="/public-diplomacy" className="hover:underline">
            Public Diplomacy
          </Link>
          <span>&gt;</span>
          <h1 className="cursor-default text-gray-300">
            Media Briefings
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-5xl">
        <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-sm border border-gray-100">
          <div className="max-h-[75vh] overflow-y-auto pr-4">
            <div className="space-y-8">
              {CONTENT_MAP.map((briefing) => {
                const isExpanded = expandedItems[briefing.id];

                return (
                  <div
                    key={briefing.id}
                    className="group border-b border-gray-100 pb-8 last:border-0"
                  >
                    <h2 className="text-xl md:text-2xl font-bold text-gray-800 leading-tight mb-4">
                      {briefing.title}
                    </h2>

                    <div className="text-gray-600 text-lg leading-relaxed">
                      {isExpanded ? (
                        <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#6F5C5C]">
                          {briefing.fullContent}
                        </div>
                      ) : (
                        <p>{briefing.summary}</p>
                      )}
                    </div>

                    <div className="flex justify-between items-center mt-6">
                      <button
                        onClick={() => toggleExpand(briefing.id)}
                        className="flex items-center gap-1 text-[#6F5C5C] font-bold hover:text-[#4a3d3d] transition-colors"
                      >
                        {isExpanded ? (
                          <>
                            Show Less <ChevronUp size={20} />
                          </>
                        ) : (
                          <>
                            See More... <ChevronDown size={20} />
                          </>
                        )}
                      </button>

                      <div className="flex items-center gap-2 text-gray-400">
                        <Clock size={18} />
                        <span className="text-sm font-medium">
                          {briefing.date}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}