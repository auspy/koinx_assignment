import Image from "next/image";
import { ChangeIndicator } from "..";

const TrendingItem = ({ name, symbol, small, data }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-[6px]">
        <Image
          src={small}
          alt={name}
          width={24}
          className="rounded-full"
          height={24}
        />
        <p className="text-heading">
          {name}({symbol})
        </p>
      </div>
      <ChangeIndicator change={data.price_change_percentage_24h?.usd} />
    </div>
  );
};

export default TrendingItem;
