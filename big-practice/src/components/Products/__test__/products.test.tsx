import { fireEvent } from '@testing-library/react';

//  Constants
import { MOCK_PRODUCTS } from '@constants';

// Hooks
import { renderWithRouterAndQuery } from '@helpers';

import { Products } from '..';

const mockProps = {
  products: [MOCK_PRODUCTS],
  onOpen: jest.fn(),
  onEditItem: jest.fn(),
  onShowDetailItem: jest.fn(),
  onAddToCart: jest.fn(),
};

describe('Products Component', () => {
  it('should render a list of products', () => {
    const { getByTestId } = renderWithRouterAndQuery(<Products {...mockProps} />);

    expect(getByTestId('products')).toBeInTheDocument();
  });

  it('should call functions when button is clicked', () => {
    const { getAllByTestId, getAllByText } = renderWithRouterAndQuery(<Products {...mockProps} />);

    const deleteBtn = getAllByTestId('delete-btn');
    fireEvent.click(deleteBtn[0]);
    expect(mockProps.onOpen).toHaveBeenCalled();

    // onEditItem was called
    const editBtn = getAllByTestId('edit-btn');
    fireEvent.click(editBtn[0]);
    expect(mockProps.onEditItem).toHaveBeenCalled();

    // onShowDetailItem was called
    const detailBtn = getAllByTestId('detail-btn');
    fireEvent.click(detailBtn[0]);
    expect(mockProps.onShowDetailItem).toHaveBeenCalled();

    // onAddToCart
    const addToCartBtn = getAllByText('Add to cart');
    fireEvent.click(addToCartBtn[0]);
    expect(mockProps.onAddToCart).toHaveBeenCalled();
  });
});
