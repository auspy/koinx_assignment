const SectionContainer = ({ heading, children, style }) => {
  return (
    <div
      style={style}
      className="bg-white flex flex-col px-[10px] py-4 md:p-7 rounded-lg border border-border md:border-0 gap-4 md:gap-7"
    >
      <h2 className="text-[21px] md:text-[24px] leading-7 text-heading">
        {heading}
      </h2>
      {children}
    </div>
  );
};

export default SectionContainer;
