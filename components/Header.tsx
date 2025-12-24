import React from 'react';
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
    <header className="bg-[#6D6D6D] text-white p-4 flex items-center justify-between">
      <div className="w-24 h-24 bg-gray-300">
        {/* Placeholder for the left logo */}
      </div>
      <div className="text-center">
        <h1 className={`text-2xl ${abhayaLibre.className}`}>විදේශ කටයුතු , විදේශ රැකියා සහ සංචාරක අමාත්‍යාංශය</h1>
        <h2 className={`text-lg ${notoSansTamil.className}`}>வெளிநாட்டு அலுவல்கள், வெளிநாட்டு வேலைவாய்ப்பு மற்றும் சுற்றுலாத்துறை அமைச்சு</h2>
        <h3 className="text-xl font-bold">Ministry of Foreign Affairs, Foreign Employment & Tourism</h3>
      </div>
      <div className="w-24 h-24 bg-gray-300">
        {/* Placeholder for the right logo */}
      </div>
    </header>
  );
};

export default Header;
