import { useCustomHook } from ".";

export const Count1 = () => {
  const handleClick = useCustomHook(0, "fist");

  return <button onClick={handleClick}>Click 1</button>;
};

export const Count2 = () => {
  const handleClick = useCustomHook(0, "second");

  return <button onClick={handleClick}>Click 2</button>;
};
