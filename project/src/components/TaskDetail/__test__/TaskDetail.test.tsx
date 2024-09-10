import { fireEvent, render } from "@testing-library/react";

// Component
import TaskDetail from "..";

// Mocks
import { TASKS } from "@/mocks";

// Mock the useNavigate hook
const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("TaskDetail component", () => {
  it("should  render TaskDetail component correctly", () => {
    const { container } = render(<TaskDetail {...TASKS[1]} />);

    expect(container).toMatchSnapshot();
  });

  it("should navigate back when 'Back to tasks' button is clicked", () => {
    const { getByRole } = render(<TaskDetail {...TASKS[1]} />);

    const backButton = getByRole("button", { name: /back to tasks/i });
    fireEvent.click(backButton);
    expect(mockNavigate).toHaveBeenCalled();
  });
});
