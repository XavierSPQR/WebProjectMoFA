import DownloadAccordion from '@/components/DownloadAccordion';
import Link from 'next/link';

const downloadItems = [
  {
    title: 'National Anthem',
    fileUrl: '/downloads/national-anthem.mp3',
  },
  {
    title: 'National Emblem of Sri Lanka',
    fileUrl: '/downloads/national-emblem.pdf',
  },
  {
    title: 'National Flag of Sri Lanka',
    fileUrl: '/downloads/national-flag.pdf',
  },
  {
    title: 'IORA Images Downloader',
    fileUrl: '/downloads/iora-images.pdf',
  },
  {
    title: 'Procurement Document',
    fileUrl: '/downloads/procurement-document.pdf',
  },
];

export default function DownloadsPage() {
  return (
    <main className="flex-grow p-8 container mx-auto">
      <nav className="mb-6 text-sm">
        <Link href="/" className="text-gray-500 hover:underline">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-500">Downloads</span>
      </nav>
      <h1 className="text-3xl font-bold text-navy mb-8 border-b-4 border-yellow inline-block">
        Downloads
      </h1>

      <div className="space-y-4">
        {downloadItems.map((item) => (
          <DownloadAccordion
            key={item.title}
            title={item.title}
            fileUrl={item.fileUrl}
          />
        ))}
      </div>
    </main>
  );
}
