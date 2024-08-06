import { PROJECTS, TASKS } from "@/mocks";
import {
  act,
  fireEvent,
  render,
  waitFor,
  screen,
} from "@testing-library/react";

// Constants
import { ERROR_MESSAGES } from "@/constants";

// Component
import TaskForm from "..";

describe("TaskForm Component", () => {
  const mockProps = {
    projects: PROJECTS,
    onClose: jest.fn(),
  };

  const setup = () => {
    const { getByPlaceholderText, getByText, getByTestId } = render(
      <TaskForm {...mockProps} />,
    );

    const taskName = getByPlaceholderText("Task name");
    const project = getByText("Select project");
    const timeSpent = getByText("Select time");
    const estimation = getByText("Estimation");
    const submitBtn = getByText("Save");
    const cancelBtn = getByText("Cancel");
    const taskStatus = getByTestId("done-status");
    const priority = getByTestId("high-status");

    return {
      taskName,
      project,
      timeSpent,
      estimation,
      submitBtn,
      cancelBtn,
      taskStatus,
      priority,
    };
  };

  it("Should render TaskForm Component correctly", () => {
    const { container } = render(<TaskForm {...mockProps} />);

    expect(container).toMatchSnapshot();
  });

  it("Should render default value correctly", () => {
    const { getByText, getByPlaceholderText } = render(
      <TaskForm {...mockProps} task={TASKS[0]} />,
    );

    // Check form title
    expect(getByText("Edit task")).toBeInTheDocument();
    expect(getByPlaceholderText("Task name")).toHaveValue(TASKS[0].title);
  });

  it("should create the task with invalid data", () => {
    const { taskName, project, submitBtn } = setup();

    act(() => {
      fireEvent.change(taskName, {
        target: { value: TASKS[0].title },
      });

      fireEvent.change(project, {
        target: { value: TASKS[0].project },
      });

      fireEvent.click(submitBtn);
    });

    waitFor(() => {
      expect(
        screen.getByText(ERROR_MESSAGES.FIELD_REQUIRED("Status")),
      ).toBeInTheDocument();
      expect(
        screen.getByText(ERROR_MESSAGES.FIELD_REQUIRED("Priority")),
      ).toBeInTheDocument();
    });
  });

  it("should create the Task with valid data", () => {
    const { taskName, submitBtn, taskStatus, priority } = setup();

    fireEvent.change(taskName, {
      target: { value: TASKS[0].title },
    });

    fireEvent.click(screen.getByText("Select project"));
    fireEvent.click(screen.getByText("google"));
    fireEvent.click(screen.getByText("Select time"));
    fireEvent.click(screen.getByText("1hrs 30m"));
    fireEvent.click(screen.getByText("Estimation"));
    fireEvent.click(screen.getByText("2hrs"));

    fireEvent.click(taskStatus);
    fireEvent.click(priority);

    fireEvent.click(submitBtn);

    waitFor(() => {});
  });
});
