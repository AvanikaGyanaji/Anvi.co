import React from "react";
import IndustryLayout from "../../components/IndustryLayout";

export const Entertainment = () => {
  return (
    <div className="pt-[106px]">
    <IndustryLayout
      backgroundImage="/images/industries/entertainment.png"
      title="Entertainment"
      description="From vision to experience, we turn imagination into reality. Where immersion meets boundless creativity, stories come alive."
      buttonText="About Us"
      buttonLink="/industries/entertainment"
      comingSoonText="From vision to experience, we’re creating worlds where stories come alive. Stay tuned for immersive journeys shaped by boundless creativity."
    />
    </div>
  );
};
