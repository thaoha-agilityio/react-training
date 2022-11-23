import { useContext } from "react";
import { ThemeContext } from "./useContext";

export const Paragraph = () => {
  const theme = useContext(ThemeContext);

  return (
    <div
      style={
        theme === "dark"
          ? {
              color: "#fff",
              background: "#333",
            }
          : {}
      }
    >
      The array of dependencies is not passed as arguments to the effect
      function. Conceptually, though, that’s what they represent: every value
      referenced inside the effect function should also appear in the
      dependencies array.
    </div>
  );
};
