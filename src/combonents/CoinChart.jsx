import React from "react";
import { Link } from "react-router";
import { useState, useEffect } from "react";
import { Square } from "ldrs/react";
import "ldrs/react/Square.css";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  TimeScale,
} from "chart.js";
import "chartjs-adapter-date-fns";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  TimeScale,
);
const CoinChart = ({ coinid }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [chart, setChart] = useState(null);
  const erorrImg = <img src="/error.svg" alt="Error" />;

  useEffect(() => {
    const API_URL = `https://api.coingecko.com/api/v3/coins/${coinid}/market_chart?vs_currency=usd&days=7`;
    const options = {
      method: "GET",
      headers: { "x-cg-demo-api-key": "" },
    };
    let ignore = false;

    const fetchData = async () => {
      try {
        if (!ignore) {
          setLoading(true);
          setError(null);
        }

        const res = await fetch(API_URL, options);

        if (!res.ok) throw new Error("Failed to fetch data...");

        const data = await res.json();
        const prices = data.prices.map((price) => ({
          x: price[0],
          y: price[1],
        }));

        if (!ignore) {
          setChart({
            datasets: [
              {
                label: "Prices (USD)",
                data: prices,
                fill: true,
                borderColor: "#ffffffc0",
                backgroundColor: "#fff",
                color: "#fff",
                pointRadius: 0,
                tension: 0.3,
              },
            ],
          });
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
  }, [coinid]);

  return (
    <>
      {loading && (
        <Square
          size="35"
          stroke="9"
          strokeLength="0.13"
          bgOpacity="0.3"
          speed="0.5"
          color="black"
        />
      )}
      {error && <div>{erorrImg}</div>}
      {!loading && !error && (
        <div className="coin-details-container">
          <Line
            data={chart}
            options={{
              responsive: true,
              plugins: {
                legend: { display: false },
                tooltip: { mode: "index", intersect: false },
              },
              scales: {
                x: {
                  type: "time",
                  time: {
                    unit: "day",
                  },
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 7,
                  },
                },
                y: {
                  ticks: {
                    callback: (value) => `${value.toLocaleString()}`,
                  },
                },
              },
            }}
          ></Line>
        </div>
      )}
    </>
  );
};

export default CoinChart;
