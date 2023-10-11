import { renderWithRouterAndQuery } from '@helpers';
import ProductDetails from '..';

// Hooks
import * as hooks from '@hooks';
import { MOCK_PRODUCTS } from '@constants';

// Mock hooks
jest.mock('@hooks', () => ({
  __esModule: true,
  ...jest.requireActual('@hooks'),
}));

describe('ProductDetails component', () => {
  it('should render component correctly', () => {
    const { container } = renderWithRouterAndQuery(<ProductDetails />);

    expect(container).toBeInTheDocument();
  });

  it('should render product detail correctly', async () => {
    (jest.spyOn(hooks, 'useFetchProductDetail') as jest.Mock).mockImplementation(() => ({
      data: MOCK_PRODUCTS[0],
      isFetching: false,
    }));

    const { getByText } = renderWithRouterAndQuery(<ProductDetails />);
    const addToCartBtn = getByText('Add To Cart');

    expect(addToCartBtn).toBeInTheDocument();
  });
});
