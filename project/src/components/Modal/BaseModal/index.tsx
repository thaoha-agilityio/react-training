import { ReactNode, memo } from "react";

// Components
import { Button } from "@/components";

interface ConfirmModalProps {
  title: string;
  children: ReactNode;
  onClose: () => void;
}

const BaseModal = ({ title, onClose, children }: ConfirmModalProps) => (
  <div
    className="fixed inset-0 z-40 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none bg-gray-200 bg-opacity-70"
    data-testid="outside-modal"
    onClick={onClose}
  >
    <div className="px-4 py-2 min-w-[450px] z-10 bg-white rounded-lg">
      <div className="flex justify-between items-center">
        <p className="text-xl font-medium p-2 text-gray-700">{title}</p>
        <Button
          variant="unstyled"
          extraStyle="hover:bg-gray-200 w-7 h-8"
          onClick={onClose}
        >
          <span className="text-2xl pb-1">×</span>
        </Button>
      </div>

      <div className="p-6">{children}</div>
    </div>
  </div>
);

export default memo(BaseModal);
