import React, { useState } from "react";
import SearchbarWrapper from "./Searchbar.style";
import SearchIcon from "@mui/icons-material/Search";
export const Searchbar = () => {
  const [query, setQuery] = useState("");
  const handleChange = (e) => {
    setQuery(e.target.value);
    console.log(query);
  };
  return (
    <SearchbarWrapper>
      <div className="search-bar">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search..."
          value={query}
          className="no-outline"
          onChange={handleChange}
        />
      </div>
    </SearchbarWrapper>
  );
};
