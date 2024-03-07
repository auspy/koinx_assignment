export const getCurrentPrice = async (coin = "bitcoin") => {
  const base = "https://api.coingecko.com/api/v3/";
  const options = {
    vs_currencies: "inr,usd",
    include_24hr_change: true,
    precision: 2,
    ids: coin,
  };
  const params = new URLSearchParams(options);
  const res = await fetch(`${base}simple/price?${params.toString()}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-cg-demo-api-key": process.env.COINGECKO_API_KEY,
    },
  }).then((res) => res.json());
  return res;
};
