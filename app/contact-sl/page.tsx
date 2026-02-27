'use client';
import React, { useState } from "react";
import {
  Globe,
  ClipboardList,
  Facebook,
  Youtube,
  Linkedin,
  Mail,
} from "lucide-react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

export default function ContactSLPage() {
  const [fullName, setFullName] = useState("");
  const [passportNumber, setPassportNumber] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [travelDates, setTravelDates] = useState("");
  const [status, setStatus] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Registering...");

    if (!fullName || !passportNumber || !country || !email) {
      setStatus("Please fill in all required fields.");
      return;
    }

    try {
      await addDoc(collection(db, "missionregistrations"), {
        fullName,
        passportNumber,
        country,
        email,
        contactNumber,
        travelDates,
        registeredAt: new Date(),
      });
      setStatus("Registration successful!");
      // Clear form
      setFullName("");
      setPassportNumber("");
      setCountry("");
      setEmail("");
      setContactNumber("");
      setTravelDates("");
    } catch (error) {
      console.error("Error adding document: ", error);
      setStatus("Registration failed. Please try again.");
    }
  };

  return (
    <main className="bg-[#fdfdfd] min-h-screen pb-12 text-black">
      <div className="container mx-auto px-4 py-8">
        {/* Page Title */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-navy mb-2">
            Contact Sri Lanka – Ministry of Foreign Affairs
          </h1>
          <p className="text-lg text-slate-600">
            Reach government services, consular support, and overseas assistance
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-6">
            {/* Contact Portal */}
            <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-navy mb-4 flex items-center justify-center rounded-full shadow-sm">
                <Globe className="w-8 h-8 text-yellow" />
              </div>

              <h2 className="text-2xl font-bold mb-6 text-navy">
                Contact Sri Lanka Portal
              </h2>

              <ul className="text-left space-y-3 mb-8 text-lg font-medium text-slate-600">
                <li>• Submit an Inquiry</li>
                <li>• Track Inquiry Status</li>
                <li>• Emergency Assistance</li>
                <li>• Request Information</li>
              </ul>

              <button className="bg-navy text-white px-10 py-2.5 rounded-lg font-bold hover:bg-blue-900 transition">
                LEARN MORE
              </button>
            </div>

            {/* Google Map */}
            <div className="bg-white border border-slate-200 p-4 rounded-2xl h-64 shadow-sm">
              <div className="w-full h-full rounded-lg overflow-hidden">
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
          <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm flex flex-col">
            <div className="flex flex-col items-center text-center mb-8">
              <div className="w-16 h-16 bg-navy mb-4 flex items-center justify-center rounded-full shadow-sm">
                <ClipboardList className="w-8 h-8 text-yellow" />
              </div>
              <h2 className="text-2xl font-bold text-navy">
                Mission Registrations
              </h2>
            </div>

            <form onSubmit={handleRegister} className="space-y-4 flex flex-col">
              <input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg shadow-sm focus:ring-2 focus:ring-navy outline-none"
              />
              <input
                type="text"
                placeholder="Passport Number"
                value={passportNumber}
                onChange={(e) => setPassportNumber(e.target.value)}
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg shadow-sm focus:ring-2 focus:ring-navy outline-none"
              />
              <input
                type="text"
                placeholder="Country of Residence"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg shadow-sm focus:ring-2 focus:ring-navy outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg shadow-sm focus:ring-2 focus:ring-navy outline-none"
              />
              <input
                type="text"
                placeholder="Sri Lanka Contact Number"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg shadow-sm focus:ring-2 focus:ring-navy outline-none"
              />
              <input
                type="text"
                placeholder="Travel Dates"
                value={travelDates}
                onChange={(e) => setTravelDates(e.target.value)}
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg shadow-sm focus:ring-2 focus:ring-navy outline-none"
              />

              <div className="pt-4 flex justify-center">
                <button
                  type="submit"
                  className="bg-yellow text-navy px-14 py-3 rounded-lg font-bold hover:bg-amber-400 transition"
                >
                  REGISTER
                </button>
              </div>
              {status && <p className="text-center mt-4 text-navy">{status}</p>}
            </form>
          </div>
        </div>

        {/* Footer Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm mt-12">

          {/* Social Links */}
          <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm flex flex-col items-center">
            <h2 className="font-bold text-2xl mb-4 text-center text-navy">Get in Touch</h2>

            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="https://www.facebook.com/MFASriLanka"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1 text-slate-600 hover:text-blue-600 transition"
              >
                <Facebook className="w-10 h-10" />
                <span className="text-lg font-medium">Facebook</span>
              </a>

              <a
                href="https://www.youtube.com/@MFASriLanka"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1 text-slate-600 hover:text-red-600 transition"
              >
                <Youtube className="w-10 h-10" />
                <span className="text-lg font-medium">YouTube</span>
              </a>

              <a
                href="mailto:info@mfa.gov.lk"
                className="flex flex-col items-center gap-1 text-slate-600 hover:text-green-600 transition"
              >
                <Mail className="w-10 h-10" />
                <span className="text-lg font-medium">Email</span>
              </a>

              <a
                href="https://www.linkedin.com/company/ministry-of-foreign-affairs-sri-lanka/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1 text-slate-600 hover:text-blue-700 transition"
              >
                <Linkedin className="w-10 h-10" />
                <span className="text-lg font-medium">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Contact Details */}
          <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm flex flex-col items-center">
            <h2 className="font-bold text-2xl mb-4 text-center text-navy">Contact Details</h2>
            <ul className="space-y-2 text-center text-slate-600">
              <li className="text-lg font-medium">+94 11 244 8500</li>
              <li className="text-lg font-medium">info@mfa.gov.lk</li>
              <li className="text-lg font-medium">Colombo 01, Sri Lanka</li>
            </ul>
          </div>

        </div>
      </div>
       <style jsx global>{`
        .text-navy { color: #002B5B; }
        .bg-navy { background-color: #002B5B; }
        .text-yellow { color: #FFCC00; }
        .bg-yellow { background-color: #FFCC00; }
      `}</style>
    </main>
  );
}