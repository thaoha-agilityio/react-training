import { clsx } from "clsx";
import { memo, ReactNode } from "react";
import { Link } from "react-router-dom";

interface PaginationItemProps {
  isDisabled?: boolean;
  isCurrentPage?: boolean;
  href: string;
  children: ReactNode;
  onClick: () => void;
}

const PaginationItem = ({
  isDisabled = false,
  isCurrentPage = false,
  href,
  children,
  onClick,
}: PaginationItemProps) => {
  const baseClass =
    "flex h-10 p-[15px] rounded-lg border text-gray-400 items-center gap-1 bg-white";

  const disableClass = isDisabled ? "pointer-events-none" : "hover:bg-blue-100";

  // Style for pagination number
  const pageClass = isCurrentPage
    ? "text-indigo-600 bg-blue-100 pointer-events-none"
    : "hover:bg-blue-100";

  return (
    <div
      className={clsx({ "cursor-not-allowed": isDisabled || isCurrentPage })}
    >
      <Link
        to={href}
        className={clsx(baseClass, disableClass, pageClass)}
        onClick={onClick}
      >
        {children}
      </Link>
    </div>
  );
};

export default memo(PaginationItem);
