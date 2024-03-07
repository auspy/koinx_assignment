import getTrendingCoins from "@/lib/utils/getTrendingCoins";
import { SectionContainer, TrendingItem } from "@/components";

const Trending = async () => {
  const coins = await getTrendingCoins();
  return (
    <>
      <SectionContainer heading={"Trending Coins (24h)"}>
        {Array.isArray(coins) &&
          coins.length > 0 &&
          coins.map((coin, index) => {
            console.log(coin.data.price_change_percentage_24h.usd);
            return <TrendingItem key={index} {...coin} />;
          })}
      </SectionContainer>
    </>
  );
};

export default Trending;
