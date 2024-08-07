import { memo } from "react";

// Utils
import { calculateTotalPages, generatePagination } from "@/utils";

// Components
import { ChevronLeftIcon } from "../Icons";
import PaginationItem from "./PaginationItem";

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
}

const Pagination = ({
  currentPage,
  totalItems,
  itemsPerPage,
}: PaginationProps) => {
  const totalPages = calculateTotalPages(totalItems, itemsPerPage);
  const allPages = generatePagination(currentPage, totalPages);

  return (
    <div className="flex gap-2">
      <PaginationItem
        isDisabled={currentPage <= 1}
        // TODO: will handle createPageURL later
        href={`/${currentPage - 1}`}
      >
        <ChevronLeftIcon width={12} height={12} />
        Previous
      </PaginationItem>

      {/* Pagination number */}
      <div className="flex gap-3">
        {allPages.map((page, index) => (
          <PaginationItem
            key={`${page}-${index}`}
            isCurrentPage={currentPage === page}
            // TODO: will handle createPageURL later
            href={`/${page}`}
          >
            {page}
          </PaginationItem>
        ))}
      </div>

      <PaginationItem
        isDisabled={currentPage >= totalPages}
        // TODO: will handle createPageURL later
        href={`/${currentPage + 1}`}
      >
        Next
        <ChevronLeftIcon className="rotate-180" width={12} height={12} />
      </PaginationItem>
    </div>
  );
};

export default memo(Pagination);
