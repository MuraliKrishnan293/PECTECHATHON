import React from 'react';

function Report({ reportData }) {
  return (
    <section className="report">
      <h2>Plagiarism Check Results</h2>
      <div className="report-summary">
        <p>Summary: Your document contains {reportData.summary.plagiarized}% copied content and {reportData.summary.ownContent}% original content.</p>
      </div>
      <div className="report-details">
        <div className="copied-content">
          <h3>Copied Content</h3>
          {reportData.copiedContent.map((item, index) => (
            <p key={index} style={{ color: item.color }}>{item.paragraph}</p>
          ))}
        </div>
        <div className="original-content">
          <h3>Original Content</h3>
          {reportData.originalContent.map((item, index) => (
            <p key={index} style={{ color: item.color }}>{item.paragraph}</p>
          ))}
        </div>
      </div>
      <div className="report-buttons">
        <button className="download-btn">Download Report</button>
        <button className="back-btn" onClick={() => window.location.reload()}>Back to Home</button>
      </div>
    </section>
  );
}

export default Report;