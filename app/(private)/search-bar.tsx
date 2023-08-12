import * as _ from "lodash";
import { ChangeEvent, useState } from "react";

export default function SearchBar() {
  const [searchResults, setSearchResults] = useState([]);

  const debouncedFetchSearchResults = _.debounce(fetchSearchResults, 500);

  async function fetchSearchResults(searchText: string) {
    const res = await fetch("/api/search?q=" + searchText);
    if (res.ok) {
      const json = await res.json();
      console.log(json);

      setSearchResults(json.data);
    }
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    console.log("change", e.target.value);
    debouncedFetchSearchResults(e.target.value);
  }

  return (
    <div>
      <input
        onChange={handleChange}
        type="text"
        className="p-2 rounded-lg bg-gray-700 my-2"
        placeholder="Search"
      />
    </div>
  );
}
