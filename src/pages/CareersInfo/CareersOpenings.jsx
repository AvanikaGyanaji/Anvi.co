import React from "react";
import HeroSection from "../../components/heroSection";

export const CareersOpenings= () => {
  return (
    <div className="w-full pt-[106px]">
        <HeroSection
            backgroundImage="/images/careers/hero2.1.png"
            title="Looking for the Right Job "
            description="Join Anvi to explore ambitious ideas, work with breakthrough technologies, and build a career that creates real impact."
            buttonText="About Us"
            buttonLink="#about"
            descriptionWidth="656px"
        />

        <section className="px-[140px] py-[100px]">
          <div className="items-center justify-center text-center font-['Wix Madefor Display'] ">
            <p className="text-[48px] font-medium">Open Positions</p>
            <p className="text-[16px] font-normal">Discover opportunities to shape the future with cutting-edge technology</p>
          </div>
        </section>
    </div>
  );
};