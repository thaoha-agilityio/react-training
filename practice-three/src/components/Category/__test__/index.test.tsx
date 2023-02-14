import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import { category } from "../../../constants/mockData";

import Category from "..";
import { CategoriesContext, ICategoriesContext } from "../../../contexts/CategoriesContext";

const mockProps = {
  category: category,
  onSelectCategory: jest.fn(),
};

const mockContextValue = {
  selectedIds: ['1']
}

describe("testing Category component", () => {
  it("Should match data for Category component", () => {
    render(<Category {...mockProps} />);

    const category = screen.getByTestId("category");

    expect(category).toBeInTheDocument();

  });

  // it("Should call onSelectCategory when categoty is clicked", () => {

  //   render(<Category {...mockProps} />);

  //   const category = screen.getByTestId("category");
  //   fireEvent.click(category);

  //   expect(mockProps.onSelectCategory).toHaveBeenCalled();
  // });

  it('does not call onSelectCategory if category is already selected', () => {
    render(
      <CategoriesContext.Provider value={mockContextValue as unknown as ICategoriesContext}>
        <Category
          {...mockProps}
        />
      </CategoriesContext.Provider >
    );

    const categoryElement = screen.getByTestId('category');
    fireEvent.click(categoryElement);

    render(<Category {...mockProps} />);
    fireEvent.click(categoryElement);

    expect(mockProps.onSelectCategory).not.toHaveBeenCalled();
  });
});
