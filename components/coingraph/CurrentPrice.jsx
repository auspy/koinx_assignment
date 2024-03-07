import { getCurrentPrice } from "@/lib/utils/getCurrentPrice";
import { ChangeIndicator } from "@/components";

const CurrentPrice = async ({ coin }) => {
  const data = await getCurrentPrice(coin);
  //   console.log("current price", data);
  const price = data?.[coin];
  if (!price) {
    return null;
  }
  return (
    <div className="flex items-start gap-8">
      <div className="flex flex-col items-start">
        {price.usd && <h1 className="text-textHero">${price.usd}</h1>}
        {price.inr && <p className="text-textHero">₹{price.inr}</p>}
      </div>
      <div className="flex items-center gap-3">
        <ChangeIndicator change={price.usd_24h_change} />
        <p className="text-subH text-sm">(24H)</p>
      </div>
    </div>
  );
};

export default CurrentPrice;
