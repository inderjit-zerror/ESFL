// // // "use client";

// // // import Image from "next/image";
// // // import { Search } from "lucide-react";
// // // import BTN from "./BTN";

// // // const navLinks = [
// // //   {
// // //     name: "Home",
// // //     href: "/",
// // //   },
// // //   {
// // //     name: "About",
// // //     href: "/about",
// // //   },
// // //   {
// // //     name: "Media",
// // //     href: "/media",
// // //   },
// // //   {
// // //     name: "Careers",
// // //     href: "/careers",
// // //   },
// // //   {
// // //     name: "Contact Us",
// // //     href: "/contact",
// // //   },
// // // ];

// // // export default function Header() {
// // //   return (
// // //     <header className=" absolute top-5 left-0 z-50 w-full">
// // //       <div className="mx-auto flex h-[70px] w-full items-center justify-between px-6 lg:px-12">
// // //         {/* Left Menu */}
// // //         <nav className="flex items-center gap-10 text-white">
// // //           {navLinks.map((item) => (
// // //             <a
// // //               key={item.name}
// // //               href={item.href}
// // //               className="Paragraph_Medium HNR_FONT group flex flex-col"
// // //             >
// // //               {item.name}

// // //               <div className="h-[1.5px] w-full overflow-hidden">
// // //                 <div className="h-full w-0 bg-white transition-all duration-300 group-hover:w-full"></div>
// // //               </div>
// // //             </a>
// // //           ))}
// // //         </nav>

// // //         {/* Logo */}
// // //         <div className="absolute left-1/2 -translate-x-1/2">
// // //           <Image
// // //             src="/images/nav/logo.png"
// // //             alt="Empire Logo"
// // //             width={130}
// // //             height={80}
// // //             className="object-contain"
// // //           />
// // //         </div>

// // //         {/* Right Side */}
// // //         <div className="flex items-center gap-8">
         

// // //           <a
// // //             href="/shop"
// // //             className="Paragraph_Medium HNR_FONT text-white flex flex-col group"
// // //           >
// // //             Shop Now
// // //              <div className="h-[1.5px] w-full overflow-hidden">
// // //                 <div className="h-full w-0 bg-white transition-all duration-300 group-hover:w-full"></div>
// // //               </div>
// // //           </a>

// // //           <BTN txt={`Become Channel Partner`} variant="B1"/>

         
// // //         </div>
// // //       </div>
// // //     </header>
// // //   );
// // // }

// // "use client";

// // import { useEffect, useState } from "react";
// // import Image from "next/image";
// // import { Menu, X } from "lucide-react";
// // import BTN from "./BTN";
// // import { FaCartShopping } from "react-icons/fa6";

// // const navLinks = [
// //   {
// //     name: "Home",
// //     href: "/",
// //   },
// //   {
// //     name: "About Us",
// //     href: "/about",
// //   },
// //   {
// //     name: "Media",
// //     href: "/media",
// //   },
// //   {
// //     name: "Career",
// //     href: "/careers",
// //   },
// //   {
// //     name: "Contact Us",
// //     href: "/contact",
// //   },
// // ];

// // export default function Header() {
// //   const [scrolled, setScrolled] = useState(false);
// //   const [menuOpen, setMenuOpen] = useState(false);

// //   // Track scroll position to toggle the floating/solid header state
// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setScrolled(window.scrollY > 40);
// //     };

// //     handleScroll();
// //     window.addEventListener("scroll", handleScroll, { passive: true });
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, []);

// //   // Lock body scroll while the mobile menu is open
// //   useEffect(() => {
// //     document.body.style.overflow = menuOpen ? "hidden" : "";
// //     return () => {
// //       document.body.style.overflow = "";
// //     };
// //   }, [menuOpen]);

// //   // Close the mobile menu automatically if the viewport grows back to desktop
// //   useEffect(() => {
// //     const handleResize = () => {
// //       if (window.innerWidth >= 1024) setMenuOpen(false);
// //     };
// //     window.addEventListener("resize", handleResize);
// //     return () => window.removeEventListener("resize", handleResize);
// //   }, []);

