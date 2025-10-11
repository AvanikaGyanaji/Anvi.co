import { Link } from "react-router-dom";
import { mainPagesLinksList } from "../utils/PagesLinkList";
import { HomeIndustriesCard } from "../components/Home/Home_Industries_Cards";
import Footer from "../components/footer";
import { PravikayaInitiative } from "../components/Home/Pravikaya_Initiative";

const footerUpBoxInfoObj = {
  head: "Ready to explore the future with Anvi?",
  para: "Step into tomorrow with Anvi - where deep-tech innovation meets safety, efficiency, and sustainability.",
  linkLabel: "Contact Us",
  link: mainPagesLinksList.ContactUs,
};

const nextAtAnvi = {
  robotics: {
    imgUrl: "/images/home/robo_img.jpg",
    title: "Anvi Robotics",
    desc: "Witness the global launch of Anvi's Surveillance Robot on 30 June 2025...",
    link: mainPagesLinksList.Robotics,
  },
  space: {
    imgUrl: "/images/home/space.png",
    title: "Anvi Space",
    desc: "At Anvi Space, we design technologies expanding humanity’s reach.",
    link: mainPagesLinksList.Space,
  },
};

const Home = () => {
  return (
    <>
      <main>
        {/* Hero Section */}
        <section className="w-full h-[calc(100vh-100px)] overflow-hidden flex justify-start align-top relative">
          {/* Hero Content */}
          <div className="home-hero-content sticky z-10 w-full md:max-w-[657px] flex flex-col justify-start align-middle gap-[16px] font-[Wix Madefor Display] ml-[2vw] md:ml-[60px] lg:ml-[5vw] mt-[50px] md:mt-[60px] lg:mt-[11vh]">
            <h1 className="text-[48px] md:text-[56px] text-[#282828] font-[600]">
              Engineering Your{" "}
              <span className="whitespace-nowrap">
                Edge <span className="-ml-3 max-md:px-1">™</span>
              </span>
            </h1>
            <p className="max-md:w-[85%] max-md:max-w-[600px] md:max-w-full text-[16px] font-[400] leading-[24px] text-black max-md:px-2">
              We build breakthrough products, deep-tech systems, and
              future-proof solutions that redefine industries and empower
              societies.
            </p>
            <Link
              to={mainPagesLinksList.Solutions}
              className="link-round-mid mt-[8px] max-md:px-2"
            >
              Explore Solutions
            </Link>
          </div>

          {/* Hero Bg */}
          <div className="w-[110vw] md:scale-105 object-cover bg-center h-auto overflow-hidden absolute -z-5 right-0 md:left-0 bottom-0">
            <svg
              className="w-full h-auto sticky -z-1"
              viewBox="0 0 1438 550"
              fill="#000"
              style={{ zIndex: -9 }}
            >
              <defs>
                <clipPath id="image-shape">
                  <path d="M1438 549.5H0V474C44.0961 434.557 71.6097 415.971 124.5 387.5C209.167 335.338 265.558 318.978 363.5 286C458.221 265.486 511.459 254.846 607 240.5L913 204L1024 188.5C1109.08 174.129 1155.31 162.704 1235 136C1288.4 116.053 1315.55 101.964 1360 72L1395 44.5L1438 0V549.5Z" />
                </clipPath>
              </defs>
              <image
                href="/videos/home-hero-video.webp"
                xlinkHref="/videos/home-hero-video.webp"
                x="0"
                y="0"
                clipPath="url(#image-shape)"
                preserveAspectRatio="xMidYMid slice"
                className="w-full h-full"
              />
            </svg>
            {/* <img loading="lazy" src="/images/about.png" loading="lazy" alt="about" className="w-screen h-full object" /> */}
          </div>
        </section>

        {/* We Build */}
        <section className="w-full px-5 py-[100px] text-center xl:px-[118px] md:py-[102px] font-['Wix_Madefor_Display']">
          <h2 className="text-[48px] mb-[16px] text-[#282828]">
            Pioneering the Future of Deep-Tech
          </h2>
          <p className="text-[16px] text-[#4C4C4C] mb-[64px] font-[400] leading-[24px] text-center">
            At Anvi, we don't just build robots - we build the future. Our
            vision is to redefine{" "}
            <span className="hidden md:block h-0">
              <br />
            </span>{" "}
            industries with breakthrough innovations, deep-tech systems, and
            future-proof solutions across multiple sectors.
          </p>
          <img
            loading="lazy"
            src="/images/home/we-build.png"
            className="w-full h-auto"
            alt="we_build_img"
          />
        </section>

        {/* Transforming Industries */}
        <section className="w-full px-5 py-[100px] text-center xl:px-[118px] md:py-[102px] font-['Wix_Madefor_Display'] bg-[#F4F3F7]">
          <h2 className="text-[48px] mb-[16px] text-[#282828]">
            Transforming Industries
          </h2>
          <p className="text-[16px] text-[#4C4C4C] mb-[64px] font-[400] leading-[24px] text-center">
            From robotics to space exploration, we’re creating advanced
            solutions that
            <span className="hidden md:block h-0">
              <br />
            </span>{" "}
            reshape how industries operate and innovate.
          </p>

          {/* Industries Cards */}
          <HomeIndustriesCard />
        </section>

        {/* Next at Anvi */}
        <section className="next-at-anvi w-full px-5 py-[100px] text-center xl:px-[118px] md:py-[102px] font-['Wix_Madefor_Display']">
          <h2 className="text-[48px] mb-[16px] text-[#282828]">Next At Anvi</h2>
          <p className="text-[16px] text-[#4C4C4C] mb-[64px] font-[400] leading-[24px] text-center">
            At anvi, our engineers don’t work by the clock - they work by
            vision.
          </p>
          <div className="w-full m-auto mb-[50px] grid sm:grid-cols-1 md:grid-cols-2 max-lg:flex-col justify-center align-middle gap-[50px] py-4">
            {Object.keys(nextAtAnvi).map((each) => (
              <div
                key={nextAtAnvi[each].title}
                className="w-full h-auto p-3 max-w-[750px] bg-[#F4F3F7] rounded-[16px] grid sm:grid-cols-1 md:grid-cols-2 justify-center align-middle gap-[20px]"
              >
                <div className="w-full max-md:m-auto max-md:max-w-[350px] self-center md:max-w-[300px] lg:max-w-1/2 md:aspect-[4/3] object-cover object-center rounded-[16px]">
                  <img
                    loading="lazy"
                    src={nextAtAnvi[each].imgUrl}
                    alt={nextAtAnvi[each].title + nextAtAnvi[each].imgUrl}
                    className="bg-cover w-full h-full rounded-[16px] object-cover object-center"
                  />
                </div>
                {/* Cotent */}
                <div className="flex flex-col w-full max-w-[450px] justify-start align-middle gap-[5px] text-left">
                  <span className="text-[12px] self-auto w-min whitespace-nowrap text-[#0D1F21] font-[400] min-w-[90px] px-[16px] py-[10px] font-[manrope] rounded-[400px] bg-[#EEFCFF]">
                    {nextAtAnvi[each].title}
                  </span>
                  <p className="font-[Dm sans] w-full text-[24px] font-[500] text-[#0D1F21]">
                    {nextAtAnvi[each].desc}
                  </p>
                  <Link
                    to={nextAtAnvi[each].link}
                    className="text-[#465455] text-[12px] font-[400] font-[Manrope] hover:font-bold self-start"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            ))}
          </div>
          {/* Read All Button */}
          <Link
            to={mainPagesLinksList.Solutions}
            className="font-[Manrope] hover:shadow-sm hover:shadow-[#0D1F21] transition-all duration-150 text-[16px] font-[400] text-[#0D1F21] px-[20px] py-[10px] rounded-[367px] bg-transparent border-[1px] border-[#0D1F21]"
          >
            Read All
          </Link>
        </section>

        {/* Pravikaya Initiative */}
        <PravikayaInitiative />
      </main>

      {/* Footer */}
      <Footer footerUpBoxInfo={footerUpBoxInfoObj} />
    </>
  );
};

export default Home;
