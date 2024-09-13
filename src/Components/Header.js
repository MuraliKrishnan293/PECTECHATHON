import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <h1>Plagiarism Checker</h1>
        <ul className="nav-links">
          <li>Home</li>
          <li>Upload Text/File</li>
          <li>Results</li>
        </ul>
      </nav>
      <div className="hero">
        <h2>Analyze Your Text for Plagiarism</h2>
        <p>Check for AI-generated, copied, or human-written content seamlessly.</p>
      </div>
    </header>
  );
}

export default Header;