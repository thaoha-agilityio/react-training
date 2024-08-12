import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type PaginationState = {
  pagination: Record<number, number[]>;
};

type PaginationActions = {
  setPagination: (page: number, ids: number[]) => void;
};

const INITIAL_PAGINATION_STATE = {
  pagination: {} as Record<number, number[]>,
};

export const usePaginationStore = create<PaginationState & PaginationActions>()(
  immer((set) => ({
    ...INITIAL_PAGINATION_STATE,

    setPagination: (page: number, ids: number[]) =>
      set((state) => {
        state.pagination[page] = ids;
      }),
  })),
);
