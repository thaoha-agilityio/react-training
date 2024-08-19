import { memo } from "react";

// Types
import { Task } from "@/types";

// Components
import TaskTableHeader from "./TaskTableHeader";
import TaskTableRow from "./TaskTableRow";

// Constants
import { NOTICE_MESSAGE } from "@/constants";

interface TaskTableProp {
  tasks: Task[];
  onShowDetail: (id: string) => void;
  onSubmit: (formData: Task) => void;
  onShowEditModal: (id: string) => void;
  onShowDeleteModal: (id: string) => void;
}

const TaskTable = ({
  tasks,
  onShowDetail,
  onShowEditModal,
  onShowDeleteModal,
}: TaskTableProp) => (
  <table className="shadow-xl rounded-2xl w-full bg-white">
    <TaskTableHeader />
    {tasks.length ? (
      <tbody>
        {tasks.map((item: Task) => (
          <TaskTableRow
            key={item.id}
            {...item}
            onShowEditFormModal={() => onShowEditModal(item.id)}
            onShowConfirmDeleteModal={() => onShowDeleteModal(item.id)}
            onShowDetail={onShowDetail}
          />
        ))}
      </tbody>
    ) : (
      <p className="text-center">{NOTICE_MESSAGE}</p>
    )}
  </table>
);

export default memo(TaskTable);
