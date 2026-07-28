"use client";

import Image from "next/image";
import { Search } from "lucide-react";

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
];

export default function Header() {
  return (
    <header className=" absolute top-5 left-0 z-50 w-full">
      <div className="mx-auto flex h-[70px] w-full items-center justify-between px-6 lg:px-12">
        {/* Left Menu */}
        <nav className="flex items-center gap-10 text-white">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="Paragraph_Small HNR_FONT group flex flex-col"
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
            width={110}
            height={50}
            className="object-contain"
          />
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-8">
          <button className="text-white">
            <Search size={18} strokeWidth={2} />
          </button>

          <a
            href="/contact"
            className="Paragraph_Small HNR_FONT text-white flex flex-col group"
          >
            Contact
             <div className="h-[1.5px] w-full overflow-hidden">
                <div className="h-full w-0 bg-white transition-all duration-300 group-hover:w-full"></div>
              </div>
          </a>

          <button className="Paragraph_Small HNR_FONT rounded-full bg-[#E4A94D] hover:bg-[#e99d23] px-4 py-[0.3rem] uppercase text-[#B32727]">
            Become A Partner
          </button>
        </div>
      </div>
    </header>
  );
}