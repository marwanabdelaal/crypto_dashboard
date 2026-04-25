import React, { useEffect, useState, useReducer } from "react";
import CoinCards from "./combonents/CoinCards";
import SelectLimit from "./combonents/SelectLimit";
import FilterCoins from "./combonents/FilterCoins";
import SortCoins from "./combonents/SortCoins";

const App = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [select, setSelect] = useState(10);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("marketCap");
  const filteredCoins = coins.filter((coin) =>
    [coin.id, coin.name, coin.symbol].some((value) =>
      value.toLowerCase().includes(search.toLowerCase()),
    ),
  );
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

  useEffect(() => {
    const API_URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${select}`;
    let ignore = false;

    const fetchData = async () => {
      try {
        if (!ignore) setLoading(true);

        const res = await fetch(API_URL);

        if (!res.ok) throw new Error("Failed to fetch data...");

        const data = await res.json();

        if (!ignore) {
          setCoins(data);
          setError(null);
        }
      } catch (err) {
        if (!ignore) {
          setError(err.message);
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      ignore = true;
    };
  }, [select]);

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

export default App;
