import { act, renderHook } from "@testing-library/react";

// Hooks
import { usePaginationStore } from "../pagination";

describe("usePaginationStore", () => {
  it("should initialize with an empty pagination state and totalItems as 0", () => {
    const { result } = renderHook(() => usePaginationStore());

    expect(result.current.pagination).toEqual({});
    expect(result.current.totalItems).toBe(0);
  });

  it("should set pagination data correctly when setPagination is called", () => {
    const page = 1;
    const ids = ["1", "2", "3"];

    const { result } = renderHook(() => usePaginationStore());

    act(() => {
      result.current.setPagination(page, ids);
    });

    expect(result.current.pagination).toEqual({
      [page]: ids,
    });
  });

  it("should update totalItems correctly when setTotalItems is called", () => {
    const totalItems = 5;

    const { result } = renderHook(() => usePaginationStore());

    act(() => {
      result.current.setTotalItems(totalItems);
    });

    expect(result.current.totalItems).toBe(totalItems);
  });

  it("should maintain immutability when updating state", () => {
    const page = 1;
    const ids = ["id1", "id2", "id3"];

    const { result } = renderHook(() => usePaginationStore());

    const initialPaginationState = result.current.pagination;

    act(() => {
      result.current.setPagination(page, ids);
    });

    expect(result.current.pagination).not.toBe(initialPaginationState);
    expect(result.current.pagination[page]).toEqual(ids);
  });

  it("should clear pagination data when clearPagination is called", () => {
    const page = 1;
    const ids = ["1", "2", "3"];

    const { result } = renderHook(() => usePaginationStore());

    act(() => {
      result.current.setPagination(page, ids);
      result.current.clearPagination();
    });

    expect(result.current.pagination).toEqual({});
  });
});
