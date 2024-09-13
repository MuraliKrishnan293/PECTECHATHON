// components/Home.js
import React, { useState } from 'react';

const Home = ({ onSubmit }) => {
  const [inputText, setInputText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputText);
  };

  return (
    <div className="home">
      <h1>Plagiarism Checker</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Enter your text here..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button type="submit">Check Plagiarism</button>
      </form>
    </div>
  );
};

export default Home;