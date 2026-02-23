import React from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-navy p-4">
      <ul className="flex list-none p-0 m-0 items-center">
        <li className="mx-4">
          <Link href="/" className="text-white underline">Home</Link>
        </li>
        <li className="mx-4">
          <Link href="/about" className="text-white underline">About Us</Link>
        </li>
        <li className="mx-4">
          <Link href="/divisions" className="text-white underline">Divisions</Link>
        </li>
        <li className="mx-4 relative group py-2">
          <div className="flex items-center cursor-pointer">
            <Link href="/public-diplomacy" className="text-white underline">Public Diplomacy</Link>
            <ChevronDown className="text-white ml-1 w-4 h-4" />
          </div>
          <ul className="absolute left-0 top-full w-64 bg-navy border border-white hidden group-hover:block z-50">
            <li className="p-2 hover:bg-white group/item">
              <Link href="/public-diplomacy/media-briefings" className="text-white hover:text-navy no-underline block w-full">
                Media Briefings
              </Link>
            </li>
            <li className="p-2 hover:bg-white group/item">
              <Link href="/public-diplomacy/guideline-for-foreign-media" className="text-white hover:text-navy no-underline block w-full">
                Guideline for Foreign Media
              </Link>
            </li>
            <li className="p-2 hover:bg-white group/item">
              <Link href="/contact-sl" className="text-white hover:text-navy no-underline block w-full">
                Contact
              </Link>
            </li>
          </ul>
        </li>
        <li className="mx-4">
          <Link href="/statements" className="text-white underline">Statements</Link>
        </li>
        <li className="mx-4">
          <Link href="/publication" className="text-white underline">Publication</Link>
        </li>
        <li className="mx-4">
          <Link href="/contact-sl" className="text-white underline">Contact SL</Link>
        </li>
        <li className="mx-4">
          <Link href="/downloads" className="text-white underline">Downloads</Link>
        </li>
        <li className="ml-auto">
          <button className="bg-navy text-white border border-white px-4 py-2 cursor-pointer">
            Search
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
