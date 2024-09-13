// import React from 'react';
// import './ResultsPage.css';

// function ResultsPage({ result }) {
//   return (
//     <section className="results-section">
//       <h2>Plagiarism Check Results</h2>
//       <p className="summary">Plagiarism Detected: {result.plagiarized}%</p>
//       <div className="sources">
//         <h3>Sources Found</h3>
//         {result.sources.map((source, index) => (
//           <p key={index}>Source {index + 1}: <a href={source}>{source}</a></p>
//         ))}
//       </div>
//       <div className="text-analysis">
//         {result.textAnalysis.map((sentence, index) => (
//           <p 
//             key={index} 
//             className={`sentence ${sentence.type}`}
//           >
//             {sentence.text}
//           </p>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default ResultsPage;



import React, { useEffect } from 'react';
import './ResultsPage.css';

function ResultsPage({ result }) {
  useEffect(() => {
    // Save the result in localStorage when the component renders
    localStorage.setItem('result', JSON.stringify(result));
  }, [result]);

  return (
    <section className="results-section">
      <h2>Plagiarism Check Results</h2>
      <p className="summary">Plagiarism Detected: {result.plagiarized}%</p>
      <div className="sources">
        <h3>Sources Found</h3>
        {result.sources.map((source, index) => (
          <p key={index}>Source {index + 1}: <a href={source}>{source}</a></p>
        ))}
      </div>
      <div className="text-analysis">
        {result.textAnalysis.map((sentence, index) => (
          <p
            key={index}
            className={`sentence ${sentence.type}`}
          >
            {sentence.text}
          </p>
        ))}
      </div>
    </section>
  );
}

export default ResultsPage;