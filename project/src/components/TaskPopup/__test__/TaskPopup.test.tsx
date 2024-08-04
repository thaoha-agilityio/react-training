import { fireEvent, render } from "@testing-library/react";

// Component
import TaskPopup from "..";

describe("TaskPopup component", () => {
  const mockProps = {
    onClosePopup: jest.fn(),
    onShowEditFormModal: jest.fn(),
    onShowConfirmDeleteModal: jest.fn(),
  };

  it("should render TaskPopup component correctly", () => {
    const { container } = render(<TaskPopup {...mockProps} />);

    expect(container).toMatchSnapshot();
  });

  it("should call onClosePopup when the background is clicked", () => {
    render(<TaskPopup {...mockProps} />);

    fireEvent.click(document.body);

    expect(mockProps.onClosePopup).toHaveBeenCalledTimes(1);
  });

  it("should call onShowEditFormModal when button is clicked", () => {
    const { getByText } = render(<TaskPopup {...mockProps} />);

    fireEvent.click(getByText("Edit Task"));
    expect(mockProps.onShowEditFormModal).toHaveBeenCalled();
  });

  it("should call onConfirmDeleteModal when button is clicked", () => {
    const { getByText } = render(<TaskPopup {...mockProps} />);

    fireEvent.click(getByText("Delete Task"));
    expect(mockProps.onShowConfirmDeleteModal).toHaveBeenCalled();
  });
});
