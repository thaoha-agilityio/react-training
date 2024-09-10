import { useParams } from "react-router-dom";

// Components
import { Breadcrumbs, TaskDetail } from "@/components";
import { SpinnerIcon } from "@/components/Icons";

// Constants
import { ROUTES } from "@/constants";

// Hooks
import { useTaskGetDetail } from "@/hooks";

const TaskDetailPage = () => {
  const { id = "" } = useParams();

  const DETAIL_TASK_BREADCRUMBS = [
    {
      label: "Tasks",
      href: ROUTES.DASHBOARD,
    },
    {
      label: "Task detail",
      href: `${ROUTES.TASKS}/${id}`,
    },
  ];

  const { taskDetail, isLoading } = useTaskGetDetail(id);

  return (
    <div className="p-9">
      <Breadcrumbs breadcrumbs={DETAIL_TASK_BREADCRUMBS} />

      {isLoading ? <SpinnerIcon /> : <TaskDetail {...taskDetail} />}
    </div>
  );
};

export default TaskDetailPage;
