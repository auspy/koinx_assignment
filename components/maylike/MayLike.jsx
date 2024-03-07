import { MayLikeItem, SectionContainer } from "@/components";
import getTrendingCoins from "@/lib/utils/getTrendingCoins";

const MayLike = async () => {
  const coins = await getTrendingCoins();
  return (
    <div className="lg:bg-white lg:w-screen">
      <div className="lg:container lg:pt-16">
        <SectionContainer
          style={{
            gap: "20px",
            border: 0,
          }}
          heading={"You may also like"}
        >
          <div className=" -mt-6 md:mt-0 flex flex-row scrollbar-hide overflow-x-scroll items-center gap-[10px] ">
            {Array.isArray(coins) &&
              coins.length > 0 &&
              coins.map((coin, index) => {
                return <MayLikeItem key={index} {...coin} />;
              })}
          </div>
        </SectionContainer>
        <SectionContainer
          style={{
            gap: "20px",
            paddingTop: "0px",
            border: 0,
          }}
          heading={"Trending Coins"}
        >
          <div className="-mt-6 md:mt-0 flex flex-row scrollbar-hide overflow-x-scroll items-center gap-[10px] ">
            {Array.isArray(coins) &&
              coins.length > 0 &&
              coins.map((coin, index) => {
                return <MayLikeItem key={index} {...coin} />;
              })}
          </div>
        </SectionContainer>
      </div>
    </div>
  );
};

export default MayLike;
