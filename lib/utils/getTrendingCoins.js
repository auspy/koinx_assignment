import FetchCoingecko from "./Fetch";

const getTrendingCoins = async () => {
  const coins = await FetchCoingecko({
    endpoint: "/search/trending",
  });
  return coins?.coins?.map((coin) => coin?.item);
};

export default getTrendingCoins;
