import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import { ListIcon } from "../../Icon";

import ToggleButton from "..";

const mockProps = {
  width: 77,
  height: 32,
  textAlign: "left",
  icon: <ListIcon />,
  borderRadius: 30,
  onClick: jest.fn(),
};

describe("Testing ToggleButton component", () => {
  test("Testing icon button", () => {
    const tree = render(<ToggleButton aria-label="icon" {...mockProps} />);
    const button = screen.getByRole("button");

    expect(button).toBeTruthy();
    expect(tree).toMatchSnapshot();
  });

  test("Testing  onClick event and expect mock function", () => {
    render(<ToggleButton aria-label="icon" {...mockProps} />);

    const button = screen.getByRole("button");

    fireEvent.click(button);

    expect(mockProps.onClick).toHaveBeenCalledTimes(1);
  });
});
