const BasicPara = ({ heading, desc }) => {
  return (
    <>
      <div className=" gap-[10px] flex flex-col mt-[10px]">
        <h3 className="text-textHero">{heading}</h3>
        <p className="text-[15px] text-textToken">{desc}</p>
      </div>
      <hr className="" />
    </>
  );
};

export default BasicPara;
