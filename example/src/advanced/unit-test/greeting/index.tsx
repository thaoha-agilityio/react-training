import { useState } from "react";

export const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const changeTextHandle = () => {
    setChangedText(true);
  };

  return (
    <div>
      <h2>Hello World!</h2>
      {!changedText && <p>It's good to see you!</p>}
      {changedText && <p>Changed!</p>}
      <button onClick={changeTextHandle}>Change Text!</button>
    </div>
  );
};
