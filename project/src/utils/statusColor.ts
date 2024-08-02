import { PRIORITY_STATUS, TASK_STATUS } from "@/constants";

/**
 * Get the color styles for a given task status.
 * @param {TASK_STATUS} status - The status of the task.
 * @returns background color and text color classes.
 */
export const getColorTaskStatus = (status: TASK_STATUS) => {
  switch (status) {
    case TASK_STATUS.DONE:
      return {
        bgColor: "bg-green-600",
        textColor: "text-green-600",
      };

    case TASK_STATUS.NOTE_STARTED:
      return {
        bgColor: "bg-blue-950",
        textColor: "text-blue-950",
      };

    case TASK_STATUS.IN_PROGRESS:
    default:
      return {
        bgColor: "bg-indigo-600",
        textColor: "text-indigo-600",
      };
  }
};

/**
 * Get the color styles for a given priority status.
 * @param {PRIORITY_STATUS} priority - The priority status.
 * @returns background color and text color classes.
 */
export const getColorPriority = (priority: PRIORITY_STATUS) => {
  switch (priority) {
    case PRIORITY_STATUS.HIGH:
      return {
        bgColor: "bg-red-600",
        textColor: "text-red-600",
      };

    case PRIORITY_STATUS.MEDIUM:
      return {
        bgColor: "bg-orange-400",
        textColor: "text-orange-400",
      };

    case PRIORITY_STATUS.LOW:
    default:
      return {
        bgColor: "bg-purple-500",
        textColor: "text-purple-500",
      };
  }
};
