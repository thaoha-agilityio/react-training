// Components
import { Button, BaseModal } from "@/components";

interface DeleteModalProps {
  isLoading?: boolean;
  onClose: () => void;
  onSubmit: () => void;
}

const DeleteModal = ({ isLoading, onClose, onSubmit }: DeleteModalProps) => (
  <BaseModal title="Delete Confirmation" onClose={onClose}>
    <p className="text-center">Are you sure you want to delete this item?</p>
    <div className="flex pt-4 items-center justify-center gap-10">
      <Button variant="secondary" onClick={onClose}>
        Cancel
      </Button>
      <Button onClick={onSubmit} isLoading={isLoading}>
        Yes, Delete
      </Button>
    </div>
  </BaseModal>
);

export default DeleteModal;
