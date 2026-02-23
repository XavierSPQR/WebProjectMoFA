import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-300 text-gray-900 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm mb-8">
          {/* Column 1 */}
          <div className="bg-gray-200 p-6 rounded shadow-sm">
            <h3 className="font-bold text-base mb-4">Get in Touch</h3>
            <ul className="space-y-1">
              <li className="text-xs">Consular Services</li>
              <li className="text-xs">Travel Alerts</li>
              <li className="text-xs">Opp. Support</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="bg-gray-200 p-6 rounded shadow-sm">
            <h3 className="font-bold text-base mb-4">Get in Touch</h3>
            <ul className="space-y-1">
              <li className="text-xs">Facebook</li>
              <li className="text-xs">Email</li>
              <li className="text-xs">Youtube</li>
              <li className="text-xs">LinkedIn</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="bg-gray-200 p-6 rounded shadow-sm">
            <h3 className="font-bold text-base mb-4 text-nowrap">Get in touch</h3>
            <ul className="space-y-1">
              <li className="text-xs font-medium">+94 12345678</li>
              <li className="text-xs font-medium">ForeignAff.lk</li>
              <li className="text-xs font-medium">Main Street, Colombo</li>
            </ul>
          </div>
        </div>
      </div>

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
