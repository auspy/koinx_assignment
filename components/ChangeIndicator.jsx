import { ChevronUp } from "lucide-react";

const ChangeIndicator = ({ change }) => {
  const value = change?.toFixed(2);
  if (!value) {
    return null;
  }
  return (
    <div className="flex items-center gap-2 bg-greenBg rounded py-1 px-2">
      <ChevronUp size={16} className="text-textGreen" />
      <p
        className="text-textGreen"
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
