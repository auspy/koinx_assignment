import { CoinGraph } from "@/components";

const page = ({ params }) => {
  const crypto = params.crypto;
  return (
    <>
      <CoinGraph />
    </>
  );
};

export default page;
