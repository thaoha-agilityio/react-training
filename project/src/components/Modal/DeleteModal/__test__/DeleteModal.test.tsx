// Libs
import { fireEvent, render } from "@testing-library/react";

// Components
import DeleteModal from "..";

describe("DeleteModal", () => {
  const mockProps = {
    onClose: jest.fn(),
    onSubmit: jest.fn(),
  };

  it("should render the DeleteModal correctly", () => {
    const { getByText, container } = render(<DeleteModal {...mockProps} />);

    expect(container).toMatchSnapshot();

    expect(getByText("Delete Confirmation")).toBeInTheDocument();
    expect(getByText("Cancel")).toBeInTheDocument();
    expect(getByText("Yes, Delete")).toBeInTheDocument();
  });

  it("calls onClose when Cancel button is clicked", () => {
    const { getByText } = render(<DeleteModal {...mockProps} />);

    const cancelButton = getByText("Cancel");
    fireEvent.click(cancelButton);

    expect(mockProps.onClose).toHaveBeenCalled();
  });

  it("calls onSubmit when Yes, Delete button is clicked", () => {
    const { getByText } = render(<DeleteModal {...mockProps} />);

    const deleteButton = getByText("Yes, Delete");
    fireEvent.click(deleteButton);

    expect(mockProps.onSubmit).toHaveBeenCalled();
  });
});
