import { useState } from "react";

// Types
import { Task } from "@/types";

// Components
import { MoreIcon, PlayIcon } from "../Icons";
import { Button, TaskPopup } from "@/components";

// Utils
import { formatTime, getColorPriority, getColorTaskStatus } from "@/utils";

interface TaskTableRowProps {
  task: Task;
}

const TaskTableRow = ({ task }: TaskTableRowProps) => {
  const { title, timeSpent, estimation, status, project, date, priority } =
    task || {};

  const [isShowPopup, setIsShowPopup] = useState(false);

  const handleTogglePopup = () => {
    setIsShowPopup((prev) => !prev);
  };

  const handleClosePopup = () => {
    setIsShowPopup(false);
  };

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
      <td className="relative">
        <Button variant="unstyled" onClick={handleTogglePopup}>
          <MoreIcon width={5} className="fill-gray-400" />
        </Button>

        {isShowPopup && <TaskPopup onClosePopup={handleClosePopup} />}
      </td>
    </tr>
  );
};

export default TaskTableRow;
