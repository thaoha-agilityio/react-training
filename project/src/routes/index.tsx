import { lazy } from "react";
import { RouteObject } from "react-router-dom";

// Constants
import { ROUTES } from "@/constants";

// Pages
const Home = lazy(() => import("@/pages/Home"));

export const Routers: RouteObject[] = [
  {
    path: ROUTES.DASHBOARD,
    element: <Home />,
  },
];
