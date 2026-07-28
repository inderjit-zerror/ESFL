"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const categoryProducts = {
  "GROUND SPICES": [
    { id: "mirchi", name: "मिर्ची पावडर", bg: "bg-['']", image: "/images/home/IMG1.png" },
    { id: "dhaniya", name: "धनिया पावडर", bg: "bg-['']", image: "/images/home/IMG2.png" },
    { id: "haldi", name: "हल्दी पावडर", bg: "bg-['']", image: "/images/home/IMG3.png" },
  ],
  "BLENDED SPICES": [
    { id: "garam-masala", name: "गरम मसाला", bg: "bg-['']", image: "/images/home/IMG2.png" },
    { id: "chana-masala", name: "चना मसाला", bg: "bg-['']", image: "/images/home/IMG3.png" },
    { id: "pav-bhaji", name: "पावभाजी मसाला", bg: "bg-['']", image: "/images/home/IMG1.png" },
  ],
  "SIGNATURE PRODUCTS": [
    { id: "kitchen-king", name: "किचन किंग", bg: "bg-['']", image: "/images/home/IMG3.png" },
    { id: "biryani-masala", name: "बिरयानी मसाला", bg: "bg-['']", image: "/images/home/IMG1.png" },
    { id: "meat-masala", name: "मीट मसाला", bg: "bg-['']", image: "/images/home/IMG2.png" },
  ],
  PICKLES: [
    { id: "mango-pickle", name: "आम का अचार", bg: "bg-['']", image: "/images/home/IMG1.png" },
    { id: "mixed-pickle", name: "मिक्स अचार", bg: "bg-['']", image: "/images/home/IMG2.png" },
    { id: "chilli-pickle", name: "मिर्च का अचार", bg: "bg-['']", image: "/images/home/IMG3.png" },
  ],
  PAPADS: [
    { id: "urad-papad", name: "उड़द पापड़", bg: "bg-['']", image: "/images/home/IMG2.png" },
    { id: "moong-papad", name: "मूंग पापड़", bg: "bg-['']", image: "/images/home/IMG1.png" },
    { id: "masala-papad", name: "मसाला पापड़", bg: "bg-['']", image: "/images/home/IMG3.png" },
  ],
  JAMS: [
    { id: "mixed-fruit-jam", name: "मिक्स फ्रूट जैम", bg: "bg-['']", image: "/images/home/IMG3.png" },
    { id: "strawberry-jam", name: "स्ट्रॉबेरी जैम", bg: "bg-['']", image: "/images/home/IMG2.png" },
    { id: "pineapple-jam", name: "पाइनएप्पल जैम", bg: "bg-['']", image: "/images/home/IMG1.png" },
  ],
  "BEVERAGE MIXES": [
    { id: "lemon-mix", name: "नींबू मिक्स", bg: "bg-['']", image: "/images/home/IMG2.png" },
    { id: "jaljeera", name: "जलजीरा", bg: "bg-['']", image: "/images/home/IMG3.png" },
    { id: "thandai", name: "ठंडाई", bg: "bg-['']", image: "/images/home/IMG1.png" },
  ],
  "SPICE MIXES": [
    { id: "sambar-mix", name: "सांबर मिक्स", bg: "bg-['']", image: "/images/home/IMG3.png" },
    { id: "rasam-mix", name: "रसम मिक्स", bg: "bg-['']", image: "/images/home/IMG1.png" },
    { id: "curry-mix", name: "करी मिक्स", bg: "bg-['']", image: "/images/home/IMG2.png" },
  ],
  SNACKS: [
    { id: "namkeen", name: "नमकीन", bg: "bg-['']", image: "/images/home/IMG1.png" },
    { id: "sev", name: "सेव", bg: "bg-['']", image: "/images/home/IMG2.png" },
    { id: "chivda", name: "चिवड़ा", bg: "bg-['']", image: "/images/home/IMG3.png" },
  ],
};

const categories = Object.keys(categoryProducts);

