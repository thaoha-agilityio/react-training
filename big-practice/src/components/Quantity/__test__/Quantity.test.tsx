import { render, fireEvent, screen } from '@testing-library/react';

import Quantity from '../index';

const mockProps = {
  initialCount: 1,
  onQuantityChange: jest.fn(),
};

describe('Quantity component', () => {
  test('Quantity component displays the default count correctly', () => {
    const { container, getByText } = render(<Quantity {...mockProps} />);

    const countText = getByText('1'); // Default count value is 1

    expect(countText).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  test('Quantity component calls onIncreaseProduct when the "+" button is clicked', () => {
    render(<Quantity {...mockProps} />);
    const increaseButton = screen.getByText('+');

    fireEvent.click(increaseButton);

    expect(mockProps.onQuantityChange).toHaveBeenCalledTimes(1);
  });

  test('Quantity component calls onDecreaseProduct when the "-" button is clicked', () => {
    render(<Quantity {...mockProps} />);
    const decreaseButton = screen.getByText('-');

    fireEvent.click(decreaseButton);

    expect(mockProps.onQuantityChange).toHaveBeenCalledTimes(1);
  });
});
