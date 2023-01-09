import { useEffect, useState } from "react";

export const useCustomHook = (initial: number, name: string) => {
  const [count, setCount] = useState<number>(initial);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log(`${name} is clicked ${count} time`);
  }, [count, name]);

  return handleIncrease;
};
