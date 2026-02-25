"use client"; // <-- Add this at the very top

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    if (searchQuery.trim() !== '') {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <nav className="bg-navy p-4">
      <ul className="flex items-center flex-wrap gap-4">
        {/* Navbar Buttons */}
        {[
          { name: 'Home', href: '/' },
          { name: 'About Us', href: '/about' },
          { name: 'Divisions', href: '/divisions' },
          { name: 'Public Diplomacy', href: '/public-diplomacy' },
          { name: 'Statements', href: '/statements' },
          { name: 'Publication', href: '/publication' },
          { name: 'Contact SL', href: '/contact-sl' },
          { name: 'Downloads', href: '/downloads' },
        ].map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className="bg-white text-navy font-semibold px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors block text-center"
            >
              {item.name}
            </Link>
          </li>
        ))}

        {/* Search Box */}
        <li className="ml-auto flex items-center bg-white rounded-lg overflow-hidden">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search..."
            className="px-4 py-2 w-64 text-navy outline-none"
          />
          <button
            onClick={handleSearch}
            className="bg-navy text-white px-4 py-2 flex items-center justify-center hover:bg-gray-800 transition-colors"
          >
            <Search className="w-5 h-5" />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;