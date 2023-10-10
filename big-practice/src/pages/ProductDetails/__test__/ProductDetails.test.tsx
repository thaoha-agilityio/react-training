import { renderWithRouterAndQuery } from '@helpers';
import ProductDetails from '..';

describe('ProductDetails component', () => {
  it('should render component correctly', () => {
    const { container } = renderWithRouterAndQuery(<ProductDetails />);

    expect(container).toBeInTheDocument();
  });
});
