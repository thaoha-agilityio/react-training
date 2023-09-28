import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from '../index';

describe('Header component', () => {
  it('renders the logo and menu items', () => {
    render(
      <Router>
        <Header />
      </Router>,
    );

    // Verify that the logo and menu items are rendered.
    expect(screen.getByText('Furniro')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
  });
});
