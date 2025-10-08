import React from "react";
import HeroSection from "../components/HeroSection";

const About = () => {
  return (
    <div id="about" className="w-full">

      {/* Hero Section */}
      <HeroSection
        backgroundImage="/images/about.png"
        title="We Engineer It."
        description="At Anvi, we don’t just build robots — we build the future. Our
            mission is to deliver strategic advantage through breakthrough
            products, deep-tech systems, and future-proof solutions."
        buttonText="Explore Careers"
        buttonLink="#openings"
        headingWidth="734px"
        descriptionWidth="734px"
      />

      {/* Vision, Mission, Value Section */}
      <section className="relative w-full py-[80px] md:py-[136px] px-6 sm:px-12 md:px-[136px] bg-[#FCFCFC] font-dmsans">
        <div className="max-w-6xl mx-auto grid gap-[60px] md:gap-[90px]">
          {/* Vision */}
          <div className="grid md:grid-cols-2 gap-[60px] md:gap-[120px] items-center">
            <div>
              <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-normal leading-snug tracking-[-1px] text-[#0D1F21] mb-[24px] md:mb-[32px]">
                Our Vision
              </h2>
              <p className="text-[#0D1F21] text-[15px] sm:text-[16px] leading-relaxed">
                At Anvi, our vision is to redefine industries through deep-tech
                innovation. We aim to build robotics and intelligent systems
                that enhance safety, efficiency, and sustainability.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="/images/vision.png"
                alt="Our Vision"
                className="w-full max-w-[400px] md:max-w-[444px] rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Mission */}
          <div className="grid md:grid-cols-2 gap-[60px] md:gap-[120px] items-center">
            <div className="order-2 md:order-1 flex justify-center">
              <img
                src="/images/mission.png"
                alt="Our Mission"
                className="w-full max-w-[400px] md:max-w-[444px] rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-normal leading-snug tracking-[-1px] text-[#0D1F21] mb-[24px] md:mb-[32px]">
                Our Mission
              </h2>
              <p className="text-[#0D1F21] text-[15px] sm:text-[16px] leading-relaxed">
                We bridge traditional practices with modern technologies,
                designing scalable solutions that drive impact and sustainable
                growth.
              </p>
            </div>
          </div>

          {/* Value */}
          <div className="grid md:grid-cols-2 gap-[60px] md:gap-[120px] items-center">
            <div>
              <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-normal leading-snug tracking-[-1px] text-[#0D1F21] mb-[24px] md:mb-[32px]">
                Our Value
              </h2>
              <p className="text-[#0D1F21] text-[15px] sm:text-[16px] leading-relaxed">
                At Anvi, our values define us — Innovation First, Impact Driven,
                and Integrity Always. We aim to create sustainable and
                collaborative solutions that shape a better future.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="/images/value.png"
                alt="Our Value"
                className="w-full max-w-[400px] md:max-w-[444px] rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <div className="w-full bg-gradient-to-b from-[#F4F3F7] to-[#FCFCFC] px-6 sm:px-12 md:px-20 py-[80px] md:py-[100px]">
        {/* Heading */}
        <div className="flex flex-col md:flex-row justify-center font-dm-sans gap-6 max-w-[1161px] mx-auto text-center md:text-left">
          <p className="text-[#121212] font-normal leading-[42px] sm:leading-[50.5px] text-[32px] sm:text-[36px] md:text-[42px]">
            Where <br className="hidden md:block" /> Innovation Meets Purpose
          </p>
          <p className="text-[#465455] font-normal text-[15px] sm:text-[16px] leading-[26px] md:leading-[28px] flex-1">
            At Anvi, we transform bold ideas into impactful technologies that
            empower industries, inspire communities, and create a sustainable
            future.
          </p>
        </div>

        {/* Image Grid */}
        <div className="flex flex-col gap-6 mt-[60px] md:mt-[107px]">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6">
            {/* Large */}
            <div className="relative overflow-hidden rounded-2xl shadow-lg h-[300px] sm:h-[351px]">
              <img
                src="/images/about3.1.png"
                alt="Technological Excellence"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#1E1E1EE5] flex flex-col justify-end p-6 sm:p-8 text-white">
                <h3 className="text-[24px] sm:text-[30px] mb-2">
                  Technological Excellence
                </h3>
                <p className="text-sm max-w-[340px]">
                  We engineer deep-tech robotics solutions with precision and
                  future-readiness at the core.
                </p>
              </div>
            </div>

            {/* Small */}
            <div className="relative overflow-hidden rounded-2xl shadow-lg h-[300px] sm:h-[351px]">
              <img
                src="/images/about3.2.png"
                alt="Strategic Focus"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#1E1E1EE5] flex flex-col justify-end p-6 sm:p-8 text-white">
                <h3 className="text-[24px] sm:text-[30px] mb-2">
                  Strategic Focus
                </h3>
                <p className="text-sm">
                  Our solutions address real industry challenges with measurable
                  impact and scalability.
                </p>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6">
            {/* Small */}
            <div className="relative overflow-hidden rounded-2xl shadow-lg h-[300px] sm:h-[351px]">
              <img
                src="/images/about3.3.png"
                alt="Collaborative Approach"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#1E1E1EE5] flex flex-col justify-end p-6 sm:p-8 text-white">
                <h3 className="text-[24px] sm:text-[30px] mb-2">
                  Collaborative Approach
                </h3>
                <p className="text-sm">
                  We unite industries and communities to achieve shared
                  progress.
                </p>
              </div>
            </div>

            {/* Large */}
            <div className="relative overflow-hidden rounded-2xl shadow-lg h-[300px] sm:h-[351px]">
              <img
                src="/images/about3.4.png"
                alt="Impact-Driven Solutions"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#1E1E1EE5] flex flex-col justify-end p-6 sm:p-8 text-white">
                <h3 className="text-[24px] sm:text-[30px] mb-2">
                  Impact-Driven Solutions
                </h3>
                <p className="text-sm max-w-[337px]">
                  Every solution delivers measurable outcomes — safety,
                  efficiency, and sustainability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Journey Section */}
      <div className="relative flex flex-col md:flex-row bg-white py-[80px] md:py-[100px] px-6 sm:px-12 md:px-32">
        {/* Section Heading */}
        <div className="mb-12 md:mb-0 max-w-2xl">
          <h2 className="text-[32px] sm:text-[36px] md:text-[40px] font-normal text-[#1E2024] mb-[20px]">
            Our Journey of Innovation
          </h2>
          <p className="text-[#7B828E] text-[15px] sm:text-[16px] mb-2">
            Shaping the Future, Step by Step
          </p>
          <p className="text-[#7B828E] text-[15px] sm:text-[16px]">
            From our first prototypes to large-scale deployments, every
            milestone reflects our commitment to engineering meaningful
            innovation.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-12 md:mt-0 md:ml-16">
          <div className="absolute left-5 md:left-8 top-0 h-full w-[2px] bg-gray-200"></div>

          <div className="space-y-12 pl-12">
            {/* 2020 */}
            <div>
              <span className="text-sm text-gray-400">2020</span>
              <h3 className="text-lg font-semibold text-gray-900 mt-1">
                Foundation of Anvi Robotics
              </h3>
              <p className="text-gray-500 mt-1">
                Started with a vision to revolutionize industries through
                deep-tech innovation.
              </p>
            </div>

            {/* 2022 */}
            <div>
              <span className="text-sm text-gray-400">2022</span>
              <h3 className="text-lg font-semibold text-gray-900 mt-1">
                First Surveillance Robot Launch
              </h3>
              <p className="text-gray-500 mt-1">
                Deployed intelligent surveillance systems enabling real-time
                monitoring and faster response.
              </p>
              <img
                src="/images/about5.jpg"
                alt="Surveillance Robot"
                className="mt-4 rounded-lg shadow-lg w-full max-w-sm"
              />
            </div>

            {/* 2023 */}
            <div>
              <span className="text-sm text-gray-400">2023</span>
              <h3 className="text-lg font-semibold text-gray-900 mt-1">
                AROP White Paper Release
              </h3>
              <p className="text-gray-500 mt-1">
                Published groundbreaking research on autonomous runway
                operations.
              </p>
            </div>

            {/* 2024 */}
            <div>
              <span className="text-sm text-gray-400">2024</span>
              <h3 className="text-lg font-semibold text-gray-900 mt-1">
                Multi-Industry Expansion
              </h3>
              <p className="text-gray-500 mt-1">
                Expanded across 8+ industries globally, delivering intelligent
                systems enhancing safety and sustainability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
