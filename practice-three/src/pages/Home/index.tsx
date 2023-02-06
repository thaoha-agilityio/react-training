import { ThemeProvider } from "styled-components";
import { useCallback, useState } from "react";

// Components
import Header from "../../components/Header";
import SubHeader from "./components/SubHeader";
import Books from "./components/Books";

// Themes
import { darkTheme, lightTheme } from "@/themes";
import { Container } from "../../styled-common";

// Styled
import { MainContentStyled } from "./index.styled";

const Home = (): React.ReactElement => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Change dark-light mode
  const handleToggleTheme = useCallback(() => {
    setIsDarkTheme(!isDarkTheme);
  }, [isDarkTheme]);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <Container>
        <Header theme={isDarkTheme} onToggleTheme={handleToggleTheme} />
        <SubHeader />
        <MainContentStyled>
          <Books />
        </MainContentStyled>
      </Container>
    </ThemeProvider>
  );
};

export default Home;
