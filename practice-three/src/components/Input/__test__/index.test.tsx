import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import { SearchIcon } from "../../Icon";

import Input from "..";

const mockProps = {
  type: "text",
  width: 670,
  height: 53,
  borderRadius: 30,
  pLeft: 48,
  children: <SearchIcon />,
  placeholder: "Search book",
};

const setupGetValue = () => {
  const component = render(<Input {...mockProps} />);
  const input = component.getByPlaceholderText(
    "Search book"
  ) as HTMLInputElement;
  return {
    input,
    component,
  };
};

describe("Input render", () => {
  it("Should match Input DOM Snapshot", () => {
    const { input, component } = setupGetValue();

    expect(input).toBeTruthy();
    expect(component).toMatchSnapshot();
  });

  it("Should be able type in input", () => {
    const { input } = setupGetValue();
    fireEvent.change(input, { target: { value: "Angels and demons" } });
    expect(input.value).toBe("Angels and demons");
  });
});
