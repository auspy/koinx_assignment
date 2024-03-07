import {
  About,
  ButtonRow,
  CoinGraph,
  MayLike,
  Performance,
  Sentiment,
  Team,
  Trending,
} from "@/components";

const page = ({ params, searchParams }) => {
  const crypto = params.crypto;
  return (
    <>
      <div className="container flex flex-col lg:flex-row lg:items-start gap-5 pb-10">
        <div className="flex flex-col gap-5 lg:w-[calc(100%_-_447px)]">
          <CoinGraph coin={crypto} />
          <ButtonRow searchParams={searchParams} />
          <Performance />
          <Sentiment />
          <About coin={crypto} />
          <Team />
        </div>
        <div className="flex flex-shrink-0 flex-col gap-5 lg:w-[427px]">
          <Trending />
        </div>
      </div>
      <div className="hidden lg:flex">
        <MayLike />
      </div>
    </>
  );
};

export default page;
