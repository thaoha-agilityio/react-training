// Libs
import { fireEvent, render } from "@testing-library/react";

// Components
import InputGroup from "..";

describe("InputGroup", () => {
  it("should render InputGroup component correctly", () => {
    const { container } = render(
      <InputGroup label="first name" id="firstName" />,
    );

    expect(container).toMatchSnapshot();
  });

  it("displays the error message when provided", () => {
    const { getByText } = render(
      <InputGroup
        label="Username"
        id="username"
        errorMessage="This field is required"
      />,
    );
    const errorMessage = getByText(/this field is required/i);
    expect(errorMessage).toBeInTheDocument();
  });

  it("should value correct when change input value", () => {
    const { getByLabelText } = render(
      <InputGroup
        variant="fill"
        label="Username"
        id="username"
        errorMessage="This field is required"
      />,
    );

    const inputElement = getByLabelText(/username/i);

    fireEvent.change(inputElement, { target: { value: "new value" } });
    expect(inputElement).toHaveValue("new value");
  });
});
