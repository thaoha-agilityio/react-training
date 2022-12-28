import React, { useState } from "react";

import { Cars, CountTime, CountTimeClass } from "./components/useState";
import { Example, Post, ShowImage } from "./components/useEffect";
import { ThemedButton } from "./components/useContext/useContext";
import { Countdown } from "./components/useRef";
import { Counter } from "./components/useReducer";
import { CheckRender } from "./components/useCallback";

import { MyComponent } from "./advanced/code-spliting";
import { ExampleErrorBoundary } from "./advanced/error-boudaries";

import "./App.css";

function App() {
  const [isShow, setIsShow] = useState(false);

  const handleToggle = () => {
    setIsShow(!isShow);
  };

  return (
    <div className="App">
      {/* <CountTime />
      <CountTimeClass />
      <Cars />
      <Example />

      <Post />
      <button onClick={handleToggle}>Toggle</button>
      <ThemedButton />
      {isShow && <ShowImage />}
      <Countdown />
      <Counter />
      <CheckRender /> */}

      <MyComponent />
      <ExampleErrorBoundary />
    </div>
  );
}

export default App;
