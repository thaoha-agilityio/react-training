import { clsx } from "clsx";
import { ComponentType, memo } from "react";
import { NavLink } from "react-router-dom";

interface NavItemProps {
  to: string;
  label: string;
  isEnabled?: boolean;
  icon?: ComponentType<{ className: string }>;
}

const NavItem = ({ to, label, icon: Icon, isEnabled }: NavItemProps) => (
  <div className={clsx({ "cursor-not-allowed": !isEnabled })}>
    <NavLink
      to={to}
      className={clsx(
        "flex gap-2 text-sm hover:bg-indigo-50 h-[40px] p-2 rounded-md",
        {
          "pointer-events-none": !isEnabled,
        },
      )}
    >
      {({ isActive }) => {
        const activeClassName = isActive
          ? "text-indigo-600"
          : "text-neutral-400";
        const iconClassName = isActive ? "fill-indigo-600" : "fill-neutral-400";

        return (
          <>
            {Icon && <Icon className={iconClassName} />}
            <span className={activeClassName}>{label}</span>
          </>
        );
      }}
    </NavLink>
  </div>
);

export default memo(NavItem);
