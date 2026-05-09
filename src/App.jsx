import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import AboutPage from "./pages/about.jsx";
import HomePage from "./pages/home.jsx";
import TopNav from "./combonents/topnav.jsx";
import NotFoundPage from "./pages/notfound.jsx";
import CoinDetails from "./pages/coinDetails.jsx";

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
  const erorrImg = <img src="/error.svg" alt="Error" />;

  useEffect(() => {
    const API_URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${select}`;
    let ignore = false;

    const fetchData = async () => {
      try {
        if (!ignore) (setLoading(true), setError(null));

        const res = await fetch(API_URL);

        if (!res.ok) throw new Error("Failed to fetch data...");

        const data = await res.json();

        if (!ignore) {
          setCoins(data);
          setError(null);
        }
      } catch (err) {
        if (!ignore) {
          setError(err);
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
      {error && <div className="loading-bar"> {erorrImg}</div>}
      {!loading && !error && (
        <>
          <TopNav />
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  loading={loading}
                  error={error}
                  select={select}
                  setSelect={setSelect}
                  search={search}
                  setSearch={setSearch}
                  sort={sort}
                  setSort={setSort}
                  filteredCoins={filteredCoins}
                />
              }
            />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/coins/:id" element={<CoinDetails coins={coins} />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </>
      )}
    </>
  );
};

export default App;
