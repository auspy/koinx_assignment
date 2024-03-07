import {
  FundamentalItem,
  HeadingWithInfo,
  SectionContainer,
  TodayLowHigh,
} from "@/components";

const Performance = () => {
  const fundamentalList = [
    {
      heading: "Market Cap",
      value: "$1.5T",
    },
    {
      heading: "24h Trading Volume",
      value: "$1.5T",
    },
    {
      heading: "All-Time High",
      value: "$1.5T",
    },
    {
      heading: "Circulating Supply",
      value: "$1.5T",
    },
    {
      heading: "Total Supply",
      value: "$1.5T",
    },
    {
      heading: "Max Supply",
      value: "$1.5T",
    },
  ];
  return (
    <>
      <SectionContainer heading="Performance">
        <TodayLowHigh
          itemLeft={{ heading: "Today's Low", value: "$1.5T" }}
          itemRight={{ heading: "Today's High", value: "$1.5T" }}
        />
        <TodayLowHigh
          itemLeft={{ heading: "Today's Low", value: "$1.5T" }}
          itemRight={{ heading: "Today's High", value: "$1.5T" }}
        />
        <div className="flex mt-7 flex-col md:gap-4">
          <HeadingWithInfo iconColor="light" heading={"Fundamentals"} />
          <div className="flex justify-between flex-wrap flex-row gap-x-5">
            {fundamentalList.map((item, index) => (
              <FundamentalItem
                key={index}
                heading={item.heading}
                value={item.value}
              />
            ))}
          </div>
        </div>
      </SectionContainer>
    </>
  );
};

export default Performance;
