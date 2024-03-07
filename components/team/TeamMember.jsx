import Image from "next/image";

const TeamMember = ({ img, name, subHeading, desc }) => {
  return (
    <div className=" rounded-lg flex flex-col md:flex-row gap-[30px] items-center bg-blueBg p-[11px] md:py-3 md:px-7">
      <div className="w-[128px] flex-shrink-0 flex flex-col items-center">
        <Image
          className="rounded-[7px]"
          src={`/team/${img}.png`}
          height={105}
          width={96}
          alt={name}
        />
        <h3 className="text-[15px] mt-3 text-center text-heading">{name}</h3>
        <p
          className="text-xs mt-1 text-center "
          style={{
            color: "#788F9B",
          }}
        >
          {subHeading}
        </p>
      </div>
      <p
        style={{
          fontWeight: 400,
        }}
        className=" text-heading"
      >
        {desc}
      </p>
    </div>
  );
};

export default TeamMember;
