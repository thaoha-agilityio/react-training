import React from 'react';

import { Cars, CountTime, CountTimeClass } from './components/useState';
import { Example } from './components/useEffect';

import './App.css';

function App() {
  return (
    <div className="App">
      <CountTime />
      <CountTimeClass />
      <Cars />
      <Example />
    </div>
  );
}

export default App;
