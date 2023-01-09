import { useState } from "react";
import Color from ".";

const Home = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleIncrease}>Click me</button>
    </div>
  );
};

export default Color(Home);
