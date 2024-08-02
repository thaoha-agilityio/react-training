import { render } from "@testing-library/react";

// Components
import TaskTable from "..";

// Mocks
import { TASKS } from "@/mocks";

// Constants
import { TASK_STATUS } from "@/constants";

describe("TaskTable component", () => {
  it("should render the TaskTable correctly", () => {
    const { container } = render(<TaskTable tasks={TASKS} />);

    expect(container).toMatchSnapshot();
  });

  test("should renders correct styles for task status", () => {
    const { getByText } = render(<TaskTable tasks={TASKS} />);

    // Check if the correct classes are applied based on task status
    expect(getByText(TASK_STATUS.DONE).closest("td")).toHaveClass(
      "text-green-600",
    );
    expect(getByText(TASK_STATUS.IN_PROGRESS).closest("td")).toHaveClass(
      "text-indigo-600",
    );
  });
});
