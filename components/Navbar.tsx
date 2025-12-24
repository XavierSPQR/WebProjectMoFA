import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  const navStyle = {
    backgroundColor: '#392F5A',
    padding: '1rem',
  };

  const ulStyle = {
    display: 'flex',
    listStyle: 'none',
    padding: 0,
    margin: 0,
    alignItems: 'center',
  };

  const liStyle = {
    margin: '0 1rem',
  };

  const aStyle = {
    color: 'white',
    textDecoration: 'underline',
  };

  const buttonStyle = {
    backgroundColor: '#392F5A',
    color: 'white',
    border: '1px solid white',
    padding: '0.5rem 1rem',
    cursor: 'pointer',
    marginLeft: 'auto',
  };

  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        <li style={liStyle}><Link href="/" style={aStyle}>Home</Link></li>
        <li style={liStyle}><Link href="/about" style={aStyle}>About Us</Link></li>
        <li style={liStyle}><Link href="/divisions" style={aStyle}>Divisions</Link></li>
        <li style={liStyle}><Link href="/public-diplomacy" style={aStyle}>Public Diplomacy</Link></li>
        <li style={liStyle}><Link href="/statements" style={aStyle}>Statements</Link></li>
        <li style={liStyle}><Link href="/publication" style={aStyle}>Publication</Link></li>
        <li style={liStyle}><Link href="/contact" style={aStyle}>Contact SL</Link></li>
        <li style={liStyle}><Link href="/downloads" style={aStyle}>Downloads</Link></li>
        <li style={liStyle}><button style={buttonStyle}>Search</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
