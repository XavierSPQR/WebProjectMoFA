"use client"; // <-- Add this at the very top

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const router = useRouter();

  const handleSearch = () => {
    if (searchQuery.trim() !== '') {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setIsSearchOpen(false);
      setIsMenuOpen(false);
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
      <div className="flex items-center justify-between md:justify-start gap-4">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Navbar Buttons */}
        <ul className="hidden md:flex items-center flex-wrap gap-4 flex-1">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="bg-white text-navy font-semibold px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors block text-center"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Search Box */}
        <div className="flex items-center gap-2">
          {/* Mobile Search Toggle */}
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            aria-label="Toggle search"
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <Search size={24} />
          </button>

          {/* Desktop Search Box */}
          <div className="hidden md:flex items-center bg-white rounded-lg overflow-hidden">
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
          </div>
        </div>
      </div>

      {/* Mobile Search Bar (Overlay below Navbar) */}
      {isSearchOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-navy p-4 border-t border-white/10 shadow-xl">
          <div className="flex items-center bg-white rounded-lg overflow-hidden">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search..."
              className="px-4 py-2 flex-1 text-navy outline-none"
              autoFocus
            />
            <button
              onClick={handleSearch}
              className="bg-navy text-white px-4 py-2 flex items-center justify-center"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* Mobile Menu Overlay (Full Screen) */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-navy z-40 flex flex-col p-8 md:hidden">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-white text-2xl font-bold">Menu</h2>
            <button
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
              className="text-white p-2 hover:bg-white/10 rounded-lg"
            >
              <X size={32} />
            </button>
          </div>
          <ul className="flex flex-col gap-6 overflow-y-auto">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white text-xl font-semibold hover:text-yellow transition-colors block"
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