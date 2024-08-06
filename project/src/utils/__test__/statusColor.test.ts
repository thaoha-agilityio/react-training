// Constants
import { PRIORITY_STATUS, TASK_STATUS } from "@/constants";

// Utils
import { getColorPriority, getColorTaskStatus } from "../statusColor";

describe("getColorTaskStatus", () => {
  it("should return correct colors for DONE status", () => {
    expect(getColorTaskStatus(TASK_STATUS.DONE)).toEqual({
      bgColor: "bg-green-600",
      textColor: "text-green-600",
    });
  });

  it("should return correct colors for NOTE_STARTED status", () => {
    expect(getColorTaskStatus(TASK_STATUS.NOTE_STARTED)).toEqual({
      bgColor: "bg-blue-950",
      textColor: "text-blue-950",
    });
  });

  it("should return correct colors for IN_PROGRESS status", () => {
    expect(getColorTaskStatus(TASK_STATUS.IN_PROGRESS)).toEqual({
      bgColor: "bg-indigo-600",
      textColor: "text-indigo-600",
    });
  });
});

describe("getColorPriority", () => {
  it("should return correct colors for HIGH priority", () => {
    expect(getColorPriority(PRIORITY_STATUS.HIGH)).toEqual({
      bgColor: "bg-red-600",
      textColor: "text-red-600",
    });
  });

  it("should return correct colors for MEDIUM priority", () => {
    expect(getColorPriority(PRIORITY_STATUS.MEDIUM)).toEqual({
      bgColor: "bg-orange-400",
      textColor: "text-orange-400",
    });
  });

  it("should return correct colors for LOW priority", () => {
    expect(getColorPriority(PRIORITY_STATUS.LOW)).toEqual({
      bgColor: "bg-purple-500",
      textColor: "text-purple-500",
    });
  });
});
