import { fireEvent, render } from "@testing-library/react";

// Component
import MoreMenu from "..";

describe("MoreMenu component", () => {
  const onShowEditFormModal = jest.fn();
  const onShowConfirmDeleteModal = jest.fn();

  const MENU_OPTION = [
    {
      title: "Edit Task",
      onClick: onShowEditFormModal,
    },
    {
      title: "Delete Task",
      onClick: onShowConfirmDeleteModal,
    },
  ];

  it("should render MoreMenu component correctly", () => {
    const { container } = render(<MoreMenu options={MENU_OPTION} />);

    expect(container).toMatchSnapshot();
  });

  it("should call onShowEditFormModal when button is clicked", () => {
    const { getByText, getByLabelText } = render(
      <MoreMenu options={MENU_OPTION} />,
    );

    // Click show more menu
    fireEvent.click(getByLabelText("open menu"));

    fireEvent.click(getByText("Edit Task"));
    expect(onShowEditFormModal).toHaveBeenCalled();
  });

  it("should call onConfirmDeleteModal when button is clicked", () => {
    const { getByText, getByLabelText } = render(
      <MoreMenu options={MENU_OPTION} />,
    );

    // Click show more menu
    fireEvent.click(getByLabelText("open menu"));

    fireEvent.click(getByText("Delete Task"));
    expect(onShowConfirmDeleteModal).toHaveBeenCalled();
  });
});
