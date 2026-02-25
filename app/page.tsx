'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

/**
 * Ministry of Foreign Affairs, Foreign Employment & Tourism - Splash Portal
 * This version contains NO navigation bar, focusing entirely on the 
 * central branding and department selection cards.
 */
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
      
      {/* Background Image: Immersive landscape */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/Sigiriya.jpg.jpeg" 
          alt="Sri Lanka Landscape"
          fill
          className="object-cover"
          priority
        />
        {/* Visual overlay for contrast and depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
      </div>

      {/* Primary Content Wrapper */}
      <div className="relative z-10 w-full max-w-6xl px-6 flex flex-col items-center text-white">
        
        {/* 1. Trilingual Greeting Section */}
        <div className="flex flex-col items-center mb-12">
          <h1 className="text-3xl md:text-5xl font-light tracking-widest flex gap-4 md:gap-10 items-center">
            <span className="drop-shadow-2xl">ආයුබෝවන්</span>
            <span className="drop-shadow-2xl">வரவேற்பு</span>
            <span className="font-serif italic drop-shadow-2xl">welcome</span>
          </h1>
          {/* Decorative Gold Flourish */}
          <div className="mt-4 w-72 h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent relative">
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 text-yellow-500 text-sm drop-shadow-md">✦</div>
          </div>
        </div>

        {/* 2. Central Ministry Identity Section */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3 drop-shadow-2xl">
          <p className="text-2xl md:text-4xl font-semibold leading-snug">
            විදේශ කටයුතු, විදේශ රැකියා සහ සංචාරක අමාත්‍යාංශය
          </p>
          <p className="text-lg md:text-xl font-medium opacity-95">
            வெளிநாட்டு அலுவல்கள், வெளிநாட்டு வேலைவாய்ப்பு மற்றும் சுற்றுலாத்துறை அமைச்சு
          </p>
          <h2 className="text-2xl md:text-4xl font-extrabold tracking-wide pt-2 uppercase">
            Ministry of Foreign Affairs, Foreign Employment & Tourism
          </h2>
        </div>

        {/* 3. Main Department Portal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
          {ministrySections.map((section, index) => (
            <Link 
              key={index} 
              href={section.link}
              className="group relative bg-white/95 hover:bg-white transition-all duration-500 
                         rounded-tr-[50px] rounded-bl-[50px] border-b-[10px] border-blue-900 
                         p-12 flex flex-col items-center justify-center text-blue-950 shadow-2xl 
                         hover:scale-105 active:scale-95"
            >
              <div className="text-center space-y-2">
                <p className="text-2xl font-bold tracking-tight">{section.title_si}</p>
                <p className="text-sm font-semibold opacity-80 tracking-wide">{section.title_ta}</p>
                <p className="text-xl font-black uppercase tracking-tighter pt-2">{section.title_en}</p>
              </div>
              
              {/* Animated Inner Border on Hover */}
              <div className="absolute inset-2 rounded-tr-[42px] rounded-bl-[42px] border border-transparent 
                              group-hover:border-blue-900/20 transition-all duration-500 pointer-events-none" />
            </Link>
          ))}
        </div>
      </div>

      {/* 4. Minimal Footer Credit */}
      <footer className="absolute bottom-8 w-full text-center text-white/70 text-xs tracking-widest uppercase">
        © 2026 Ministry of Foreign Affairs, Sri Lanka • Secure Government Portal
      </footer>
    </main>
  );
}