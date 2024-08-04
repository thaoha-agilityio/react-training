import { useEffect, useRef } from "react";

// Components
import Button from "../Button";

interface TaskPopupProps {
  onClosePopup: () => void;
  onShowEditFormModal?: () => void;
  onShowConfirmDeleteModal?: () => void;
}

const TaskPopup = ({
  onClosePopup,
  onShowEditFormModal,
  onShowConfirmDeleteModal,
}: TaskPopupProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Effect hook to handle click events outside the modal
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClosePopup();
      }
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [modalRef, onClosePopup]);

  return (
    <div ref={modalRef}>
      <div className="w-[120px] h-[90px] shadow-md rounded-lg p-2 absolute z-10 bg-white top-2">
        <Button variant="unstyled" onClick={onShowEditFormModal}>
          Edit Task
        </Button>
        <Button variant="unstyled" onClick={onShowConfirmDeleteModal}>
          Delete Task
        </Button>
      </div>
    </div>
  );
};

export default TaskPopup;
