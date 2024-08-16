import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type PaginationState = {
  pagination: Record<number, string[]>;
  totalItems: number;
};

type PaginationActions = {
  setPagination: (page: number, ids: string[]) => void;
  setTotalItems: (totalItems: number) => void;
  clearPagination: () => void;
};

const INITIAL_PAGINATION_STATE = {
  pagination: {} as Record<number, string[]>,
  totalItems: 0,
};

export const usePaginationStore = create<PaginationState & PaginationActions>()(
  immer((set) => ({
    ...INITIAL_PAGINATION_STATE,

    setPagination: (page: number, ids: string[]) =>
      set((state) => {
        state.pagination[page] = ids;
      }),

    setTotalItems: (totalItems: number) =>
      set((state) => {
        state.totalItems = totalItems;
      }),

    clearPagination: () =>
      set((state) => {
        state.pagination = INITIAL_PAGINATION_STATE.pagination;
      }),
  })),
);
