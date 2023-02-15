import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Header from "..";

const mockProps = {
  isDarkTheme: true,
  onToggleTheme: jest.fn(),
  onChange: jest.fn(),
};

describe("Testing Header component", () => {
  it("should render the component with the correct props", () => {
    const { getByPlaceholderText } = render(<Header {...mockProps} />);

    const input = getByPlaceholderText("Search books");
    expect(input).toBeInTheDocument();

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(mockProps.onToggleTheme).toBeCalledTimes(1);
  });
});
