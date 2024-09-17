// // import React, { useState } from 'react';
// // import './InputSection.css';

// // function InputSection({ setResult }) {
// //   const [loading, setLoading] = useState(false);
// //   const [inputText, setInputText] = useState('');

// //   const handleSubmit = () => {
// //     setLoading(true);
// //     setTimeout(() => {
// //       setLoading(false);
// //       // Simulated result (replace with real analysis in future)
// //       setResult({
// //         plagiarized: 67,
// //         sources: ['www.wikipedia.com', 'www.medium.com'],
// //         textAnalysis: [
// //           { type: 'human', text: 'This is a human-written sentence.' },
// //           { type: 'ai', text: 'This part is AI-generated.' },
// //           { type: 'modified', text: 'This sentence was modified from AI-generated content.' }
// //         ]
// //       });
// //     }, 3000); // Simulated delay for analysis
// //   };

// //   return (
// //     <section className="input-section">
// //       <h2>Upload Text or File for Plagiarism Check</h2>
// //       <textarea 
// //         value={inputText} 
// //         onChange={(e) => setInputText(e.target.value)} 
// //         placeholder="Enter text here..."
// //       />
// //       <div className="buttons">
// //         <button className="submit-btn" onClick={handleSubmit}>Submit</button>
// //         <button className="clear-btn" onClick={() => setInputText('')}>Clear</button>
// //       </div>
// //       {loading && <div className="loading">Analyzing...</div>}
// //     </section>
// //   );
// // }

// // export default InputSection;



// import React, { useState } from 'react';
// import './InputSection.css';
// import './Header.css';

// function InputSection({ setResult }) {
//   const [loading, setLoading] = useState(false);
//   const [inputText, setInputText] = useState('');

//   const handleSubmit = () => {
//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);

//       // Simulated result (replace with real analysis in future)
//       const analysisResult = {
//         plagiarized: 67,
//         sources: ['www.wikipedia.com', 'www.medium.com'],
//         textAnalysis: [
//           { type: 'human', text: 'There is human-written sentences.' },
//           { type: 'ai', text: 'Few part is AI-generated.' }
//         ]
//       };

//       // Set the result in the parent component
//       setResult(analysisResult);

//       // Save the result to localStorage
//       localStorage.setItem('analysisResult', JSON.stringify(analysisResult));

//     }, 3000); // Simulated delay for analysis
//   };

//   return (
//     <>
//     <nav className="navbar">
//         <h1>Plagiarism Checker</h1>
//         <ul className="nav-links">
//           <li>Home</li>
//           <li>Upload Text/File</li>
//           <li>Results</li>
//         </ul>
//       </nav>
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
//     </section></>
//   );
// }

// export default InputSection;


import React, { useState } from 'react';
import './InputSection.css';
import './Header.css';

function InputSection({ setResult }) {
  const [loading, setLoading] = useState(false);
  const [inputText, setInputText] = useState('');
  const [uploadedFile, setUploadedFile] = useState(null);
  const [sourceType, setSourceType] = useState('internet');

  const handleSubmit = () => {
    setLoading(true);

    // Simulate file upload and analysis
    setTimeout(() => {
      setLoading(false);

      // Simulated result (replace with real analysis in future)
      const analysisResult = {
        plagiarized: 67,
        sources: ['www.wikipedia.com', 'www.medium.com'],
        textAnalysis: [
          { type: 'human', text: 'This is human-written content.' },
          { type: 'ai', text: 'Some parts are AI-generated.' }
        ]
      };

      // Set the result in the parent component
      setResult(analysisResult);

      // Save the result to localStorage
      localStorage.setItem('analysisResult', JSON.stringify(analysisResult));

    }, 3000); // Simulated delay for analysis
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setUploadedFile(file);
  };

  const handleSourceChange = (event) => {
    setSourceType(event.target.value);
  };

  return (
    <>
      <nav className="navbar">
        <h1>Plagiarism Checker</h1>
        <ul className="nav-links">
          <li>Home</li>
          <li>Upload Text/File</li>
          <li>Results</li>
        </ul>
      </nav>
      <section className="input-section">
        <h2>Upload Text or File for Plagiarism Check</h2>
        <div className="input-content">
          <div className="input-container">
            <label>Enter Text:</label>
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Enter text here..."
              rows="15"
              cols="80"
            />
          </div>
          <div className="input-container">
            <label>Or Upload File:</label>
            <input
              type="file"
              onChange={handleFileChange}
              accept=".txt,.doc,.docx,.pdf"
            />
            <label>Check Against:</label>
            <div className="radio-group">
              <input
                type="radio"
                id="internet"
                name="source"
                value="internet"
                checked={sourceType === 'internet'}
                onChange={handleSourceChange}
              />
              <label htmlFor="internet">Internet Sources</label>
              <input
                type="radio"
                id="handwritten"
                name="source"
                value="handwritten"
                checked={sourceType === 'handwritten'}
                onChange={handleSourceChange}
              />
              <label htmlFor="handwritten">Handwritten Sources</label>
            </div>
          </div>
        </div>
        <div className="buttons">
          <button className="submit-btn" onClick={handleSubmit}>
            Submit
          </button>
          <button className="clear-btn" onClick={() => setInputText('')}>
            Clear
          </button>
        </div>
        {loading && <div className="loader"></div>} {/* Display loader when loading */}
      </section>
    </>
  );
}

export default InputSection;
