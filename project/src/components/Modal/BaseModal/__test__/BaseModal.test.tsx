import { fireEvent, render } from "@testing-library/react";

// Component
import BaseModal from "..";

describe("BaseModal component", () => {
  const mockProps = {
    onClose: jest.fn(),
  };

  it("should render BaseModal component correctly", () => {
    const { container } = render(
      <BaseModal title="Delete Confirmation" onClose={mockProps.onClose}>
        <p>Are you sure you want to delete this item?</p>
      </BaseModal>,
    );

    expect(container).toMatchSnapshot();
  });

  it("should call onClosePopup when the background is clicked", () => {
    const { container } = render(
      <BaseModal title="Delete Confirmation" onClose={mockProps.onClose}>
        <p>Are you sure you want to delete this item?</p>
      </BaseModal>,
    );

    fireEvent.mouseDown(container); // Simulate click outside the modal

    expect(mockProps.onClose).toHaveBeenCalled();
  });
});