// //   return (
// //     <header
// //       className={`fixed top-0 left-0 z-50 w-full transition-all duration-100 ${
// //         scrolled
// //           ? "  py-0 bg-black/95"
// //           : "bg-transparent py-3"
// //       }`}
// //     >
// //       <div className="mx-auto flex   h-[70px] w-full items-center justify-between px-6 lg:px-12">
// //         {/* Left Menu - Full nav, only shown at the top of the page on desktop */}
// //         <nav
// //           className={`hidden items-center gap-10 text-white transition-all duration-75 lg:flex ${
// //             scrolled
// //               ? "opacity-0 -translate-y-2 pointer-events-none"
// //               : "opacity-100 translate-y-0"
// //           }`}
// //         >
// //           {navLinks.map((item) => (
// //             <a
// //               key={item.name}
// //               href={item.href}
// //               className="Paragraph_Medium HNR_FONT group flex flex-col"
// //             >
// //               {item.name}

// //               <div className="h-[1.5px] w-full overflow-hidden">
// //                 <div className="h-full w-0 bg-white transition-all duration-300 group-hover:w-full"></div>
// //               </div>
// //             </a>
// //           ))}
// //         </nav>

// //         {/* Logo */}
// //         <div className="absolute left-1/2 -translate-x-1/2">
// //           <Image
// //             src="/images/nav/logo.png"
// //             alt="Empire Logo"
// //             width={scrolled ? 90 : 130}
// //             height={scrolled ? 55 : 80}
// //             className="object-contain transition-all duration-300"
// //           />
// //         </div>

// //         {/* Right Side - Full nav, only shown at the top of the page on desktop */}
// //         <div
// //           className={`hidden items-center gap-8 transition-all duration-75 lg:flex ${
// //             scrolled
// //               ? "opacity-0 -translate-y-2 pointer-events-none"
// //               : "opacity-100 translate-y-0"
// //           }`}
// //         >
// //           <a
// //             href="/shop"
// //             className="Paragraph_Medium HNR_FONT text-white flex flex-col group"
// //           >
// //             <div className=" flex gap-2">

// //             Shop Now <FaCartShopping />
// //             </div>
// //             <div className="h-[1.5px] w-full overflow-hidden">
// //               <div className="h-full w-0 bg-white transition-all duration-300 group-hover:w-full"></div>
// //             </div>
// //           </a>

// //           <BTN txt={`Become Channel Partner`} variant="B1" />
// //         </div>

// //         {/* Hamburger Toggle - always visible on mobile, appears on desktop once scrolled */}
// //         <button
// //           type="button"
// //           aria-label={menuOpen ? "Close menu" : "Open menu"}
// //           aria-expanded={menuOpen}
// //           onClick={() => setMenuOpen((prev) => !prev)}
// //           className={`relative z-50 flex h-10 w-10 items-center justify-center text-white transition-opacity duration-100 ${
// //             scrolled ? "flex" : "flex lg:hidden"
// //           }`}
// //         >
// //           {menuOpen ? <X size={26} /> : <Menu size={26} />}
// //         </button>
// //       </div>

// //       {/* Menu Overlay - triggered by the hamburger on any screen size */}
// //       <div
// //         className={`fixed inset-0 top-0 h-screen w-full bg-black/95 backdrop-blur-md transition-all ease-out duration-75 ${
// //           menuOpen
// //             ? "opacity-100 pointer-events-auto"
// //             : "opacity-0 pointer-events-none"
// //         }`}
// //       >
// //         <div className="flex h-full w-full flex-col items-center justify-center gap-8 px-6">
// //           {navLinks.map((item) => (
// //             <a
// //               key={item.name}
// //               href={item.href}
// //               onClick={() => setMenuOpen(false)}
// //               className="Paragraph_Medium HNR_FONT text-white text-2xl"
// //             >
// //               {item.name}
// //             </a>
// //           ))}

