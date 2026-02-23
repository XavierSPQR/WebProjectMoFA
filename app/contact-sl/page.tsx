import React from 'react';
import { Globe, ClipboardList, MapPin } from 'lucide-react';

export default function ContactSLPage() {
  return (
    <main className="bg-[#F8E7E9] min-h-screen pb-12 text-black">
      <div className="container mx-auto px-4 py-8">
        {/* Page Title */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Contact Sri Lanka – Ministry of Foreign Affairs
          </h1>
          <p className="text-lg text-gray-700">
            Reach government services, consular support, and overseas assistance
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Column: Contact Sri Lanka Portal */}
          <div className="flex flex-col gap-6">
            <div className="bg-[#D1D5DB] p-8 rounded-lg shadow-sm flex flex-col items-center text-center flex-grow">
              <div className="w-16 h-16 bg-gray-400 mb-4 flex items-center justify-center rounded shadow-sm">
                <div className="text-white flex flex-col items-center">
                  <Globe className="w-8 h-8" />
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-6 text-gray-900 leading-tight">Contact Sri Lanka Portal</h2>
              <ul className="text-left space-y-4 mb-10 text-lg font-medium list-none flex-grow">
                <li className="flex items-start gap-2">
                  <span className="text-gray-600 font-bold">*</span>
                  <span>Submit an Inquiry</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-600 font-bold">*</span>
                  <span>Track inquiry status</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-600 font-bold">*</span>
                  <span>Emergency assistance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-600 font-bold">*</span>
                  <span>Request information</span>
                </li>
              </ul>
              <div className="mt-auto">
                <button className="bg-gray-400 text-white px-10 py-2.5 rounded font-bold hover:bg-gray-500 transition-colors shadow-sm">
                  LEARN MORE
                </button>
              </div>
            </div>

            {/* Map Section */}
            <div className="bg-[#D1D5DB] p-4 rounded-lg flex items-center justify-center h-52">
               <div className="bg-[#E1F5FE] w-full h-full flex items-center justify-center rounded relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200 opacity-50" />
                  <MapPin className="text-red-500 w-16 h-16 relative z-10 drop-shadow-md" />
                  <div className="absolute bottom-2 right-2 text-[10px] text-gray-400 font-mono">Google Maps Placeholder</div>
               </div>
            </div>
          </div>

          {/* Right Column: Mission Registrations */}
          <div className="bg-[#D1D5DB] p-8 rounded-lg shadow-sm flex flex-col h-full">
             <div className="flex flex-col items-center text-center mb-8">
                <div className="w-16 h-16 bg-gray-400 mb-4 flex items-center justify-center rounded shadow-sm">
                  <div className="text-white flex flex-col items-center">
                    <ClipboardList className="w-8 h-8" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 leading-tight">Mission Registrations</h2>
             </div>

             <form className="space-y-4 flex flex-col flex-grow">
                <div className="space-y-4 flex-grow">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full p-3 bg-white border-none rounded shadow-sm focus:ring-2 focus:ring-gray-300 outline-none transition-all placeholder:text-gray-400"
                  />
                  <input
                    type="text"
                    placeholder="Passport Number"
                    className="w-full p-3 bg-white border-none rounded shadow-sm focus:ring-2 focus:ring-gray-300 outline-none transition-all placeholder:text-gray-400"
                  />
                  <input
                    type="text"
                    placeholder="Country of Residence"
                    className="w-full p-3 bg-white border-none rounded shadow-sm focus:ring-2 focus:ring-gray-300 outline-none transition-all placeholder:text-gray-400"
                  />
                  <input
                    type="email"
                    placeholder="E mail"
                    className="w-full p-3 bg-white border-none rounded shadow-sm focus:ring-2 focus:ring-gray-300 outline-none transition-all placeholder:text-gray-400"
                  />
                  <input
                    type="text"
                    placeholder="Sri Lanka Contact Number"
                    className="w-full p-3 bg-white border-none rounded shadow-sm focus:ring-2 focus:ring-gray-300 outline-none transition-all placeholder:text-gray-400"
                  />
                  <div className="space-y-1">
                    <label className="text-[10px] text-gray-500 ml-1 font-semibold uppercase tracking-wider">Travel Dates</label>
                    <input
                      type="text"
                      placeholder="Travel Dates"
                      className="w-full p-3 bg-white border-none rounded shadow-sm focus:ring-2 focus:ring-gray-300 outline-none transition-all placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <div className="pt-8 flex justify-center">
                  <button type="button" className="bg-gray-400 text-white px-14 py-3 rounded font-bold hover:bg-gray-500 transition-colors shadow-sm">
                    REGISTER
                  </button>
                </div>
             </form>
          </div>
        </div>
      </div>
    </main>
  );
}
