import { ChangeEvent, useCallback, useContext, useState } from 'react';

import Header from '@/components/Header';
import SubHeader from './components/SubHeader';
import Books from './components/Books.tsx';
import SideBar from '@/pages/Home/components/SideBar';
import DetailModal from '@/components/Modal/DetailModal';
import FilterModal from '@/components/Modal/FilterModal';

import { BooksContext } from '@/contexts/BooksContext';
import { CategoriesContext } from '@/contexts/CategoriesContext';
import { ThemeContext } from '@/contexts/ThemeContext ';
import { KEY_NAME_ESC } from '@/constants/actions';

import './index.css';

const Home = (): JSX.Element => {
  const { ids, searchBooks, getBookById, isGridView } = useContext(BooksContext);
  const { categories } = useContext(CategoriesContext);
  const { isDarkMode } = useContext(ThemeContext);

  const [valueInput, setValueInput] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedBookId, setSelectedBookId] = useState<string>('');
  const [isModalFilterOpen, setIsModalFilterOpen] = useState<boolean>(false);

  // Handle Search books
  const handleChangeInput = useCallback(
    async (event: ChangeEvent<HTMLInputElement>): Promise<void> => {
      // Get value input
      const values = event.target.value;

      // Search books by name
      await searchBooks(values);

      setValueInput(values);
    },
    []
  );

  // Handle show modal
  const handleShowModal = useCallback((id: string): void => {
    setIsModalOpen(true);

    // Get id when click item
    setSelectedBookId(id);
  }, []);

  // Handle close modal
  const handleCloseModal = (): void => {
    setIsModalOpen(false);
  };

  // Handle show filter modal
  const handleShowFilterModal = useCallback((): void => {
    setIsModalFilterOpen(true);
  }, []);

  // Handle close modal
  const handleCloseFilterModal = (): void => {
    setIsModalFilterOpen(false);
  };

  // Close detail modal by keyboard
  const handleCloseByKeyboard = (event: KeyboardEvent) => {
    if (event.keyCode === KEY_NAME_ESC) {
      handleCloseModal();
    }
  };

  return (
    <div className={`home ${isDarkMode ? 'dark-theme' : 'light-theme'}  `}>
      <div className="container">
        <Header onChange={handleChangeInput} />
        <SubHeader onShowModal={handleShowFilterModal} />
        <div className="contents">
          <SideBar categories={categories} />

          <Books ids={ids} onShowModal={handleShowModal} isGridView={isGridView} />

          {isModalFilterOpen && <FilterModal onCloseModal={handleCloseFilterModal} />}
        </div>

        {isModalOpen && (
          <DetailModal
            onCloseModal={handleCloseModal}
            book={getBookById(selectedBookId)}
            onCloseByKeyboard={handleCloseByKeyboard}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