// //           <a
// //             href="/shop"
// //             onClick={() => setMenuOpen(false)}
// //             className="Paragraph_Medium HNR_FONT text-white text-2xl"
// //           >
// //             Shop Now
// //           </a>

// //           <BTN txt={`Become Channel Partner`} variant="B1" />
// //         </div>
// //       </div>
// //     </header>
// //   );
// // }
// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { Menu, X, ChevronDown } from "lucide-react";
// import BTN from "./BTN";
// import { FaCartShopping } from "react-icons/fa6";

// const navLinks = [
//   {
//     name: "Home",
//     href: "/",
//   },
//   {
//     name: "About Us",
//     href: "/about",
//     children: [
//       { name: "Our Story", href: "/about/our-story" },
//       { name: "Leadership Team", href: "/about/leadership" },
//       { name: "Our Mission", href: "/about/mission" },
//       { name: "Awards & Recognition", href: "/about/awards" },
//     ],
//   },
//   {
//     name: "Media",
//     href: "/media",
//   },
//   {
//     name: "Career",
//     href: "/careers",
//   },
//   {
//     name: "Contact Us",
//     href: "/contact",
//   },
// ];

// export default function Header() {
//   const [scrolled, setScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [aboutOpen, setAboutOpen] = useState(false); // desktop hover dropdown
//   const [mobileAboutOpen, setMobileAboutOpen] = useState(false); // mobile accordion

//   // Track scroll position to toggle the floating/solid header state
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 40);
//     };

//     handleScroll();
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Lock body scroll while the mobile menu is open
//   useEffect(() => {
//     document.body.style.overflow = menuOpen ? "hidden" : "";
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [menuOpen]);

//   // Close the mobile menu automatically if the viewport grows back to desktop
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 1024) setMenuOpen(false);
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <header
//       className={`fixed top-0 left-0 z-50 w-full transition-all duration-100 ${
//         scrolled
//           ? "  py-0 bg-black/95"
//           : "bg-transparent py-3"
//       }`}
//     >
//       <div className="mx-auto flex   h-[70px] w-full items-center justify-between px-6 lg:px-12">
//         {/* Left Menu - Full nav, only shown at the top of the page on desktop */}
//         <nav
//           className={`hidden items-center gap-10 text-white transition-all duration-75 lg:flex ${
//             scrolled
//               ? "opacity-0 -translate-y-2 pointer-events-none"
//               : "opacity-100 translate-y-0"
//           }`}
//         >
//           {navLinks.map((item) =>
//             item.children ? (
//               <div
//                 key={item.name}
//                 className="relative"
//                 onMouseEnter={() => setAboutOpen(true)}
//                 onMouseLeave={() => setAboutOpen(false)}
//               >
//                 <a
//                   href={item.href}
//                   className="Paragraph_Medium HNR_FONT group flex flex-col"
//                 >
//                   <span className="flex items-center gap-1">
//                     {item.name}
//                     <ChevronDown
//                       size={14}
//                       className={`transition-transform duration-200 ${
//                         aboutOpen ? "rotate-180" : ""
//                       }`}
//                     />
//                   </span>

//                   <div className="h-[1.5px] w-full overflow-hidden">
//                     <div
//                       className={`h-full bg-white transition-all duration-300 ${
//                         aboutOpen ? "w-full" : "w-0 group-hover:w-full"
//                       }`}
//                     ></div>
//                   </div>
//                 </a>

//                 {/* Dropdown panel */}
//                 <div
//                   className={`absolute left-0 top-full pt-4 transition-all duration-200 ${
//                     aboutOpen
//                       ? "opacity-100 translate-y-0 pointer-events-auto"
//                       : "opacity-0 -translate-y-2 pointer-events-none"
//                   }`}
//                 >
//                   <div className="min-w-[220px] rounded-md border border-white/10 bg-black/95 py-2 shadow-lg backdrop-blur-md">
//                     {item.children.map((child) => (
//                       <a
//                         key={child.name}
//                         href={child.href}
//                         className="Paragraph_Medium HNR_FONT block px-5 py-2.5 text-white/80 transition-colors duration-150 hover:text-white hover:bg-white/5"
//                       >
//                         {child.name}
//                       </a>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ) : (
//               <a
//                 key={item.name}
//                 href={item.href}
//                 className="Paragraph_Medium HNR_FONT group flex flex-col"
//               >
//                 {item.name}

