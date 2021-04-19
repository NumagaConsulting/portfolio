import React from 'react';
import About from './components/About';
import Headers from './components/Header';
import resumeData from './resumeData';

function App() {
  return (
    <div className="App">
      <Headers resumeData={resumeData} />
      <About resumeData={resumeData} />
    </div>
  );
}

export default App;
