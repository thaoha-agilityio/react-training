import { renderWithRouterAndQuery } from '@helpers';
import MainLayout from '../MainLayout';

describe('MainLayout component', () => {
  it('should render component correctly', () => {
    const { container } = renderWithRouterAndQuery(<MainLayout />);

    expect(container).toBeInTheDocument();
  });
});
