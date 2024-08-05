// Libs
import { fireEvent, render } from "@testing-library/react";

// Components
import Dropdown from "..";

// Constants
import { PROJECT_OPTION } from "@/constants";

describe("Dropdown", () => {
  const mockProps = {
    selectedValue: "1",
    options: PROJECT_OPTION,
    onSelect: jest.fn(),
  };

  it("should render Dropdown component correctly", () => {
    const { container, getByLabelText } = render(<Dropdown {...mockProps} />);
    fireEvent.click(getByLabelText("dropdown"));
    expect(container).toMatchSnapshot();
  });

  it("displays the selected value label", () => {
    const { getByRole } = render(<Dropdown {...mockProps} />);

    expect(getByRole("button")).toHaveTextContent(PROJECT_OPTION[0].label);
  });

  it("calls onSelect with the correct value when an option is clicked", () => {
    const { getByLabelText, getByText } = render(
      <Dropdown {...mockProps} selectedValue="" />,
    );

    fireEvent.click(getByLabelText("dropdown"));

    const option = getByText(PROJECT_OPTION[0].label);
    fireEvent.click(option);

    expect(mockProps.onSelect).toHaveBeenCalledWith("1");
  });

  it("displays error message when provided", () => {
    const errorMessage = "This field is required";
    const { getByText } = render(
      <Dropdown {...mockProps} selectedValue="" errorMessage={errorMessage} />,
    );

    expect(getByText(errorMessage)).toBeInTheDocument();
  });
});
