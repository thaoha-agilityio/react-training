import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import {
  CategoriesContext,
  ICategoriesContext,
} from "../../contexts/CategoriesContext";
import SubHeader, { SubHeaderProps } from "../Home/components/SubHeader";
import { categories } from "../../constants/mockData";

const mockProps: SubHeaderProps = {
  onToggleFilterModal: jest.fn(),
};

const CategoryContextValue: ICategoriesContext = {
  categories: categories,
  error: "",
  selectedIds: ["1"],
  setSelectedCategory: jest.fn(),
  getCategoryById: jest.fn().mockReturnValue([categories[0]]),
  handleRemoveSelectedCategory: jest.fn(),
};

describe("Testing SubHeader component", () => {
  test("Ensure SubHeader render correctly", () => {
    render(
      <CategoriesContext.Provider value={CategoryContextValue}>
        <SubHeader {...mockProps} />
      </CategoriesContext.Provider>
    );
    const buttonCategory = screen.getAllByTestId("category");
    fireEvent.click(buttonCategory[0]);

    const chip = screen.getByTestId("chip");
    expect(chip).toBeInTheDocument();
  });
});
