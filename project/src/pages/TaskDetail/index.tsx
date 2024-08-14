// Components
import { Breadcrumbs, TaskDetail } from "@/components";

// Constants
import { ROUTES } from "@/constants";
import { TASKS } from "@/mocks";

const TaskDetailPage = () => {
  const DETAIL_TASK_BREADCRUMBS = [
    {
      label: "Tasks",
      href: ROUTES.DASHBOARD,
    },
    {
      label: "Task detail",
      href: ROUTES.TASK_DETAIL,
    },
  ];

  return (
    <div className="p-9">
      <Breadcrumbs breadcrumbs={DETAIL_TASK_BREADCRUMBS} />

      {/* TODO: will integrate  API later */}
      <TaskDetail {...TASKS[0]} />
    </div>
  );
};

export default TaskDetailPage;
