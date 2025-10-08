import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="w-full">
      {/* Hero Section */}
      <section className="relative w-full flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/footer.jpg"
            alt="Team working"
            className="w-full h-[376px] object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-[#1E1E1E] opacity-[0.94]" />
        </div>

        {/* Hero Content */}
        <div className="relative flex flex-col items-center text-center px-[20px] py-[93px]">
          <h1 className="text-white font-['Wix_Madefor_Display'] text-[48px] font-normal leading-[28px] tracking-[-2px] mb-[16px]">
            Ready to explore the future with Anvi?
          </h1>

          <p className="mt-[16px] mb-[32px] max-w-[614px] font-['Wix_Madefor_Display'] text-[16px] text-gray-200 leading-relaxed">
            Step into tomorrow with Anvi — where deep-tech innovation meets
            safety, efficiency, and sustainability.
          </p>

          <a
            href="#openings"
            className="rounded-[12px] bg-white text-black px-[32px] py-[8px] font-medium"
          >
            Contact Us <span className="text-xl">↗</span>
          </a>
        </div>
      </section>

      {/* Footer Bottom Section */}
      <div className="bg-[#191919] px-[56px] py-[29px]">
        <img
          src="/logos/anvi-space.png"
          alt="Anvi Logo"
          className="max-w-[530px]"
        />
      </div>
    </footer>
  );
};

export default Footer;