//                 <div className="h-[1.5px] w-full overflow-hidden">
//                   <div className="h-full w-0 bg-white transition-all duration-300 group-hover:w-full"></div>
//                 </div>
//               </a>
//             )
//           )}
//         </nav>

//         {/* Logo */}
//         <div className="absolute left-1/2 -translate-x-1/2">
//           <Image
//             src="/images/nav/logo.png"
//             alt="Empire Logo"
//             width={scrolled ? 90 : 130}
//             height={scrolled ? 55 : 80}
//             className="object-contain transition-all duration-300"
//           />
//         </div>

//         {/* Right Side - Full nav, only shown at the top of the page on desktop */}
//         <div
//           className={`hidden items-center gap-8 transition-all duration-75 lg:flex ${
//             scrolled
//               ? "opacity-0 -translate-y-2 pointer-events-none"
//               : "opacity-100 translate-y-0"
//           }`}
//         >
//           <a
//             href="/shop"
//             className="Paragraph_Medium HNR_FONT text-white flex flex-col group"
//           >
//             <div className=" flex gap-2">

//             Shop Now <FaCartShopping />
//             </div>
//             <div className="h-[1.5px] w-full overflow-hidden">
//               <div className="h-full w-0 bg-white transition-all duration-300 group-hover:w-full"></div>
//             </div>
//           </a>

//           <BTN txt={`Become Channel Partner`} variant="B1" />
//         </div>

//         {/* Hamburger Toggle - always visible on mobile, appears on desktop once scrolled */}
//         <button
//           type="button"
//           aria-label={menuOpen ? "Close menu" : "Open menu"}
//           aria-expanded={menuOpen}
//           onClick={() => setMenuOpen((prev) => !prev)}
//           className={`relative z-50 flex h-10 w-10 items-center justify-center text-white transition-opacity duration-100 ${
//             scrolled ? "flex" : "flex lg:hidden"
//           }`}
//         >
//           {menuOpen ? <X size={26} /> : <Menu size={26} />}
//         </button>
//       </div>

//       {/* Menu Overlay - triggered by the hamburger on any screen size */}
//       <div
//         className={`fixed inset-0 top-0 h-screen w-full overflow-y-auto bg-black/95 backdrop-blur-md transition-all ease-out duration-75 ${
//           menuOpen
//             ? "opacity-100 pointer-events-auto"
//             : "opacity-0 pointer-events-none"
//         }`}
//       >
//         <div className="flex min-h-full w-full flex-col items-center justify-center gap-8 px-6 py-24">
//           {navLinks.map((item) =>
//             item.children ? (
//               <div key={item.name} className="flex flex-col items-center gap-4">
//                 <button
//                   type="button"
//                   onClick={() => setMobileAboutOpen((prev) => !prev)}
//                   className="Paragraph_Medium HNR_FONT flex items-center gap-2 text-2xl text-white"
//                 >
//                   {item.name}
//                   <ChevronDown
//                     size={20}
//                     className={`transition-transform duration-200 ${
//                       mobileAboutOpen ? "rotate-180" : ""
//                     }`}
//                   />
//                 </button>

//                 <div
//                   className={`flex flex-col items-center gap-4 overflow-hidden transition-all duration-200 ${
//                     mobileAboutOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
//                   }`}
//                 >
//                   {item.children.map((child) => (
//                     <a
//                       key={child.name}
//                       href={child.href}
//                       onClick={() => {
//                         setMenuOpen(false);
//                         setMobileAboutOpen(false);
//                       }}
//                       className="Paragraph_Medium HNR_FONT text-lg text-white/70"
//                     >
//                       {child.name}
//                     </a>
//                   ))}
//                 </div>
//               </div>
//             ) : (
//               <a
//                 key={item.name}
//                 href={item.href}
//                 onClick={() => setMenuOpen(false)}
//                 className="Paragraph_Medium HNR_FONT text-white text-2xl"
//               >
//                 {item.name}
//               </a>
//             )
//           )}

