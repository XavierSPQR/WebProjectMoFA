import React from 'react';
import Image from 'next/image';
import { Abhaya_Libre, Noto_Sans_Tamil } from 'next/font/google';

const abhayaLibre = Abhaya_Libre({
  subsets: ['sinhala'],
  weight: '700',
});

const notoSansTamil = Noto_Sans_Tamil({
  subsets: ['tamil'],
  weight: '400',
});

const Header = () => {
  return (
    <header className="bg-[#9DD9D2] text-gray-900 p-4 flex flex-col md:flex-row items-center justify-between gap-4">
      
      {/* Top Row for Mobile: Logo and Flag side by side */}
      <div className="flex items-center justify-between w-full md:w-auto md:justify-center gap-4">
        {/* Logo */}
        <div className="flex items-center justify-center w-16 h-16 md:w-24 md:h-24">
          <Image
            src="/assets/logo.png"
            alt="Sri Lanka Logo"
            width={80}
            height={80}
            className="object-contain w-full h-full"
          />
        </div>

        {/* Flag for Mobile (hidden on desktop here, shown in its own div) */}
        <div className="flex md:hidden items-center justify-center w-20 h-12">
          <Image
            src="/assets/flag.png"
            alt="Sri Lanka Flag"
            width={120}
            height={120}
            className="object-contain w-full h-full"
          />
        </div>
      </div>

      {/* Center Titles */}
      <div className="text-center flex-1 mx-0 md:mx-4">
        <h1 className={`text-lg md:text-2xl ${abhayaLibre.className} mb-1`}>
          විදේශ කටයුතු , විදේශ රැකියා සහ සංචාරක අමාත්‍යාංශය
        </h1>
        <h2 className={`text-sm md:text-lg ${notoSansTamil.className} mb-1`}>
          வெளிநாட்டு அலுவல்கள், வெளிநாட்டு வேலைவாய்ப்பு மற்றும் சுற்றுலாத்துறை அமைச்சு
        </h2>
        <h3 className="text-base md:text-xl font-bold">
          Ministry of Foreign Affairs, Foreign Employment & Tourism
        </h3>
      </div>

      {/* Flag for Desktop */}
      <div className="hidden md:flex items-center justify-center">
        <Image
          src="/assets/flag.png"
          alt="Sri Lanka Flag"
          width={120}
          height={120}
          className="object-contain"
        />
      </div>

    </header>
  );
};

export default Header;
