import ShoppingCart from '../index';

//  Helpers
import { renderWithRouterAndQuery } from '@helpers';

describe('Shopping Cart component', () => {
  it('renders the correct number of menu items', () => {
    const { container, getByText } = renderWithRouterAndQuery(<ShoppingCart numberOfItems={5} />);

    expect(container).toBeInTheDocument();

    expect(getByText('5')).toBeInTheDocument();
  });
});
