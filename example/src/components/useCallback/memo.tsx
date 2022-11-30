import { memo } from "react";

interface IProps {
  onIncrease: () => void;
}

const Memo = ({ onIncrease }: IProps) => {
  console.log("re-render");
  return (
    <>
      <h2>Hello</h2>
      <button onClick={onIncrease}>Click me</button>
    </>
  );
};

export default memo(Memo);
