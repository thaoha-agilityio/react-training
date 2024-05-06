import { fireEvent, renderWithRouterAndQuery } from '@helpers';
import ProductDetails from '..';
import * as reactRouter from 'react-router-dom';

// Constants
import { MOCK_CARTS, MOCK_PRODUCT, MOCK_PRODUCTS } from '@constants';

// Hooks
import * as hooks from '@hooks';

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
  beforeEach(() => {
    (jest.spyOn(reactRouter, 'useParams') as jest.Mock).mockImplementation(() => ({
      uuid: MOCK_PRODUCTS[3].id,
    }));

    (jest.spyOn(hooks, 'useFetchProductDetail') as jest.Mock).mockImplementation(() => ({
      data: MOCK_PRODUCTS[3],
      isFetching: false,
    }));

    stores.useCartStore.setState({
      cart: MOCK_CARTS,
      addToCart: jest.fn(),
    });
  });

  it('should render component correctly', () => {
    const { container } = renderWithRouterAndQuery(<ProductDetails />);

    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should update quantity if existed product in cart', async () => {
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

    expect(getByText('2')).toBeInTheDocument();
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
    expect(getByText('1')).toBeInTheDocument();
  });
});
