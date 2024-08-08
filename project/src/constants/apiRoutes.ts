export const API_BASE_URL = process.env.VITE_API_URL;

export const API_ROUTES = {
  TASKS: "/tasks",
  TASK_DETAIL: (id: string) => `/tasks/${id}`,
  PROJECTS: "/projects",
};
