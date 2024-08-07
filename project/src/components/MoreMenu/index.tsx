import { memo, useRef, useState } from "react";

// Components
import Button from "../Button";
import { MoreIcon } from "../Icons";

// Types
import { MenuOption } from "@/types";

// Hooks
import { useOutsideClick } from "@/hooks";

interface MoreMenuProps {
  options: MenuOption[];
}

const MoreMenu = ({ options }: MoreMenuProps) => {
  const [isShowMenu, setIsShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setIsShowMenu((prev) => !prev);
  };

  const handleCloseMenu = () => {
    setIsShowMenu(false);
  };

  const modalRef = useRef(null);
  useOutsideClick(modalRef, handleCloseMenu);

  return (
    <div className="relative">
      <Button
        variant="unstyled"
        onClick={handleToggleMenu}
        aria-label="open menu"
      >
        <MoreIcon width={5} className="fill-gray-400" />
      </Button>
      {isShowMenu && (
        <div ref={modalRef}>
          <div className="w-[120px] h-[90px] shadow-md rounded-lg p-2 absolute z-10 bg-white top-0">
            {options.map(({ title, onClick }, index) => (
              <Button
                key={`menu-${index}`}
                variant="unstyled"
                onClick={onClick}
              >
                {title}
              </Button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(MoreMenu);
