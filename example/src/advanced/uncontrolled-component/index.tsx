import { MutableRefObject, useRef } from "react";

const FileInput = () => {
  const inputRef = useRef() as MutableRefObject<HTMLInputElement>;

  const handleOnClick = () => {
    alert(`A name was submitted :  ${inputRef.current.value} `);
  };

  return (
    <form onSubmit={handleOnClick}>
      <label>
        Name :
        <input type="text" ref={inputRef} />
      </label>
      <input type="submit" />
    </form>
  );
};

export default FileInput;
