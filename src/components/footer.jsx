import { Link } from "react-router-dom";
import { Instagram, Linkedin, MapPin, Mail } from "lucide-react";
import { pagesLinksList } from "../utils/PagesLinkList";

const Footer = () => {
  return (
    <footer className="w-full bg-[#1a1a1a] text-white font-manrope">
      <div className="px-[50px] pt-[64px] pb-[48px] max-md:px-6">
        <div className="flex items-start max-w-[1400px] mx-auto">
          {/* Logo + Description */}
          <div className="flex items-center gap-[45px]">
            {/* Logo */}
            <img
              src="/logos/anvi_white.png"
              alt="Anvi Logo"
              className="w-[366px] object-contain"
            />
            
            {/* Description */}
            <p className="text-white text-[14px] font-medium leading-[22.4px] tracking-[-0.32px] max-w-[297px]" style={{ fontFamily: '"DM Sans", sans-serif' }}>
              Engineering Your Edge™ - We build breakthrough products, deep-tech systems, 
              and future-proof robotics solutions across industries.
            </p>
          </div>

          {/* Gap 115px */}
          <div className="w-[117px]"></div>

          {/* Quick Links - Starts from top */}
          <div className="flex flex-col gap-[18px] w-[160px] self-start">
            <h4 className="text-[14px] text-[#BDBDBD] font-medium tracking-[-0.32px]">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-[12px]">
              {Object.keys(pagesLinksList).map((pageKey) => (
                <li key={pageKey}>
                  <Link
                    to={pagesLinksList[pageKey]}
                    className="text-[#FFFAFF] font-medium text-[16px] leading-[22.4px] tracking-[-0.32px] hover:text-white transition-colors"
                  >
                    {pageKey}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Gap 74px */}
          <div className="w-[74px]"></div>

          {/* Contact - Starts from top */}
          <div className="flex flex-col gap-[18px] w-[281px] self-start">
            <h4 className="text-[14px] text-[#BDBDBD] font-medium tracking-[-0.32px]">Contact</h4>
            <div className="flex flex-col gap-[16px]">
              <div className="flex items-start gap-[12px]">
                <MapPin className="w-[18px] h-[18px] mt-1 flex-shrink-0" strokeWidth={1.5} />
                <p className="text-[#FFFAFF] text-[16px] font-medium leading-[22.4px] tracking-[-0.32px]">
                  Profound Buliders, whitefields,<br />
                  Kondapur, Telangana 500081
                </p>
              </div>
              <div className="flex items-center gap-[12px]">
                <Mail className="w-[18px] h-[18px] flex-shrink-0" strokeWidth={1.5} />
                <p className="text-[#FFFAFF] text-[16px] font-medium leading-[22.4px] tracking-[-0.32px]">
                  info@anvi.co
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-[#333333]"></div>

      {/* Bottom Row */}
      <div className="px-[60px] py-[24px] max-md:px-6">
        <div className="flex justify-between items-center max-w-[1400px] mx-auto text-[#B0B0B0] text-[14px] max-md:flex-col max-md:gap-4">
          <p>©2025 anvi.co</p>

          <div className="flex gap-[20px]">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} strokeWidth={1.5} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} strokeWidth={1.5} />
            </a>
          </div>

          <Link to="/privacy-policy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;