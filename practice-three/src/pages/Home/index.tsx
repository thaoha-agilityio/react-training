import { ThemeProvider } from "styled-components";
import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";
import { useDebounce } from "@/hooks";
import { useBooks } from "@/hooks/useBooks";
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
    async (event: ChangeEvent<HTMLInputElement>): Promise<void> => {
      const value = event.target.value;

      setInputValue(value);

      // If remove all text then fetch data
      if (value === "") await searchBooks(value);
    },
    []
  );

  useEffect(() => {
    // Declare the data fetching function
    const fetchBooks = async () => {
      await searchBooks(debounceValue);
    };

    if (debounceValue) {
      fetchBooks();
    }
  }, [debounceValue]); // Only call effect if debounced debounceValue changes

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
