import { PRIORITY_STATUS, TASK_STATUS } from "@/constants";
import { Project } from "./project";

export interface Task {
  id: string;
  title: string;
  timeSpent: number;
  estimation: number;
  date: string;
  project: Project;
  priority: PRIORITY_STATUS;
  status: TASK_STATUS;
}
