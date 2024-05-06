import { ChangeEvent, ReactNode, useState } from "react";

type MessageProp = {
  children: ReactNode;
};

export const Message = ({ children }: MessageProp) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChecked = (e: ChangeEvent<HTMLInputElement>): void => {
    setIsChecked(e.target.checked);
  };

  return (
    <div>
      <label htmlFor="toggle">Show</label>
      <input
        type="checkbox"
        id="toggle"
        checked={isChecked}
        onChange={handleChecked}
      />
      {isChecked ? children : null}
    </div>
  );
};
