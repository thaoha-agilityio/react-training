import React from "react";

import { Cars, CountTime, CountTimeClass } from "./components/useState";
import { Content, Example, Post } from "./components/useEffect";

import "./App.css";

function App() {
  return (
    <div className="App">
      <CountTime />
      <CountTimeClass />
      <Cars />
      <Example />
      <Content />
      <Post />
    </div>
  );
}

export default App;
