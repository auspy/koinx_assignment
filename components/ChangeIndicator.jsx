import { colors } from "@/tailwind.config";
import { Triangle } from "lucide-react";

const ChangeIndicator = ({ change, size }) => {
  const isSml = size === "small";
  const value = change?.toFixed(2);
  const isPositive = change && change > 0;
  const symbol = isSml ? (isPositive ? "+" : "") : null;
  if (!value) {
    return null;
  }
  return (
    <div
      className={`flex items-center gap-2 ${
        isPositive ? "bg-greenBg" : "bg-bgRed"
      } rounded ${
        isSml ? "px-[2.25px] py-[1.5px] md:py-[2.5px] md:px-1" : "py-1 px-2"
      }`}
    >
      {!isSml && (
        <Triangle
          style={{
            rotate: !isPositive ? "180deg" : "unset",
          }}
          fill={isPositive ? colors.textGreen : colors.textRed}
          size={12}
          strokeWidth={0}
        />
      )}
      <p
        className={`${isPositive ? "text-textGreen" : "text-textRed"} ${
          isSml ? "text-[8px] md:text-xs " : ""
        } `}
        style={{
          lineHeight: isSml ? "14.5px" : "19.36px",
        }}
      >
        {symbol}
        {value}%
      </p>
    </div>
  );
};

export default ChangeIndicator;
