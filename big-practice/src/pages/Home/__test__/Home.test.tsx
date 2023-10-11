import { renderWithRouterAndQuery } from '@helpers';
import Home from '../index';

describe('Home page', () => {
  it('should render component correctly', () => {
    const { container } = renderWithRouterAndQuery(<Home />);

    expect(container).toBeInTheDocument();
  });
});
