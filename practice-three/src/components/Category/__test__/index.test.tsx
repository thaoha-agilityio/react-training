import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { category as MOCK_CATEGORY } from '../../../constants/mockData';

import Category, { CategoryProps } from '..';
import { CategoriesContext, ICategoriesContext } from '../../../contexts/CategoriesContext';
import { AppProvider } from '../../../contexts/AppContext';

const mockProps: CategoryProps = {
  category: MOCK_CATEGORY,
  onSelectCategory: jest.fn(),
};

const mockContextSelectedValue = {
  selectedIds: ['1'],
};

const mockContextNotSelectedValue = {
  selectedIds: ['2'],
};

describe('Testing Category component', () => {
  it('should match data for Category component', () => {
    render(
      <AppProvider>
        <Category {...mockProps} />
      </AppProvider>
    );

    const category = screen.getByTestId('category');

    expect(category).toBeInTheDocument();
  });

  it('Should call onSelectCategory when category is clicked', () => {
    render(
      <CategoriesContext.Provider
        value={mockContextNotSelectedValue as unknown as ICategoriesContext}
      >
        <Category {...mockProps} />
      </CategoriesContext.Provider>
    );

    const category = screen.getByTestId('category');
    fireEvent.click(category);

    expect(mockProps.onSelectCategory).toHaveBeenCalled();
  });

  it('does not call onSelectCategory if category is already selected', () => {
    render(
      <CategoriesContext.Provider value={mockContextSelectedValue as unknown as ICategoriesContext}>
        <Category {...mockProps} />
      </CategoriesContext.Provider>
    );

    const categoryElement = screen.getByTestId('category');
    fireEvent.click(categoryElement);
    fireEvent.click(categoryElement);

    expect(mockProps.onSelectCategory).not.toHaveBeenCalled();
  });
});
