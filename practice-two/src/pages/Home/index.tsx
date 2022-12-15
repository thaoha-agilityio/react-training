import { ChangeEvent, useCallback, useContext, useState } from 'react';

import Header from '@/components/Header';
import SubHeader from './SubHeader';
import Books from './Books.tsx';
import SideBar from '@/pages/Home/SideBar';
import DetailModal from '@/components/Modal/DetailModal';

import { BooksContext } from '@/contexts/BooksContext';
import { CategoriesContext } from '@/contexts/CategoriesContext';
import { ThemeContext } from '@/contexts/ThemeContext ';

import './index.css';

const Home = (): JSX.Element => {
  const { ids, searchBooks, getBookById } = useContext(BooksContext);
  const { categories } = useContext(CategoriesContext);
  const { isDarkMode } = useContext(ThemeContext);

  const [valueInput, setValueInput] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedBookId, setSelectedBookId] = useState('');

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
  const handleShowModal = (id: string) => {
    setIsModalOpen(true);
    setSelectedBookId(id);
  };

  // Handle close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={`home ${isDarkMode ? 'dark-theme' : 'light-theme'}  `}>
      <div className="container">
        <Header onchange={handleChangeInput} />
        <SubHeader />
        <div className="contents">
          <SideBar categories={categories} />
          <Books ids={ids} onShowModal={handleShowModal} />
        </div>
        {isModalOpen && (
          <DetailModal onCloseModal={handleCloseModal} book={getBookById(selectedBookId)} />
        )}
      </div>
    </div>
  );
};

export default Home;
