import { Link } from "react-router-dom";
import Button from "../utils/Button";

const HeroSection = ({
  backgroundImage,
  title,
  description,
  buttonText,
  buttonLink,
  descriptionWidth
}) => {
  return (
    <section className="w-full h-[calc(100vh-106px)] overflow-hidden flex justify-start items-start relative">
      {/* Hero Content */}
      <div className="home-hero-content sticky z-10 w-full md:max-w-[1113px] flex flex-col justify-start items-start gap-[16px] font-['Wix Madefor Display'] ml-[2vw] md:ml-[60px] mt-[50px] md:mt-[56px]">
        <h1 className="text-[48px] md:text-[56px] text-[#282828] font-[600] leading-tight">
          {title}
        </h1>

        <p
          className="w-full max-md:w-[85%] max-md:max-w-[600px] text-[16px] font-[400] leading-[24px] text-black max-md:px-2 md:w-auto"
          style={{ width: window.innerWidth >= 768 ? descriptionWidth : "auto" }}
        >
          {description}
        </p>

        {buttonText && buttonLink && (
          <Link
            to={buttonLink}
            className="link-round-mid mt-[8px] max-md:px-2"
          >
            {buttonText}
          </Link>
        )}
      </div>

      {/* Hero Background with Clip Path */}
      <div className="w-[100vw] md:scale-100 object-cover bg-center h-auto overflow-hidden absolute -z-5 right-0 md:left-0 bottom-0">
        <svg
          className="w-full h-full"
          viewBox="0 0 1438 550"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <clipPath id="image-shape">
              <path d="M1438 549.5H0V474C44.0961 434.557 71.6097 415.971 124.5 387.5C209.167 335.338 265.558 318.978 363.5 286C458.221 265.486 511.459 254.846 607 240.5L913 204L1024 188.5C1109.08 174.129 1155.31 162.704 1235 136C1288.4 116.053 1315.55 101.964 1360 72L1395 44.5L1438 0V549.5Z" />
            </clipPath>
          </defs>

          {/* Hero Image */}
          <image
            href={backgroundImage}
            x="0"
            y="0"
            width="1438"
            height="550"
            clipPath="url(#image-shape)"
            preserveAspectRatio="xMidYMid slice"
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <rect
            width="1438"
            height="550"
            fill="#0000007A"
            clipPath="url(#image-shape)"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
