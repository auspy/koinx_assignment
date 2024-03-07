import Image from "next/image";
import { ButtonSecondary } from "@/components";

const AlreadyHoldingItem = ({ img, heading, className, style }) => {
  return (
    <div
      className={`${className} p-3 flex items-center gap-7 rounded-[6.65px] `}
      style={style}
    >
      <Image src={`/about${img}.png`} height={128} width={128} alt={heading} />
      <div className="flex flex-col gap-4">
        <h3 className="text-[18px] md:text-[20px] normal-case text-white leading-7 font-bold">
          {heading}
        </h3>
        <ButtonSecondary label="Check Now" />
      </div>
    </div>
  );
};

export default AlreadyHoldingItem;
