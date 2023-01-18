import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import { book } from "../../../constants/mockData";

import CardItem from "..";

const mockProps = {
  item: book,
  onShowModal: jest.fn(),
};

describe("testing cardItem component", () => {
  test("Should match data for card component", () => {
    render(<CardItem {...mockProps} />);

    const book = screen.queryByTestId("card-item");

    expect(book).toBeInTheDocument();
  });
});
