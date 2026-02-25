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
    <header className="bg-[#9DD9D2] text-gray-900 p-4 flex items-center justify-between">
      
      {/* Logo */}
      <div className="flex items-center justify-center w-24 h-24">
        <Image
          src="/assets/logo.png"
          alt="Sri Lanka Logo"
          width={80}
          height={80}
          className="object-contain"
        />
      </div>

      {/* Center Titles */}
      <div className="text-center flex-1 mx-4">
        <h1 className={`text-2xl ${abhayaLibre.className}`}>
          විදේශ කටයුතු , විදේශ රැකියා සහ සංචාරක අමාත්‍යාංශය
        </h1>
        <h2 className={`text-lg ${notoSansTamil.className}`}>
          வெளிநாட்டு அலுவல்கள், வெளிநாட்டு வேலைவாய்ப்பு மற்றும் சுற்றுலாத்துறை அமைச்சு
        </h2>
        <h3 className="text-xl font-bold">
          Ministry of Foreign Affairs, Foreign Employment & Tourism
        </h3>
      </div>

      {/* Flag */}
      <div className="flex items-center justify-center">
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