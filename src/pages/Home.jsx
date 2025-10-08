const Home = () => {
  return(
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[742px] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/Industries.png"
            alt="Team working"
            className="w-full h-full object-cover opacity-[0.72]"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-[#1E2024] opacity-50"></div>
        </div>
      </section>

      <div className="px-[118px] py-[102px] font-['Wix_Madefor_Display']">
        <h2 className="text-[48px] mb-[16px]">Pioneering the Future of Deep-Tech</h2>
        <p className='text-[16px] text-[#4C4C4C] mb-[64px]'>At Anvi, we don't just build robots - we build the future. Our vision is to redefine 
          industries with breakthrough innovations, deep-tech systems, and future-proof solutions 
          across multiple sectors.
        </p>
      </div>
    </div>
  );
};

export default Home;