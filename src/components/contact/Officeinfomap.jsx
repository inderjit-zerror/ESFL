"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const INFO_ROWS = [
  {
    id: "hours",
    label: "Office Hours",
    rows: [
      { k: "Monday – Friday", v: "09:00 – 18:00" },
      { k: "Saturday", v: "09:00 – 13:00" },
      { k: "Sunday", v: "Closed" },
    ],
  },
  {
    id: "corporate",
    label: "Corporate Office",
    lines: [
      "Empire Spices & Foods Ltd.",
      "Empire House, Plot No. 32,",
      "Nashik, Maharashtra 422010",
    ],
  },
  {
    id: "factory",
    label: "Factory Address",
    lines: [
      "Plot No. B-32, MIDC Ambad,",
      "Nashik, Maharashtra 422010,",
      "India",
    ],
  },
  {
    id: "contact",
    label: "Call / Email",
    lines: ["info@esfl.co.in", "+91 253 1234567"],
  },
];

function RowBlock({ label, rows, lines, isLast }) {
  return (
    <div className={isLast ? "" : "border-b border-[#2B1B12]/15 pb-6"}>
      <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] items-start gap-4 sm:gap-8">
        <h3 className="text-base font-extrabold uppercase tracking-tight text-[#C8102E] sm:text-lg">
          {label}
        </h3>

        <div className="relative text-right text-[13px] leading-relaxed text-[#2B1B12]/80 sm:text-sm">
          <span
            className="absolute -right-2.5 -top-1 h-1.5 w-1.5 rounded-full bg-[#C8102E]"
            aria-hidden="true"
          />
          {rows
            ? rows.map((r) => (
                <p key={r.k} className="whitespace-nowrap">
                  <span className="mr-3">{r.k}</span>
                  <span className="font-medium text-[#2B1B12]">{r.v}</span>
                </p>
              ))
            : lines.map((l) => <p key={l}>{l}</p>)}
        </div>
      </div>
    </div>
  );
}

export default function OfficeInfoMap() {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".oi-map",
        { opacity: 0, scale: 1.04 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: { trigger: rootRef.current, start: "top 80%" },
        },
      );
      gsap.fromTo(
        ".oi-row",
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.08,
          scrollTrigger: { trigger: rootRef.current, start: "top 80%" },
        },
      );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="grid overflow-hidden h-screen bg-[#FFC55C] lg:grid-cols-2"
    >
      {/* Map — left */}
      <div className="oi-map relative min-h-[360px] lg:min-h-[640px]">
        <iframe
          title="Empire Spices & Foods Ltd. location"
          src="https://www.google.com/maps?q=Nashik,+Maharashtra&output=embed"
          className="h-full w-full grayscale-[15%]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        {/* Custom pin card overlay */}
        <div className="absolute top-[50%] right-[5%] h-fit flex max-w-[280px] items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-[0_10px_30px_-8px_rgba(0,0,0,0.35)] sm:bottom-10 sm:right-10">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#C8102E] text-white">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11Z" />
              <circle cx="12" cy="10" r="2.5" />
            </svg>
          </div>
          <div className="min-w-0">
            <p className="text-[11px] font-extrabold uppercase leading-tight tracking-tight text-[#C8102E] sm:text-xs">
              Empire Spices &amp; Foods Ltd.
            </p>
            <p className="mt-0.5 text-[11px] text-[#2B1B12]/70 sm:text-xs">
              Nashik, Maharashtra, India
            </p>
          </div>
        </div>
      </div>

      {/* Info panel — right */}
      <div className="flex flex-col justify-center gap-6 px-8 py-12 sm:px-14 sm:py-16">
        {INFO_ROWS.map((section, i) => (
          <div className="oi-row" key={section.id}>
            <RowBlock
              label={section.label}
              rows={section.rows}
              lines={section.lines}
              isLast={i === INFO_ROWS.length - 1}
            />
          </div>
        ))}
      </div>
    </section>
  );
}