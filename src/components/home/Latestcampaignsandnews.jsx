"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Carousel from "./Carousel";
import BTN from "../common/BTN";

const campaigns = [
  {
    id: "swad-ka-asli-jadoo",
    badge: "FEATURED CAMPAIGN",
    badgeColor: "bg-[#f5c451] text-neutral-900",
    meta: "ATL • 2026",
    title: "SWAD KA ASLI JADOO — THE TASTE OF TRUE MAGIC",
    image: "/images/home/P1.png",
  },
  {
    id: "purity-first-reels",
    badge: "DIGITAL MEDIA",
    badgeColor: "bg-[#8bc34a] text-neutral-900",
    meta: null,
    title: "#PURITYFIRST REELS SERIES",
    image: "/images/home/P2.png",
  },
  {
    id: "harvest-diaries",
    badge: "PRINT",
    badgeColor: "bg-[#f5c451] text-neutral-900",
    meta: "OOH • 2026",
    title: "HARVEST DIARIES — FROM FARM TO YOUR PLATE",
    image: "/images/home/P5.png",
  },
  {
    id: "masala-mornings",
    badge: "TVC",
    badgeColor: "bg-[#8bc34a] text-neutral-900",
    meta: "NAT • 2026",
    title: "MASALA MORNINGS — A NEW DAILY RITUAL",
    image: "/images/home/P4.png",
  },
];

const news = [
  {
    id: "esfl-award",
    date: "OCTOBER 12, 2026",
    excerpt:
      "ESFL wins 'Emerging Food Brand of the Year' at the National Food Summit.",
    image: "/images/home/P3.png",
  },
  {
    id: "sustainable-packaging",
    date: "OCTOBER 12, 2026",
    excerpt: "Sustainable packaging initiative launched across the Ram Bandhu brand.",
    image: "/images/home/P4.png",
  },
  {
    id: "csr-farmers",
    date: "OCTOBER 12, 2026",
    excerpt:
      "CSR outreach empowers over 5,000 farmers across rural Maharashtra.",
    image: "/images/home/P5.png",
  },
  {
    id: "new-factory",
    date: "SEPTEMBER 28, 2026",
    excerpt: "New state-of-the-art manufacturing facility opens in Pune.",
    image: "/images/home/P1.png",
  },
  {
    id: "export-growth",
    date: "SEPTEMBER 14, 2026",
    excerpt: "Export volumes cross 15 countries as international demand grows.",
    image: "/images/home/P2.png",
  },
];

export default function LatestCampaignsAndNews() {
  const headerRef = useRef(null);

  useEffect(() => {
    if (!headerRef.current) return;
    gsap.fromTo(
      headerRef.current.children,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, stagger: 0.12, ease: "power2.out" }
    );
  }, []);

  return (
    <section className="bg-[#fdf6ec] py-8 px-6">
      <div className=" mx-auto px-10 pt-10">
        {/* Header */}
        <div ref={headerRef} className="text-center  mx-auto mb-0">
          <p className=" Paragraph_Small HNR_FONT mb-5  text-[#c8102e]">
            ON AIR NOW
          </p>
          <h1 className=" Heading_1 HNM_FONT text-neutral-900 leading-tight">
            LATEST CAMPAIGNS
            
            &amp; NEWS
          </h1>
          <p className="my-4  Paragraph_Medium text-neutral-600">
            Latest campaigns, media coverage and company updates.
          </p>
         
          <BTN  txt={"VIEW ALL"} variant={"B1"}/>
        </div>

        {/* Campaigns */}
        <div className="mb-20">
          <h3 className="Paragraph_Medium text-[1.5rem]! DD_Font w-fit flex translate-y-[280%] text-neutral-900 mb-6">
            CAMPAIGNS
          </h3>

          <Carousel
            items={campaigns}
            slidesPerView={{ base: 1, sm: 1.15, md: 2, lg: 2 }}
            gap={20}
            renderItem={(item) => (
              <div className="group relative aspect-[4/3]  rounded-xl overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                <span
                  className={`absolute top-4 Paragraph_Small HNR_FONT text-[0.7rem]! left-4 rounded-full px-3 py-1 tracking-widest ${item.badgeColor}`}
                >
                  {item.badge}
                </span>

                <div className="absolute bottom-10 left-10 right-10 text-white">
                  {item.meta && (
                    <p className="Paragraph_Small MNR_FONT mb-5 ">
                      {item.meta}
                    </p>
                  )}
                  <p className="Paragraph_Medium text-[1.5rem]! leading-[1.5rem]! MNH_FONT font-semibold! uppercase max-w-[50%]">
                    {item.title}
                  </p>
                </div>
              </div>
            )}
          />
        </div>

        {/* In the news */}
        <div>
          <h3 className="Paragraph_Medium DD_Font text-[1.5rem]! flex translate-y-[280%] text-neutral-900 mb-6">
            IN THE NEWS
          </h3>

          <Carousel
            items={news}
            slidesPerView={{ base: 1, sm: 1.3, md: 2.3, lg: 3 }}
            gap={20}
            renderItem={(item) => (
              <div className="flex flex-col group">
                <div className="aspect-[4/3] rounded-xl overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.excerpt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="mt-4 Paragraph_Small MNM_FONT text-[#c8102e] font-semibold!">
                  {item.date}
                </p>
                <p className="mt-2 Paragraph_Medium MNM_FONT text-neutral-800 ">
                  {item.excerpt}
                </p>
                <a
                  href="#"
                  className="mt-2 text-sm Paragraph_Small MNM_FONT font-semibold! text-[#c8102e] underline cursor-pointer underline-offset-2 hover:text-[#a80d26]"
                >
                  Read More
                </a>
              </div>
            )}
          />
        </div>
      </div>
    </section>
  );
}