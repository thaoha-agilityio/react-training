import { lazy, memo, Suspense, useCallback, useState } from "react";

// Types
import { Task } from "@/types";

// Components
import TaskTableHeader from "./TaskTableHeader";
import TaskTableRow from "./TaskTableRow";

// Mocks
import { PROJECTS } from "@/mocks";
import { SpinnerIcon } from "../Icons";

const TaskForm = lazy(() => import("@/components/TaskForm"));
const DeleteModal = lazy(() => import("@/components/Modal/DeleteModal"));

interface TaskTableProp {
  tasks: Task[];
  onShowDetail: (id: number) => void;
}

const TaskTable = ({ tasks, onShowDetail }: TaskTableProp) => {
  const [isShowEditModal, setIsShowEditModal] = useState(false);
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);

  const [selectedId, setSelectedId] = useState(0);

  const handleShowEditModal = useCallback((id: number) => {
    setIsShowEditModal(true);
    setSelectedId(id);
  }, []);

  const handleCloseEditModal = useCallback(() => {
    setIsShowEditModal(false);
  }, []);

  const handleShowDeleteModal = useCallback((id: number) => {
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
  }, [selectedId]);

  // TODO: will integrate  API later
  const selectedTask = tasks.find((task) => task.id === selectedId);

  return (
    <>
      <table className="shadow-xl rounded-2xl w-full bg-white">
        <TaskTableHeader />

        <tbody>
          {tasks.map((item: Task) => (
            <TaskTableRow
              key={item.id}
              {...item}
              onShowEditFormModal={() => handleShowEditModal(item.id)}
              onShowConfirmDeleteModal={() => handleShowDeleteModal(item.id)}
              onShowDetail={onShowDetail}
            />
          ))}
        </tbody>
      </table>
      {/* Edit Modal*/}
      {isShowEditModal && (
        <Suspense fallback={<SpinnerIcon />}>
          <TaskForm
            projects={PROJECTS}
            onClose={handleCloseEditModal}
            task={selectedTask}
          />
        </Suspense>
      )}

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
