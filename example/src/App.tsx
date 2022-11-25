import React, { useState } from "react";

import { Cars, CountTime, CountTimeClass } from "./components/useState";
import { Example, Post, ShowImage } from "./components/useEffect";
import { ThemedButton } from "./components/useContext/useContext";
import { Countdown } from "./components/useRef";
import { Counter } from "./components/useReducer";
import { CheckRender } from "./components/useCallback";

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
      <ThemedButton />
      {isShow && <ShowImage />}
      <Countdown />
      <Counter />
      <CheckRender />
    </div>
  );
}

export default App;
