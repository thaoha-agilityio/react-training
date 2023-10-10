import { render, fireEvent, screen } from '@testing-library/react';

import Quantity from '../index';

const mockProps = {
  onIncreaseProduct: jest.fn(),
  onDecreaseProduct: jest.fn(),
};

describe('Quantity component', () => {
  test('Quantity component displays the default count correctly', () => {
    render(<Quantity {...mockProps} />);
    const countText = screen.getByText('1'); // Default count value is 1

    expect(countText).toBeInTheDocument();
  });

  test('Quantity component displays the provided count correctly', () => {
    render(<Quantity count={5} {...mockProps} />);
    const countText = screen.getByText('5'); // Provided count value is 5

    expect(countText).toBeInTheDocument();
  });

  test('Quantity component calls onIncreaseProduct when the "+" button is clicked', () => {
    render(<Quantity count={1} {...mockProps} />);
    const increaseButton = screen.getByText('+');

    fireEvent.click(increaseButton);

    expect(mockProps.onIncreaseProduct).toHaveBeenCalledTimes(1);
  });

  test('Quantity component calls onDecreaseProduct when the "-" button is clicked', () => {
    render(<Quantity count={1} {...mockProps} />);
    const decreaseButton = screen.getByText('-');

    fireEvent.click(decreaseButton);

    expect(mockProps.onDecreaseProduct).toHaveBeenCalledTimes(1);
  });
});
