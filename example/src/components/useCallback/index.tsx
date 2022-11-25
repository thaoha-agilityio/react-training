import { useCallback, useState } from "react";
import Memo from "./memo";

export const CheckRender = (): JSX.Element => {
  const [count, setCount] = useState(0);

  const handleIncrease = useCallback(() => {
    setCount(count + 1);
  }, []);

  return (
    <div>
      <p>You clicked {count} times</p>
      <Memo onIncrease={handleIncrease} />
    </div>
  );
};
