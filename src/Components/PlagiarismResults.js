import React from 'react';
import './PlagiarismResults.css'; // Assuming you will add custom styling here
import { NavLink } from 'react-router-dom';

const PlagiarismResults = () => {
  return (
    <div className="plagiarism-results">
      <nav className="navbar">
        <div className="logo">Plagiarism_Checker</div>
        <div className="nav-buttons">
          <NavLink to='/' style={{textDecoration: "none", color: "white", background: "black",
            padding: "10px 20px",
            marginLeft: "10px"
          }}>Home</NavLink>
          <NavLink to='/' style={{textDecoration: "none", color: "white", background: "black",
            padding: "10px 20px",
            marginLeft: "10px"
          }}>NewChecks</NavLink>
        </div>
      </nav>

      <section className="results-section">
        <h1>Plagiarism Check Results</h1>

        <div className="summary-box">
          <h2>Summary</h2>
          <p>Your document contains 12% copied content, 5% references to external sources, and 3% AI-generated text.</p>
        </div>

        <div className="results-cards">
          <div className="card copied-content">
            <h3>Copied Content</h3>
            <p>Paragraph 1: Copied from <a href="https://www.wikipedia.com">www.wikipedia.com</a></p>
            <p>Paragraph 3: Copied from <a href="https://www.Sanfoundry.com">www.Sanfoundry.com</a></p>
            <p>Paragraph 7: Copied from <a href="https://www.Github.com">www.Github.com</a></p>
          </div>

          <div className="card external-references">
            <h3>External References</h3>
            <p>Paragraph 2: Referenced <a href="https://www.Medium.org">www.Medium.org</a></p>
            <p>Paragraph 4: Referenced <a href="https://www.Blog.org">www.Blog.org</a></p>
          </div>

          <div className="card ai-generated">
            <h3>AI-Generated Text</h3>
            <p>Paragraph 5: AI-generated content detected</p>
            <p>Paragraph 6: AI-generated content detected</p>
          </div>
        </div>

        <div className="action-buttons">
          <button className="download-btn">Download Report</button>
          <button className="back-btn">Back to Home</button>
        </div>
      </section>

      <footer className="footer">
        <p>© 2024 Plagiarism_Checker. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PlagiarismResults;