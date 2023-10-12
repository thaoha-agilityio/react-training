import { renderWithRouterAndQuery } from '@helpers';
import Container from '..';

describe('Container component', () => {
  it('should render component correctly', () => {
    const { container } = renderWithRouterAndQuery(<Container />);

    expect(container).toBeInTheDocument();
  });
});
