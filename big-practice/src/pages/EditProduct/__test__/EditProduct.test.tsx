import { fireEvent, act } from '@testing-library/react';
// Helpers
import { renderWithRouterAndQuery } from '@helpers';

// Hooks
import * as hooks from '@hooks';

// Service
import { api } from '@services/APIRequest';

// Constants
import { MOCK_PRODUCTS } from '@constants';

import EditProduct from '..';

// Mock the useNavigate hook
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

// Mock hooks
jest.mock('@hooks', () => ({
  __esModule: true,
  ...jest.requireActual('@hooks'),
}));

beforeEach(() => {
  // Reset mock function states before each test
  jest.clearAllMocks();
});

describe('EditProduct component', () => {
  it('should render component correctly', () => {
    const { container } = renderWithRouterAndQuery(<EditProduct />);

    expect(container).toBeInTheDocument();
  });

  it('should call handleAddProduct success when submit button is clicked', async () => {
    jest.spyOn(api, 'putData').mockRejectedValue(new Error('Error'));
    (jest.spyOn(hooks, 'useFetchProductDetail') as jest.Mock).mockImplementation(() => ({
      data: MOCK_PRODUCTS[0],
      isFetching: false,
    }));

    const { getByText } = renderWithRouterAndQuery(<EditProduct />);
    const submitBtn = getByText('Submit');

    await act(async () => {
      fireEvent.submit(submitBtn);
    });
  });

  it('should call handleAddProduct error when submit button is clicked', async () => {
    jest.spyOn(api, 'putData').mockResolvedValue(MOCK_PRODUCTS[0]);
    (jest.spyOn(hooks, 'useFetchProductDetail') as jest.Mock).mockImplementation(() => ({
      data: MOCK_PRODUCTS[0],
      isFetching: false,
    }));

    const { getByText } = renderWithRouterAndQuery(<EditProduct />);
    const submitBtn = getByText('Submit');

    await act(async () => {
      fireEvent.submit(submitBtn);
    });
  });
});
