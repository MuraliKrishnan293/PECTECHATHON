import React from 'react';
import './LandingPage.css';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
   
    navigate('/input');
  };

  return (
    <div className="landing-page">
      <div className="header">
        <h1>Plagiarism Checker</h1>
        <span className="brand">TechTitans</span>
      </div>
      <div className="content">
        <h2>Plagiarism Checker</h2>
        <p>
          Plagiarism Checker analyzes whether any section of your text did not properly attribute authorship
          to content already published on the web or in books, research papers, academic papers, or news sources.
        </p>
        <button className="get-started-btn" onClick={handleGetStarted}>Get started</button>
      </div>
      <div className="image">
        <img src="/path/to/your/image.png" alt="Plagiarism Analysis" />
      </div>
    </div>
  );
}

export default LandingPage;