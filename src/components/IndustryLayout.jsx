import React from "react";
import HeroSection from "./heroSection";

const IndustryLayout = ({
  backgroundImage,
  title,
  description,
  buttonText,
  buttonLink,
  comingSoonText,
}) => {
  return (
    <div>
      <HeroSection
        backgroundImage={backgroundImage}
        title={title}
        description={description}
        buttonText={buttonText}
        buttonLink={buttonLink}
        headingWidth="656px"
        descriptionWidth="656px"
      />

      {/* Coming Soon Section */}
      <section className="flex flex-col items-center justify-center font-['Wix_Madefor_Display'] px-6 md:px-[154px] py-[60px] md:py-[80px] text-center">
        <h2 className="text-[40px] md:text-[64px] text-[#282828] font-normal tracking-[-2px] mb-4">
          Coming Soon
        </h2>
        <p className="max-w-[616px] text-[#465455] text-[16px] mb-6">
          {comingSoonText}
        </p>
        <button className="bg-[#1E9AB0] text-white text-[16px] px-5 py-2 rounded-[16px]">
          Notify Me
        </button>
      </section>

      {/* Explore Other Industries Section */}
      <div className="bg-[#F4F3F7D1] py-16 md:py-24 flex flex-col items-center gap-10 md:gap-20">
        <div className="flex flex-col items-center justify-center font-['Wix_Madefor_Display'] text-center max-w-[618px] px-6">
          <p className="text-[32px] md:text-[48px] tracking-[-2px] text-[#282828] mb-4">
            Explore Other Industries
          </p>
          <p className="text-[16px] text-[#465455]">
            Discover how Anvi is revolutionizing technology across multiple sectors, 
            driving innovation, efficiency, and sustainable growth for a smarter future.
          </p>
        </div>

        {/* Example Cards */}
        <div className="px-6 md:px-[157px] w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[48px] items-center">
            {/* Robotics */}
            <div className="relative group transition-transform duration-300 ease-in-out hover:scale-[1.02] origin-top-left p-6 md:p-[64px] rounded-[32px] bg-white gap-[64px]">
              <div className="flex flex-col justify-center pl-[21.63px]">
                <p className="font-normal text-[24px] md:text-[32px] mb-[14px] leading-normal tracking-[-0.02em] group-hover:text-cyan-600 transition-colors duration-300">
                  Robotics
                </p>
                <p className="font-manrope text-gray-700 leading-relaxed mb-[32px]">
                  Blending intelligence with engineering, our robotics division transforms how humans interact with challenging environments.
                </p>
                <button className="rounded-[32px] border border-gray-200 text-gray-900 px-[23px] py-[11px] self-start">
                  Learn More
                </button>
                <img
                  loading="lazy"
                  src="/images/robotics.png"
                  alt="Robotics"
                  className="w-full sm:w-[300px] md:w-[444px] max-h-[518px] shadow-lg mt-8"
                />
              </div>
            </div>

            {/* Space */}
            <div className="relative group transition-transform duration-300 ease-in-out hover:scale-[1.02] origin-top-left p-6 md:p-[64px] rounded-[32px] bg-white gap-[64px]">
              <div className="flex flex-col justify-center pl-[21.63px]">
                <p className="font-normal text-[24px] md:text-[32px] mb-[14px] leading-normal tracking-[-0.02em] group-hover:text-cyan-600 transition-colors duration-300">
                  Space
                </p>
                <p className="font-manrope text-gray-700 leading-relaxed mb-[32px]">
                    Our mission is to make space safer, smarter, and scalable by advancing innovation and fostering sustainability.
                </p>
                <button className="rounded-[32px] border border-gray-200 text-gray-900 px-[23px] py-[11px] self-start">
                  Learn More
                </button>
                <img
                  loading="lazy"
                  src="/images/robotics.png"
                  alt="Robotics"
                  className="w-full sm:w-[300px] md:w-[444px] max-h-[518px] shadow-lg mt-8"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryLayout;
