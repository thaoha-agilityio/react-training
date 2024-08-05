// Libs
import { render } from "@testing-library/react";

// Components
import RadioGroup from "..";

// Constants
import { TASK_STATUS_OPTIONS } from "@/constants";

describe("RadioGroup", () => {
  const mockProps = {
    label: "Task Status",
    options: TASK_STATUS_OPTIONS,
  };

  it("should render the RadioGroup correctly", () => {
    const { container } = render(<RadioGroup {...mockProps} />);

    expect(container).toMatchSnapshot();
  });

  it("displays error message when provided", () => {
    const errorMessage = "This field is required";
    const { getByText } = render(
      <RadioGroup {...mockProps} errorMessage={errorMessage} />,
    );

    expect(getByText(errorMessage)).toBeInTheDocument();
  });
});
