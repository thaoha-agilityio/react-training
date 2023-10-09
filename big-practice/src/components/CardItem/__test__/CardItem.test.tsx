import { fireEvent, render, renderHook } from '@testing-library/react';
import { useDisclosure } from '@chakra-ui/react';

//  Constants
import { MOCK_PRODUCTS } from '@constants';

import { CardItem } from '../index';

const mockProps = {
  item: MOCK_PRODUCTS[1],
  isLoading: false,
  onDeleteItem: jest.fn(),
  onEditItem: jest.fn(),
  onShowDetailItem: jest.fn(),
  onAddToCart: jest.fn(),
};

describe('CardItem Component', () => {
  it('renders product information correctly', () => {
    const { getByText, getByAltText } = render(<CardItem {...mockProps} />);

    // Assert that the product name, description, and price are displayed
    expect(getByText(MOCK_PRODUCTS[1].name)).toBeInTheDocument();
    expect(getByText(MOCK_PRODUCTS[1].description)).toBeInTheDocument();
    expect(getByText(`Rp ${MOCK_PRODUCTS[1].price}`)).toBeInTheDocument();
    expect(getByAltText('card-item')).toBeInTheDocument();
  });

  it('should call functions when button is clicked', () => {
    const { getByTestId, getByText } = render(<CardItem {...mockProps} />);

    expect(getByTestId('delete-btn')).toBeInTheDocument();

    // onEditItem was called
    const editBtn = getByTestId('edit-btn');
    fireEvent.click(editBtn);
    expect(mockProps.onEditItem).toHaveBeenCalled();

    // onShowDetailItem was called
    const detailBtn = getByTestId('detail-btn');
    fireEvent.click(detailBtn);
    expect(mockProps.onShowDetailItem).toHaveBeenCalled();

    // onAddToCart
    const addToCartBtn = getByText('Add to cart');
    fireEvent.click(addToCartBtn);
    expect(mockProps.onAddToCart).toHaveBeenCalled();
  });

  it('should ConfirmModal component', () => {
    const { result } = renderHook(() => useDisclosure());
    const { getByTestId, getByText } = render(<CardItem {...mockProps} />);

    const deleteBtn = getByTestId('delete-btn');
    fireEvent.click(deleteBtn);
    expect(result.current.onOpen).toBeTruthy();

    const cancelBtn = getByText('Cancel');
    fireEvent.click(cancelBtn);
  });
});
