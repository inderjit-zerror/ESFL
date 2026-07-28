"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function Building() {
  const leftPackRef = useRef(null);
  const rightPackRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Respect users who prefer reduced motion
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) return;

      // Left product — gentle float + subtle tilt
      gsap.to(leftPackRef.current, {
        y: -50,
        rotate: 8,
        duration: 1.2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        transformOrigin: "center center",
      });

      // Right product — mirrored float, slightly slower + offset
      // so the two never sync up (feels more natural/organic)
      gsap.to(rightPackRef.current, {
        y: -50,
        rotate: -8,
        duration: 1.6,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 0.6,
        transformOrigin: "center center",
      });
      gsap.to( '.EC', {
        rotate: 360,
        duration: 5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 0.6,
        transformOrigin: "center center",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative flex min-h-screen w-fit mx-auto items-center justify-center px-6">

      {/* Left Product */}
      <div className="absolute -left-[18%] bottom-[35%] -translate-y-[20%]">
        <Image
          ref={leftPackRef}
          src="/images/home/YellowPack.png"
          alt="Product"
          width={100}
          height={140}
          className="rotate-[5deg] will-change-transform"
        />
      </div>

      {/* Right Product */}
      <div className="absolute -right-[15%] bottom-[25%] -translate-y-[20%]">
        <Image
          ref={rightPackRef}
          src="/images/home/GreenPack.png"
          alt="Product"
          width={100}
          height={140}
          className="rotate-[-5deg] will-change-transform"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex max-w-[650px] flex-col items-center text-center">

        {/* Top Text */}
        <div className="mb-4 flex items-center gap-3">
          <span className="Paragraph_Small uppercase HNR_FONT text-[#D9472B]">
            Since 1993 • Guntur To Every Indian Kitchen
          </span>
        </div>

        {/* Decorative Star */}
        <Image
          src="/images/home/EllipseOrange.png"
          alt="Star"
          width={100}
          height={100}
          className="absolute -right-10 -top-15 EC"
        />

        {/* Heading */}
        <h1 className="Heading_1 HNM_FONT uppercase">
          Building India's <br /> Trusted Food <br /> Brands.
        </h1>

        {/* Description */}
        <p className="mt-4 max-w-[540px] Paragraph_Medium HNR_FONT text-[#5B514C]">
          Pioneering purity and uncompromising quality in every household.
          Our legacy is built on authentic flavour and world-class
          manufacturing standards.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex gap-5 max-sm:flex-col">
          <button className="rounded-full bg-[#B20F1F] hover:bg-[#920e1b] px-8 py-2.5 Paragraph_Small HNR_FONT text-white">
            Explore Our Brands
          </button>

          <button className="rounded-full bg-[#E5B14A] hover:bg-[#e9a215]  px-8 py-2.5 Paragraph_Small HNR_FONT uppercase text-[#A23B20]">
            Become A Partner
          </button>
        </div>

      </div>
    </section>
  );
}