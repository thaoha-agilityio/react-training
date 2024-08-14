import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

// Types
import { Task } from "@/types";

type TaskState = {
  tasks: Record<string, Task>;
};

type TaskActions = {
  setTask: (task: Task) => void;
};

const INITIAL_TASK_STATE = {
  tasks: {} as Record<string, Task>,
};

export const useTaskStore = create<TaskState & TaskActions>()(
  immer((set) => ({
    ...INITIAL_TASK_STATE,

    setTask: (task: Task) =>
      set((state) => {
        state.tasks[task.id] = { ...task };
      }),
  })),
);
