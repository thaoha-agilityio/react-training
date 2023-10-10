import { renderWithRouterAndQuery } from '@helpers';
import ShoppingCart from '..';

describe('ShoppingCart component', () => {
  it('should render component correctly', () => {
    const { container } = renderWithRouterAndQuery(<ShoppingCart />);

    expect(container).toBeInTheDocument();
  });
});
