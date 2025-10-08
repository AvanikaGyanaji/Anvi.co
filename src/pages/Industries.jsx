import React from "react";
import { Link } from "react-router-dom";
import HeroSection from "../components/heroSection";
import { pagesLinksList } from "../utils/PagesLinkList";

const Industries = () => {
  return (
    <div id="industries" className="w-full">
      {/* Hero Section */}
      <HeroSection
        backgroundImage="/images/robot.png"
        title="Industries We Transform"
        description="From Robotics to Space, Anvi transforms industries with intelligent automation 
        and advanced technology."
        buttonText="About Us"
        buttonLink="#openings"
        headingWidth="655px" 
        descriptionWidth="656px"
      />

      {/* Industries */}
      <section className="relative w-full px-[100px] py-[154px] bg-[#F4F3F7] bg-opacity[0.82]">
        <div className="flex flex-col items-center text-center gap-[17px]">
          <h2 className="text-[#282828] font-dm-sans text-[54px] font-normal font-semibold leading-normal tracking-[-0.02em]">
            Industries of the Future
          </h2>
          <p className="max-w-[770px] font-dm-sans text-[18px] text-[#465455]">
            From intelligent robotics to space exploration, Anvi is shaping
            tomorrow with deep-tech systems that transform industries and
            empower societies.
          </p>
        </div>
        <div className="grid gap-[50px] items-center">
          {/* Robotics */}
          <div className="grid md:grid-cols-2 relative group transition-transform duration-300 ease-in-out hover:scale-102 origin-top-left p-[64px] rounded-[32px] bg-white gap-[64px]">
            <div className="flex flex-col justify-center pl-[21.63px]">
              <p className="font-normal text-[32px] mb-[15.59px] leading-normal tracking-[-0.02em] group-hover:text-cyan-600 transition-colors duration-300">
                Robotics
              </p>
              <p className="font-manrope text-gray-700 leading-relaxed mb-[32px]">
                Blending intelligence with engineering, our robotics division is
                built to transform how humans interact with challenging
                environments on Earth.
              </p>
              <div className="self-start">
                <button className="rounded-[32px] border border-gray-200 text-gray-900 px-[23px] py-[11px]">
                  Learn More
                </button>
              </div>
            </div>
            <div>
              <img
                src="/images/robotics.png"
                alt="Our Vision"
                className="max-w-[444px] max-h-[518px] shadow-lg"
              />
            </div>
          </div>

          {/* Space  & Energy*/}
          <div className="grid md:grid-cols-2 gap-[48px] items-center">
            <div className="relative group transition-transform duration-300 ease-in-out hover:scale-102 origin-top-left p-[64px] rounded-[32px] bg-white gap-[64px]">
              <div className="flex flex-col justify-center pl-[21.63px]">
                <p className="font-normal text-[32px] mb-[14px] leading-normal tracking-[-0.02em] group-hover:text-cyan-600 transition-colors duration-300">
                  Space
                </p>
                <p className="font-manrope text-gray-700 leading-relaxed mb-[32px]">
                  Our mission is to make space safer, smarter, and scalable by
                  advancing innovation, fostering sustainability, and addressing
                  global needs.
                </p>
                <div className="self-start pb-[64px]">
                  <button className="rounded-[32px] border border-gray-200 text-gray-900 px-[23px] py-[11px]">
                    Learn More
                  </button>
                </div>
                <img
                  src="/images/robotics.png"
                  alt="Our Vision"
                  className="max-w-[444px] max-h-[518px] shadow-lg"
                />
              </div>
            </div>
            {/* Energy */}
            <div className="relative group transition-transform duration-300 ease-in-out hover:scale-102 origin-top-left p-[64px] rounded-[32px] bg-white gap-[64px]">
              <div className="flex flex-col justify-center pl-[21.63px]">
                <p className="font-normal text-[32px] mb-[14px] leading-normal tracking-[-0.02em] group-hover:text-cyan-600 transition-colors duration-300">
                  Energy
                </p>
                <p className="font-manrope text-gray-700 leading-relaxed mb-[32px]">
                  At ANVI, we harness hydrogen fuel cells to power efficient,
                  scalable, zero-emission systems transforming mobility and
                  critical infrastructure.
                </p>
                <div className="self-start pb-[64px]">
                  <Link to={pagesLinksList.Energy}>
                    <button className="rounded-[32px] border border-gray-200 text-gray-900 px-[23px] py-[11px]">
                      Learn More
                    </button>
                  </Link>
                </div>
                <img
                  src="/images/robotics.png"
                  alt="Our Vision"
                  className="max-w-[444px] max-h-[518px] shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Entertainment */}
          <div className="grid md:grid-cols-2 relative group transition-transform duration-300 ease-in-out hover:scale-102 origin-top-left p-[64px] rounded-[32px] bg-white gap-[64px]">
            <div className="flex flex-col justify-center pl-[21.63px]">
              <p className="font-normal text-[32px] mb-[15.59px] leading-normal tracking-[-0.02em] group-hover:text-cyan-600 transition-colors duration-300">
                Entertainment
              </p>
              <p className="font-manrope text-gray-700 leading-relaxed mb-[32px]">
                Immersive stories, limitless creativity. Get ready to explore
                new dimensions of imagination and bring ideas to life like never
                before.
              </p>
              <div className="self-start">
                <Link to={pagesLinksList.Entertainment}>
                  <button className="rounded-[32px] border border-gray-200 text-gray-900 px-[23px] py-[11px]">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
            <div>
              <img
                src="/images/robotics.png"
                alt="Our Vision"
                className="max-w-[444px] max-h-[518px] shadow-lg"
              />
            </div>
          </div>

          {/* Semiconductors */}
          <div className="grid md:grid-cols-2 relative group transition-transform duration-300 ease-in-out hover:scale-102 origin-top-left p-[64px] rounded-[32px] bg-white gap-[64px]">
            <div className="flex flex-col justify-center pl-[21.63px]">
              <p className="font-normal text-[32px] mb-[15.59px] leading-normal tracking-[-0.02em] group-hover:text-cyan-600 transition-colors duration-300">
                Semiconductors
              </p>
              <p className="font-manrope text-gray-700 leading-relaxed mb-[32px]">
                At Anvi, we advance semiconductor technology, creating
                high-performance materials and chips that power innovation
                across next-generation electronics.
              </p>
              <div className="self-start">
                <Link to={pagesLinksList.SemiConductors}>
                  <button className="rounded-[32px] border border-gray-200 text-gray-900 px-[23px] py-[11px]">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
            <div>
              <img
                src="/images/robotics.png"
                alt="Our Vision"
                className="max-w-[444px] max-h-[518px] shadow-lg"
              />
            </div>
          </div>

          {/* Textiles  & LifeSciences*/}
          <div className="grid md:grid-cols-2 gap-[48px] items-center">
            <div className="relative group transition-transform duration-300 ease-in-out hover:scale-102 origin-top-left p-[64px] rounded-[32px] bg-white gap-[64px]">
              <div className="flex flex-col justify-center pl-[21.63px]">
                <p className="font-normal text-[32px] mb-[14px] leading-normal tracking-[-0.02em] group-hover:text-cyan-600 transition-colors duration-300">
                  Textiles
                </p>
                <p className="font-manrope text-gray-700 leading-relaxed mb-[32px]">
                  Anvi, India’s first AI tailoring platform, merges technology
                  and tradition to deliver personalized formal and ethnic wear
                  experiences.
                </p>
                <div className="self-start pb-[64px]">
                  <Link to={pagesLinksList.Textiles}>
                  <button className="rounded-[32px] border border-gray-200 text-gray-900 px-[23px] py-[11px]">
                    Learn More
                  </button>
                </Link>
                </div>
                <img
                  src="/images/robotics.png"
                  alt="Our Vision"
                  className="max-w-[444px] max-h-[518px] shadow-lg"
                />
              </div>
            </div>
            {/* Life Sciences */}
            <div className="relative group transition-transform duration-300 ease-in-out hover:scale-102 origin-top-left p-[64px] rounded-[32px] bg-white gap-[64px]">
              <div className="flex flex-col justify-center pl-[21.63px]">
                <p className="font-normal text-[32px] mb-[14px] leading-normal tracking-[-0.02em] group-hover:text-cyan-600 transition-colors duration-300">
                  Life Sciences
                </p>
                <p className="font-manrope text-gray-700 leading-relaxed mb-[32px]">
                  Pioneering breakthroughs that improve health, empower
                  communities, inspire innovation, protect the planet, and
                  create better lives
                </p>
                <div className="self-start pb-[64px]">
                  <Link to={pagesLinksList.LifeSciences}>
                  <button className="rounded-[32px] border border-gray-200 text-gray-900 px-[23px] py-[11px]">
                    Learn More
                  </button>
                </Link>
                </div>
                <img
                  src="/images/robotics.png"
                  alt="Our Vision"
                  className="max-w-[444px] max-h-[518px] shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Foundation */}
          <div className="grid md:grid-cols-2 relative group transition-transform duration-300 ease-in-out hover:scale-102 origin-top-left p-[64px] rounded-[32px] bg-white gap-[64px]">
            <div className="flex flex-col justify-center pl-[21.63px]">
              <p className="font-normal text-[32px] mb-[15.59px] leading-normal tracking-[-0.02em] group-hover:text-cyan-600 transition-colors duration-300">
                Foundation
              </p>
              <p className="font-manrope text-gray-700 leading-relaxed mb-[32px]">
                Creating impact from the ground up by empowering people, driving
                innovation, fostering sustainability, shaping communities, and
                transforming futures.
              </p>
              <div className="self-start">
                <Link to={pagesLinksList.Foundations}>
                  <button className="rounded-[32px] border border-gray-200 text-gray-900 px-[23px] py-[11px]">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
            <div>
              <img
                src="/images/robotics.png"
                alt="Our Vision"
                className="max-w-[444px] max-h-[518px] shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;
