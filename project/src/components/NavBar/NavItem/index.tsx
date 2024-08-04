import { ComponentType, memo } from "react";
import { NavLink } from "react-router-dom";

interface NavItemProps {
  to: string;
  label: string;
  icon?: ComponentType<{ className: string }>;
}

const NavItem = ({ to, label, icon: Icon }: NavItemProps) => (
  <NavLink
    to={to}
    className="flex gap-2 text-sm hover:bg-indigo-50 h-[40px] p-2 rounded-md"
  >
    {({ isActive }) => {
      const activeClassName = isActive ? "text-indigo-600" : "text-neutral-400";
      const iconClassName = isActive ? "fill-indigo-600" : "fill-neutral-400";

      return (
        <>
          {Icon && <Icon className={iconClassName} />}
          <span className={activeClassName}>{label}</span>
        </>
      );
    }}
  </NavLink>
);

export default memo(NavItem);
