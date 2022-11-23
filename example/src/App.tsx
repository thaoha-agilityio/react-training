import React, { useState } from "react";

import { Cars, CountTime, CountTimeClass } from "./components/useState";
import { Example, Post, ShowImage } from "./components/useEffect";

import "./App.css";

function App() {
  const [isShow, setIsShow] = useState(false);

  const handleToggle = () => {
    setIsShow(!isShow);
  };

  return (
    <div className="App">
      <CountTime />
      <CountTimeClass />
      <Cars />
      <Example />

      <Post />
      <button onClick={handleToggle}>Toggle</button>

      {isShow && <ShowImage />}
    </div>
  );
}

export default App;
