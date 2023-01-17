import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { changeData, changeSearch } from "../../store/news/newsSlice";

import { getNewsByQuery } from "../../services/NewsService";

function Search() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const handleClick = async () => {
    try {
      const response = await getNewsByQuery(search);
      dispatch(changeData(response.data.articles));
      dispatch(changeSearch(search));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <label
        for="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          onChange={(e) => setSearch(e.target.value)}
          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
          placeholder="Search..."
          required
        />
        <button
          type="submit"
          onClick={() => handleClick()}
          className="text-white absolute right-2.5 bottom-2.5 bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default Search;
