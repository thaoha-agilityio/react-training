import Header from '../index';

// Helper
import { renderWithRouterAndQuery } from '@helpers';

describe('Header component', () => {
  it('renders the logo and menu items', () => {
    const { getByText } = renderWithRouterAndQuery(<Header />);

    // Verify that the logo and menu items are rendered.
    expect(getByText('Furniro')).toBeInTheDocument();
    expect(getByText('Home')).toBeInTheDocument();
  });
});
