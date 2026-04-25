import React from "react";

const FilterCoins = ({search,setSearch}) => {
  return (
    <div className="filter">
      <label htmlFor="search">Search Coins </label>
      <input
        type="text"
        value={search}
        placeholder="Filter Coins By Name/Symbol"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default FilterCoins;
