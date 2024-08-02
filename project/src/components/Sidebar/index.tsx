import { Link } from "react-router-dom";

// Components
import { LogoIcon } from "../Icons";
import NavBar from "../NavBar";
import UserProfile from "../UserProfile";

// Mocks
import { USER } from "@/mocks";

// Constants
import { ROUTES } from "@/constants";

const Sidebar = () => (
  <div className="w-[250px] mx-5 flex flex-col min-h-screen">
    <Link to={ROUTES.DASHBOARD}>
      <div className="flex flex-row gap-2 py-9">
        <LogoIcon />
        <h1 className="text-lg font-bold text-indigo-600 ">Circle In</h1>
      </div>
    </Link>
    <div className="flex-1">
      <NavBar />
    </div>

    <div className="pb-9 pl-1">
      <UserProfile {...USER} />
    </div>
  </div>
);

export default Sidebar;
