import { renderWithRouterAndQuery } from '@helpers';
import AddProduct from '..';

describe('AddProduct component', () => {
  it('should render component correctly', () => {
    const { container } = renderWithRouterAndQuery(<AddProduct />);

    expect(container).toBeInTheDocument();
  });
});
