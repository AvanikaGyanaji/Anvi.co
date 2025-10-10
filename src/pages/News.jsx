import HeroSection from "../components/heroSection"

export const News = () => {
    return(
    <div id="news" className="w-full pt-[106px]">
      {/* Hero Section */}
      <HeroSection
        backgroundImage="/images/news/hero1.png"
        title="News & Updates"
        description="Stay informed with Anvi latest announcements, official press releases, and exciting new opportunities."
        buttonText="About Us"
        buttonLink="#about"
        descriptionWidth="570px"
      />
    </div>
    );
};