import React from "react";
import { Helix } from "ldrs/react";
import "ldrs/react/Helix.css";
//This is Test_01
const CoinCards = ({ coins, loading, error }) => {
  return (
    <div>
      {loading && ( // Default values shown
        <div className="loading-bar">
          <Helix size="150" speed="1" color="white" />
        </div>
      )}
      {error && <div className="loadding-bar">{error}</div>}
      {!loading && !error && (
        <>
          <main className="grid">
            {coins.length > 0 ? (
              coins.map((coin) => {
                return (
                  <div className="coin-card" key={coin.id}>
                    <div className="coin-header">
                      <img
                        src={coin.image}
                        alt={coin.name}
                        className="coin-image"
                      />
                      <h2>{coin.name}</h2>
                      <p className="symbol">{coin.symbol.toUpperCase()}</p>
                    </div>
                    <div className="">
                      <p>Price: ${coin.current_price.toLocaleString()}</p>
                      <p
                        className={
                          coin.price_change_percentage_24h >= 0
                            ? "positive"
                            : "negative"
                        }
                      >
                        %{coin.price_change_percentage_24h.toFixed(2)}
                      </p>
                      <p>Market Cap: ${coin.market_cap.toLocaleString()}</p>
                    </div>
                  </div>
                );
              })
            ) : (
              <p>No Matching Coins!!!</p>
            )}
          </main>
        </>
      )}
    </div>
  );
};

export default CoinCards;
