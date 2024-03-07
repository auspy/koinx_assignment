const FundamentalItem = ({ heading, value }) => {
  return (
    <div className="w-full lg:max-w-[343px] flex flex-row justify-between items-center border-b p-3 border-borderBtnRow">
      <h5 className="text-sm text-subH">{heading}</h5>
      <p
        className="text-[13px]"
        style={{
          color: "var(--textPerform)",
        }}
      >
        {value}
      </p>
    </div>
  );
};

export default FundamentalItem;
