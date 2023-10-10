import { act, fireEvent } from '@testing-library/react';

//  Constants
import { MOCK_PRODUCTS, ROUTES } from '@constants';

// Hooks
import { renderWithRouterAndQuery } from '@helpers';

//  Services
import { api } from '@services/APIRequest';

import { Products } from '..';

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
    const { getByTestId } = renderWithRouterAndQuery(<Products products={[[MOCK_PRODUCTS[0]]]} />);

    const detailBtn = getByTestId('detail-btn');
    fireEvent.click(detailBtn);

    expect(mockNavigate).toHaveBeenCalledWith(ROUTES.DETAIL_PRODUCT_PARAMS + MOCK_PRODUCTS[0].id);
  });

  it('should navigates to edit page when a edit button is clicked', () => {
    const { getByTestId } = renderWithRouterAndQuery(<Products products={[[MOCK_PRODUCTS[0]]]} />);

    const editBtn = getByTestId('edit-btn');
    fireEvent.click(editBtn);

    expect(mockNavigate).toHaveBeenCalledWith(ROUTES.EDIT_PRODUCT_PARAMS + MOCK_PRODUCTS[0].id);
  });

  it('should call handleDeleteItem success when delete button is clicked', async () => {
    jest.spyOn(api, 'deleteData').mockResolvedValue('1');
    const { getByTestId, getByText } = renderWithRouterAndQuery(
      <Products products={[[MOCK_PRODUCTS[0]]]} />,
    );

    act(() => {
      // Click deleteBtn
      const deleteBtn = getByTestId('delete-btn');
      fireEvent.click(deleteBtn);
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
    // jest.spyOn(stores, 'useCartStore').mockReturnValue({
    //   carts: [],
    // });
    const { getByText } = renderWithRouterAndQuery(<Products products={[[MOCK_PRODUCTS[2]]]} />);
    act(() => {
      // Click deleteBtn
      const addToCartBtn = getByText('Add to cart');
      fireEvent.click(addToCartBtn);
    });
  });
});
