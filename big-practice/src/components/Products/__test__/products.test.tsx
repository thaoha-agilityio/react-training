import { act, fireEvent } from '@testing-library/react';

//  Constants
import { MOCK_CARTS, MOCK_PRODUCTS, ROUTES } from '@constants';

// Hooks
import { renderWithRouterAndQuery } from '@helpers';

//  Services
import { api } from '@services/APIRequest';

import { Products } from '..';

// Stores
import * as stores from '@stores';

jest.mock('@stores', () => ({
  __esModule: true,
  ...jest.requireActual('@stores'),
}));

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

describe('Products Component', () => {
  it('should render a list of products', () => {
    const { getByTestId } = renderWithRouterAndQuery(<Products products={[MOCK_PRODUCTS]} />);

    expect(getByTestId('products')).toBeInTheDocument();
  });

  it('should navigates to detail page when a detail button is clicked', () => {
    const { getAllByTestId } = renderWithRouterAndQuery(<Products products={[MOCK_PRODUCTS]} />);

    const detailBtn = getAllByTestId('detail-btn');
    fireEvent.click(detailBtn[0]);

    expect(mockNavigate).toHaveBeenCalledWith(ROUTES.DETAIL_PRODUCT_PARAMS + MOCK_PRODUCTS[0].id);
  });

  it('should navigates to edit page when a edit button is clicked', () => {
    const { getAllByTestId } = renderWithRouterAndQuery(<Products products={[MOCK_PRODUCTS]} />);

    const editBtn = getAllByTestId('edit-btn');
    fireEvent.click(editBtn[0]);

    expect(mockNavigate).toHaveBeenCalledWith(ROUTES.EDIT_PRODUCT_PARAMS + MOCK_PRODUCTS[0].id);
  });

  it('should call handleDeleteItem success when delete button is clicked', async () => {
    jest.spyOn(api, 'deleteData').mockResolvedValue('1');
    const { getAllByTestId, getByText } = renderWithRouterAndQuery(
      <Products products={[MOCK_PRODUCTS]} />,
    );

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

    const { getByTestId, getByText } = renderWithRouterAndQuery(
      <Products products={[[MOCK_PRODUCTS[0]]]} />,
    );

    act(() => {
      // Click deleteBtn
      const deleteBtn = getByTestId('delete-btn');
      fireEvent.click(deleteBtn);
    });

    const submitBtn = getByText('Yes, Delete');
    act(() => {
      fireEvent.click(submitBtn);
    });
  });

  it('should call handleAddToCart when add to cart button is clicked', async () => {
    const { getAllByText } = renderWithRouterAndQuery(<Products products={[MOCK_PRODUCTS]} />);
    act(() => {
      // Click deleteBtn
      const addToCartBtn = getAllByText('Add to cart');
      fireEvent.click(addToCartBtn[1]);
    });
  });

  it('should update cart when existing product', async () => {
    jest.spyOn(stores, 'useCartStore').mockImplementation(() => ({
      cart: MOCK_CARTS,
      setCart: jest.fn(),
    }));

    const { getAllByText } = renderWithRouterAndQuery(<Products products={[MOCK_PRODUCTS]} />);
    act(() => {
      // Click deleteBtn
      const addToCartBtn = getAllByText('Add to cart');
      fireEvent.click(addToCartBtn[0]);
    });
  });
});
