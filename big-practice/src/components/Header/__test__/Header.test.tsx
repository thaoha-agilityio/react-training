import Header from '../index';

// Helper
import { renderWithRouterAndQuery } from '@helpers';

describe('Header component', () => {
  it('renders the logo and menu items', () => {
    const { container, getByText } = renderWithRouterAndQuery(<Header />);

    // Verify that the logo and menu items are rendered.
    expect(getByText('Furniro')).toBeInTheDocument();
    expect(getByText('Home')).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
