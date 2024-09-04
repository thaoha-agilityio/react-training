/**
 * @param currentPage - The current active page number.
 * @param totalPages - The total number of pages available.
 * @returns Array containing the pages to be displayed.
 */

export const generatePagination = (currentPage: number, totalPages: number) => {
  switch (true) {
    case totalPages <= 5:
      // When there are 5 or fewer pages, display all pages
      return Array.from({ length: totalPages }, (_, i) => i + 1);

    case currentPage < 4:
      // When the current page is near the beginning, display the first 5 pages, ellipsis, and last page
      return [1, 2, 3, 4, 5, "...", totalPages];

    case currentPage >= totalPages - 2:
      // When the current page is near the end, display the first 2 pages, ellipsis, and last 4 pages
      return [
        1,
        2,
        "...",
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];

    default:
      // For pages in the middle, display first page, ellipsis, the previous page, current page, next page, and last page
      return [
        1,
        "...",
        currentPage - 1,
        currentPage,
        currentPage + 1,
        "...",
        totalPages,
      ];
  }
};

/**
 * Calculates the total number of pages based on the total number of items and items per page.
 * @param totalItems The total number of items.
 * @param itemsPerPage The number of items per page.
 * @returns The total number of pages.
 */
export const calculateTotalPages = (
  totalItems: number,
  itemsPerPage: number,
): number => Math.ceil(totalItems / itemsPerPage);
