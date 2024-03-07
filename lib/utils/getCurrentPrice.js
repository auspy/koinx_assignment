import FetchCoingecko from "./Fetch";

export const getCurrentPrice = async (coin = "bitcoin") => {
  const options = {
    vs_currencies: "inr,usd",
    include_24hr_change: true,
    precision: 2,
    ids: coin,
  };
  return await FetchCoingecko({
    endpoint: "/simple/price",
    query: options,
  });
};
