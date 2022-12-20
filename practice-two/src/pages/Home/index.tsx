import { ChangeEvent, useCallback, useContext, useState } from 'react';

import Header from '@/components/Header';
import SubHeader from './SubHeader';
import Books from './Books.tsx';
import SideBar from '@/pages/Home/SideBar';
import DetailModal from '@/components/Modal/DetailModal';
import FilterModal from '@/components/Modal/FilterModal';

import { BooksContext } from '@/contexts/BooksContext';
import { CategoriesContext } from '@/contexts/CategoriesContext';
import { ThemeContext } from '@/contexts/ThemeContext ';

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
    [valueInput]
  );

  // Handle show modal
  const handleShowModal = useCallback(
    (id: string): void => {
      setIsModalOpen(true);

      // Get id when click item
      setSelectedBookId(id);
    },
    [isModalOpen]
  );

  // Handle close modal
  const handleCloseModal = (): void => {
    setIsModalOpen(false);
  };

  // Handle show filter modal
  const handleShowFilterModal = useCallback((): void => {
    setIsModalFilterOpen(true);
  }, [isModalFilterOpen]);

  // Handle close modal
  const handleCloseFilterModal = (): void => {
    setIsModalFilterOpen(false);
  };

  return (
    <div className={`home ${isDarkMode ? 'dark-theme' : 'light-theme'}  `}>
      <div className="container">
        <Header onChange={handleChangeInput} />
        <SubHeader onShowModal={handleShowFilterModal} />
        <div className="contents">
          <SideBar categories={categories} />
          <Books ids={ids} onShowModal={handleShowModal} isGridView={isGridView} />
        </div>
        {isModalOpen && (
          <DetailModal onCloseModal={handleCloseModal} book={getBookById(selectedBookId)} />
        )}

        {isModalFilterOpen && <FilterModal onCloseModal={handleCloseFilterModal} />}
      </div>
    </div>
  );
};

export default Home;
