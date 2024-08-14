import { Link } from "react-router-dom";
import { memo } from "react";

// Types
import { Breadcrumb } from "@/types";

interface BreadcrumbProps {
  breadcrumbs: Breadcrumb[];
}

const Breadcrumbs = ({ breadcrumbs }: BreadcrumbProps) => (
  <nav aria-label="Breadcrumb" className="mb-6 block">
    <ul className="flex text-md">
      {breadcrumbs.map((breadcrumb, index) => {
        const { href, label } = breadcrumb || {};
        const lastIndex = breadcrumbs.length - 1;

        return (
          <li
            key={href}
            className={
              lastIndex === index ? "text-indigo-600" : "text-zinc-800"
            }
          >
            <Link to={href}>{label}</Link>
            {index < lastIndex && <span className="mx-3 inline-block">/</span>}
          </li>
        );
      })}
    </ul>
  </nav>
);

export default memo(Breadcrumbs);
