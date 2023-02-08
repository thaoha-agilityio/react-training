import { ThemeProvider } from "styled-components";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { useBooks, useDebounce } from "@/hooks";

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
  const { searchBooks } = useBooks();
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [inputValue, setInputValue] = useState<string>("");
  const debounceValue = useDebounce(inputValue);

  // Change dark-light mode
  const handleToggleTheme = useCallback(() => {
    setIsDarkTheme(!isDarkTheme);
  }, [isDarkTheme]);

  // Get value input
  const handleChangeInput = useCallback(
    (event: ChangeEvent<HTMLInputElement>): void => {
      const value = event.target.value;

      setInputValue(value);
    },
    []
  );

  useEffect(() => {
    // Declare the data fetching function
    const fetchBooks = async () => {
      await searchBooks(debounceValue);
    };

    fetchBooks();
  }, [debounceValue]);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <Container>
        <Header
          theme={isDarkTheme}
          onToggleTheme={handleToggleTheme}
          onChange={handleChangeInput}
        />
        <SubHeader />
        <MainContentStyled>
          <Books />
        </MainContentStyled>
      </Container>
    </ThemeProvider>
  );
};

export default Home;
