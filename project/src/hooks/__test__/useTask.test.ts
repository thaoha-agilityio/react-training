import { act, renderHook, waitFor } from "@testing-library/react";

// Mocks
import { TASKS } from "@/mocks";

// Services
import { api } from "@/services";

// Hooks
import {
  useTaskCreate,
  useTaskDelete,
  useTaskEdit,
  useTaskGetDetail,
  useTaskPagination,
} from "../useTask";

describe("useTask hooks", () => {
  it("should call API with correct URL when getting list", async () => {
    // Mock API response
    jest.spyOn(api, "getData").mockResolvedValue({ data: TASKS, total: "4" });

    // Render the hook
    const { result } = renderHook(() => useTaskPagination());

    // Call the mutation function
    result.current.fetchAtPage(1);

    await waitFor(() => {
      expect(result.current.isLoading).toEqual(false);
      expect(result.current.error).toBe("");
      expect(result.current.totalItems).toBe(4);
      expect(result.current.currentPage).toBe(1);
    });
  });

  it("should call API with correct URL when get detail item", async () => {
    const task = {
      id: "5",
      title: "fix bugs",
      project: {
        id: "3",
        name: "facebook",
      },
      estimation: 120,
      timeSpent: 60,
      date: "Mar 22, 2024",
      status: "not started",
      priority: "high",
    };
    // Mock API response
    jest.spyOn(api, "getData").mockResolvedValue({ data: task, total: "1" });

    // Render the hook
    const { result } = renderHook(() => useTaskGetDetail("5"));
    act(() => {
      waitFor(() => {
        expect(result.current.isLoading).toEqual(false);
        expect(result.current.error).toBe("");
        expect(result.current.taskDetail).toEqual(TASKS[0]);
      });
    });
  });

  it("should call API with correct URL when create new item", async () => {
    const onSuccess = jest.fn();
    const onError = jest.fn();

    jest.spyOn(api, "postData").mockResolvedValue(TASKS[0]);

    const { result } = renderHook(() => useTaskCreate());

    // Call the mutation function
    result.current.trigger(TASKS[0], {
      onSuccess: onSuccess,
      onError: onError,
    });

    await waitFor(() => {
      expect(result.current.isLoading).toEqual(false);
    });
  });

  it("should call API with correct URL when updating item", async () => {
    const onSuccess = jest.fn();
    const onError = jest.fn();

    jest.spyOn(api, "putData").mockResolvedValue(TASKS[0]);

    const { result } = renderHook(() => useTaskEdit());

    // Call the mutation function
    result.current.trigger(TASKS[0], {
      onSuccess: onSuccess,
      onError: onError,
    });

    await waitFor(() => {
      expect(result.current.isLoading).toEqual(false);
    });
  });

  it("should call API with correct URL when deleting item", async () => {
    const onSuccess = jest.fn();
    const onError = jest.fn();

    jest.spyOn(api, "deleteData").mockImplementation();

    const { result } = renderHook(() => useTaskDelete());

    // Call the mutation function
    result.current.trigger("1", {
      onSuccess: onSuccess,
      onError: onError,
    });

    await waitFor(() => {
      expect(result.current.isLoading).toEqual(false);
    });
  });
});
