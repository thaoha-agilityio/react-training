import { render, fireEvent } from '@testing-library/react';

import { MOCK_PRODUCTS } from '@constants';

import CardDetails from '../index';

const mockProps = {
  card: MOCK_PRODUCTS[0],
  initialCount: 2,
  onAddToCart: jest.fn(),
  onQuantityChange: jest.fn(),
};

describe('CardDetails component', () => {
  it('should render the card details correctly', () => {
    const { container, getByText, getByAltText } = render(<CardDetails {...mockProps} />);

    // Verify that the card details are rendered correctly
    expect(getByText('name 1')).toBeInTheDocument();
    expect(getByText('Rs. 8')).toBeInTheDocument();
    expect(getByText('description')).toBeInTheDocument();
    expect(getByAltText('card-image')).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('should call onAddToCart when "Add To Cart" button is clicked', () => {
    const { getByText } = render(<CardDetails {...mockProps} />);

    // Click the "Add To Cart" button
    fireEvent.click(getByText('Add To Cart'));

    // Verify that onAddToCart was called
    expect(mockProps.onAddToCart).toHaveBeenCalled();
  });
});
