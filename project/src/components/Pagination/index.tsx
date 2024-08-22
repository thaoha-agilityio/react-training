import { memo } from "react";

// Utils
import { calculateTotalPages, generatePagination } from "@/utils";

// Components
import { ChevronLeftIcon } from "../Icons";
import PaginationItem from "./PaginationItem";

// Constants
import { SEARCH_PARAMS } from "@/constants";

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  searchParams: URLSearchParams;
}

const Pagination = ({
  currentPage,
  totalItems,
  itemsPerPage,
  searchParams,
}: PaginationProps) => {
  const totalPages = calculateTotalPages(totalItems, itemsPerPage);
  const allPages = generatePagination(currentPage, totalPages);

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set(SEARCH_PARAMS.PAGE, pageNumber.toString());

    return `${location.pathname}?${params.toString()}`;
  };

  return (
    <div className="flex gap-2">
      <PaginationItem
        isDisabled={currentPage <= 1}
        href={createPageURL(currentPage - 1)}
      >
        <ChevronLeftIcon width={12} height={12} />
        Previous
      </PaginationItem>

      {/* Pagination number */}
      <div className="flex gap-3">
        {allPages.map((page, index) => (
          <PaginationItem
            key={`${page}-${index}`}
            href={createPageURL(page)}
            isCurrentPage={currentPage === page}
          >
            {page}
          </PaginationItem>
        ))}
      </div>

      <PaginationItem
        isDisabled={currentPage >= totalPages}
        href={createPageURL(currentPage + 1)}
      >
        Next
        <ChevronLeftIcon className="rotate-180" width={12} height={12} />
      </PaginationItem>
    </div>
  );
};

export default memo(Pagination);
