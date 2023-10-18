// Helpers
import { fireEvent, renderWithRouterAndQuery } from '@helpers';

// Constants
import { MOCK_CARTS, EMPTY_CART_MESSAGE, MOCK_PRODUCTS } from '@constants';
import ShoppingCart from '..';

// Stores
import * as stores from '@stores';

describe('ShoppingCart component', () => {
  beforeEach(() => {
    stores.useCartStore.setState({
      cart: MOCK_CARTS,
      setCart: jest.fn(),
    });
    stores.useProductStore.setState({
      products: MOCK_PRODUCTS,
    });
  });

  it('should render component correctly', () => {
    const { container } = renderWithRouterAndQuery(<ShoppingCart />);

    expect(container).toBeInTheDocument();
  });

  it('displays a message when the cart is empty', () => {
    stores.useCartStore.setState({
      cart: [],
      setCart: jest.fn(),
    });

    const { getByText } = renderWithRouterAndQuery(<ShoppingCart />);

    expect(getByText(EMPTY_CART_MESSAGE)).toBeInTheDocument();
  });

  it('calculates and displays the total price', () => {
    const { getByText } = renderWithRouterAndQuery(<ShoppingCart />);

    // Ensure that the total price is displayed correctly
    expect(getByText('Rs. 30.00')).toBeInTheDocument();
  });

  it('should deleteCart function is called', () => {
    const { getAllByTestId, getByText } = renderWithRouterAndQuery(<ShoppingCart />);

    // Show confirm modal
    const deleteBtn = getAllByTestId('delete-btn');
    fireEvent.click(deleteBtn[0]);

    const submitBtn = getByText('Yes, Delete');
    fireEvent.click(submitBtn);
  });
});
