import { ThemeProvider } from "styled-components";

// Components
import Header from "../../components/Header";
import SubHeader from "./components/SubHeader";
import Books from "./components/Books";

// Themes
import { darkTheme, lightTheme } from "@/themes";
import { Container } from "../../styled-common";

import { MainContentStyled } from "./index.styled";
import { useCallback, useState } from "react";

const Home = (): React.ReactElement => {
  const [theme, setTheme] = useState(true);

  const themeToggle = useCallback(() => {
    setTheme(!theme);
  }, [theme]);

  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
      <Container>
        <Header theme={theme} themeToggle={themeToggle} />
        <SubHeader />
        <MainContentStyled>
          <Books />
        </MainContentStyled>
      </Container>
    </ThemeProvider>
  );
};

export default Home;
