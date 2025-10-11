import React from "react";
import IndustryLayout from "../../components/IndustryLayout";

export const Textiles = () => {
  return (
    <div className="pt-[106px]">
    <IndustryLayout
      backgroundImage="/images/industries/textiles.jpg"
      title="textiles"
      description="Anvi, India’s first AI tailoring platform, merges technology and tradition to deliver personalized formal and ethnic wear experiences."
      buttonText="About Us"
      buttonLink="/industries/textiles"
      comingSoonText="We’re pioneering AI tailoring in India to deliver personalized formal and ethnic wear experiences. Stay tuned for a personalized fashion revolution."
    />
    </div>
  );
};