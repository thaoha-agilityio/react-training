import { ChangeEvent, memo } from "react";

// Components
import { SearchIcon } from "../Icons";

interface SearchBarProps {
  debounceTime?: number;
  onSearch: (term: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center pb-3 px-2">
        <SearchIcon />
      </div>
      <input
        id="default-search"
        placeholder="Search..."
        type="search"
        className="w-full h-8 outline-0 py-1.5 pl-10 text-textDefault text-sm ring-1 focus:ring-mainColor rounded-lg bg-white ring-white focus:ring-indigo-600"
        onChange={handleSearch}
      />
    </div>
  );
};

export default memo(SearchBar);
