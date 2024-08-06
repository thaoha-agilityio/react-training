import { calculateTotalPages, generatePagination } from "..";

describe("generatePagination", () => {
  test("should display all pages without ellipsis if totalPages is 5 or less", () => {
    expect(generatePagination(1, 5)).toEqual([1, 2, 3, 4, 5]);
  });

  test("should display the first 4 pages, an ellipsis, and the last page if currentPage is among the first 4 pages", () => {
    expect(generatePagination(3, 10)).toEqual([1, 2, 3, 4, "...", 10]);
  });

  test("should display the first 2 pages, an ellipsis, and the last 3 pages if currentPage is among the last 3 pages", () => {
    expect(generatePagination(8, 10)).toEqual([1, 2, "...", 8, 9, 10]);
  });

  test("should display the first page, an ellipsis, the current page and its neighbors, another ellipsis, and the last page if currentPage is somewhere in the middle", () => {
    expect(generatePagination(5, 10)).toEqual([1, "...", 4, 5, 6, "...", 10]);
  });
  test("calculateTotalPages", () => {
    expect(calculateTotalPages(10, 5)).toBe(2);
  });
});
