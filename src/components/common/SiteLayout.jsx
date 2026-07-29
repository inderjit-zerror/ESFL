"use client";

import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import LenisScroll from "@/components/common/LenisScroll";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { ViewTransitions } from "next-view-transitions";
import WhatsAppButton from "./Whatsappbutton";

gsap.registerPlugin(ScrollTrigger);

export default function SiteLayout({ children }) {
  const pathname = usePathname();


  useEffect(() => {
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
      if (window.lenis) {
        window.lenis.resize();
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <ViewTransitions>
      <LenisScroll>
        <header>
          <Header />
        </header>

        <main>
          {children}
        </main>

        <footer>
          <Footer />
        </footer>
        <WhatsAppButton phone="" message="Hi! I'd like to know more about your products." />
      </LenisScroll>
    </ViewTransitions>

  );
}
