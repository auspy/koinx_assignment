import Image from "next/image";
import { ChangeIndicator } from "..";

const MayLikeItem = ({ thumb, data, symbol }) => {
  const sparkline = data.sparkline;
  const price = data.price;
  const priceChange = data.price_change_percentage_24h?.usd;
  return (
    <div className="border w-[159px] md:w-[246px] flex-shrink-0 border-borderCard rounded-[10px] p-[10px]  md:p-[17px]">
      <div className="flex items-center gap-2">
        <Image
          src={thumb}
          className="h-5 w-5 md:h-[26px] md:w-[26px] rounded-full"
          alt={`${symbol}`}
          width={26}
          height={26}
        />
        <div className="flex items-center">
          <p className=" text-[10px] md:text-base font-base">{symbol}</p>
          <ChangeIndicator change={priceChange} size={"small"} />
        </div>
      </div>
      <p className="text-[13px] md:text-[20px] mt-[7.5px] md:mt-3">{price}</p>
      <Image
        className="ml-[18px] md:ml-7  md:w-[140px] md:h-[58px] h-[36px] w-[88px] "
        src={sparkline}
        alt="sparkline"
        width={140}
        height={58}
      />
    </div>
  );
};

export default MayLikeItem;
