import { render, fireEvent } from '@testing-library/react';

import { MOCK_PRODUCTS } from '@constants';

import CardDetails from '../index';

const mockProps = {
  card: MOCK_PRODUCTS[0],
  count: 2,
  onAddToCart: jest.fn(),
  onIncreaseProduct: jest.fn(),
  onDecreaseProduct: jest.fn(),
};

describe('CardDetails component', () => {
  it('should render the card details correctly', () => {
    const { getByText, getByAltText } = render(<CardDetails {...mockProps} />);

    // Verify that the card details are rendered correctly
    expect(getByText('name 1')).toBeInTheDocument();
    expect(getByText('Rs. 8')).toBeInTheDocument();
    expect(getByText('description')).toBeInTheDocument();
    expect(getByAltText('card-image')).toBeInTheDocument();
  });

  it('should call onAddToCart when "Add To Cart" button is clicked', () => {
    const { getByText } = render(<CardDetails {...mockProps} />);

    // Click the "Add To Cart" button
    fireEvent.click(getByText('Add To Cart'));

    // Verify that onAddToCart was called
    expect(mockProps.onAddToCart).toHaveBeenCalled();
  });

  // You can add more test cases as needed
});
