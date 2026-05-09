import React from "react";
import CoinCards from "../combonents/CoinCards";
import SelectLimit from "../combonents/SelectLimit";
import FilterCoins from "../combonents/FilterCoins";
import SortCoins from "../combonents/SortCoins";

const HomePage = ({
  
  loading,
  error,
  select,
  setSelect,
  search,
  setSearch,
  sort,
  setSort,
  filteredCoins,
}) => {
  const sortedCoins = [...filteredCoins].sort((a, b) => {
    if (sort === "market-cap-high") {
      return b.market_cap - a.market_cap;
    }
    if (sort === "market-cap-low") {
      return a.market_cap - b.market_cap;
    }
    if (sort === "price-high") {
      return b.current_price - a.current_price;
    }
    if (sort === "price-low") {
      return a.current_price - b.current_price;
    }
    if (sort === "name") {
      return a.name.localeCompare(b.name);
    }
    if (sort === "name2") {
      return b.name.localeCompare(a.name);
    }
    return 0;
  });
  return (
    <>
      <h1>🚀 Crypto Dashboard</h1>
      <FilterCoins search={search} setSearch={setSearch} />
      <SortCoins sort={sort} setSort={setSort} />
      <SelectLimit select={select} setSelect={setSelect} />
      <CoinCards coins={sortedCoins} loading={loading} error={error} />
    </>
  );
};

export default HomePage;
