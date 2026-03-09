'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const ministrySections = [
    {
      title_si: "විදේශ කටයුතු",
      title_ta: "வெளிநாட்டு அலுவல்கள்",
      title_en: "Foreign Affairs",
      link: "/home"
    },
    {
      title_si: "විදේශ රැකියා",
      title_ta: "வெளிநாட்டு வேலைவாய்ப்பு",
      title_en: "Foreign Employment",
      link: "/foreign-employment"
    },
    {
      title_si: "සංචාරක",
      title_ta: "சுற்றுலாத்துறை",
      title_en: "Tourism",
      link: "/tourism"
    }
  ];

  return (
    <main className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center font-sans">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/new.jpeg" 
          alt="Sri Lanka Landscape"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
      </div>

      {/* Primary Content Wrapper */}
      <div className="relative z-10 w-full max-w-[1400px] px-4 flex flex-col items-center text-white">
        
        {/* 1. Greeting Section */}
        <div className="flex flex-col items-center mb-8 md:mb-12">
          <h1 className="text-xl md:text-4xl font-light tracking-widest flex gap-4 md:gap-10 items-center">
            <span className="drop-shadow-2xl">ආයුබෝවන්</span>
            <span className="drop-shadow-2xl">வரவேற்பு</span>
            <span className="font-serif italic drop-shadow-2xl">welcome</span>
          </h1>
          <div className="mt-4 w-48 md:w-64 h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent relative">
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 text-yellow-500 text-sm drop-shadow-md">✦</div>
          </div>
        </div>

        {/* 2. Central Ministry Identity Section (GRID FIX) */}
        {/* We use a 3-column grid to prevent overlap: [Emblem] [Text] [Flag] */}
        <div className="grid grid-cols-[60px_1fr_80px] sm:grid-cols-[100px_1fr_120px] md:grid-cols-[140px_1fr_160px] lg:grid-cols-[180px_1fr_220px] items-center w-full mb-16 gap-2 md:gap-6">
          
          {/* Left: National Emblem */}
          <div className="relative aspect-square w-full drop-shadow-2xl">
            <Image 
              src="/assets/logo.png" 
              alt="Sri Lanka National Emblem" 
              fill 
              className="object-contain"
            />
          </div>

          {/* Center: Trilingual Title */}
          <div className="flex flex-col items-center text-center space-y-1 md:space-y-3 drop-shadow-2xl min-w-0 px-2">
            <p className="text-[12px] sm:text-lg md:text-2xl lg:text-3xl font-semibold leading-tight md:whitespace-nowrap">
              විදේශ කටයුතු, විදේශ රැකියා සහ සංචාරක අමාත්‍යාංශය
            </p>
            <p className="text-[10px] sm:text-sm md:text-lg lg:text-xl font-medium opacity-90 leading-tight md:whitespace-nowrap">
              வெளிநாட்டு அலுவல்கள், வெளிநாட்டு வேலைவாய்ப்பு மற்றும் சுற்றுலாத்துறை அமைச்சு
            </p>
            <h2 className="text-[12px] sm:text-lg md:text-2xl lg:text-3xl font-extrabold tracking-tighter uppercase leading-tight md:whitespace-nowrap">
              Ministry of Foreign Affairs, Foreign Employment & Tourism
            </h2>
          </div>

          {/* Right: National Flag */}
          <div className="relative aspect-[2/1] w-full drop-shadow-2xl">
            <Image 
              src="/assets/flag.png" 
              alt="Sri Lanka Flag" 
              fill 
              className="object-contain border border-white/10"
            />
          </div>
        </div>

        {/* 3. Department Portal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full max-w-5xl">
          {ministrySections.map((section, index) => (
            <Link 
              key={index} 
              href={section.link}
              className="group relative bg-white/95 hover:bg-white transition-all duration-500 
                         rounded-tr-[40px] rounded-bl-[40px] border-b-[8px] border-blue-900 
                         p-6 md:p-10 lg:p-12 flex flex-col items-center justify-center text-blue-950 shadow-2xl 
                         hover:scale-105 active:scale-95"
            >
              <div className="text-center space-y-2">
                <p className="text-lg lg:text-2xl font-bold tracking-tight">{section.title_si}</p>
                <p className="text-[10px] lg:text-sm font-semibold opacity-80 tracking-wide">{section.title_ta}</p>
                <p className="text-base lg:text-xl font-black uppercase tracking-tighter pt-1 md:pt-2">{section.title_en}</p>
              </div>
              <div className="absolute inset-2 rounded-tr-[32px] rounded-bl-[32px] border border-transparent 
                              group-hover:border-blue-900/20 transition-all duration-500 pointer-events-none" />
            </Link>
          ))}
        </div>
      </div>

      {/* 4. Footer */}
      <footer className="absolute bottom-6 w-full text-center text-white/70 text-[10px] md:text-xs tracking-widest uppercase">
        © 2026 Ministry of Foreign Affairs, Sri Lanka • Secure Government Portal
      </footer>
    </main>
  );
}