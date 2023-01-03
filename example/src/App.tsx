import { useState } from "react";

// import { Cars, CountTime, CountTimeClass } from "./components/useState";
// import { Example, Post, ShowImage } from "./components/useEffect";
// import { ThemedButton } from "./components/useContext/useContext";
// import { Countdown } from "./components/useRef";
// import { Counter } from "./components/useReducer";
// import { CheckRender } from "./components/useCallback";

import { MyComponent } from "./advanced/code-splitting";
import { ExampleErrorBoundary } from "./advanced/error-boundaries";
import Home from "./advanced/HOC/Home";
import { ExampleProfiler } from "./advanced/profiler";
import FileInput from "./advanced/uncontrolled-component";
import { Count1, Count2 } from "./advanced/custom-hook/Count";
import { Profile } from "./advanced/swr";

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
      <Home />
      <ExampleProfiler />
      <FileInput />
      <Count1 />
      <Count2 />
      <Profile />
    </div>
  );
}

export default App;
