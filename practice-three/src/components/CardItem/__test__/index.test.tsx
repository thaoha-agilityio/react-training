import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import { book } from "../../../constants/mockData";

import CardItem from "..";

const mockProps = {
  isGridView: true,
  item: book,
  onSetSelectedBookId: jest.fn(),
};

describe("testing cardItem component", () => {
  test("Should match data for card component", () => {
    render(<CardItem {...mockProps} />);

    const book = screen.getByTestId("card-item");

    expect(book).toBeInTheDocument();
  });

  test("Should call onSetSelectedBookId when cardItem is clicked", () => {
    render(<CardItem {...mockProps} />);

    const book = screen.getByTestId("card-item");

    expect(book).toBeInTheDocument();
    fireEvent.click(book);

    expect(mockProps.onSetSelectedBookId).toHaveBeenCalled();
  });
});
