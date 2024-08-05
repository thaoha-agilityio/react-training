// Libs
import { fireEvent, render } from "@testing-library/react";

// Components
import Button from "..";

describe("Button", () => {
  const buttonText = "Click me";
  const onClick = jest.fn();

  it("renders button with correct styles and children", () => {
    const { container, getByRole } = render(<Button>{buttonText}</Button>);

    const button = getByRole("button", { name: buttonText });

    expect(button).toHaveTextContent(buttonText);

    expect(container).toMatchSnapshot();
  });

  it("calls onClick handler when clicked", () => {
    const { getByRole } = render(
      <Button onClick={onClick}>{buttonText}</Button>,
    );

    const button = getByRole("button", { name: buttonText });
    fireEvent.click(button);

    expect(onClick).toHaveBeenCalled();
  });

  it("disables button when disabled prop is true", () => {
    const { getByRole } = render(<Button disabled>{buttonText}</Button>);

    const button = getByRole("button", { name: buttonText });

    expect(button).toBeDisabled();
  });

  it("should renders the SpinnerIcon when 'isLoading' is true", () => {
    const { getByTestId } = render(
      <Button isLoading variant="secondary">
        {buttonText}
      </Button>,
    );

    expect(getByTestId("spinner-icon")).toBeInTheDocument();
  });
});
