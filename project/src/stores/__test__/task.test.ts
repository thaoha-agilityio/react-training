import { act, renderHook } from "@testing-library/react";

// Stores
import { useTaskStore } from "../task";

// Mocks
import { TASKS } from "@/mocks";

describe("useTaskStore", () => {
  it("should initialize with an empty tasks state", () => {
    const { result } = renderHook(() => useTaskStore());

    expect(result.current.tasks).toEqual({});
  });
  it("should add a task to the store when setTask is called", () => {
    const { result } = renderHook(() => useTaskStore());

    act(() => {
      result.current.setTask(TASKS[0]);
    });

    expect(result.current.tasks).toEqual({
      [TASKS[0].id]: TASKS[0],
    });
  });
});
