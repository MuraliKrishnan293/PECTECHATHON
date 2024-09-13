// components/Loading.js
import React from 'react';

const Loading = () => {
  return (
    <div className="loading">
      <h2>Checking for plagiarism...</h2>
      <div className="spinner"></div>
    </div>
  );
};

export default Loading;