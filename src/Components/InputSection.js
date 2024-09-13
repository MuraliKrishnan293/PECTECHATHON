// import React, { useState } from 'react';
// import './InputSection.css';

// function InputSection({ setResult }) {
//   const [loading, setLoading] = useState(false);
//   const [inputText, setInputText] = useState('');

//   const handleSubmit = () => {
//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);
//       // Simulated result (replace with real analysis in future)
//       setResult({
//         plagiarized: 67,
//         sources: ['www.wikipedia.com', 'www.medium.com'],
//         textAnalysis: [
//           { type: 'human', text: 'This is a human-written sentence.' },
//           { type: 'ai', text: 'This part is AI-generated.' },
//           { type: 'modified', text: 'This sentence was modified from AI-generated content.' }
//         ]
//       });
//     }, 3000); // Simulated delay for analysis
//   };

//   return (
//     <section className="input-section">
//       <h2>Upload Text or File for Plagiarism Check</h2>
//       <textarea 
//         value={inputText} 
//         onChange={(e) => setInputText(e.target.value)} 
//         placeholder="Enter text here..."
//       />
//       <div className="buttons">
//         <button className="submit-btn" onClick={handleSubmit}>Submit</button>
//         <button className="clear-btn" onClick={() => setInputText('')}>Clear</button>
//       </div>
//       {loading && <div className="loading">Analyzing...</div>}
//     </section>
//   );
// }

// export default InputSection;



import React, { useState } from 'react';
import './InputSection.css';

function InputSection({ setResult }) {
  const [loading, setLoading] = useState(false);
  const [inputText, setInputText] = useState('');

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);

      // Simulated result (replace with real analysis in future)
      const analysisResult = {
        plagiarized: 67,
        sources: ['www.wikipedia.com', 'www.medium.com'],
        textAnalysis: [
          { type: 'human', text: 'There is human-written sentences.' },
          { type: 'ai', text: 'Few part is AI-generated.' }
        ]
      };

      // Set the result in the parent component
      setResult(analysisResult);

      // Save the result to localStorage
      localStorage.setItem('analysisResult', JSON.stringify(analysisResult));

    }, 3000); // Simulated delay for analysis
  };

  return (
    <section className="input-section">
      <h2>Upload Text or File for Plagiarism Check</h2>
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter text here..."
      />
      <div className="buttons">
        <button className="submit-btn" onClick={handleSubmit}>Submit</button>
        <button className="clear-btn" onClick={() => setInputText('')}>Clear</button>
      </div>
      {loading && <div className="loading">Analyzing...</div>}
    </section>
  );
}

export default InputSection;