import Button from "../utils/Button";

const HeroSection = ({
  backgroundImage,
  title,
  description,
  buttonText,
  buttonLink,
  headingWidth,
  descriptionWidth,
}) => {
  return (
    <section className="relative w-full h-[600px] sm:h-[700px] md:h-[742px] flex flex-col md:flex-row">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-start px-4 sm:px-6 md:px-[62px] pt-20 sm:pt-28 md:pt-[163px]">
        <h1
          className="max-w-full text-[#282828] font-['Wix_Madefor_Display'] font-[600px] text-[36px] sm:text-[44px] md:text-[56px] leading-tight tracking-[-1px] md:tracking-[-2px]"
          style={{ width: headingWidth }}
        >
          {title}
        </h1>

        <p
  className="w-full max-w-full sm:max-w-[500px] md:max-w-[734px] text-[#000000] mt-4 font-['Wix_Madefor_Display'] font-normal text-[15px] sm:text-[16px]"
>
  {description}
</p>


        {buttonText && buttonLink && (
          <Button to={buttonLink} variant="primary">
            {buttonText} <span className="text-xl ml-1"></span>
          </Button>
        )}
      </div>
    </section>
  );
};

export default HeroSection;