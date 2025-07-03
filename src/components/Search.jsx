import React from "react";

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search">
      <div>
        <img src="/MoviesPro/assets/search.svg" alt="search" />
        <input
          type="text"
          placeholder="Search here..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          name=""
          id=""
        />
      </div>
    </div>
  );
};

export default Search;
