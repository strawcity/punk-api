import { Dispatch, SetStateAction } from "react";

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
}

const SearchBar = ({ searchTerm, setSearchTerm }: SearchBarProps) => {
  return (
    <div className="flex gap-5 max-w-5xl flex-wrap p-5 mx-4">
      <input
        className="h-10 w-64 rounded-full border border-slate-300 focus:outline-none px-3"
        placeholder="Search"
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        value={searchTerm}
      />
      {searchTerm.length > 3 && (
        <button onClick={() => setSearchTerm("")}>Clear search</button>
      )}
    </div>
  );
};

export default SearchBar;
