import { HeadingWithInfo } from "@/components";
import { colors } from "@/tailwind.config";
import { TrendingUp } from "lucide-react";
import { Newspaper } from "lucide-react";

const KeyEvents = () => {
  const items = [
    {
      heading:
        "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.",
      icon: (
        <Newspaper
          className="h-4 md:h-[22px] w-4 md:w-[22px]"
          stroke={colors.blueIcon}
          fill={"white"}
          strokeWidth={1}
        />
      ),
      desc: "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.",
      color: "blue",
    },
    {
      heading:
        "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.",
      icon: (
        <TrendingUp
          className="w-4 md:h-[22px] h-4 md:w-[22px]"
          color="white"
          strokeWidth={1.5}
        />
      ),
      desc: "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.",
      color: "green",
    },
  ];
  return (
    <div>
      <HeadingWithInfo heading="Key Events" />
      <div className="mt-[15px] md:mt-[17px] h-[143px] md:h-[204px] items-center w-full flex flex-row overflow-x-scroll scrollbar-hide md:gap-[14px] gap-[10px]">
        {items.map((item, index) => (
          <KeyEventsItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default KeyEvents;

const KeyEventsItem = ({ heading, desc, icon, color }) => {
  const isBlue = color == "blue";
  return (
    <div
      className={`flex flex-shrink-0 w-[320px] md:w-[456px] rounded-lg md:rounded-xl items-start gap-2 p-[12px] md:p-[18px] h-full ${
        isBlue ? "bg-blueBg" : "bg-greenBg"
      }`}
    >
      <div
        className={`rounded-full p-[10px] ${
          isBlue ? "bg-blueIcon" : "bg-green"
        }`}
      >
        {icon}
      </div>
      <div className="flex flex-col gap-2">
        <h5 className="text-xs md:text-sm text-headingSenti">{heading}</h5>
        <p className="text-[10px] md:text-sm text-textSenti">{desc}</p>
      </div>
    </div>
  );
};
