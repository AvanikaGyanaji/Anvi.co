import { Link, useLocation } from "react-router-dom";
import { pagesLinksList } from "../utils/PagesLinkList";
import { useEffect, useRef, useState } from "react";
import { Menu, Plus } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const currentPage = useRef(null);

  useEffect(() => {
    currentPage.current = location.pathname;
  }, [location.pathname]);

  const currentPageStyle = (link) =>
    currentPage.current === link ? "currentPageLink" : "";

  return (
    <header
      className="w-full fixed top-0 z-50 flex items-center justify-between px-4 sm:px-6 md:px-[60px] h-[106px] font-manrope text-[16px] max-md:text-xs"
      style={{ background: "transparent" }}
    >
      {/* Logo */}
      <div className="flex-shrink-0">
        <img
          src="/logos/anvi 1.png"
          alt="anvi-logo"
          className="w-full max-w-[182px] max-md:max-h-[72px] object-cover"
        />
        <link rel="preload" as="image" href="/logos/anvi 1.png" />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex flex-1 ml-[200px] justify-center">
        <ul className="flex gap-6">
          {Object.keys(pagesLinksList).map((pageKey) => (
            <li key={pagesLinksList[pageKey]} className={currentPageStyle(pagesLinksList[pageKey])}>
              <Link
                to={pagesLinksList[pageKey]}
                className="hover:text-cyan-500 transition-colors"
              >
                {pageKey}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Contact Us */}
      <div className="hidden md:block">
        <Link
          to={pagesLinksList["Contact Us"]}
          className="ml-6 hover:text-cyan-500 transition-colors"
        >
          Contact Us
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden ml-auto cursor-pointer"
        onClick={() => setMobileMenuOpen((prev) => !prev)}
      >
        <Menu size={30} color="black" />
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col bg-black overflow-y-auto">
          <button
            className="absolute top-5 right-5 cursor-pointer p-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Plus color="white" size={30} className="rotate-45" />
          </button>
          <ul className="flex flex-col justify-center items-center gap-8 mt-24">
            {Object.keys(pagesLinksList).map((pageKey) => (
              <li key={pagesLinksList[pageKey]} className={currentPageStyle(pagesLinksList[pageKey])}>
                <Link
                  to={pagesLinksList[pageKey]}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white text-2xl hover:text-cyan-500 transition-colors"
                >
                  {pageKey}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
