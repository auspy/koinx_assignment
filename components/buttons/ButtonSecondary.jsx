import { MoveRight } from "lucide-react";

const ButtonSecondary = ({ label }) => {
  return (
    <button className="rounded-lg max-w-[136px] text-heading bg-white h-[32px] px-[14px] flex items-center gap-[6px] ">
      <h3 className="text-sm flex-shrink-0 ">{label}</h3>
      <MoveRight strokeWidth={2} />
    </button>
  );
};

export default ButtonSecondary;
