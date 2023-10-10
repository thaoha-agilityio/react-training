import { renderWithRouterAndQuery } from '@helpers';
import Shop from '..';

describe('Shop component', () => {
  it('should render component correctly', () => {
    const { container } = renderWithRouterAndQuery(<Shop />);

    expect(container).toBeInTheDocument();
  });
});
