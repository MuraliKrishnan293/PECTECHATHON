import React from 'react';
import './App.css';
import { useState } from 'react';
import Header from './Components/Header';
import InputSection from './Components/InputSection';
import ResultsPage from './Components/Results';

function App() {
  const [result, setResult] = useState(null);
  
  return (
    <div className="App">
      <Header />
      {!result ? (
        <InputSection setResult={setResult} />
      ) : (
        <ResultsPage result={result} />
      )}
    </div>
  );
}

export default App;