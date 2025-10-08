import React from "react";

const HeroSection = ({
  backgroundImage,
  title,
  description,
  buttonText,
  buttonLink,
  headingWidth = "full",
  descriptionWidth = "full",
}) => {
  return (
    <section className="relative w-full h-[742px] flex flex-col md:flex-row">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt={title}
          className="w-full h-full object-cover"
        />
        {/* Keep overlay transparent */}
        <div className="absolute top-0 left-0 w-full h-full"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-start px-6 sm:px-12 md:pl-[62px] pt-[120px] md:pt-[163px] max-w-full md:max-w-[751px]">
        <h1
          className="text-[#282828] font-['Wix_Madefor_Display'] font-[600px] text-[36px] sm:text-[44px] md:text-[56px] leading-tight tracking-[-1px] md:tracking-[-2px]"
          style={{ maxWidth: headingWidth }}
        >
          {title}
        </h1>

        <p
          className="mt-4 font-['Wix_Madefor_Display'] font-normal text-[15px] sm:text-[16px] leading-[26px] md:leading-[28px] text-[#000000]"
          style={{ maxWidth: descriptionWidth }}
        >
          {description}
        </p>

        {buttonText && buttonLink && (
          <a
            href={buttonLink}
            className="mt-6 px-6 py-3 sm:px-8 sm:py-3 bg-gradient-to-r from-white to-white
              hover:from-cyan-500 hover:to-cyan-500
              bg-[length:0%_100%] hover:bg-[length:100%_100%]
              bg-left bg-no-repeat
              transition-[background-size] duration-500 ease-out
              text-[#1E9AB0] hover:text-white
              border-2 border-[#1E9AB0] font-['Wix_Madefor_Display'] text-[15px] sm:text-[16px] rounded-[16px] shadow-md inline-flex items-center"
          >
            {buttonText} <span className="text-xl ml-1">↗</span>
          </a>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
