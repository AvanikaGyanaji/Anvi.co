import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import { mainPagesLinksList } from "../utils/PagesLinkList";
import { Menu, Plus } from "lucide-react";
import { IconsObj } from "../utils/Iconify_icons";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const currentPage = useRef("/");

  let scrollPosition = 0;

  const handleLinkClick = (link) => {
    currentPage.current = link;
    setMobileMenuOpen(false);
  };

  const currentPageStyle = (link) => {
    // console.log("link", link, currentPage.current);
    return location.pathname === link ? "currentPageLink" : "";
  };

  const handleMobileMenu = () => {
    setMobileMenuOpen((prev) => {
      const isOpening = !prev;

      if (isOpening) {
        scrollPosition = window.scrollY;
        document.body.style.position = "fixed";
        document.body.style.top = `-${scrollPosition}px`;
      } else {
        document.body.style.position = "relative";
        document.body.style.top = "";
        window.scrollTo(0, scrollPosition);
      }

      return isOpening;
    });
  };

  // return (
  //   <header
  //     className="w-full md:h-[106px] bg-[#FCFCFC] sticky top-0 overflow-hidden flex items-center justify-between gap-5 px-4 sm:px-6 sm:pr-8 md:pl-2 md:pr-3 lg:px-[40px] xl:px-[60px] h-[106px] font-[manrope] text-[16px] max-md:text-xs"
  //     style={{ zIndex: 11 }}
  //   >
  //     {/* Logo */}
  //     <img
  //       loading="lazy"
  //       src="/logos/anvi logo 4k.png"
  //       alt="anvi-logo"
  //       className="w-full h-auto max-w-[120px] lg:max-w-[150px] xl:max-w-[182px] max-md:max-h-[72px] object-cover"
  //     />
  //     <link rel="preload" as="image" href="/logos/anvi logo 4k.png" />

  //     {/* Desktop Navigation */}
  //     <nav className="hidden md:flex flex-1 ml-[200px] justify-center">
  //       <ul className="flex gap-6">
  //         {Object.keys(mainPagesLinksList).slice(0,-1).map((pageKey) => (
  //           <li
  //             key={mainPagesLinksList[pageKey]}
  //             className={currentPageStyle(mainPagesLinksList[pageKey])}
  //           >
  //             <Link
  //               to={mainPagesLinksList[pageKey]}
  //               className="hover:text-cyan-500 transition-colors"
  //             >
  //               {pageKey}
  //             </Link>
  //           </li>
  //         ))}
  //       </ul>
  //     </nav>

  //     {/* Contact Us */}
  //     <div className="hidden md:block">
  //       <Link
  //         to={mainPagesLinksList["Contact Us"]}
  //         className="ml-6 hover:text-cyan-500 transition-colors"
  //       >
  //         Contact Us
  //       </Link>
  //     </div>

  //     {/* Mobile Menu */}
  //     {mobileMenuOpen && (
  //       <div className="fixed inset-0 z-40 flex flex-col bg-black overflow-y-auto">
  //         <button
  //           className="absolute top-5 right-5 cursor-pointer p-2"
  //           onClick={() => setMobileMenuOpen(false)}
  //         >
  //           <Plus color="white" size={30} className="rotate-45" />
  //         </button>
  //         <ul className="flex flex-col justify-center items-center gap-8 mt-24">
  //           {Object.keys(mainPagesLinksList).map((pageKey) => (
  //             <li
  //               key={mainPagesLinksList[pageKey]}
  //               className={currentPageStyle(mainPagesLinksList[pageKey])}
  //             >
  //               <Link
  //                 to={mainPagesLinksList[pageKey]}
  //                 onClick={() => setMobileMenuOpen(false)}
  //                 className="text-white text-2xl hover:text-cyan-500 transition-colors"
  //               >
  //                 {pageKey}
  //               </Link>
  //             </li>
  //           ))}
  //         </ul>
  //       </div>
  //     )}
  //     {/* Nav Bar */}
  //     <nav className="flex flex-1 justify-end align-middle">
  //       {/* Desktop Navigation */}
  //       {!mobileMenuOpen && (
  //         <ul className="hidden md:flex justify-center align-middle gap-[2px] md:gap-3 lg:gap-[30px] xl:gap-[40px]">
  //           {Object.keys(mainPagesLinksList)
  //             .slice(0, -1)
  //             .map((pageKey) => {
  //               const link = mainPagesLinksList[pageKey];
  //               const isActive = location.pathname === link;
  //               return (
  //                 <li
  //                   key={mainPagesLinksList[pageKey]}
  //                   className={`flex place-items-center transition-all duration-120 ${
  //                     isActive ? "currentPageLink" : ""
  //                   }`}
  //                 >
  //                   <Link
  //                     to={mainPagesLinksList[pageKey]}
  //                     className="hover:text-cyan-500"
  //                     onClick={() =>
  //                       (currentPage.current = mainPagesLinksList[pageKey])
  //                     }
  //                   >
  //                     {pageKey}
  //                   </Link>
  //                 </li>
  //               );
  //             })}
  //         </ul>
  //       )}

  //       {/* Contact Us */}
  //       {!mobileMenuOpen && (
  //         <Link
  //           to={mainPagesLinksList.ContactUs}
  //           className="max-md:hidden md:ml-2 lg:ml-5 link-bg-icon"
  //           style={{ boxShadow: "0px 8px 20px 0px #1E9AB052" }}
  //         >
  //           Contact <i className="rotate-45">{IconsObj.arrow}</i>
  //         </Link>
  //       )}

  //       {/* Mobile Menu Button */}
  //       <button
  //         className="md:hidden ml-auto p-3 cursor-pointer"
  //         onClick={() => handleMobileMenu()}
  //       >
  //         <Menu size={35} color="black" />
  //       </button>

  //       {/* Mobile Menu */}
  //       {mobileMenuOpen && (
  //         <div className="w-full h-full fixed z-999 inset-0 z-40 flex flex-col bg-black overflow-hidden">
  //           <button
  //             className="absolute top-5 right-5 cursor-pointer p-2"
  //             onClick={() => handleMobileMenu()}
  //           >
  //             <Plus color="white" size={35} className="rotate-45" />
  //           </button>
  //           <ul className="w-full h-85 mt-[15vh] flex flex-col justify-start items-center gap-8 overflow-y-auto">
  //             {Object.keys(mainPagesLinksList).map((pageKey) => {
  //               const link = mainPagesLinksList[pageKey];
  //               const isActive = location.pathname === link;
  //               return (
  //                 <li
  //                   key={mainPagesLinksList[pageKey]}
  //                   className={`${currentPageStyle(
  //                     mainPagesLinksList[pageKey]
  //                   )}`}
  //                 >
  //                   <Link
  //                     to={mainPagesLinksList[pageKey]}
  //                     onClick={() => {
  //                       currentPage.current = mainPagesLinksList[pageKey];
  //                       setMobileMenuOpen(false);
  //                     }}
  //                     className={`text-white text-2xl font-[300] hover:text-cyan-500 transition-colors ${
  //                       isActive ? "currentPageLink" : ""
  //                     }`}
  //                   >
  //                     {pageKey}
  //                   </Link>
  //                 </li>
  //               );
  //             })}
  //           </ul>
  //         </div>
  //       )}
  //     </nav>
  //   </header>
  // );

  return (
    <header
      className="w-full md:h-[106px] bg-[#FCFCFC] sticky top-0 overflow-hidden flex items-center justify-between gap-5 px-4 sm:px-6 sm:pr-8 md:pl-2 md:pr-3 lg:px-[40px] xl:px-[60px] h-[106px] font-[manrope] text-[16px] max-md:text-xs"
      style={{ zIndex: 11 }}
    >
      {/* Logo */}
      <Link to="/">
        {" "}
        {/* Wrap logo in Link for easy navigation to home */}
        <img
          loading="lazy"
          src="/logos/anvi logo 4k.png"
          alt="anvi-logo"
          className="w-full h-auto max-w-[120px] lg:max-w-[150px] xl:max-w-[182px] max-md:max-h-[72px] object-cover"
        />
      </Link>
      <link rel="preload" as="image" href="/logos/anvi logo 4k.png" />

      {/* Nav Bar & Buttons (right side) */}
      <nav className="flex flex-1 justify-end align-middle">
        {/* Desktop Navigation Links */}
        <ul className="desktop-ul hidden md:flex justify-center align-middle gap-[2px] md:gap-3 lg:gap-[30px] xl:gap-[40px]">
          {Object.keys(mainPagesLinksList)
            .slice(0, -1)
            .map((pageKey) => {
              const link = mainPagesLinksList[pageKey];
              return (
                <li
                  key={link}
                  className={`flex place-items-center transition-all duration-120 ${currentPageStyle(
                    link
                  )}`}
                >
                  <Link to={link} className="hover:text-cyan-500">
                    {pageKey}
                  </Link>
                </li>
              );
            })}
        </ul>

        {/* Contact Us Button (Desktop) */}
        <Link
          to={mainPagesLinksList["ContactUs"]}
          className="max-md:hidden md:ml-2 lg:ml-5 link-bg-icon"
          style={{ boxShadow: "0px 8px 20px 0px #1E9AB052" }}
        >
          Contact <i className="rotate-45">{IconsObj.arrow}</i>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden ml-auto p-3 cursor-pointer"
          onClick={() => handleMobileMenu()}
          aria-label="Toggle mobile menu"
        >
          <Menu size={35} color="black" />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="w-full h-full fixed inset-0 z-40 flex flex-col bg-black overflow-y-auto">
          {/* Close Button */}
          <button
            className="absolute top-5 right-5 cursor-pointer p-2 z-50"
            onClick={() => handleMobileMenu()}
            aria-label="Close mobile menu"
          >
            <Plus color="white" size={35} className="rotate-45" />
          </button>

          {/* Mobile Links List */}
          <ul className="w-full h-85 mt-[15vh] flex flex-col justify-start items-center gap-8">
            {/* Include all links for mobile view */}
            {Object.keys(mainPagesLinksList).map((pageKey) => {
              const link = mainPagesLinksList[pageKey];
              return (
                <li key={link} className={`${currentPageStyle(link)}`}>
                  <Link
                    to={link}
                    onClick={() => handleLinkClick(link)}
                    className={`text-white text-2xl font-[300] hover:text-cyan-500 transition-colors ${currentPageStyle(
                      link
                    )}`}
                  >
                    {pageKey}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
