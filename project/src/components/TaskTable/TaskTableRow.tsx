// Types
import { Project } from "@/types";

// Components
import { PlayIcon } from "@/components/Icons";
import { MoreMenu } from "@/components";

// Utils
import { formatTime, getColorPriority, getColorTaskStatus } from "@/utils";

// Constants
import { PRIORITY_STATUS, TASK_STATUS } from "@/constants";

interface TaskTableRowProps {
  title: string;
  timeSpent: number;
  estimation: number;
  date: string;
  project: Project;
  priority: PRIORITY_STATUS;
  status: TASK_STATUS;
  onShowEditFormModal: () => void;
  onShowConfirmDeleteModal: () => void;
}

const TaskTableRow = ({
  title,
  timeSpent,
  estimation,
  status,
  project,
  date,
  priority,
  onShowEditFormModal,
  onShowConfirmDeleteModal,
}: TaskTableRowProps) => {
  const MENU_OPTION = [
    {
      title: "Edit Task",
      onClick: onShowEditFormModal,
    },
    {
      title: "Delete Task",
      onClick: onShowConfirmDeleteModal,
    },
  ];

  return (
    <tr className="text-left border-b capitalize">
      {/* Project name  and Task name*/}
      <td className="flex gap-3 p-5 items-center">
        <PlayIcon width={30} height={30} className="fill-slate-400" />
        <div>
          <p className="text-zinc-800 font-medium text-base">{title}</p>
          <span className="text-gray-400 text-sm">{project.name}</span>
        </div>
      </td>

      {/* Status */}
      <td className={`p-5 text-sm ${getColorTaskStatus(status).textColor}`}>
        <span
          className={`w-2 h-2 rounded-full inline-block mr-2 ${getColorTaskStatus(status).bgColor}`}
        ></span>
        {status}
      </td>

      {/* Date */}
      {/* TODO:  Don't know how the API will return the data, I will format it later  */}
      <td className="p-5 text-gray-400 text-sm">{date}</td>

      {/* Priority */}
      <td className={`p-5 text-sm ${getColorPriority(priority).textColor}`}>
        <span
          className={`w-2 h-2 rounded-full inline-block mr-2 ${getColorPriority(priority).bgColor}`}
        ></span>
        {priority}
      </td>

      {/* Time Spent */}
      <td className="p-5 text-gray-400 text-sm">{formatTime(timeSpent)}</td>

      {/* Estimation */}
      <td className="p-5 text-gray-400 text-sm">{formatTime(estimation)}</td>
      <td>
        <MoreMenu options={MENU_OPTION} />
      </td>
    </tr>
  );
};

export default TaskTableRow;
