"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import gsap from "gsap";

/**
 * Generic horizontal carousel.
 *
 * Props:
 * - items: array of data objects
 * - renderItem: (item, index) => JSX for a single slide
 * - slidesPerView: { base, sm, md, lg } number of slides visible at each breakpoint
 * - gap: px gap between slides
 */
export default function Carousel({
  items,
  renderItem,
  slidesPerView = { base: 1, sm: 1.2, md: 2, lg:2 },
  gap = 24,
}) {
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(slidesPerView.base);
  const [slideWidth, setSlideWidth] = useState(0);

  const computeVisible = useCallback(() => {
    const w = window.innerWidth;
    if (w >= 1024) return slidesPerView.lg;
    if (w >= 768) return slidesPerView.md;
    if (w >= 640) return slidesPerView.sm;
    return slidesPerView.base;
  }, [slidesPerView]);

  const measure = useCallback(() => {
    if (!viewportRef.current) return;
    const v = computeVisible();
    setVisible(v);
    const viewportWidth = viewportRef.current.offsetWidth;
    const width = (viewportWidth - gap * (v - 1)) / v;
    setSlideWidth(width);
  }, [computeVisible, gap]);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  const maxIndex = Math.max(0, items.length - Math.ceil(visible));

  const goTo = (i) => {
    const clamped = Math.min(Math.max(i, 0), maxIndex);
    setIndex(clamped);
    const x = -(clamped * (slideWidth + gap));
    gsap.to(trackRef.current, {
      x,
      duration: 0.6,
      ease: "power3.out",
    });
  };

  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  return (
    <div className="relative">
       {/* Navigation arrows */}
      {maxIndex > 0 && (
        <div className="flex items-center justify-end gap-3 mb-6">
          <button
            type="button"
            aria-label="Previous"
            onClick={prev}
            disabled={index === 0}
            className="w-10 h-10 rounded-full  bg-[#F5C451] flex items-center justify-center text-neutral-700 hover:bg-[#D52E12] hover:text-white hover:border-[#D52E12] transition-colors disabled:opacity-30 disabled:pointer-events-none"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={next}
            disabled={index === maxIndex}
            className="w-10 h-10 rounded-full  bg-[#F5C451] flex items-center justify-center text-neutral-700 hover:bg-[#D52E12] hover:text-white hover:border-[#D52E12] transition-colors disabled:opacity-30 disabled:pointer-events-none"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      )}
      <div ref={viewportRef} className="overflow-hidden">
        <div ref={trackRef} className="flex" style={{ gap }}>
          {items.map((item, i) => (
            <div
              key={item.id ?? i}
              style={{ width: slideWidth, flex: `0 0 ${slideWidth}px` }}
            >
              {renderItem(item, i)}
            </div>
          ))}
        </div>
      </div>

     
    </div>
  );
}