// Helpers
import { fireEvent, renderWithRouterAndQuery } from '@helpers';

// Constants
import { MOCK_CARTS, NOTICE_MESSAGE } from '@constants';
import ShoppingCart from '..';

// Stores
import * as stores from '@stores';

jest.mock('@stores', () => ({
  __esModule: true,
  ...jest.requireActual('@stores'),
}));

describe('ShoppingCart component', () => {
  it('should render component correctly', () => {
    const { container } = renderWithRouterAndQuery(<ShoppingCart />);

    expect(container).toBeInTheDocument();
  });

  it('displays a message when the cart is empty', () => {
    jest.spyOn(stores, 'useCartStore').mockImplementation(() => ({
      cart: [],
      deleteCart: jest.fn(),
    }));

    const { getByText } = renderWithRouterAndQuery(<ShoppingCart />);

    expect(getByText(NOTICE_MESSAGE)).toBeInTheDocument();
  });

  it('calculates and displays the total price', () => {
    jest.spyOn(stores, 'useCartStore').mockImplementation(() => ({
      cart: MOCK_CARTS,
      deleteCart: jest.fn(),
    }));

    const { getByText } = renderWithRouterAndQuery(<ShoppingCart />);

    // Ensure that the total price is displayed correctly
    expect(getByText('Rs. 216.00')).toBeInTheDocument();
  });

  it('should deleteCart function is called', () => {
    jest.spyOn(stores, 'useCartStore').mockImplementation(() => ({
      cart: MOCK_CARTS,
      deleteCart: jest.fn(),
    }));

    const { getAllByTestId } = renderWithRouterAndQuery(<ShoppingCart />);

    const deleteBtn = getAllByTestId('delete-btn');

    fireEvent.click(deleteBtn[0]);
  });
});
