import { AlreadyHoldingItem, BasicPara, SectionContainer } from "@/components";

const About = ({ coin, data }) => {
  const desc = `Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis
    tristique pharetra. Diam id et lectus urna et tellus aliquam dictum
    at. Viverra diam suspendisse enim facilisi diam ut sed. Quam
    scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies
    urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque
    fermentum sapien morbi sodales odio sed rhoncus.`;
  const items = data || [
    {
      heading: `What is ${coin}?`,
      desc: (
        <>
          Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume
          of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently
          -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its
          7-day all-time low of $16,394.75. BTC has a circulating supply of
          19.24 M BTC and a max supply of 21 M BTC.
        </>
      ),
    },
    {
      heading: "Lorem ipsum dolor sit amet",
      desc: (
        <>
          {desc}
          <br />
          <br />
          {desc} <br />
          <br />
          {desc}
        </>
      ),
    },
  ];

  const alreadyHolding = [
    {
      img: 1,
      heading: "Calculate your Profits",
      style: {
        background: "var(--gradGreen)",
      },
    },
    {
      img: 1,
      heading: "Calculate your Profits",
      style: {
        background: "var(--gradOrange)",
      },
    },
  ];
  return (
    <SectionContainer style={{ gap: 15 }} heading={"About " + coin}>
      {items.map((item, index) => (
        <BasicPara key={index} heading={item.heading} desc={item.desc} />
      ))}
      <h2 className="text-[21px] md:text-[24px] leading-[47px] text-heading">
        {`Already Holding ${coin}?`}
      </h2>
      <div className="flex flex-col gap-y-[15px] md:flex-row gap-x-8">
        {alreadyHolding.map((item, index) => (
          <AlreadyHoldingItem key={index} {...item} />
        ))}
      </div>
      <hr />
      <p className="text-[15px] text-textToken">{desc}</p>
    </SectionContainer>
  );
};

export default About;
