import { render } from '@testing-library/react';

//  Constants
import { MOCK_PRODUCTS } from '@constants';

import { CardItem } from '../index';

describe('CardItem Component', () => {
  it('renders product information correctly', () => {
    const { getByText, getByAltText } = render(<CardItem item={MOCK_PRODUCTS[1]} />);

    // Assert that the product name, description, and price are displayed
    expect(getByText(MOCK_PRODUCTS[1].name)).toBeInTheDocument();
    expect(getByText(MOCK_PRODUCTS[1].description)).toBeInTheDocument();
    expect(getByText(`Rp ${MOCK_PRODUCTS[1].price}`)).toBeInTheDocument();

    // Assert that the product image is displayed with the correct alt text
    expect(getByAltText('card-item')).toBeInTheDocument();
  });
});
