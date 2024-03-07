import { CurrentPrice, RankBox, TradingViewWidget } from "@/components";
import { memo } from "react";

const shortForms = {
  bitcoin: "BTC",
};
const CoinGraph = ({ coin = "bitcoin" }) => {
  return (
    <>
      <div className="flex md:hidden">
        <CoinGraphHeading coin={coin} />
      </div>
      <div className="bg-white p-7 rounded-lg border border-border md:border-0">
        <div className="hidden md:flex">
          <CoinGraphHeading coin={coin} />
        </div>
        {/* <CurrentPrice coin={coin} /> */}
        <hr className="my-7" />
        {/* <TradingViewWidget /> */}
      </div>
    </>
  );
};

export default CoinGraph;

const CoinGraphHeading = memo(({ coin }) => {
  return (
    <div className="flex flex-row items-center  gap-8 md:gap-10 mb-[18px] md:mb-10">
      <div className="flex items-center gap-2 ">
        <h2 className="text-[21px] md:text-[24px] leading-7">{coin}</h2>
        <h4 className="text-subHHero text-sm md:text-base uppercase">
          {shortForms[coin]}
        </h4>
      </div>
      <RankBox />
    </div>
  );
});
