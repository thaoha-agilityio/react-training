import React, { ChangeEvent, lazy, Suspense, useCallback, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

// Custom hooks
import { useCategories, useDebounce } from '../../hooks';
import { useBooks } from '../../hooks/useBooks';

// Components
import Header from '../../components/Header';
import SubHeader from './components/SubHeader';
import Books from './components/Books';
import SideBar from './components/SideBar';

// Themes
import { darkTheme, lightTheme } from '../../themes';
import { Container } from '../../styled-common';

// Constant
import { KEY_NAME_ESC } from '../../constants/actions';

// Styled
import { MainContentStyled } from './index.styled';

// React lazy
const DetailModal = lazy(() => import('../../components/Modal/DetailModal'));
const FilterModal = lazy(() => import('../../components/Modal/FilterModal'));

const Home = (): React.ReactElement => {
  const { searchBooks, getBookById, isGridView } = useBooks();

  const { categories } = useCategories();

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const [inputValue, setInputValue] = useState<string>('');
  const debounceValue = useDebounce(inputValue);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedBookId, setSelectedBookId] = useState<string>('');
  const [isModalFilterOpen, setIsModalFilterOpen] = useState<boolean>(false);

  // Change dark-light mode
  const handleToggleTheme = useCallback(() => {
    setIsDarkTheme((prev) => !prev);
  }, []);

  // Get value input
  const handleChangeInput = useCallback(
    async (event: ChangeEvent<HTMLInputElement>): Promise<void> => {
      const value = event.target.value;

      setInputValue(value);

      // If remove all text then fetch data
      if (value === '') {
        await searchBooks(value);
      }
    },
    [searchBooks]
  );

  useEffect(() => {
    // Declare the data fetching function
    const fetchBooks = async () => {
      await searchBooks(debounceValue);
    };

    if (debounceValue) {
      fetchBooks();
    }
  }, [debounceValue, searchBooks]); // Only call effect if debounced debounceValue changes

  // Set id when click item
  const handleSetSelectedBookId = useCallback((id: string) => {
    setSelectedBookId(id);
    handleToggleModal();
  }, []);

  const handleToggleModal = useCallback((): void => {
    setIsModalOpen((prev) => !prev);
  }, []);

  // Close detail modal by keyboard
  const handleCloseByKeyboard = useCallback(
    (event: KeyboardEvent): void => {
      if (event.keyCode === KEY_NAME_ESC) {
        handleToggleModal();
      }
    },
    [handleToggleModal]
  );

  // Handle show/close filter component
  const handleToggleFilterModal = useCallback(() => {
    setIsModalFilterOpen((prev) => !prev);
  }, []);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <Container>
        <Header
          isDarkTheme={isDarkTheme}
          onToggleTheme={handleToggleTheme}
          onChange={handleChangeInput}
        />
        <SubHeader onToggleFilterModal={handleToggleFilterModal} />
        <MainContentStyled>
          <SideBar categories={categories} />
          <Books onSetSelectedBookId={handleSetSelectedBookId} isGridView={isGridView} />
        </MainContentStyled>
      </Container>
      {isModalOpen && (
        <Suspense>
          <DetailModal
            onCloseModal={handleToggleModal}
            book={getBookById(selectedBookId)}
            onCloseByKeyboard={handleCloseByKeyboard}
            isDarkTheme={isDarkTheme}
            onToggleTheme={handleToggleTheme}
          />
        </Suspense>
      )}
      {isModalFilterOpen && (
        <Suspense>
          <FilterModal
            width={268}
            height={331}
            top={22}
            right={70}
            onToggleFilterModal={handleToggleFilterModal}
          />
        </Suspense>
      )}
    </ThemeProvider>
  );
};

export default Home;
