import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { ListIcon } from "../../Icon";

import Button from "..";

describe("testing button component", () => {
  test("testing default button", () => {
    const tree = render(
      <Button isCircle={false} variant="primary" size="small" text="click" />
    );

    const button = screen.getByRole("button");

    expect(button).toBeTruthy();
    expect(tree).toMatchSnapshot();
  });

  test("testing icon button", () => {
    const tree = render(
      <Button
        aria-label="icon"
        isCircle={false}
        variant="primary"
        size="large"
        icon={<ListIcon />}
      />
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
        variant="primary"
        size="large"
        icon={<ListIcon />}
      />
    );

    const button = screen.getByRole("button");

    expect(button).toBeTruthy();
    expect(tree).toMatchSnapshot();
  });
});
