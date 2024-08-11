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
  onChangePage: (page: number) => void;
}

const Pagination = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onChangePage,
}: PaginationProps) => {
  const totalPages = calculateTotalPages(totalItems, itemsPerPage);
  const allPages = generatePagination(currentPage, totalPages);

  const handleChangeToPreviousPage = () => {
    onChangePage(currentPage - 1);
  };

  const handleChangeToNextPage = () => {
    onChangePage(currentPage + 1);
  };

  return (
    <div className="flex gap-2">
      <PaginationItem
        isDisabled={currentPage <= 1}
        onClick={handleChangeToPreviousPage}
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
            onClick={() => onChangePage(Number(page))}
          >
            {page}
          </PaginationItem>
        ))}
      </div>

      <PaginationItem
        isDisabled={currentPage >= totalPages}
        onClick={handleChangeToNextPage}
      >
        Next
        <ChevronLeftIcon className="rotate-180" width={12} height={12} />
      </PaginationItem>
    </div>
  );
};

export default memo(Pagination);
