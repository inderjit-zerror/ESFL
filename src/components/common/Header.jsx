// "use client";

// import Image from "next/image";
// import { Search } from "lucide-react";
// import BTN from "./BTN";

// const navLinks = [
//   {
//     name: "Home",
//     href: "/",
//   },
//   {
//     name: "About",
//     href: "/about",
//   },
//   {
//     name: "Media",
//     href: "/media",
//   },
//   {
//     name: "Careers",
//     href: "/careers",
//   },
//   {
//     name: "Contact Us",
//     href: "/contact",
//   },
// ];

// export default function Header() {
//   return (
//     <header className=" absolute top-5 left-0 z-50 w-full">
//       <div className="mx-auto flex h-[70px] w-full items-center justify-between px-6 lg:px-12">
//         {/* Left Menu */}
//         <nav className="flex items-center gap-10 text-white">
//           {navLinks.map((item) => (
//             <a
//               key={item.name}
//               href={item.href}
//               className="Paragraph_Medium HNR_FONT group flex flex-col"
//             >
//               {item.name}

//               <div className="h-[1.5px] w-full overflow-hidden">
//                 <div className="h-full w-0 bg-white transition-all duration-300 group-hover:w-full"></div>
//               </div>
//             </a>
//           ))}
//         </nav>

//         {/* Logo */}
//         <div className="absolute left-1/2 -translate-x-1/2">
//           <Image
//             src="/images/nav/logo.png"
//             alt="Empire Logo"
//             width={130}
//             height={80}
//             className="object-contain"
//           />
//         </div>

//         {/* Right Side */}
//         <div className="flex items-center gap-8">
         

//           <a
//             href="/shop"
//             className="Paragraph_Medium HNR_FONT text-white flex flex-col group"
//           >
//             Shop Now
//              <div className="h-[1.5px] w-full overflow-hidden">
//                 <div className="h-full w-0 bg-white transition-all duration-300 group-hover:w-full"></div>
//               </div>
//           </a>

//           <BTN txt={`Become Channel Partner`} variant="B1"/>

         
//         </div>
//       </div>
//     </header>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import BTN from "./BTN";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Media",
    href: "/media",
  },
  {
    name: "Careers",
    href: "/careers",
  },
  {
    name: "Contact Us",
    href: "/contact",
  },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Track scroll position to toggle the floating/solid header state
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close the mobile menu automatically if the viewport grows back to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-100 ${
        scrolled
          ? "  py-2"
          : "bg-transparent py-3"
      }`}
    >
      <div className="mx-auto flex h-[70px] w-full items-center justify-between px-6 lg:px-12">
        {/* Left Menu - Full nav, only shown at the top of the page on desktop */}
        <nav
          className={`hidden items-center gap-10 text-white transition-all duration-75 lg:flex ${
            scrolled
              ? "opacity-0 -translate-y-2 pointer-events-none"
              : "opacity-100 translate-y-0"
          }`}
        >
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="Paragraph_Medium HNR_FONT group flex flex-col"
            >
              {item.name}

              <div className="h-[1.5px] w-full overflow-hidden">
                <div className="h-full w-0 bg-white transition-all duration-300 group-hover:w-full"></div>
              </div>
            </a>
          ))}
        </nav>

        {/* Logo */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <Image
            src="/images/nav/logo.png"
            alt="Empire Logo"
            width={scrolled ? 90 : 130}
            height={scrolled ? 55 : 80}
            className="object-contain transition-all duration-300"
          />
        </div>

        {/* Right Side - Full nav, only shown at the top of the page on desktop */}
        <div
          className={`hidden items-center gap-8 transition-all duration-75 lg:flex ${
            scrolled
              ? "opacity-0 -translate-y-2 pointer-events-none"
              : "opacity-100 translate-y-0"
          }`}
        >
          <a
            href="/shop"
            className="Paragraph_Medium HNR_FONT text-white flex flex-col group"
          >
            Shop Now
            <div className="h-[1.5px] w-full overflow-hidden">
              <div className="h-full w-0 bg-white transition-all duration-300 group-hover:w-full"></div>
            </div>
          </a>

          <BTN txt={`Become Channel Partner`} variant="B1" />
        </div>

        {/* Hamburger Toggle - always visible on mobile, appears on desktop once scrolled */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
          className={`relative z-50 flex h-10 w-10 items-center justify-center text-white transition-opacity duration-100 ${
            scrolled ? "flex" : "flex lg:hidden"
          }`}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Menu Overlay - triggered by the hamburger on any screen size */}
      <div
        className={`fixed inset-0 top-0 h-screen w-full bg-black/95 backdrop-blur-md transition-all ease-out duration-75 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex h-full w-full flex-col items-center justify-center gap-8 px-6">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="Paragraph_Medium HNR_FONT text-white text-2xl"
            >
              {item.name}
            </a>
          ))}

          <a
            href="/shop"
            onClick={() => setMenuOpen(false)}
            className="Paragraph_Medium HNR_FONT text-white text-2xl"
          >
            Shop Now
          </a>

          <BTN txt={`Become Channel Partner`} variant="B1" />
        </div>
      </div>
    </header>
  );
}