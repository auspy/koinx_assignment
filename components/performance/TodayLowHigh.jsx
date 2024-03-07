const TodayLowHigh = ({ itemLeft, itemRight }) => {
  return (
    <div className="flex items-center">
      <HeadingItem {...itemLeft} />
      <div
        className="h-1 rounded-[10px] w-full"
        style={{
          background: "var(--grad)",
        }}
      />
      <HeadingItem {...itemRight} isRight={true} />
    </div>
  );
};

export default TodayLowHigh;

const HeadingItem = ({ heading, value, isRight = false }) => {
  return (
    <div className="w-[94px] flex-shrink-0 md:w-[116px] flex flex-col gap-[10px]">
      <h5
        className={`text-xs text-text ${isRight ? "text-right" : "text-left"}`}
        style={{
          fontWeight: 400,
        }}
      >
        {heading}
      </h5>
      <p
        className={`text-text ${isRight ? "text-right" : "text-left"}`}
        style={{}}
      >
        {value}
      </p>
    </div>
  );
};
