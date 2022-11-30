import { useEffect, useRef, useState } from "react";

export const Countdown = () => {
  const [count, setCount] = useState(60);
  const timerID: any = useRef(0);
  const prevCount = useRef(0);

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  const handleStart = () => {
    timerID.current = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(timerID.current);
  };

  console.log(count, prevCount.current);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
};
