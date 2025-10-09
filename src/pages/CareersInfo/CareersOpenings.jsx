import React from "react";
import HeroSection from "../../components/heroSection";

export const CareersOpenings= () => {
  return (
    <div className="w-full">
        <HeroSection
            backgroundImage="/images/openings.png"
            title="Looking for the Right Job "
            description="Join Anvi to explore ambitious ideas, work with breakthrough technologies, and build a career that creates real impact."
            buttonText="About Us"
            buttonLink="#about"
            headingWidth="751px"
            descriptionWidth="656px"
        />
    </div>
  );
};