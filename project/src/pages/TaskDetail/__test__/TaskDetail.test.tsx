import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";

import TaskDetail from "..";

describe("TaskDetail page", () => {
  it("should render the Home correctly", () => {
    const { container } = render(
      <MemoryRouter>
        <TaskDetail />
      </MemoryRouter>,
    );

    expect(container).toMatchSnapshot();
  });
});
