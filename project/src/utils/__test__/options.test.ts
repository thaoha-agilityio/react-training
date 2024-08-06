// Constants
import { TIME } from "@/constants";

// Utils
import { findProjectById, getLabelByValue, transformProject } from "../options";

// Mocks
import { PROJECTS } from "@/mocks";

describe("getLabelByValue", () => {
  it("should return the correct label for a given value", () => {
    expect(getLabelByValue(TIME, "30")).toBe("30 minutes");
    expect(getLabelByValue(TIME, "60")).toBe("1hrs");
  });
});

describe("transformProject", () => {
  it("should transform an array of projects into an array of options", () => {
    const expectedOptions = [
      { value: "1", label: "google" },
      { value: "2", label: "microsoft" },
      { value: "3", label: "facebook" },
      {
        value: "4",
        label: "twitter",
      },
    ];

    expect(transformProject(PROJECTS)).toEqual(expectedOptions);
  });
});

describe("findProjectById", () => {
  it("should return the correct project for a given id", () => {
    expect(findProjectById("1", PROJECTS)).toEqual({
      id: "1",
      name: "google",
    });

    expect(findProjectById("2", PROJECTS)).toEqual({
      id: "2",
      name: "microsoft",
    });
  });
});
