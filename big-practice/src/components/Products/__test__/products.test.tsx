import { render } from '@testing-library/react';

//  Constants
import { MOCK_PRODUCTS } from '@constants';

import { Products } from '..';

describe('Products Component', () => {
  it('should render a list of products', () => {
    const { getByTestId } = render(<Products products={MOCK_PRODUCTS} />);

    expect(getByTestId('products')).toBeInTheDocument();
  });
});
