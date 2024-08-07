import { memo, useRef, useState } from "react";

// Icons
import { ChevronDownIcon } from "../Icons";

// Types
import { Option } from "@/types";

// Utils
import { getLabelByValue } from "@/utils";

// Hooks
import { useOutsideClick } from "@/hooks";

interface DropdownProps {
  selectedValue: string;
  placeholder?: string;
  errorMessage?: string;
  options: Option[];
  onSelect: (value: string) => void;
}

const Dropdown = ({
  options,
  placeholder,
  selectedValue,
  onSelect,
  errorMessage,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectOption = (option: string) => {
    onSelect(option);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleCloseDropdown = () => {
    setIsOpen(false);
  };

  const containerRef = useRef(null);
  useOutsideClick(containerRef, handleCloseDropdown);

  return (
    <div ref={containerRef} className="relative inline-block">
      <div>
        <button
          type="button"
          aria-label="dropdown"
          className="inline-flex min-w-[137px] items-baseline justify-between gap-x-1.5 rounded-md bg-white px-3 py-2 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          onClick={toggleDropdown}
        >
          {selectedValue
            ? getLabelByValue(options, selectedValue)
            : placeholder}
          <ChevronDownIcon />
        </button>
      </div>

      {isOpen && (
        <div className="z-50 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-full dark:bg-gray-700">
          <ul className="py-2 text-xs text-gray-700 dark:text-gray-200">
            {options.map(({ value, label }, index) => (
              <li
                key={`${value}-${index}`}
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                onClick={() => handleSelectOption(value)}
              >
                {label}
              </li>
            ))}
          </ul>
        </div>
      )}

      {errorMessage && (
        <p className="text-xs text-red-600 pt-2">{errorMessage}</p>
      )}
    </div>
  );
};

export default memo(Dropdown);
