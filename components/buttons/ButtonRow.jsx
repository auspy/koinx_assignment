import { ButtonRowItem } from "@/components";

const ButtonRow = ({ items, searchParams }) => {
  const tab = searchParams?.tab || "overview";

  const buttons = items || [
    "overview",
    "fundamentals",
    "news insights",
    "sentiments",
    "team",
    "technicals",
    "tokenomics",
  ];
  return (
    <div className="flex flex-row scrollbar-hide overflow-x-scroll items-center gap-8 border-b border-borderBtnRow">
      {buttons.map((label, index) => (
        <ButtonRowItem active={tab == label} label={label} key={index} />
      ))}
    </div>
  );
};

export default ButtonRow;
