import { render } from "@testing-library/react";

// Component
import TaskDetail from "..";

// Mocks
import { TASKS } from "@/mocks";

describe("TaskDetail component", () => {
  it("should  render TaskDetail component correctly", () => {
    const { container } = render(<TaskDetail {...TASKS[1]} />);

    expect(container).toMatchSnapshot();
  });
});
