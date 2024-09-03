
import { SearchResult } from "./SearchResult";

 const SearchResultsList = ({ results }) => {
  return (
    <div className="search">
      {results.map((result, id) => {
        return <SearchResult result={result.name} key={id} />;
      })}
    </div>
  );
};

export  default SearchResultsList 