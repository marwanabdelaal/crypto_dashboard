import React from "react";

const SortCoins = ({ sort, setSort }) => {
  return (
    <div className="controls">
      <label htmlFor="Sort">Sort Coins </label>
      <select
        className="sort"
        type="text"
        value={sort}
        onChange={(e) => setSort(e.target.value)}
      >
        <option value="market-cap-high">Market Cap (High → Low)</option>
        <option value="market-cap-low">Market Cap (Low → High)</option>
        <option value="price-high">Price (High → Low)</option>
        <option value="price-low">Price (Low → High)</option>
        <option value="name">Name (A-Z)</option>
        <option value="name2">Name (Z-A)</option>
      </select>
    </div>
  );
};

export default SortCoins;
