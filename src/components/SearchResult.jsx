import React from "react"

export const SearchResult = ({ result }) => {
  return (
    <div
      className="search-res"
      onClick={(e) => alert(`You selected ${result}!`)}
    >
      {result}
    </div>
  );
};

