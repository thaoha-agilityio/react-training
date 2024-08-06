import { formatTime } from "../formatData";

describe("formatTime", () => {
  it("should format less than 60 minutes correctly", () => {
    expect(formatTime(90)).toBe("1hrs 30m");
  });
});
