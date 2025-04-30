import React, { useEffect, useState } from "react";
import Stock from "./Stock";

function StockContainer({ onBuyStock }) {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((res) => res.json())
      .then(setStocks);
  }, []);

  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map((stock) => (
        <Stock key={stock.id} stock={stock} onClick={() => onBuyStock(stock)} />
      ))}
    </div>
  );
}

export default StockContainer;
