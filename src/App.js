import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import InputSection from './Components/InputSection';
import ResultsPage from './Components/Results';
import PlagiarismChecker from './Components/PC';
import LandingPage from './Components/LandingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Updated imports
import PlagiarismResults from './Components/PlagiarismResults';

function App() {
  const [result, setResult] = useState(null);
  
  return (
    <Router>
      <div className="App">
        {/* Uncomment the Header if you want it on every page */}
        {/* <Header /> */}
        <Routes> {/* Replace Switch with Routes */}
          {/* Define the Landing Page route */}
          <Route exact path="/" element={<LandingPage />} /> {/* Use element instead of component */}

          {/* Define the route for InputSection */}
          <Route
            path="/input"
            element={
              !result ? (
                <InputSection setResult={setResult} />
              ) : (
                <>
                  <ResultsPage result={result} />
                  <PlagiarismChecker />
                </>
              )
            }
          />
          <Route path='/report' element={<PlagiarismResults />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;