import Link from 'next/link';
import { Clock } from 'lucide-react';

export default function MediaBriefingsPage() {
  const briefings = [
    {
      title: "Media Briefing on Foreign Minister Gunawardena appreciates support of countries at UNHRC",
      summary: "Foreign Minister Dinesh Gunawardena held a media conference at the Foreign Ministry today, 23 March 2021, to brief the media on the outcome of the UNHRC sessions in Geneva. He appreciated the support extended by the co ...",
      date: "23.03.2021",
      href: "/briefings/2021-03-23" // Add link path
    },
    {
      title: "Media Briefing on Hon. Dinesh Gunawardena, Foreign Minister following his Bilateral Talks with the visiting Indian Minister of External Affairs Dr. S. Jaishankar on 6th January 2021 at the Foreign Ministry",
      summary: "Media Briefing by Hon. Dinesh Gunawardena, Foreign Minister following his Bilateral Talks with the visiting Indian Minister of External Affairs Dr. S. Jaishankar on 6th January 2021 at the Foreign Ministry The ful ...",
      date: "06.01.2021",
      href: "/briefings/2021-01-06"
    },
    {
      title: "Joint Press Briefing by Hon. Dinesh Gunawardena, Foreign Minister and Hon. Michael Pompeo, US Secretary of State on 28 October 2020",
      summary: "Joint Press Briefing by Hon. Dinesh Gunawardena, Foreign Minister and Hon. Michael Pompeo, US Secretary of State on 28 October 2020. Video: https://m.youtube.com/watch?v=olue3-v6LEk ...",
      date: "28.10.2020",
      href: "/briefings/2020-10-28"
    },
    {
      title: "Joint Media Briefing by Minister of Foreign Relations and Russian Foreign Minister :15 January 2020",
      summary: "Joint Media briefing by Minister of Foreign Relations Dinesh Gunawardena and Russian Minister of Foreign Affairs Sergey Lavrov, at the Ministry of Foreign Relations on 15 January 2020 Video : https://m.youtube.com/wa ...",
      date: "15.01.2020",
      href: "/briefings/2020-01-15"
    }
  ];

  return (
    <main className="flex-grow bg-[#F5EBEB] pb-12 min-h-screen">
      {/* Breadcrumb Bar */}
      <div className="container mx-auto px-4 pt-8 max-w-5xl">
        <div className="bg-[#6F5C5C] text-white py-3 px-6 rounded-xl text-xl font-semibold mb-8 flex items-center justify-center gap-2">
          <Link href="/public-diplomacy" className="hover:underline">Public Diplomacy</Link>
          <span>&gt;</span>
          <h1 className="cursor-default text-gray-300">Media Briefings</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-5xl">
        <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-sm border border-gray-100">
          <div className="space-y-12">
            {briefings.map((briefing, index) => (
              <div key={index} className="space-y-4">
                {/* Title as clickable link with hover effect */}
                <Link href={briefing.href} className="text-xl md:text-2xl font-bold text-gray-800 leading-tight hover:text-[#6F5C5C] transition-colors duration-300">
                  {briefing.title}
                </Link>
                
                <p className="text-gray-600 text-lg leading-relaxed">
                  {briefing.summary}
                </p>
                
                <div className="flex justify-end items-center gap-2 text-gray-400">
                  <Clock size={18} />
                  <span className="text-sm font-medium">{briefing.date}</span>
                </div>

                {index < briefings.length - 1 && (
                  <hr className="border-t-2 border-black/80 mt-8" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}