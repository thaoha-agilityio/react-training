import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { BooksContext, BooksProvider } from "../../../../contexts/BooksContext";

import FilterModal from "..";

const mockProps = {
  width: 268,
  height: 331,
  top: 20,
  right: 70,
  onToggleFilterModal: jest.fn(),
};

describe("Testing component FilterModal", () => {
  it("should render the component with the correct props", () => {
    render(<FilterModal {...mockProps} data-testid="filter-modal" />);

    const filterModal = screen.getByTestId("filter-modal");

    expect(filterModal).toBeInTheDocument();
  });

  it("should handle the display view options correctly", () => {
    const mockFunction = jest.fn();

    const customFilterModal = (
      <BooksContext.Provider value={{ handleChangeGridView: mockFunction }}>
        <FilterModal {...mockProps} />
      </BooksContext.Provider>
    );

    // const gridButton = screen.getByTestId("list-button");
    // const listButton = screen.getByTestId("grid-button");

    // fireEvent.click(gridButton);
    // expect(gridButton).toBeDisabled();
    // expect(listButton).not.toBeDisabled();

    expect(mockFunction).toHaveBeenCalled();
  });
});
