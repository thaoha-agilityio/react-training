import React from "react";

import { Cars, CountTime, CountTimeClass } from "./components/useState";

import "./App.css";

function App() {
  return (
    <div className="App">
      <CountTime />
      <CountTimeClass />
      <Cars />
    </div>
  );
}

export default App;
