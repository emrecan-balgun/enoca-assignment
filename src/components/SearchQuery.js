import React from "react";

function SearchQuery({ searchQuery }) {
  return (
    <h1 className="text-2xl font-semibold text-center">
      Search result for "{searchQuery}"
    </h1>
  );
}

export default SearchQuery;
