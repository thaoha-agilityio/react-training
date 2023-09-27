import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import { MenuItem } from '../index';
import { MENU } from '@constants/menu';

describe('Menu component', () => {
  it('renders a list of menu items with links', () => {
    render(
      <Router>
        <MenuItem menu={MENU} />
      </Router>,
    );

    // Check that each menu item and link is rendered
    MENU.forEach((item) => {
      const linkElement = screen.getByRole('link', { name: item.title });
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute('href', item.path);
    });
  });

  it('renders the correct number of menu items', () => {
    render(
      <Router>
        <MenuItem menu={MENU} />
      </Router>,
    );

    // Check that the correct number of menu items is rendered
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(MENU.length);
  });
});
