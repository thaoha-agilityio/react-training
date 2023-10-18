import { act, fireEvent, renderHook } from '@testing-library/react';
import { useDisclosure } from '@chakra-ui/react';

//  Constants
import { MOCK_CARTS, MOCK_PRODUCTS, NO_RESULT, ROUTES } from '@constants';

// Hooks
import { renderWithRouterAndQuery } from '@helpers';

//  Services
import { api } from '@services/APIRequest';

// Stores
import * as stores from '@stores';

// Hooks
import * as hooks from '@hooks';

import Shop from '..';

// Mock the useNavigate hook
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

// Mock services
jest.mock('@services/APIRequest', () => ({
  __esModule: true,
  ...jest.requireActual('@services/APIRequest'),
}));

// Mock Hooks
jest.mock('@hooks', () => ({
  __esModule: true,
  ...jest.requireActual('@hooks'),
}));

describe('Shop component', () => {
  beforeEach(() => {
    jest.spyOn(api, 'getData').mockResolvedValue([MOCK_PRODUCTS]);

    (jest.spyOn(hooks, 'useInfiniteProducts') as jest.Mock).mockImplementation(() => ({
      data: [MOCK_PRODUCTS],
      isFetching: false,
      hasNextPage: true,
      fetchNextPage: jest.fn(),
    }));

    stores.useCartStore.setState({
      cart: MOCK_CARTS,
      addToCart: jest.fn(),
    });
  });

  it('should render component correctly', () => {
    const { container } = renderWithRouterAndQuery(<Shop />);

    expect(container).toBeInTheDocument();
  });

  it('should render message if the list is empty', () => {
    (jest.spyOn(hooks, 'useInfiniteProducts') as jest.Mock).mockImplementation(() => ({
      data: [],
    }));
    const { getByText } = renderWithRouterAndQuery(<Shop />);

    expect(getByText(NO_RESULT.PRODUCTS)).toBeInTheDocument();
  });

  it('should navigates to detail page when a detail button is clicked', () => {
    const { getAllByTestId } = renderWithRouterAndQuery(<Shop />);

    const detailBtn = getAllByTestId('detail-btn');
    fireEvent.click(detailBtn[0]);
    expect(mockNavigate).toHaveBeenCalledWith(ROUTES.DETAIL_PRODUCT_PARAMS + MOCK_PRODUCTS[0].id);
  });

  it('should navigates to edit page when a edit button is clicked', () => {
    const { getAllByTestId } = renderWithRouterAndQuery(<Shop />);

    const editBtn = getAllByTestId('edit-btn');
    fireEvent.click(editBtn[0]);

    expect(mockNavigate).toHaveBeenCalledWith(ROUTES.EDIT_PRODUCT_PARAMS + MOCK_PRODUCTS[0].id);
  });

  it('should call handleDeleteItem success when delete button is clicked', async () => {
    jest.spyOn(api, 'deleteData').mockResolvedValue('1');
    const { getAllByTestId, getByText } = renderWithRouterAndQuery(<Shop />);

    act(() => {
      // Click deleteBtn
      const deleteBtn = getAllByTestId('delete-btn');
      fireEvent.click(deleteBtn[0]);
    });

    act(() => {
      const submitBtn = getByText('Yes, Delete');
      fireEvent.click(submitBtn);
    });
  });

  it('should call handleDeleteItem error when delete button is clicked', async () => {
    jest.spyOn(api, 'deleteData').mockRejectedValue(new Error('Error'));

    const { getAllByTestId, getByText } = renderWithRouterAndQuery(<Shop />);

    act(() => {
      // Click deleteBtn
      const deleteBtn = getAllByTestId('delete-btn');
      fireEvent.click(deleteBtn[0]);
    });

    const submitBtn = getByText('Yes, Delete');
    act(() => {
      fireEvent.click(submitBtn);
    });
  });

  it('should call handleAddToCart when add to cart button is clicked', async () => {
    const { getAllByText } = renderWithRouterAndQuery(<Shop />);
    act(() => {
      // Click deleteBtn
      const addToCartBtn = getAllByText('Add to cart');
      fireEvent.click(addToCartBtn[0]);
    });
  });

  it('should update cart when existing product', async () => {
    const { getAllByText, getByText } = renderWithRouterAndQuery(<Shop />);
    act(() => {
      // Click deleteBtn
      const addToCartBtn = getAllByText('Add to cart');
      fireEvent.click(addToCartBtn[3]);
    });

    const showMoreBtn = getByText('Show More');
    fireEvent.click(showMoreBtn);
  });

  it('should render ConfirmModal component', () => {
    const { result } = renderHook(() => useDisclosure());
    const { getAllByTestId, getByText } = renderWithRouterAndQuery(<Shop />);

    const deleteBtn = getAllByTestId('delete-btn');
    fireEvent.click(deleteBtn[0]);
    expect(result.current.onOpen).toBeTruthy();

    const cancelBtn = getByText('Cancel');
    fireEvent.click(cancelBtn);
  });
});
