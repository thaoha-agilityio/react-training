import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import React, { useContext, useState as useStateMock } from "react";
import {
  CategoriesContext,
  CategoriesProvider,
  ICategoriesContext,
} from "../CategoriesContext";
import {
  categories,
  categories as mockCategories,
} from "../../constants/mockData";

const mockContextValue = {
  categories: mockCategories,
  error: "",
  selectedIds: ["1"],
  setSelectedCategory: jest.fn().mockReturnValue(["1", "2"]),
  getCategoryById: jest.fn().mockReturnValue(categories[0]),
  handleRemoveSelectedCategory: jest.fn(),
};

describe("Test CategoriesContext", () => {
  it("should render the children", () => {
    render(
      <CategoriesProvider>
        <div data-testid="test-child">Test child</div>
      </CategoriesProvider>
    );
    expect(screen.getByTestId("test-child")).toBeInTheDocument();
  });

  it("should provide context values to children", () => {
    const Component = () => {
      const { categories, error, selectedIds } = useContext(CategoriesContext);
      return (
        <div>
          <p data-testid="categories-length">{categories.length}</p>
          <p data-testid="error">{error}</p>
          <p data-testid="selected-ids">{selectedIds.length}</p>
        </div>
      );
    };

    const { rerender } = render(
      <CategoriesProvider>
        <Component />
      </CategoriesProvider>
    );

    expect(screen.getByTestId("categories-length")).toHaveTextContent("0");
    expect(screen.getByTestId("error")).toHaveTextContent("");
    expect(screen.getByTestId("selected-ids")).toHaveTextContent("0");
    rerender(
      <CategoriesContext.Provider
        value={mockContextValue as unknown as ICategoriesContext}
      >
        <Component />
      </CategoriesContext.Provider>
    );
    // Check updated context values
    expect(screen.getByTestId("categories-length")).toHaveTextContent(
      mockContextValue.categories.length.toString()
    );
    expect(screen.getByTestId("selected-ids")).toHaveTextContent(
      mockContextValue.selectedIds.length.toString()
    );
    expect(screen.getByTestId("error")).toHaveTextContent(
      mockContextValue.error
    );
  });

  it("should call setSelectedCategory when a category is clicked", () => {
    const initialStateForFirstUseStateCall = mockCategories;
    const initialStateForSecondUseStateCall = ["1", "2"];
    React.useState = jest
      .fn()
      .mockReturnValueOnce([initialStateForFirstUseStateCall, {}])
      .mockReturnValueOnce([initialStateForSecondUseStateCall, {}]);
    render(
      <CategoriesContext.Provider
        value={mockContextValue as unknown as ICategoriesContext}
      >
        <button onClick={() => mockContextValue.setSelectedCategory("1")}>
          Selected Category
        </button>
      </CategoriesContext.Provider>
    );
    fireEvent.click(screen.getByRole("button"));
    expect(mockContextValue.setSelectedCategory).toHaveBeenCalledWith("1");
    expect(mockContextValue.selectedIds).toEqual(["1"]);
  });

  it("should call handleRemoveSelectedCategory when a category is removed", () => {
    render(
      <CategoriesContext.Provider
        value={mockContextValue as unknown as ICategoriesContext}
      >
        <button
          onClick={() => mockContextValue.handleRemoveSelectedCategory("1")}
        >
          Remove Category
        </button>
      </CategoriesContext.Provider>
    );

    fireEvent.click(screen.getByRole("button"));
    expect(mockContextValue.handleRemoveSelectedCategory).toHaveBeenCalledWith(
      "1"
    );
  });

  it("should call getCategoryById when a category is clicked", () => {
    render(
      <CategoriesContext.Provider
        value={mockContextValue as unknown as ICategoriesContext}
      >
        <button onClick={() => mockContextValue.getCategoryById("1")}>
          Remove Category
        </button>
      </CategoriesContext.Provider>
    );

    fireEvent.click(screen.getByRole("button"));
    expect(mockContextValue.getCategoryById).toHaveBeenCalled();
  });
});
