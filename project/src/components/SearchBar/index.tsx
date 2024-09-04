import { ChangeEvent, memo } from "react";

// Components
import { SearchIcon } from "../Icons";

// Utils
import { debounce } from "@/utils";

interface SearchBarProps {
  debounceTime?: number;
  defaultValue?: string;
  onSearch: (term: string) => void;
}

const SearchBar = ({ onSearch, defaultValue }: SearchBarProps) => {
  const handleSearch = debounce((event: ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  });

  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center p-2">
        <SearchIcon />
      </div>
      <input
        id="default-search"
        defaultValue={defaultValue}
        placeholder="Search..."
        type="search"
        className="w-full h-8 outline-0 py-1.5 pl-10 pr-2 shadow text-sm ring-1 focus:ring-mainColor rounded-lg bg-white ring-white focus:ring-indigo-600"
        onChange={handleSearch}
      />
    </div>
  );
};

export default memo(SearchBar);
