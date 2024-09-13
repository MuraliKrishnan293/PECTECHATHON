// components/Options.js
import React from 'react';

function Options() {
  return (
    <section className="options">
      <h2>Plagiarism Checker</h2>
      <div className="option-buttons">
        <button className="option-btn">Web Search</button>
        <button className="option-btn">Text Comparison</button>
        <button className="option-btn">AI Detection</button>
      </div>
    </section>
  );
}

export default Options;