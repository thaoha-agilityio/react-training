import { render, screen } from '@testing-library/react';
import { MenuItem } from '../index';

describe('MenuItem component', () => {
  it('renders text and a link with default "/" as the href', () => {
    render(<MenuItem text='Home' />);

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/');

    const text = screen.getByText('Home');
    expect(text).toBeInTheDocument();
  });

  it('renders text and a link with a specified "to" prop as the href', () => {
    render(<MenuItem text='Shop' to='/shop' />);

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/shop');

    const text = screen.getByText('Shop');
    expect(text).toBeInTheDocument();
  });
});
