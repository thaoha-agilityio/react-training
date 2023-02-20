import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { book } from '../../../../constants/mockData';

import DetailModal from '..';

const mockProps = {
  isDarkTheme: true,
  onCloseModal: jest.fn(),
  onCloseByKeyboard: jest.fn(),
  onToggleTheme: jest.fn(),
  book: book,
};

const secondMockProps = {
  isDarkTheme: false,
  onCloseModal: jest.fn(),
  onCloseByKeyboard: jest.fn(),
  onToggleTheme: jest.fn(),
  book: book,
};

describe('Testing component DetailModal', () => {
  it('should show detail book', () => {
    render(<DetailModal {...mockProps} />);

    expect(screen.getByText(book.name)).toBeInTheDocument();
  });

  it('Should show detail book', () => {
    render(<DetailModal {...secondMockProps} />);

    expect(screen.getByText(book.name)).toBeInTheDocument();
  });

  it('calls onCloseModal when closeButton is clicked', () => {
    render(<DetailModal {...mockProps} />);

    const button = screen.getByTestId('close-button');

    fireEvent.click(button);

    expect(mockProps.onCloseModal).toHaveBeenCalledTimes(1);
  });

  it('calls onToggleTheme when toggleButton component is clicked', () => {
    render(<DetailModal {...mockProps} />);

    const button = screen.getByTestId('toggle-button');

    fireEvent.click(button);

    expect(mockProps.onToggleTheme).toHaveBeenCalledTimes(1);
  });
});
