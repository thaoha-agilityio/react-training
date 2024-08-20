import { fireEvent, render } from "@testing-library/react";

// Components
import TaskTable from "..";

// Mocks
import { TASKS } from "@/mocks";

// Constants
import { NOTICE_MESSAGE } from "@/constants";

describe("TaskTable component", () => {
  const mockProps = {
    tasks: TASKS,
    onShowDetail: jest.fn(),
    onShowEditModal: jest.fn(),
    onShowDeleteModal: jest.fn(),
    onSubmit: jest.fn(),
  };
  it("should render the TaskTable correctly", () => {
    const { container } = render(<TaskTable {...mockProps} />);

    expect(container).toMatchSnapshot();
  });

  it("should show edit modal when edit button is clicked", async () => {
    const { getByText, getAllByLabelText } = render(
      <TaskTable {...mockProps} />,
    );

    fireEvent.click(getAllByLabelText("open menu")[0]);
    // Click the edit button for the first task
    fireEvent.click(getByText("Edit Task"));

    expect(mockProps.onShowEditModal).toHaveBeenCalled();
  });

  it("should show delete modal when delete button is clicked", async () => {
    const { getByText, getAllByLabelText } = render(
      <TaskTable {...mockProps} />,
    );

    fireEvent.click(getAllByLabelText("open menu")[0]);
    // Click the edit button for the first task
    fireEvent.click(getByText("Delete Task"));

    expect(mockProps.onShowDeleteModal).toHaveBeenCalledWith("1");
  });

  it("should display a notice message when there are no tasks", () => {
    const { getByText } = render(<TaskTable {...mockProps} tasks={[]} />);

    expect(getByText(NOTICE_MESSAGE)).toBeInTheDocument();
  });

  it("should call onShowDetail when a row is clicked", () => {
    const { getByText } = render(<TaskTable {...mockProps} />);

    fireEvent.click(getByText(TASKS[0].title));

    expect(mockProps.onShowDetail).toHaveBeenCalledWith("1");
  });
});
