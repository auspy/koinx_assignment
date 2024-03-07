import { colors } from "@/tailwind.config";
import { AlertCircle } from "lucide-react";

const HeadingWithInfo = ({
  heading,
  className,
  iconClass,
  iconColor = "dark",
}) => {
  const fill = iconColor === "light" ? colors.infoIconLight : colors.infoIcon;
  return (
    <div className="flex flex-row items-center gap-2">
      <h3 className={`${className} text-text`}>{heading}</h3>
      <AlertCircle
        className={`${iconClass}`}
        size={21}
        fill={fill}
        stroke="white"
      />
    </div>
  );
};

export default HeadingWithInfo;
