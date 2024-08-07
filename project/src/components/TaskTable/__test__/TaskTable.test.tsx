import { fireEvent, render } from "@testing-library/react";

// Components
import TaskTable from "..";

// Mocks
import { TASKS } from "@/mocks";

describe("TaskTable component", () => {
  it("should render the TaskTable correctly", () => {
    const { container } = render(<TaskTable tasks={TASKS} />);

    expect(container).toMatchSnapshot();
  });

  it("should show edit modal when edit button is clicked", async () => {
    const { getByText, getAllByLabelText, findByText } = render(
      <TaskTable tasks={TASKS} />,
    );

    fireEvent.click(getAllByLabelText("open menu")[0]);
    // Click the edit button for the first task
    fireEvent.click(getByText("Edit Task"));

    // Check that the edit modal is displayed
    expect(await findByText("Edit task")).toBeInTheDocument();
  });

  it("should show delete modal when delete button is clicked", async () => {
    const { getByText, getAllByLabelText, findByText } = render(
      <TaskTable tasks={TASKS} />,
    );

    fireEvent.click(getAllByLabelText("open menu")[0]);
    // Click the edit button for the first task
    fireEvent.click(getByText("Delete Task"));

    // Check that the edit modal is displayed
    expect(await findByText("Delete Confirmation")).toBeInTheDocument();
  });

  it("should close the edit modal when cancel button is clicked", async () => {
    const { getByText, getAllByLabelText, queryByText } = render(
      <TaskTable tasks={TASKS} />,
    );

    // Open the edit modal
    fireEvent.click(getAllByLabelText("open menu")[0]);
    fireEvent.click(getByText("Edit Task"));

    // Click the cancel button
    fireEvent.click(getByText("Cancel"));

    // Check that the edit modal is no longer displayed
    expect(queryByText("Edit task")).not.toBeInTheDocument();
  });

  it("should close the delete modal when cancel button is clicked", async () => {
    const { getByText, getAllByLabelText, queryByText } = render(
      <TaskTable tasks={TASKS} />,
    );

    // Open the delete modal
    fireEvent.click(getAllByLabelText("open menu")[0]);
    fireEvent.click(getByText("Delete Task"));

    fireEvent.click(getByText("Cancel"));

    expect(queryByText("Delete Confirmation")).not.toBeInTheDocument();
  });
});
