import { colors } from "@/tailwind.config";
import { Triangle } from "lucide-react";

const ChangeIndicator = ({ change }) => {
  const value = change?.toFixed(2);
  const isPositive = change && change > 0;
  if (!value) {
    return null;
  }
  return (
    <div
      className={`flex items-center gap-2 ${
        isPositive ? "bg-greenBg" : "bg-bgRed"
      } rounded py-1 px-2`}
    >
      <Triangle
        style={{
          rotate: !isPositive ? "180deg" : "unset",
        }}
        fill={isPositive ? colors.textGreen : colors.textRed}
        size={12}
        strokeWidth={0}
      />
      <p
        className={`${isPositive ? "text-textGreen" : "text-textRed"}`}
        style={{
          lineHeight: "19.36px",
        }}
      >
        {value}%
      </p>
    </div>
  );
};

export default ChangeIndicator;
