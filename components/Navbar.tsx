"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const handleSearch = () => {
    if (searchQuery.trim() !== '') {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setIsMenuOpen(false); // Close menu after search
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Divisions', href: '/divisions' },
    { name: 'Public Diplomacy', href: '/public-diplomacy' },
    { name: 'Statements', href: '/statements' },
    { name: 'Publication', href: '/publication' },
    { name: 'Contact SL', href: '/contact-sl' },
    { name: 'Downloads', href: '/downloads' },
  ];

  return (
    <nav className="bg-navy p-4 relative z-50">
      <div className="flex items-center justify-between lg:hidden">
        {/* Hamburger Menu Toggle for Mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white p-2 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>

        {/* Search Icon for Mobile (optional shortcut if needed, but we'll put search in menu) */}
      </div>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex items-center flex-wrap gap-4">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className="bg-white text-navy font-semibold px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors block text-center whitespace-nowrap"
            >
              {item.name}
            </Link>
          </li>
        ))}

        {/* Desktop Search Box */}
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

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-navy border-t border-navy/20 shadow-xl">
          <ul className="flex flex-col p-4 gap-2">
            {/* Mobile Search Box */}
            <li className="mb-4 flex items-center bg-white rounded-lg overflow-hidden">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search..."
                className="px-4 py-3 flex-1 text-navy outline-none"
              />
              <button
                onClick={handleSearch}
                className="bg-navy text-white px-5 py-3 flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
                <Search className="w-6 h-6" />
              </button>
            </li>

            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="bg-white text-navy font-bold px-4 py-3 rounded-lg hover:bg-gray-200 transition-colors block text-center text-lg"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
