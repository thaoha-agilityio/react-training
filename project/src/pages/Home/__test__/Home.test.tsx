import { fireEvent, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

// Pages
import Home from "..";

// Services
import { api } from "@/services";

// Mocks
import { TASKS } from "@/mocks";

// Hooks
import * as hooks from "@/hooks";

describe("Home page", () => {
  beforeEach(() => {
    jest.spyOn(api, "getData").mockResolvedValue({ data: TASKS, total: "4" });

    (jest.spyOn(hooks, "useTaskPagination") as jest.Mock).mockImplementation(
      () => ({
        data: TASKS,
        isLoading: false,
        fetchAtPage: jest.fn(),
      }),
    );
  });
  it("should render the Home correctly", () => {
    const { container } = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    expect(container).toMatchSnapshot();
  });

  it("should render TaskForm when click add button", () => {
    const { getByText } = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    fireEvent.click(getByText("+ Add Tasks"));
  });
});
