import { fireEvent, render } from '@testing-library/react';

//  Constants
import { MOCK_CARTS } from '@constants';

import CartItem from '../index';

const mockProps = {
  cart: MOCK_CARTS[0],
  onOpen: jest.fn(),
};

describe('CartItem Component', () => {
  it('renders product information correctly', () => {
    const { getByText, getByAltText } = render(<CartItem {...mockProps} />);

    // Assert that the product name, description, and price are displayed
    expect(getByText(MOCK_CARTS[0].name)).toBeInTheDocument();
    expect(getByText(MOCK_CARTS[0].quantity)).toBeInTheDocument();
    expect(getByText(`Rs. ${MOCK_CARTS[0].price}`)).toBeInTheDocument();
    expect(getByText(`Rs. ${MOCK_CARTS[0].price * MOCK_CARTS[0].quantity}`)).toBeInTheDocument();
    expect(getByAltText('image-product')).toBeInTheDocument();
  });

  it('should call onDeleteCart functions when button is clicked', () => {
    const { getByRole } = render(<CartItem {...mockProps} />);

    // Click open Modal
    fireEvent.click(getByRole('button'));

    expect(mockProps.onOpen).toHaveBeenCalled();
  });
});
