import { Link } from "react-router-dom"

export const PravikayaInitiative = () => {
    return (
        <section className="relative w-[95vw] max-w-[1318px] grid place-content-center mx-auto p-2 mb-[83px] font-[manrope] text-center min-h-[544px] bg-[#1a1a1a] rounded-xl overflow-hidden">
          {/* Content */}
          <div className="w-full max-w-[541px] flex flex-col items-center justify-center self-stretch mx-2">
            <h1 className="font-[Dm sans] font-[500] flex items-center justify-center w-[450.32px] text-white text-[51px]">
              Pravikaya Initiative
            </h1>
            <p className="w-full text-white text-[18px] text-center font-[300]">
              An initiative by Anvi Foundation driving sustainability,
              education, andcommunity empowerment. We believe technology should
              not only advance industries but also uplift societies.
            </p>
            <Link
              to={""}
              className="px-[23px] py-[10px] mt-[20px] rounded-[400px] border-[1px] border-[#E4E6E6] font-normal text-white text-[17px] leading-[26px] whitespace-nowrap hover:text-black hover:bg-white transition-colors duration-500"
            >
              Learn More
            </Link>
          </div>

          <div
            className="absolute w-[calc(100%-1098px)] top-[147px] left-0 h-[227px] bg-[#FF8C60] bg-[100% 100%]"
            aria-hidden="true"
          />

          <div className="top-[221px] left-[59px] w-[271px] h-[300px] absolute flex overflow-hidden">
            <img
              loading="lazy"
              src="/images/home/Pravikaya Init1.png"
              alt="Office team collaboration"
              className="h-[406.3px] flex-1 object-cover object-center"
            />
          </div>

          <div className="h-[calc(100%-339px)] top-[74px] left-[1025px] w-[293px] absolute overflow-hidden">
            <img
              loading="lazy"
              src="/images/home/Pravikaya Init2.png"
              alt="Kitchen candid moments"
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="h-[calc(100%-376px)] top-[221px] left-[988px] w-[146px] absolute overflow-hidden">
            <img
              loading="lazy"
              src="/images/home/Pravikaya Init3.png"
              alt="Studio office environment"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </section>
    )
}