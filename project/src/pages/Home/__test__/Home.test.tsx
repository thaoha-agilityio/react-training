import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

// Pages
import Home from "..";

// Services
import { api } from "@/services";

// Mocks
import { TASKS } from "@/mocks";

// Hooks
import * as hooks from "@/hooks";

// Constants
import { SUCCESS_MESSAGES, TOAST_STATUS } from "@/constants";

describe("Home page", () => {
  const mockFetchAtPage = jest.fn();
  beforeEach(() => {
    jest.spyOn(api, "getData").mockResolvedValue({ data: TASKS, total: "4" });

    (jest.spyOn(hooks, "useTaskPagination") as jest.Mock).mockImplementation(
      () => ({
        data: TASKS,
        isLoading: false,
        fetchAtPage: mockFetchAtPage,
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

  it("should render TaskForm when click add button", async () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    fireEvent.click(screen.getByText("+ Add Tasks"));

    await waitFor(() => {
      expect(screen.getByText("Add task")).toBeInTheDocument();
    });
  });

  it("should be call delete task successfully", async () => {
    (jest.spyOn(hooks, "useTaskDelete") as jest.Mock).mockReturnValue({
      trigger: (_: string, { onSuccess }: { onSuccess: () => void }) => {
        onSuccess();
      },
    });
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    const mockShowToast = jest.fn();
    (jest.spyOn(hooks, "useToast") as jest.Mock).mockReturnValue({
      showToast: mockShowToast,
    });

    const buttons = screen.getAllByLabelText("open menu");
    fireEvent.click(buttons[0]);

    const deleteBtn = screen.getByText("Delete Task");
    fireEvent.click(deleteBtn);

    await waitFor(() => {
      const submitBtn = screen.getByText("Yes, Delete");
      fireEvent.click(submitBtn);

      expect(mockShowToast).toHaveBeenCalledWith(
        SUCCESS_MESSAGES.DELETED("Task"),
        TOAST_STATUS.SUCCESS,
      );
    });
  });

  it("should be called delete task error", async () => {
    const errorMessage = "Network Error";
    (jest.spyOn(hooks, "useTaskDelete") as jest.Mock).mockReturnValue({
      trigger: (
        _: string,
        { onError }: { onError: (error: string) => void },
      ) => {
        onError(errorMessage);
      },
    });
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    const mockShowToast = jest.fn();
    (jest.spyOn(hooks, "useToast") as jest.Mock).mockReturnValue({
      showToast: mockShowToast,
    });

    const buttons = screen.getAllByLabelText("open menu");
    fireEvent.click(buttons[0]);

    const deleteBtn = screen.getByText("Delete Task");
    fireEvent.click(deleteBtn);

    await waitFor(() => {
      const submitBtn = screen.getByText("Yes, Delete");
      fireEvent.click(submitBtn);

      expect(mockShowToast).toHaveBeenCalledWith(
        errorMessage,
        TOAST_STATUS.ERROR,
      );
    });
  });
});
