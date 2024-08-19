import { lazy, memo, Suspense, useCallback, useState } from "react";

// Types
import { Task } from "@/types";

// Components
import TaskTableHeader from "./TaskTableHeader";
import TaskTableRow from "./TaskTableRow";

// Mocks
import { SpinnerIcon } from "../Icons";

const DeleteModal = lazy(() => import("@/components/Modal/DeleteModal"));

interface TaskTableProp {
  tasks: Task[];
  onShowDetail: (id: string) => void;
  onSubmit: (formData: Task) => void;
  onShowEditModal: (id: string) => void;
}

const TaskTable = ({ tasks, onShowDetail, onShowEditModal }: TaskTableProp) => {
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);

  const [selectedId, setSelectedId] = useState("");

  const handleShowDeleteModal = useCallback((id: string) => {
    setIsShowDeleteModal(true);
    setSelectedId(id);
  }, []);

  const handleCloseDeleteModal = useCallback(() => {
    setIsShowDeleteModal(false);
  }, []);

  // TODO: will integrate  API later
  const handleDeleteTask = useCallback(() => {
    console.log("Delete the task with id", selectedId);

    handleCloseDeleteModal();
  }, [handleCloseDeleteModal, selectedId]);

  return (
    <>
      <table className="shadow-xl rounded-2xl w-full bg-white">
        <TaskTableHeader />

        <tbody>
          {tasks.map((item: Task) => (
            <TaskTableRow
              key={item.id}
              {...item}
              onShowEditFormModal={() => onShowEditModal(item.id)}
              onShowConfirmDeleteModal={() => handleShowDeleteModal(item.id)}
              onShowDetail={onShowDetail}
            />
          ))}
        </tbody>
      </table>

      {/* Delete Modal */}
      {isShowDeleteModal && (
        <Suspense fallback={<SpinnerIcon />}>
          <DeleteModal
            onClose={handleCloseDeleteModal}
            onSubmit={handleDeleteTask}
          />
        </Suspense>
      )}
    </>
  );
};

export default memo(TaskTable);
