import { renderHook } from "@testing-library/react";
import { useDebounce } from "../useDebounce";

describe("useDebounce", () => {
  jest.useFakeTimers();
  test("should update the debouncedValue after the set delay", () => {
    const mockValue = "value";
    const mockDelay = 1000;
    const { result } = renderHook(() => useDebounce(mockValue, mockDelay));
    expect(result.current).toBe(mockValue);

    jest.advanceTimersByTime(mockDelay);
    expect(result.current).toBe(mockValue);
  });

  test("should return the initial value if the delay is not provided", () => {
    const mockValue = "value";
    const { result } = renderHook(() => useDebounce(mockValue));
    expect(result.current).toBe(mockValue);

    jest.advanceTimersByTime(500);
    expect(result.current).toBe(mockValue);
  });
});
