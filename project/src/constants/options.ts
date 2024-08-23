// Types
import { Option, RadioOptions } from "@/types";

// Status
import { PRIORITY_STATUS, TASK_STATUS } from "./status";

export const TIME_OPTION: Option[] = [
  {
    value: "30",
    label: "30 minutes",
  },
  {
    value: "60",
    label: "1hrs",
  },
  {
    value: "90",
    label: "1hrs 30m",
  },
  {
    value: "120",
    label: "2hrs",
  },
];

export const PROJECT_OPTION: Option[] = [
  {
    value: "1",
    label: "Microsoft",
  },
  {
    value: "2",
    label: "Google",
  },
  {
    value: "3",
    label: "Twitter",
  },
];

export const TASK_STATUS_OPTIONS: RadioOptions[] = [
  {
    value: TASK_STATUS.NOTE_STARTED,
    label: TASK_STATUS.NOTE_STARTED,
    color: "text-blue-950",
  },
  {
    value: TASK_STATUS.IN_PROGRESS,
    label: TASK_STATUS.IN_PROGRESS,
    color: "text-indigo-600",
  },
  {
    value: TASK_STATUS.DONE,
    label: TASK_STATUS.DONE,
    color: "text-green-600",
  },
];

export const TASK_PRIORITY_OPTIONS: RadioOptions[] = [
  {
    value: PRIORITY_STATUS.LOW,
    label: PRIORITY_STATUS.LOW,
    color: "text-purple-500",
  },
  {
    value: PRIORITY_STATUS.MEDIUM,
    label: PRIORITY_STATUS.MEDIUM,
    color: "text-orange-400",
  },
  {
    value: PRIORITY_STATUS.HIGH,
    label: PRIORITY_STATUS.HIGH,
    color: "text-red-600",
  },
];
