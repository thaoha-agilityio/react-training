import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { categories } from '../../constants/mockData';

import SideBar from '../Home/components/SideBar';

describe('Testing component SidebarCategories', () => {
  test('should match data for sidebar component', () => {
    render(<SideBar categories={categories} />);

    const book = screen.getByTestId('Sidebar');

    expect(book).toBeInTheDocument();
  });
});
