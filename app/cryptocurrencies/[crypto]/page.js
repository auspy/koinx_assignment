import {
  About,
  ButtonRow,
  CoinGraph,
  Performance,
  Sentiment,
} from "@/components";

const page = ({ params, searchParams }) => {
  const crypto = params.crypto;
  return (
    <div className="flex flex-col gap-5 pb-10">
      <CoinGraph coin={crypto} />
      <ButtonRow searchParams={searchParams} />
      <Performance />
      <Sentiment />
      <About coin={crypto} />
    </div>
  );
};

export default page;
