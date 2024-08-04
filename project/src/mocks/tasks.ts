// Constants
import { PRIORITY_STATUS, TASK_STATUS } from "@/constants";

// Types
import { Task } from "@/types";

// mocks
import { PROJECTS } from "./projects";

export const TASKS: Task[] = [
  {
    id: "1",
    title: "Integrating with database",
    project: PROJECTS[0],
    estimation: 90,
    timeSpent: 60,
    status: TASK_STATUS.DONE,
    priority: PRIORITY_STATUS.HIGH,
    date: "Mar 22, 2023",
  },
  {
    id: "2",
    title: "Fix add work log API issue",
    project: PROJECTS[0],
    estimation: 120,
    timeSpent: 60,
    date: "Mar 22, 2023",
    status: TASK_STATUS.IN_PROGRESS,
    priority: PRIORITY_STATUS.LOW,
  },
];
