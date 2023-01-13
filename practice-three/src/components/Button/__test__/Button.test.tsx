import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import { ListIcon } from "../../Icon";

import Button from "..";

const mockProps = {
  onClick: jest.fn(),
};

describe("testing button component", () => {
  test("testing icon button", () => {
    const tree = render(
      <Button aria-label="icon" isCircle={false} icon={<ListIcon />} />
    );
    const button = screen.getByRole("button");

    expect(button).toBeTruthy();
    expect(tree).toMatchSnapshot();
  });

  test("testing circle button", () => {
    const tree = render(
      <Button
        aria-label="icon"
        isCircle={true}
        icon={<ListIcon />}
        width={40}
        height={40}
      />
    );

    const button = screen.getByRole("button");

    expect(button).toBeTruthy();
    expect(tree).toMatchSnapshot();
  });

  test("testing  onClick event and expect mock function", () => {
    render(
      <Button
        aria-label="icon"
        isCircle={true}
        icon={<ListIcon />}
        {...mockProps}
      />
    );

    const button = screen.getByRole("button");

    fireEvent.click(button);

    expect(mockProps.onClick).toHaveBeenCalledTimes(1);
  });
});
