import { useState } from "react";

// Types
import { Task } from "@/types";

// Components
import TaskTableHeader from "./TaskTableHeader";
import TaskTableRow from "./TaskTableRow";
import DeleteModal from "../Modal/DeleteModal";
import TaskForm from "../TaskForm";

// Mocks
import { PROJECTS } from "@/mocks";

interface TaskTableProp {
  tasks: Task[];
}

const TaskTable = ({ tasks }: TaskTableProp) => {
  const [isShowEditModal, setIsShowEditModal] = useState(false);
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);

  const [selectedId, setSelectedId] = useState("");

  const handleShowEditModal = (id: string) => {
    setIsShowEditModal(true);
    setSelectedId(id);
  };

  const handleCloseEditModal = () => {
    setIsShowEditModal(false);
  };

  const handleShowDeleteModal = (id: string) => {
    setIsShowDeleteModal(true);
    setSelectedId(id);
  };

  const handleCloseDeleteModal = () => {
    setIsShowDeleteModal(false);
  };

  // TODO: will integrate  API later
  const handleDeleteTask = () => {
    console.log("Delete the task with id", selectedId);

    handleCloseDeleteModal();
  };

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
              task={item}
              onShowEditFormModal={() => handleShowEditModal(item.id)}
              onShowConfirmDeleteModal={() => handleShowDeleteModal(item.id)}
            />
          ))}
        </tbody>
      </table>
      {/* Edit Modal*/}
      {isShowEditModal && (
        <TaskForm
          projects={PROJECTS}
          onClose={handleCloseEditModal}
          task={selectedTask}
        />
      )}

      {/* Delete Modal */}
      {isShowDeleteModal && (
        <DeleteModal
          onClose={handleCloseDeleteModal}
          onSubmit={handleDeleteTask}
        />
      )}
    </>
  );
};

export default TaskTable;
