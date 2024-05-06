import { fireEvent, render } from '@testing-library/react';

//  Constants
import { MOCK_PRODUCTS, MOCK_PRODUCT_CART } from '@constants';

// Stores
import * as stores from '@stores';

import CartItem from '../index';

const mockProps = {
  cartItem: MOCK_PRODUCT_CART,
  onOpen: jest.fn(),
};

describe('CartItem Component', () => {
  beforeEach(() => {
    stores.useProductStore.setState({
      products: MOCK_PRODUCTS,
    });
  });

  it('renders product information correctly', () => {
    const { container } = render(<CartItem {...mockProps} />);

    // Assert that the product name, description, and price are displayed
    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should call onDeleteCart functions when button is clicked', () => {
    const { getByTestId } = render(<CartItem {...mockProps} />);

    // Click open Modal
    fireEvent.click(getByTestId('delete-btn'));

    expect(mockProps.onOpen).toHaveBeenCalled();
  });

  it('should getProductById function is called', () => {
    const { getByText } = render(<CartItem {...mockProps} />);

    expect(getByText('name 3')).toBeInTheDocument();
  });
});
