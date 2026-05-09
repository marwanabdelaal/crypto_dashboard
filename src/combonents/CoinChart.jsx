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

    const fetchData = async () => {
      {
        const res = await fetch(API_URL);

        const data = await res.json();

        const prices = data.map((price) => ({ x: price[0], y: price[1] }));
        console.log(prices);

        setChart({
          datasets: [
            {
              label: "Prices (USD)",
              data: prices,
              fill: true,
              borderColor: "#007bff",
              backgrounColor: "rgba(0,123,255,0.1)",
              pointRadius: 0,
              tension: 0.3,
            },
          ],
        });
        setLoading(false);
      }
    };

    fetchData();
  }, [coinid]);

  if (loading)
    return (
      <>
        <Square
          size="35"
          stroke="9"
          strokeLength="0.13"
          bgOpacity="0.3"
          speed="0.5"
          color="black"
        />
      </>
    );

  return (
    <div style={{ marginTop: "30px" }}>
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
                callback: (value) => `$${value.toLocaleString()}`,
              },
            },
          },
        }}
      ></Line>
    </div>
  );
};

export default CoinChart;
