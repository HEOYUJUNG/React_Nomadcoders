import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]); // 초기값을 주지 않으면 undefined => length를 구할 수 없음
  // 처음 한 번만 실행!
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length}개)`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins.map((coin) => (
            <option>
              {/* coin API에는 key 값이 있기 때문에 index 따로 안 써도 된다! */}
              {coin.name} ({coin.symbol}) : {coin.quotes.USD.price}USD
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default App;
