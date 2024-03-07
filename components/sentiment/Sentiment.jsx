import { AnalystEstimates, SectionContainer } from "@/components";
import KeyEvents from "./KeyEvents";

const Sentiment = () => {
  return (
    <>
      <SectionContainer heading="Sentiment">
        <KeyEvents />
        <AnalystEstimates />
      </SectionContainer>
    </>
  );
};

export default Sentiment;
