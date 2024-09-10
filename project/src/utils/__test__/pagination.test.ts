import { calculateTotalPages, generatePagination } from "..";

describe("generatePagination", () => {
  it("should display all pages when totalPages is 5 or less", () => {
    expect(generatePagination(1, 3)).toEqual([1, 2, 3]);
    expect(generatePagination(3, 5)).toEqual([1, 2, 3, 4, 5]);
  });

  it("should display first 5 pages, ellipsis, and last page when currentPage is near the beginning", () => {
    expect(generatePagination(1, 8)).toEqual([1, 2, 3, 4, 5, "...", 8]);
    expect(generatePagination(3, 8)).toEqual([1, 2, 3, 4, 5, "...", 8]);
  });

  it("should display first 2 pages, ellipsis, and last 4 pages when currentPage is near the end", () => {
    expect(generatePagination(7, 8)).toEqual([1, 2, "...", 5, 6, 7, 8]);
    expect(generatePagination(8, 8)).toEqual([1, 2, "...", 5, 6, 7, 8]);
  });

  it("should display first page, ellipsis, previous, current, next pages, and last page when currentPage is in the middle", () => {
    expect(generatePagination(5, 10)).toEqual([1, "...", 4, 5, 6, "...", 10]);
    expect(generatePagination(6, 10)).toEqual([1, "...", 5, 6, 7, "...", 10]);
    expect(generatePagination(4, 10)).toEqual([1, "...", 3, 4, 5, "...", 10]);
  });
  it("calculateTotalPages", () => {
    expect(calculateTotalPages(10, 5)).toBe(2);
  });
});
