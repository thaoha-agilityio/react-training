import { render, screen } from '@testing-library/react';

import Books, { BooksProps } from '../Home/components/Books';
import { books, categories } from '../../constants/mockData';
import { IBookContext, BooksContext } from '../../contexts/BooksContext';
import { ICategoriesContext, CategoriesContext } from '../../contexts/CategoriesContext';

const mockProps: BooksProps = {
  isGridView: true,
  onSetSelectedBookId: jest.fn(),
};

const CategoryContextValue: ICategoriesContext = {
  categories: categories,
  error: '',
  selectedIds: [],
  setSelectedCategory: jest.fn(),
  getCategoryById: jest.fn().mockReturnValueOnce(() => categories),
  handleRemoveSelectedCategory: jest.fn(),
};

const BookContextHaveValue: IBookContext = {
  isGridView: true,
  isSortNameStatus: true,
  isSortYearStatus: false,
  handleChangeGridView: jest.fn(),
  handleSortByAlphabet: jest.fn(),
  handleSortByReleaseYear: jest.fn(),
  books: books.data,
  error: '',
  isLoading: false,
  searchBooks: jest.fn(),
  getBookById: jest.fn(),
  handleFilterByCategories: jest.fn(),
};

const BookContextNotHaveValue: IBookContext = {
  isGridView: true,
  isSortNameStatus: true,
  isSortYearStatus: false,
  handleChangeGridView: jest.fn(),
  handleSortByAlphabet: jest.fn(),
  handleSortByReleaseYear: jest.fn(),
  books: [],
  error: 'Error',
  isLoading: false,
  searchBooks: jest.fn(),
  getBookById: jest.fn(),
  handleFilterByCategories: jest.fn(),
};

describe('Testing Books component', () => {
  test('Should render the component with the correct', () => {
    render(
      <CategoriesContext.Provider value={CategoryContextValue}>
        <BooksContext.Provider value={BookContextHaveValue}>
          <Books {...mockProps} />
        </BooksContext.Provider>
      </CategoriesContext.Provider>
    );

    const view = screen.getByText(/Don Quijote de la Mancha/i);
    expect(view).toBeTruthy();
  });

  test('should render the error', () => {
    render(
      <CategoriesContext.Provider value={CategoryContextValue}>
        <BooksContext.Provider value={BookContextNotHaveValue}>
          <Books {...mockProps} />
        </BooksContext.Provider>
      </CategoriesContext.Provider>
    );
    const view = screen.getByText(/URL is not valid/i);
    expect(view).toBeTruthy();
  });
});
