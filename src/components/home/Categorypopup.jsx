"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

function ArrowIcon({ direction = "right" }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4 sm:w-5 sm:h-5"
      style={{ transform: direction === "left" ? "rotate(180deg)" : "none" }}
    >
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}

/**
 * Generic brand category popup.
 * Everything (logo + carousel) is contained within 80vh, no matter the
 * screen size — the image stage fills whatever height is left after the
 * logo bar, and the category name / dots sit as an overlay on the image.
 *
 * Props:
 * - logo: string (path to the brand logo image, shown at the top)
 * - categories: [{ id, name, image }]  -> ONE full-size image per category
 * - accentColor: hex string for buttons / active states (default "#c8102e")
 */
export default function CategoryPopup({
  logo,
  categories = [],
  accentColor = "#c8102e",
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCategory = categories[activeIndex];

  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const isAnimating = useRef(false);
  const dirRef = useRef(1); // 1 = next, -1 = prev

  // Entrance animation on mount (fires fresh every time the popup opens,
  // since Sticker only mounts this component while the popup is open)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".cp-logo",
        { y: -14, opacity: 0, scale: 0.92 },
        { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.8)" },
      );

      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 1.06 },
        { opacity: 1, scale: 1, duration: 0.7, ease: "power2.out", delay: 0.1 },
      );

      gsap.fromTo(
        titleRef.current,
        { y: 14, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out", delay: 0.35 },
      );
    }, sectionRef);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goTo = (nextIndex, direction) => {
    if (isAnimating.current || nextIndex === activeIndex) return;
    isAnimating.current = true;
    dirRef.current = direction;

    const outX = direction === 1 ? -30 : 30;

    const tl = gsap.timeline({
      onComplete: () => {
        isAnimating.current = false;
      },
    });

    tl.to(
      titleRef.current,
      { y: -10, opacity: 0, duration: 0.2, ease: "power2.in" },
      0,
    );

    tl.to(
      imageRef.current,
      {
        x: outX,
        opacity: 0,
        scale: 1.04,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          setActiveIndex(nextIndex);
        },
      },
      0,
    );
  };

  const handlePrev = () => {
    const nextIndex = (activeIndex - 1 + categories.length) % categories.length;
    goTo(nextIndex, -1);
  };

  const handleNext = () => {
    const nextIndex = (activeIndex + 1) % categories.length;
    goTo(nextIndex, 1);
  };

  // Slide-in animation whenever the active category changes
  useEffect(() => {
    const inX = dirRef.current === 1 ? 30 : -30;

    gsap.fromTo(
      imageRef.current,
      { x: inX, opacity: 0, scale: 1.04 },
      { x: 0, opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" },
    );

    gsap.fromTo(
      titleRef.current,
      { y: 10, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, ease: "power2.out", delay: 0.08 },
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  if (!activeCategory) return null;

  return (
    <section
      ref={sectionRef}
      className="w-full h-[90vh] max-h-[90vh] flex flex-col bg-[#FFC55C] overflow-hidden rounded-2xl box-border"
    >
      {/* Logo bar */}
      <div
        className="cp-logo shrink-0 flex items-center justify-center py-3 sm:py-4 md:py-5 border-b"
        style={{ borderColor: `${accentColor}33` }}
      >
        <img
          src={logo}
          alt="Brand logo"
          className="h-9 sm:h-12 md:h-14 w-auto max-w-[55%] object-contain"
        />
      </div>

       <div className=" inset-x-0 px-4 sm:px-8 py-3 sm:py-4 md:py-3 overflow-hidden">
          <h3
            ref={titleRef}
            className="Paragraph_Large sm:Heading_3 text-sm sm:text-lg md:text-2xl font-bold tracking-[0.08em] text-center text-[#D52E12] break-words"
           
          >
            {activeCategory.name}
          </h3>
        </div>

      {/* Image stage — fills all remaining height, name + controls overlay it */}
      <div className="relative flex-1 min-h-0 w-full ">
        <img
          ref={imageRef}
          src={activeCategory.image}
          alt={activeCategory.name}
          className="absolute inset-0 h-full object-cover mx-auto"
        />

        {/* Legibility gradient */}
        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/0 to-black/35 pointer-events-none" /> */}

        {/* Category name */}
        {/* <div className="absolute top-0 inset-x-0 px-4 sm:px-8 pt-3 sm:pt-5 md:pt-6 overflow-hidden">
          <h3
            ref={titleRef}
            className="Paragraph_Large sm:Heading_3 text-sm sm:text-lg md:text-2xl font-bold tracking-[0.08em] text-center text-white break-words"
            style={{ textShadow: "0 2px 10px rgba(0,0,0,0.45)" }}
          >
            {activeCategory.name}
          </h3>
        </div> */}

        {/* Prev arrow */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous category"
          className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg transition-transform hover:scale-105"
          style={{ color: accentColor }}
        >
          <ArrowIcon direction="left" />
        </button>

        {/* Next arrow */}
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next category"
          className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg transition-transform hover:scale-105"
          style={{ color: accentColor }}
        >
          <ArrowIcon direction="right" />
        </button>

        {/* Dot indicators */}
        <div className="absolute bottom-3 sm:bottom-5 inset-x-0 flex justify-center gap-1.5 sm:gap-2 flex-wrap px-4">
          {categories.map((cat, i) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => goTo(i, i > activeIndex ? 1 : -1)}
              aria-label={`Go to ${cat.name}`}
              className="h-1.5 sm:h-2 rounded-full transition-all shrink-0"
              style={{
                width: i === activeIndex ? "22px" : "8px",
                backgroundColor:
                  i === activeIndex ? "#ffffff" : "rgba(255,255,255,0.45)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}