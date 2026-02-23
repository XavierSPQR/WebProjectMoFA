import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-auto">
      {/* Copyright Bar */}
      <div className="bg-gray-500 text-white py-3 text-center">
        <div className="container mx-auto px-4">
          <p className="text-[13px] font-medium opacity-80">
            Copyrights &copy; 2025. Foreign Ministry. All Rights Reserved. Developed by Wayamba University
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
