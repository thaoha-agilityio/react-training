import { memo } from "react";
import { useNavigate } from "react-router-dom";

// Constants
import { PRIORITY_STATUS, TASK_STATUS } from "@/constants";

// Types
import { Project } from "@/types";

// Utils
import { formatTime, getColorPriority, getColorTaskStatus } from "@/utils";

// Components
import Button from "../Button";

interface TaskDetailProps {
  title: string;
  timeSpent: number;
  estimation: number;
  date: string;
  project: Project;
  priority: PRIORITY_STATUS;
  status: TASK_STATUS;
}

const TaskDetail = ({
  title,
  timeSpent,
  estimation,
  status,
  project,
  date,
  priority,
}: TaskDetailProps) => {
  const baseClass = "font-medium text-zinc-800";
  const detailClass = "text-gray-500";

  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <div className="mt-10">
      <h2 className="text-xl text-indigo-600 mb-3 font-medium capitalize">
        {title}
      </h2>
      <div className="rounded-3xl bg-white p-4">
        <div className="grid grid-cols-2 capitalize text-sm gap-4 w-[400px] items-center">
          <p className={baseClass}>project name:</p>
          <p className={detailClass}>{project.name}</p>

          <p className={baseClass}>Status:</p>
          <div
            className={`rounded-lg pb-[3px] text-center w-fit px-3 ${getColorTaskStatus(status).bgColor}`}
          >
            <p className="text-white">{status}</p>
          </div>

          <p className={baseClass}>Date:</p>
          <p className={detailClass}>{date}</p>

          <p className={baseClass}>Priority:</p>

          <div
            className={`rounded-lg py-[3px] text-center w-fit px-3 ${getColorPriority(priority).bgColor}`}
          >
            <p className="text-white">{priority}</p>
          </div>

          <p className={baseClass}>Time spent:</p>
          <p className={detailClass}>{formatTime(timeSpent)}</p>

          <p className={baseClass}>Estimation:</p>
          <p className={detailClass}>{formatTime(estimation)}</p>
        </div>
        <div className="flex justify-end mt-5">
          <Button onClick={goBack}>Back to tasks</Button>
        </div>
      </div>
    </div>
  );
};

export default memo(TaskDetail);
