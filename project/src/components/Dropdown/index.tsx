import { useState } from "react";

// Icons
import { ChevronDownIcon } from "../Icons";

// Types
import { Option } from "@/types";

// Utils
import { getLabelByValue } from "@/utils";

interface DropdownProps {
  selectedValue: string;
  placeholder?: string;
  options: Option[];
  onSelect: (value: string) => void;
}

const Dropdown = ({
  options,
  placeholder,
  selectedValue,
  onSelect,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectOption = (option: string) => {
    onSelect(option);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative inline-block">
      <div>
        <button
          className="inline-flex min-w-[137px] items-baseline justify-between gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          onClick={toggleDropdown}
        >
          {selectedValue
            ? getLabelByValue(options, selectedValue)
            : placeholder}
          <ChevronDownIcon />
        </button>
      </div>

      {isOpen && (
        <div className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-full dark:bg-gray-700">
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
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
    </div>
  );
};

export default Dropdown;
