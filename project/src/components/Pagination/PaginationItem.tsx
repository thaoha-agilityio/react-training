import { clsx } from "clsx";
import { Link } from "react-router-dom";
import { memo, ReactNode } from "react";

interface PaginationItemProps {
  isDisabled?: boolean;
  isCurrentPage?: boolean;
  href: string;
  children: ReactNode;
}

const PaginationItem = ({
  isDisabled = false,
  isCurrentPage = false,
  href,
  children,
}: PaginationItemProps) => {
  const baseClass =
    "flex h-10 p-[15px] rounded-lg border text-gray-400 items-center gap-1 bg-white";

  const disableClass = isDisabled ? "pointer-events-none" : "hover:bg-blue-100";

  // Style for pagination number
  const pageClass = isCurrentPage
    ? "text-indigo-600 bg-blue-100 pointer-events-none"
    : "hover:bg-blue-100";

  return (
    <Link className={clsx(baseClass, disableClass, pageClass)} to={href}>
      {children}
    </Link>
  );
};

export default memo(PaginationItem);
