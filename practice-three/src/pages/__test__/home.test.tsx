import { books, categories } from '../../constants/mockData';
import { IBookContext, BooksContext } from '../../contexts/BooksContext';
import { ICategoriesContext, CategoriesContext } from '../../contexts/CategoriesContext';
import { fireEvent, render, screen } from '@testing-library/react';
import { AppProvider } from '../../contexts/AppContext';
import Home from '../Home';
const CategoryContextValue: ICategoriesContext = {
  categories: categories,
  error: '',
  selectedIds: [],
  setSelectedCategory: jest.fn(),
  getCategoryById: jest.fn().mockReturnValueOnce(() => categories),
  handleRemoveSelectedCategory: jest.fn(),
};
const BookContextValue: IBookContext = {
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
  getBookById: jest.fn().mockReturnValue(books.data[0]),
  handleFilterByCategories: jest.fn(),
};

describe('Testing Home component', () => {
  test('Should render correctly', () => {
    const { container } = render(
      <CategoriesContext.Provider value={CategoryContextValue}>
        <BooksContext.Provider value={BookContextValue}>
          <Home />
        </BooksContext.Provider>
      </CategoriesContext.Provider>
    );

    expect(container).toBeTruthy();
  });

  test('should render value correct when change input value ', () => {
    render(
      <AppProvider>
        <Home />
      </AppProvider>
    );

    const input = screen.getByRole('textbox');

    fireEvent.change(input, { target: { value: 'Angels and demons' } });
    expect(input.value).toBe('Angels and demons');

    fireEvent.change(input, { target: { value: '' } });
    expect(input.value).toBe('');
  });

  test('should render detail modal when card item is clicked', () => {
    render(
      <CategoriesContext.Provider value={CategoryContextValue}>
        <BooksContext.Provider value={BookContextValue}>
          <Home />
        </BooksContext.Provider>
      </CategoriesContext.Provider>
    );

    const book = screen.getAllByTestId('card-item');
    fireEvent.click(book[0]);

    const view = screen.getByText('Don Quijote de la Mancha');
    expect(view).toBeTruthy();
  });
});
