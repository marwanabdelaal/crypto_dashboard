import React from "react";
import { Link, useParams } from "react-router";
import { useState, useEffect } from "react";
import { Helix } from "ldrs/react";
import CoinChart from "../combonents/CoinChart";

const CoinDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [details, setDetails] = useState([]);
  const erorrImg = <img src="/error.svg" alt="Error" />;
  useEffect(() => {
    const API_URL = `https://api.coingecko.com/api/v3/coins/${id}`;
    let ignore = false;

    const fetchData = async () => {
      try {
        if (!ignore) (setLoading(true), setError(null));

        const res = await fetch(API_URL);

        if (!res.ok) throw new Error("Failed to fetch data...");

        const data = await res.json();

        if (!ignore) {
          setDetails(data);
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
  }, [id]);
  return (
    <>
      {loading && (
        <div className="loading-bar">
          <Helix size="150" speed="1" color="white" />
        </div>
      )}
      {error && <div className="loading-bar">{erorrImg}</div>}
      {!loading && !error && (
        <div className="coin-details-container">
          <Link to={"/"}>Go back to Home Page</Link>
          <>
            <h1 className="coin-details-title">
              {details ? `${details.name} (${details.symbol})` : "Coin Details"}
            </h1>
            <img
              src={details.image.large}
              alt={details.name}
              className="coin-details-image"
            />
            <p>{details.description.en.split(". ")[0] + "."}</p>
            <h2>Rank: #{details.market_cap_rank}</h2>
            <h3>
              Current Price: $
              {details.market_data.current_price.usd.toLocaleString()}
            </h3>
            <h3>
              24H High: ${details.market_data.high_24h.usd.toLocaleString()}
            </h3>
            <h3>
              24H Low: ${details.market_data.low_24h.usd.toLocaleString()}
            </h3>
            <CoinChart coinid={id} />
          </>
        </div>
      )}
    </>
  );
};

export default CoinDetails;
