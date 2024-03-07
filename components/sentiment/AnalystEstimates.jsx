import { HeadingWithInfo } from "@/components";
import { colors } from "@/tailwind.config";

const AnalystEstimates = () => {
  const items = [
    {
      heading: "Buy",
      color: "#00B386",
      value: 76,
    },
    {
      heading: "Hold",
      color: colors.grey,
      value: 8,
    },
    {
      heading: "Sell",
      color: colors.red,
      value: 16,
    },
  ];
  return (
    <>
      <HeadingWithInfo heading="Analyst Estimates" />
      <div className="flex  items-center gap-[11px] md:gap-10">
        <div className="flex-shrink-0 rounded-full h-[120px] w-[120px] bg-greenBg grid items-center justify-center">
          <p className="text-4xl text-green flex items-center">
            76<span className="text-base">%</span>
          </p>
        </div>
        {/* bars */}
        <div className="w-full md:w-[553px]">
          {items.map((item, index) => (
            <Bar key={index} {...item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default AnalystEstimates;

const Bar = ({ heading, color, value }) => {
  return (
    <div className="flex items-center gap-[10px] p-2 w-100">
      <p className="text-[15px] flex-shrink-0 text-infoIcon w-[44px]">
        {heading}
      </p>
      <div
        className="rounded-[2px] h-2"
        style={{
          backgroundColor: color,
          width: `${value}%`,
        }}
      />
      <p className="text-sm text-infoIcon">{value}%</p>
    </div>
  );
};
