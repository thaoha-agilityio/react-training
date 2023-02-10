import { ThemeProvider } from "styled-components";
import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import { useDebounce } from "@/hooks";
import { useBooks } from "@/hooks/useBooks";

// Components
import Header from "../../components/Header";
import SubHeader from "./components/SubHeader";
import Books from "./components/Books";
import DetailModal from "@/components/Modal/DetailModal";

// Themes
import { darkTheme, lightTheme } from "@/themes";
import { Container } from "../../styled-common";

// Constant
import { KEY_NAME_ESC } from "@/constants/actions";

// Styled
import { MainContentStyled } from "./index.styled";

const Home = (): React.ReactElement => {
  const { searchBooks, getBookById } = useBooks();
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const [inputValue, setInputValue] = useState<string>("");
  const debounceValue = useDebounce(inputValue);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedBookId, setSelectedBookId] = useState<string>("");

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

  // Set id when click item
  const handleSetSelectedBookId = useCallback((id: string) => {
    setSelectedBookId(id);
  }, []);

  const handleToggleModal = useCallback((): void => {
    setIsModalOpen((prev) => !prev);
  }, [isModalOpen]);

  // Close detail modal by keyboard
  const handleCloseByKeyboard = useCallback((event: KeyboardEvent): void => {
    if (event.keyCode === KEY_NAME_ESC) handleToggleModal();
  }, []);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <Container>
        <Header
          isDarkTheme={isDarkTheme}
          onToggleTheme={handleToggleTheme}
          onChange={handleChangeInput}
        />
        <SubHeader />
        <MainContentStyled>
          <Books
            isGridView={false}
            onShowModal={handleToggleModal}
            onSetSelectedBookId={handleSetSelectedBookId}
          />
        </MainContentStyled>
      </Container>
      {isModalOpen && (
        <DetailModal
          onCloseModal={handleToggleModal}
          book={getBookById(selectedBookId)}
          onCloseByKeyboard={handleCloseByKeyboard}
          isDarkTheme={isDarkTheme}
          onToggleTheme={handleToggleTheme}
          isModalOpen={isModalOpen}
        />
      )}
    </ThemeProvider>
  );
};

export default Home;
