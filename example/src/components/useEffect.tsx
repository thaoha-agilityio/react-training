import React, { useState, useEffect } from "react";

// =========Call the callback every time the component re-render=======

// useEffect (callback)
export const Example = () => {
  const [count, setCount] = useState(0);

  //Call a callback every time the component adds an element to the DOM
  useEffect(() => {
    document.title = `You clicked ${count} times `;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}> Click me</button>
    </div>
  );
};

// useEffect(callback , [ ])

export const Content = () => {
  const [countDown, setCountDown] = useState(60);

  // Call the callback only once after the component is mounted
  useEffect(() => {
    const timerID = setInterval(() => {
      setCountDown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timerID);
  }, []);

  // Cleanup
  return <h1>{countDown}</h1>;
};

// useEffect(callback , [deps] )

export const Post = () => {
  const [count, setCount] = useState(0);

  // Call a callback every time the component adds an element to the DOM
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}> Click me</button>
    </div>
  );
};
