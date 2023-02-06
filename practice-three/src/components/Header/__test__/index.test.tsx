import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Header from "..";

const mockProps = {
  theme: true,
  themeToggle: jest.fn(),
};

describe("testing cardItem component", () => {
  it("renders correctly", () => {
    const { getByPlaceholderText } = render(<Header {...mockProps} />);

    const input = getByPlaceholderText("Search books");
    expect(input).toBeInTheDocument();

    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(mockProps.themeToggle).toBeCalledTimes(1);
  });
});
