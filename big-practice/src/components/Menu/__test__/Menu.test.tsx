import Menu from '../index';

// Constants
import { MENU } from '@constants/menu';

// Helpers
import { renderWithRouterAndQuery } from '@helpers';

describe('Menu component', () => {
  it('renders a list of menu items with links', () => {
    const { container, getByRole } = renderWithRouterAndQuery(<Menu menu={MENU} />);

    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();

    // Check that each menu item and link is rendered
    MENU.forEach((item) => {
      const linkElement = getByRole('link', { name: item.title });
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute('href', item.path);
    });
  });
});
