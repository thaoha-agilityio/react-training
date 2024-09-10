// Constants
import { SIDEBAR_NAVIGATION } from "@/constants";

// Components
import NavItem from "./NavItem";

const NavBar = () => (
  <div className="flex flex-col gap-4">
    {SIDEBAR_NAVIGATION.map(({ label, icon, to, isEnabled }) => (
      <NavItem
        key={label}
        isEnabled={isEnabled}
        to={to}
        icon={icon}
        label={label}
      />
    ))}
  </div>
);

export default NavBar;
