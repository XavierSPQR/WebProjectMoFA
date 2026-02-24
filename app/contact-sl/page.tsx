import React from "react";
import {
  Globe,
  ClipboardList,
  Facebook,
  Youtube,
  Linkedin,
  Mail,
} from "lucide-react";

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
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-6">
            {/* Contact Portal */}
            <div className="bg-[#D1D5DB] p-8 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gray-400 mb-4 flex items-center justify-center rounded shadow-sm">
                <Globe className="w-8 h-8 text-white" />
              </div>

              <h2 className="text-2xl font-bold mb-6 text-gray-900">
                Contact Sri Lanka Portal
              </h2>

              <ul className="text-left space-y-3 mb-8 text-lg font-medium">
                <li>• Submit an Inquiry</li>
                <li>• Track Inquiry Status</li>
                <li>• Emergency Assistance</li>
                <li>• Request Information</li>
              </ul>

              <button className="bg-gray-400 text-white px-10 py-2.5 rounded font-bold hover:bg-gray-500 transition">
                LEARN MORE
              </button>
            </div>

            {/* Google Map */}
            <div className="bg-[#D1D5DB] p-4 rounded-lg h-64">
              <div className="w-full h-full rounded overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1012738.7689648732!2d79.442379304182!3d7.464053890574193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sministry%20of%20foreign%20affairs%20sri%20lanka!5e0!3m2!1sen!2slk!4v1771929560803!5m2!1sen!2slk"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="bg-[#D1D5DB] p-8 rounded-lg shadow-sm flex flex-col">
            <div className="flex flex-col items-center text-center mb-8">
              <div className="w-16 h-16 bg-gray-400 mb-4 flex items-center justify-center rounded shadow-sm">
                <ClipboardList className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Mission Registrations
              </h2>
            </div>

            <form className="space-y-4 flex flex-col">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 bg-white rounded shadow-sm focus:ring-2 focus:ring-gray-300 outline-none"
              />
              <input
                type="text"
                placeholder="Passport Number"
                className="w-full p-3 bg-white rounded shadow-sm focus:ring-2 focus:ring-gray-300 outline-none"
              />
              <input
                type="text"
                placeholder="Country of Residence"
                className="w-full p-3 bg-white rounded shadow-sm focus:ring-2 focus:ring-gray-300 outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 bg-white rounded shadow-sm focus:ring-2 focus:ring-gray-300 outline-none"
              />
              <input
                type="text"
                placeholder="Sri Lanka Contact Number"
                className="w-full p-3 bg-white rounded shadow-sm focus:ring-2 focus:ring-gray-300 outline-none"
              />
              <input
                type="text"
                placeholder="Travel Dates"
                className="w-full p-3 bg-white rounded shadow-sm focus:ring-2 focus:ring-gray-300 outline-none"
              />

              <div className="pt-4 flex justify-center">
                <button
                  type="button"
                  className="bg-gray-400 text-white px-14 py-3 rounded font-bold hover:bg-gray-500 transition"
                >
                  REGISTER
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm mt-12">

          {/* Social Links */}
          <div className="bg-gray-200 p-6 rounded shadow-sm flex flex-col items-center">
            <h2 className="font-bold text-2xl mb-4 text-center">Get in Touch</h2>

            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="https://www.facebook.com/MFASriLanka"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1 hover:text-blue-600 transition"
              >
                <Facebook className="w-10 h-10" />
                <span className="text-lg font-medium">Facebook</span>
              </a>

              <a
                href="https://www.youtube.com/@MFASriLanka"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1 hover:text-red-600 transition"
              >
                <Youtube className="w-10 h-10" />
                <span className="text-lg font-medium">YouTube</span>
              </a>

              <a
                href="mailto:info@mfa.gov.lk"
                className="flex flex-col items-center gap-1 hover:text-green-600 transition"
              >
                <Mail className="w-10 h-10" />
                <span className="text-lg font-medium">Email</span>
              </a>

              <a
                href="https://www.linkedin.com/company/ministry-of-foreign-affairs-sri-lanka/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1 hover:text-blue-700 transition"
              >
                <Linkedin className="w-10 h-10" />
                <span className="text-lg font-medium">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Contact Details */}
          <div className="bg-gray-200 p-6 rounded shadow-sm flex flex-col items-center">
            <h2 className="font-bold text-2xl mb-4 text-center">Contact Details</h2>
            <ul className="space-y-2 text-center">
              <li className="text-lg font-medium">+94 11 244 8500</li>
              <li className="text-lg font-medium">info@mfa.gov.lk</li>
              <li className="text-lg font-medium">Colombo 01, Sri Lanka</li>
            </ul>
          </div>

        </div>
      </div>
    </main>
  );
}