export default function RamBandhuCategory() {
  const [active, setActive] = useState(categories[0]);
  const [products, setProducts] = useState(categoryProducts[categories[0]]);
  const sectionRef = useRef(null);
  const pillRefs = useRef([]);
  const cardRefs = useRef([]);
  const isAnimating = useRef(false);

  // Entrance animation on mount
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".rb-header",
        { y: -16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
      );

      gsap.fromTo(
        pillRefs.current,
        { y: 12, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.05, ease: "power2.out", delay: 0.15 }
      );

      gsap.fromTo(
        cardRefs.current,
        { y: 40, opacity: 0, scale: 0.92 },
        { y: 0, opacity: 1, scale: 1, duration: 0.7, stagger: 0.15, ease: "back.out(1.6)", delay: 0.35 }
      );

      gsap.fromTo(
        ".rb-logo",
        { scale: 0, rotate: -15, opacity: 0 },
        { scale: 1, rotate: 0, opacity: 1, duration: 0.6, ease: "back.out(2)", delay: 0.9 }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handlePillClick = (cat, el) => {
    if (isAnimating.current || cat === active) return;
    isAnimating.current = true;

    gsap.fromTo(el, { scale: 0.9 }, { scale: 1, duration: 0.3, ease: "back.out(3)" });

    const cards = cardRefs.current.filter(Boolean);

    // Animate current cards out, then swap data, then animate new cards in
    gsap.to(cards, {
      y: -24,
      opacity: 0,
      scale: 0.9,
      duration: 0.35,
      stagger: 0.06,
      ease: "power2.in",
      onComplete: () => {
        setActive(cat);
        setProducts(categoryProducts[cat]);
      },
    });
  };

  // Whenever products change (after category swap), animate the new cards in
  useEffect(() => {
    const cards = cardRefs.current.filter(Boolean);
    if (!cards.length) return;

    gsap.fromTo(
      cards,
      { y: 24, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.08,
        ease: "back.out(1.7)",
        onComplete: () => {
          isAnimating.current = false;
        },
      }
    );
  }, [products]);

  const handleCardEnter = (el) => {
    gsap.to(el, { y: -8, duration: 0.3, ease: "power2.out" });
  };

  const handleCardLeave = (el) => {
    gsap.to(el, { y: 0, duration: 0.3, ease: "power2.out" });
  };

  return (
    <section ref={sectionRef} className="bg-[#fdf6ec] h-svh px-6 py-14 flex justify-center relative items-center">

  <div className=" absolute bottom-15 w-[8%] right-20 z-99">
            <img src="/images/home/RBMLogo.png" alt="IMG" className="w-full object-cover object-center" />
          </div>

      <div className="px-10 mx-auto w-full h-full ">
        {/* Header */}
        <div className="rb-header">
          <h2 className="Heading_1 HNM_FONT text-[#c8102e] tracking-tight">
            RAM BANDHU
          </h2>
          <p className="mt-1 Paragraph_Medium text-neutral-700">
            Ground &amp; blended spices
          </p>
        </div>

        {/* Category pills */}
        <div className="mt-10 flex flex-wrap gap-3">
          {categories.map((cat, i) => {
            const isActive = cat === active;
            return (
              <button
                key={cat}
                ref={(el) => (pillRefs.current[i] = el)}
                type="button"
                onClick={(e) => handlePillClick(cat, e.currentTarget)}
                className={`rounded-full px-4 py-2 Paragraph_Small tracking-wide transition-colors ${
                  isActive
                    ? "bg-[#c8102e] text-white"
                    : "bg-[#f6cfa1] text-[#7a4a1e] hover:bg-[#f0bd85]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Product cards */}
        <div className="relative  w-[80%] h-full mx-auto pt-[15vh] ">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center ">
            {products.map((p, i) => (
              <div
                key={p.id}
                ref={(el) => (cardRefs.current[i] = el)}
                onMouseEnter={(e) => handleCardEnter(e.currentTarget)}
                onMouseLeave={(e) => handleCardLeave(e.currentTarget)}
                className={`relative w-40 sm:w-57 aspect-[4/5] rounded-2xl overflow-hidden  cursor-pointer ${p.bg}`}
              >
                <img
                  src={p.image}
                  alt={p.name}
                  className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-90"
                />
                {/* <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/40 to-transparent">
                  <p className="text-white text-sm font-bold text-center">
                    {p.name}
                  </p>
                </div> */}
              </div>
            ))}
          </div>

          {/* Logo badge */}
        </div>
      </div>
        
    </section>
  );
}