import { useNavigate, useParams } from "react-router-dom";

// Components
import { Breadcrumbs, Button, TaskDetail } from "@/components";
import { SpinnerIcon } from "@/components/Icons";

// Constants
import { ROUTES } from "@/constants";

// Hooks
import { useTaskGetDetail } from "@/hooks";

const TaskDetailPage = () => {
  const { id = "" } = useParams();

  const navigate = useNavigate();

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

  const goBack = () => navigate(-1);

  return (
    <div className="p-9">
      <Breadcrumbs breadcrumbs={DETAIL_TASK_BREADCRUMBS} />

      {isLoading ? <SpinnerIcon /> : <TaskDetail {...taskDetail} />}
      <div className="flex justify-end mt-5">
        <Button onClick={goBack}>Back to tasks</Button>
      </div>
    </div>
  );
};

export default TaskDetailPage;
