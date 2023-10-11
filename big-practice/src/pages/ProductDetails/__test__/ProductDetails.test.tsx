import { fireEvent, renderWithRouterAndQuery } from '@helpers';
import ProductDetails from '..';
import * as reactRouter from 'react-router-dom';

// Hooks
import * as hooks from '@hooks';
import { MOCK_CARTS, MOCK_PRODUCT, MOCK_PRODUCTS } from '@constants';

// Stores
import * as stores from '@stores';

// Mock hooks
jest.mock('@hooks', () => ({
  __esModule: true,
  ...jest.requireActual('@hooks'),
}));

// Mock stores
jest.mock('@stores', () => ({
  __esModule: true,
  ...jest.requireActual('@stores'),
}));

jest.mock('react-router-dom', () => ({
  __esModule: true,
  ...jest.requireActual('react-router-dom'),
}));

describe('ProductDetails component', () => {
  it('should render component correctly', () => {
    const { container } = renderWithRouterAndQuery(<ProductDetails />);

    expect(container).toBeInTheDocument();
  });

  it('should update quantity if existed product in cart', async () => {
    (jest.spyOn(reactRouter, 'useParams') as jest.Mock).mockImplementation(() => ({
      uuid: MOCK_PRODUCTS[0].id,
    }));
    (jest.spyOn(hooks, 'useFetchProductDetail') as jest.Mock).mockImplementation(() => ({
      data: MOCK_PRODUCTS[0],
      isFetching: false,
    }));
    jest.spyOn(stores, 'useCartStore').mockImplementation(() => ({
      cart: MOCK_CARTS,
      setCart: jest.fn,
    }));

    const { getByText } = renderWithRouterAndQuery(<ProductDetails />);

    const addToCartBtn = getByText('Add To Cart');

    expect(addToCartBtn).toBeInTheDocument();
    fireEvent.click(addToCartBtn);
  });

  it('should add new product to cart', async () => {
    (jest.spyOn(reactRouter, 'useParams') as jest.Mock).mockImplementation(() => ({
      uuid: MOCK_PRODUCT.id,
    }));
    (jest.spyOn(hooks, 'useFetchProductDetail') as jest.Mock).mockImplementation(() => ({
      data: MOCK_PRODUCT,
      isFetching: false,
    }));
    jest.spyOn(stores, 'useCartStore').mockImplementation(() => ({
      cart: MOCK_CARTS,
      setCart: jest.fn,
    }));

    const { getByText } = renderWithRouterAndQuery(<ProductDetails />);

    const addToCartBtn = getByText('Add To Cart');

    expect(addToCartBtn).toBeInTheDocument();
    fireEvent.click(addToCartBtn);
  });

  it('should handleIncreaseProduct function is called', async () => {
    (jest.spyOn(hooks, 'useFetchProductDetail') as jest.Mock).mockImplementation(() => ({
      data: MOCK_PRODUCT,
      isFetching: false,
    }));

    const { getByText } = renderWithRouterAndQuery(<ProductDetails />);

    const increaseBtn = getByText('+');
    fireEvent.click(increaseBtn);
  });

  it('should handleDecreaseProduct function is called', async () => {
    (jest.spyOn(hooks, 'useFetchProductDetail') as jest.Mock).mockImplementation(() => ({
      data: MOCK_PRODUCT,
      isFetching: false,
    }));

    const { getByText } = renderWithRouterAndQuery(<ProductDetails />);

    const decreaseBtn = getByText('-');
    fireEvent.click(decreaseBtn);

    const increaseBtn = getByText('+');
    fireEvent.click(increaseBtn);

    fireEvent.click(decreaseBtn);
  });
});
