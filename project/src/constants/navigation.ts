// Icon component
import {
  DashboardIcon,
  ExportIcon,
  IntegrationIcon,
  ReportIcon,
  ToDoIcon,
} from "@/components/Icons";

// Routers
import { ROUTES } from "./routes";

export const SIDEBAR_NAVIGATION = [
  { label: "Dashboard", to: ROUTES.DASHBOARD, icon: DashboardIcon },
  {
    label: "Tasks",
    to: ROUTES.TASKS,
    icon: ToDoIcon,
  },
  { label: "Report", to: ROUTES.REPORT, icon: ReportIcon },
  { label: "Integrations", to: ROUTES.INTEGRATIONS, icon: IntegrationIcon },
  { label: "Export", to: ROUTES.EXPORT, icon: ExportIcon },
];
