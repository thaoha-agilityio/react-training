import { renderWithRouterAndQuery } from '@helpers';
import EditProduct from '..';

describe('EditProduct component', () => {
  it('should render component correctly', () => {
    const { container } = renderWithRouterAndQuery(<EditProduct />);

    expect(container).toBeInTheDocument();
  });
});
