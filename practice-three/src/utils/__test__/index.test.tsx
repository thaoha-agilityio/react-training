import { generateUrl } from "../generateUrl";

describe("generate Url test", () => {
  it("should return correctly if value is string", () => {
    expect(generateUrl({ key: "name", value: "abc" })).toMatch("?name=abc");
  });

  it("should return correctly if value is string array", () => {
    expect(generateUrl({ key: "categoryId", value: ["1", "2"] })).toMatch(
      "?categoryId=[1,2]"
    );
  });
});
