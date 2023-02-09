import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Header from "..";

const mockProps = {
  theme: true,
  onToggleTheme: jest.fn(),
};

describe("testing Header component", () => {
  it("renders correctly", () => {
    const { getByPlaceholderText } = render(<Header {...mockProps} />);

    const input = getByPlaceholderText("Search books");
    expect(input).toBeInTheDocument();

    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(mockProps.onToggleTheme).toBeCalledTimes(1);
  });
});
