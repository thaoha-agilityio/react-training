import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { BooksContext, IBookContext } from '../../../../contexts/BooksContext';

import FilterModal from '..';

const mockProps = {
  width: 268,
  height: 331,
  top: 20,
  right: 70,
  onToggleFilterModal: jest.fn(),
};

const mockContextValue = {
  isGridView: true,
  isSortNameStatus: true,
  isSortYearStatus: false,
  handleChangeGridView: jest.fn(),
  handleSortByAlphabet: jest.fn(),
  handleSortByReleaseYear: jest.fn(),
};

describe('Testing component FilterModal', () => {
  it('Should render the component with the correct props', () => {
    render(<FilterModal {...mockProps} />);

    const filterModal = screen.getByTestId('filter-modal');

    expect(filterModal).toBeInTheDocument();
  });

  it('should render grid button and list button', () => {
    render(
      <BooksContext.Provider value={mockContextValue as unknown as IBookContext}>
        <FilterModal {...mockProps} />
      </BooksContext.Provider>
    );

    const gridButton = screen.getByTestId('grid-button');
    const listButton = screen.getByTestId('list-button');

    expect(gridButton).toBeInTheDocument();
    expect(listButton).toBeInTheDocument();
  });

  it('should handleChangeGridView when list button is clicked', () => {
    render(
      <BooksContext.Provider value={mockContextValue as unknown as IBookContext}>
        <FilterModal {...mockProps} />
      </BooksContext.Provider>
    );

    const gridButton = screen.getByTestId('grid-button');
    const listButton = screen.getByTestId('list-button');

    fireEvent.click(listButton);
    expect(gridButton).toBeDisabled();
    expect(listButton).not.toBeDisabled();

    expect(mockContextValue.handleChangeGridView).toHaveBeenCalled();
  });

  it('should handleSortByAlphabet when alphabetical button is clicked', () => {
    render(
      <BooksContext.Provider value={mockContextValue as unknown as IBookContext}>
        <FilterModal {...mockProps} />
      </BooksContext.Provider>
    );

    const button = screen.getByText('alphabetical order');
    fireEvent.click(button);

    expect(mockContextValue.handleSortByAlphabet).toHaveBeenCalled();
  });

  it('should call handleSortByAlphabet when release year button is clicked', () => {
    render(
      <BooksContext.Provider value={mockContextValue as unknown as IBookContext}>
        <FilterModal {...mockProps} />
      </BooksContext.Provider>
    );

    const button = screen.getByText('release year');
    fireEvent.click(button);

    expect(mockContextValue.handleSortByReleaseYear).toHaveBeenCalled();
  });
});
