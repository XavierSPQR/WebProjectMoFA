'use client';

import { useState } from 'react';

interface DownloadAccordionProps {
  title: string;
  fileUrl: string;
}

export default function DownloadAccordion({ title, fileUrl }: DownloadAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left py-4 px-6 bg-gray-100 hover:bg-gray-200 focus:outline-none"
      >
        <h2 className="text-lg font-semibold text-navy">{title}</h2>
      </button>
      {isOpen && (
        <div className="p-6 bg-white">
          <a
            href={fileUrl}
            download
            className="inline-block bg-yellow text-navy font-bold py-2 px-4 rounded hover:bg-opacity-80"
          >
            Download
          </a>
        </div>
      )}
    </div>
  );
}
