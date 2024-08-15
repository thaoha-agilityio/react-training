import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type PaginationState = {
  pagination: Record<number, number[]>;
  totalItems: number;
};

type PaginationActions = {
  setPagination: (page: number, ids: number[]) => void;
  setTotalItems: (totalItems: number) => void;
};

const INITIAL_PAGINATION_STATE = {
  pagination: {} as Record<number, number[]>,
  totalItems: 0,
};

export const usePaginationStore = create<PaginationState & PaginationActions>()(
  immer((set) => ({
    ...INITIAL_PAGINATION_STATE,

    setPagination: (page: number, ids: number[]) =>
      set((state) => {
        state.pagination[page] = ids;
      }),

    setTotalItems: (totalItems: number) =>
      set((state) => {
        state.totalItems = totalItems;
      }),
  })),
);
