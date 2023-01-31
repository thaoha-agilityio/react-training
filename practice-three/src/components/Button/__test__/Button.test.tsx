import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import { ListIcon } from "../../Icon";

import Button from "..";

const mockProps = {
  onClick: jest.fn(),
};

describe("testing button component", () => {
  test("testing icon button", () => {
    render(
      <Button
        aria-label="icon"
        isCircle={false}
        icon={<ListIcon />}
        bgColor="transparent"
      />
    );
    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  test("testing circle button", () => {
    render(
      <Button
        aria-label="icon"
        isCircle={true}
        icon={<ListIcon />}
        width={40}
        height={40}
        bgColor="transparent"
      />
    );

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  test("testing  onClick event and expect mock function", () => {
    render(
      <Button
        aria-label="icon"
        isCircle={true}
        icon={<ListIcon />}
        bgColor="transparent"
        {...mockProps}
      />
    );

    const button = screen.getByRole("button");

    fireEvent.click(button);

    expect(mockProps.onClick).toHaveBeenCalledTimes(1);
  });
});
