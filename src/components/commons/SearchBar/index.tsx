import { memo, useEffect, useState } from "react";
import { clsx as c } from "clsx";
import { useDebounceValue } from "@/utils";
import { SearchBarProps } from "@/components/commons/SearchBar/SearchBar.types";
import SearchIcon from "@/assets/search.svg?react";
import CloseIcon from "@/assets/close.svg?react";
import s from "./SearchBar.module.scss";

function SearchBar({ value, onChange }: SearchBarProps) {
  const [searchValue, setSearchValue] = useState(value);
  const debounceSearchValue = useDebounceValue(searchValue);

  function handleValueInput(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(e.target.value);
  }

  useEffect(() => {
    onChange(debounceSearchValue.trim());
  }, [debounceSearchValue, onChange]);

  return (
    <div className={c(s.container, searchValue && s.hasValue)}>
      <SearchIcon className={s.icon} />

      <input
        name="search"
        value={searchValue}
        onChange={handleValueInput}
        placeholder="Search..."
        autoFocus={!!searchValue}
        className={c(s.input)}
      />

      {searchValue && (
        <CloseIcon
          className={c(s.icon, s.iconClose)}
          onClick={() => setSearchValue("")}
        />
      )}
    </div>
  );
}

export default memo(SearchBar);
