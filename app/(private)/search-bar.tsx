import * as _ from "lodash";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import User from "../components/user";

export default function SearchBar() {
  const [searchResults, setSearchResults] = useState([]);
  const [visible, setVisible] = useState(true);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      // @ts-ignore
      if (ref.current && !ref.current.contains(e.target)) {
        setVisible(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });

  const debouncedFetchSearchResults = _.debounce(fetchSearchResults, 500);

  async function fetchSearchResults(searchText: string) {
    const res = await fetch("/api/search?q=" + searchText);
    if (res.ok) {
      const json = await res.json();
      console.log(json);
      setVisible(true);
      setSearchResults(json.data);
    } else {
      setSearchResults([]);
      setVisible(false);
    }
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    console.log("change", e.target.value);
    debouncedFetchSearchResults(e.target.value);
  }

  function handleClick(e: React.MouseEvent<HTMLInputElement>) {
    setVisible(true);
  }

  return (
    <div
      className="flex flex-row max-w-md w-full justify-end relative"
      ref={ref}
    >
      <input
        onChange={handleChange}
        onClick={handleClick}
        type="text"
        className="p-2 rounded-lg dark:bg-slate-600 dark:text-white bg-white text-black my-2 max-w-xs"
        placeholder="Search"
      />
      {visible && searchResults.length > 0 && (
        <ul className="flex flex-col bg-white text-black absolute p-2 rounded-lg top-14 w-full max-w-sm right-2">
          {searchResults.map((res: UserI) => {
            return (
              <li
                key={res.id}
                className="my-3"
                onClick={() => setVisible(false)}
              >
                <User user={res} />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
