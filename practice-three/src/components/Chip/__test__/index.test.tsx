import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { colors } from "../../../themes";

import { XmarkIcon } from "../../Icon";
import Chip from "..";

const mockProps = {
  width: 116,
  height: 45,
  color: colors.comet,
  bgColor: colors.linkWater,
  flexLayout: false,
  borderRadius: 30,
  pLeft: 15,
  pRight: 15,
  fontSize: 14,
  fontWeight: 400,
  label: "filter",
  endAdornments: <XmarkIcon />,
  onClick: jest.fn(),
};

describe("Chip component render", () => {
  test("Ensure chip button render correctly", () => {
    render(<Chip {...mockProps} />);
    const button = screen.getByText("filter");

    expect(button).toBeInTheDocument();
  });

  test("Should simulate onClick event and expect mock function", () => {
    render(<Chip {...mockProps} />);

    fireEvent.click(screen.getByText("filter"));
    expect(mockProps.onClick).toHaveBeenCalledTimes(1);
  });
});
