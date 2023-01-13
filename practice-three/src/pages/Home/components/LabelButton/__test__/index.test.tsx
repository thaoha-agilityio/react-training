import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import LabelButton from "..";

const mockProps = {
  text: "esc",
  onClick: jest.fn(),
};

describe("testing button component", () => {
  test("testing label button", () => {
    const tree = render(<LabelButton aria-label="icon" {...mockProps} />);
    const button = screen.getByRole("button");

    expect(button).toBeTruthy();
    expect(tree).toMatchSnapshot();
  });

  test("testing  onClick event and expect mock function", () => {
    render(<LabelButton aria-label="icon" {...mockProps} />);

    const button = screen.getByText("esc");
    fireEvent.click(button);

    expect(mockProps.onClick).toHaveBeenCalledTimes(1);
  });
});
