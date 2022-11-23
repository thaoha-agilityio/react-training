import { createContext, useState } from "react";
import { Content } from "./Content";

export const ThemeContext: React.Context<{}> = createContext({});

export const ThemedButton = (): JSX.Element => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <Content />
        <button onClick={toggleTheme}>Toggle</button>
      </div>
    </ThemeContext.Provider>
  );
};
