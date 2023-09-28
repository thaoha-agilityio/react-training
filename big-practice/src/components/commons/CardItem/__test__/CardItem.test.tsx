import { render } from '@testing-library/react';

import { CardItem } from '../index';
import bedroom from '@assets/photos/bedroom.png';

// Mock the IProduct data for testing
const mockProduct = {
  id: '1',
  name: 'Test Product',
  description: 'Stylish cafe chair',
  price: 100,
  image: bedroom,
};

describe('CardItem Component', () => {
  it('renders product information correctly', () => {
    const { getByText, getByAltText } = render(<CardItem item={mockProduct} />);

    // Assert that the product name, description, and price are displayed
    expect(getByText(mockProduct.name)).toBeInTheDocument();
    expect(getByText(mockProduct.description)).toBeInTheDocument();
    expect(getByText(`Rp ${mockProduct.price}`)).toBeInTheDocument();

    // Assert that the product image is displayed with the correct alt text
    expect(getByAltText('card-item')).toBeInTheDocument();
  });
});