//           <a
//             href="/shop"
//             onClick={() => setMenuOpen(false)}
//             className="Paragraph_Medium HNR_FONT text-white text-2xl"
//           >
//             Shop Now
//           </a>

//           <BTN txt={`Become Channel Partner`} variant="B1" />
//         </div>
//       </div>
//     </header>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import BTN from "./BTN";
import { FaCartShopping } from "react-icons/fa6";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About Us",
    href: "/about",
    children: [
      { name: "The Company", href: "/about/our-story" },
      { name: "Our Processes", href: "/about/leadership" },
      { name: "Investors", href: "/about/mission" },
      { name: "CSR / Our Social Initiatives", href: "/about/awards" },
    ],
  },
  {
    name: "Media",
    href: "/media",
  },
  {
    name: "Career",
    href: "/careers",
  },
  {
    name: "Contact Us",
    href: "/contact",
  },
];

export default function Header() {
  const [aboutOpen, setAboutOpen] = useState(false); // desktop hover dropdown

  const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 40);
  };

  handleScroll();
  window.addEventListener("scroll", handleScroll, { passive: true });
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <header className={`fixed top-0 left-0 z-50 w-full py-2 pt-3 transition-colors duration-300 ${
    scrolled ? "bg-black/95" : "bg-transparent"
  }`}>
      <div className="mx-auto flex h-[70px] w-full items-center justify-between px-6 lg:px-12">
        {/* Left Menu */}
        <nav className="hidden items-center gap-10 text-white lg:flex">
          {navLinks.map((item) =>
            item.children ? (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setAboutOpen(true)}
                onMouseLeave={() => setAboutOpen(false)}
              >
                <a
                  href={item.href}
                  className="Paragraph_Medium HNR_FONT group flex flex-col"
                >
                  <span className="flex items-center gap-1">
                    {item.name}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        aboutOpen ? "rotate-180" : ""
                      }`}
                    />
                  </span>

                  <div className="h-[1.5px] w-full overflow-hidden">
                    <div
                      className={`h-full bg-white transition-all duration-300 ${
                        aboutOpen ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    ></div>
                  </div>
                </a>

                {/* Dropdown panel */}
                <div
                  className={`absolute left-0 top-full pt-4 transition-all duration-200 ${
                    aboutOpen
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 -translate-y-2 pointer-events-none"
                  }`}
                >
                  <div className="min-w-[220px] rounded-md border border-white/10 bg-black/95 py-2 shadow-lg backdrop-blur-md">
                    {item.children.map((child) => (
                      <a
                        key={child.name}
                        href={child.href}
                        className="Paragraph_Medium HNR_FONT block px-5 py-2.5 text-white/80 transition-colors duration-150 hover:text-white hover:bg-white/5"
                      >
                        {child.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
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
            )
          )}
        </nav>

        {/* Logo */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <Image
            src="/images/nav/logo.png"
            alt="Empire Logo"
            width={130}
            height={80}
            className="object-contain"
          />
        </div>

        {/* Right Side */}
        <div className="hidden items-center gap-8 lg:flex">
          <a
            href="https://www.rambandhu.com/"
            target="blank"
            className="Paragraph_Medium HNR_FONT text-white flex flex-col group"
          >
            <div className="flex gap-2">
              Shop Now <FaCartShopping />
            </div>
            <div className="h-[1.5px] w-full overflow-hidden">
              <div className="h-full w-0 bg-white transition-all duration-300 group-hover:w-full"></div>
            </div>
          </a>

          <BTN txt={`Become Channel Partner`} variant="B1" />
        </div>
      </div>
    </header>
  );
}