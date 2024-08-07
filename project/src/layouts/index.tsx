import { Outlet } from "react-router-dom";

// Components
import { ErrorBoundary, Sidebar } from "@/components";

const MainLayout = () => (
  <div className="flex h-screen">
    <Sidebar />
    <div className="flex-grow bg-slate-50 md:overflow-y-auto">
      <div className="max-w-screen-xl m-auto">
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
      </div>
    </div>
  </div>
);

export default MainLayout;
