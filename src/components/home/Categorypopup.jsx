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
    className="inline-block rounded-2xl overflow-hidden"
  >
    <div className="relative inline-block">
      <img
        ref={imageRef}
        src={activeCategory.image}
        alt={activeCategory.name}
        className="block h-auto max-h-[60vh] w-auto object-contain"
      />

      {/* Prev */}
      <button
        type="button"
        onClick={handlePrev}
        aria-label="Previous category"
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg"
        style={{ color: accentColor }}
      >
        <ArrowIcon direction="left" />
      </button>

      {/* Next */}
      <button
        type="button"
        onClick={handleNext}
        aria-label="Next category"
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg"
        style={{ color: accentColor }}
      >
        <ArrowIcon direction="right" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 inset-x-0 flex justify-center gap-2">
        {categories.map((cat, i) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => goTo(i, i > activeIndex ? 1 : -1)}
            className="h-2 rounded-full transition-all"
            style={{
              width: i === activeIndex ? "22px" : "8px",
              backgroundColor:
                i === activeIndex
                  ? "#fff"
                  : "rgba(255,255,255,0.45)",
            }}
          />
        ))}
      </div>
    </div>
  </section>
);
}