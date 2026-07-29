// "use client";

// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";

// const categoryProducts = {
//   "GROUND SPICES": [
//     { id: "mirchi", name: "मिर्ची पावडर", image: "/images/home/IMG1.png" },
//     { id: "dhaniya", name: "धनिया पावडर", image: "/images/home/IMG2.png" },
//     { id: "haldi", name: "हल्दी पावडर", image: "/images/home/IMG3.png" },
//   ],
//   "BLENDED SPICES": [
//     { id: "garam-masala", name: "गरम मसाला", image: "/images/home/IMG2.png" },
//     { id: "chana-masala", name: "चना मसाला", image: "/images/home/IMG3.png" },
//     { id: "pav-bhaji", name: "पावभाजी मसाला", image: "/images/home/IMG1.png" },
//   ],
//   "SIGNATURE PRODUCTS": [
//     { id: "kitchen-king", name: "किचन किंग", image: "/images/home/IMG3.png" },
//     { id: "biryani-masala", name: "बिरयानी मसाला", image: "/images/home/IMG1.png" },
//     { id: "meat-masala", name: "मीट मसाला", image: "/images/home/IMG2.png" },
//   ],
//   PICKLES: [
//     { id: "mango-pickle", name: "आम का अचार", image: "/images/home/IMG1.png" },
//     { id: "mixed-pickle", name: "मिक्स अचार", image: "/images/home/IMG2.png" },
//     { id: "chilli-pickle", name: "मिर्च का अचार", image: "/images/home/IMG3.png" },
//   ],
//   PAPADS: [
//     { id: "urad-papad", name: "उड़द पापड़", image: "/images/home/IMG2.png" },
//     { id: "moong-papad", name: "मूंग पापड़", image: "/images/home/IMG1.png" },
//     { id: "masala-papad", name: "मसाला पापड़", image: "/images/home/IMG3.png" },
//   ],
//   JAMS: [
//     { id: "mixed-fruit-jam", name: "मिक्स फ्रूट जैम", image: "/images/home/IMG3.png" },
//     { id: "strawberry-jam", name: "स्ट्रॉबेरी जैम", image: "/images/home/IMG2.png" },
//     { id: "pineapple-jam", name: "पाइनएप्पल जैम", image: "/images/home/IMG1.png" },
//   ],
//   "BEVERAGE MIXES": [
//     { id: "lemon-mix", name: "नींबू मिक्स", image: "/images/home/IMG2.png" },
//     { id: "jaljeera", name: "जलजीरा", image: "/images/home/IMG3.png" },
//     { id: "thandai", name: "ठंडाई", image: "/images/home/IMG1.png" },
//   ],
//   "SPICE MIXES": [
//     { id: "sambar-mix", name: "सांबर मिक्स", image: "/images/home/IMG3.png" },
//     { id: "rasam-mix", name: "रसम मिक्स", image: "/images/home/IMG1.png" },
//     { id: "curry-mix", name: "करी मिक्स", image: "/images/home/IMG2.png" },
//   ],
//   SNACKS: [
//     { id: "namkeen", name: "नमकीन", image: "/images/home/IMG1.png" },
//     { id: "sev", name: "सेव", image: "/images/home/IMG2.png" },
//     { id: "chivda", name: "चिवड़ा", image: "/images/home/IMG3.png" },
//   ],
// };

// const categories = Object.keys(categoryProducts);

// export default function RamBandhuCategory() {
//   const [active, setActive] = useState(categories[0]);
//   const [products, setProducts] = useState(categoryProducts[categories[0]]);
//   const sectionRef = useRef(null);
//   const pillRefs = useRef([]);
//   const cardRefs = useRef([]);
//   const isAnimating = useRef(false);

//   // Entrance animation on mount
//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.fromTo(
//         ".rb-header",
//         { y: -16, opacity: 0 },
//         { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
//       );

//       gsap.fromTo(
//         pillRefs.current,
//         { y: 12, opacity: 0 },
//         { y: 0, opacity: 1, duration: 0.5, stagger: 0.05, ease: "power2.out", delay: 0.15 }
//       );

//       gsap.fromTo(
//         cardRefs.current,
//         { y: 40, opacity: 0, scale: 0.92 },
//         { y: 0, opacity: 1, scale: 1, duration: 0.7, stagger: 0.15, ease: "back.out(1.6)", delay: 0.35 }
//       );

//       gsap.fromTo(
//         ".rb-logo",
//         { scale: 0, rotate: -15, opacity: 0 },
//         { scale: 1, rotate: 0, opacity: 1, duration: 0.6, ease: "back.out(2)", delay: 0.9 }
//       );
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   const handlePillClick = (cat, el) => {
//     if (isAnimating.current || cat === active) return;
//     isAnimating.current = true;

//     gsap.fromTo(el, { scale: 0.9 }, { scale: 1, duration: 0.3, ease: "back.out(3)" });

//     const cards = cardRefs.current.filter(Boolean);

//     gsap.to(cards, {
//       y: -24,
//       opacity: 0,
//       scale: 0.9,
//       duration: 0.35,
//       stagger: 0.06,
//       ease: "power2.in",
//       onComplete: () => {
//         setActive(cat);
//         setProducts(categoryProducts[cat]);
//       },
//     });
//   };

//   useEffect(() => {
//     const cards = cardRefs.current.filter(Boolean);
//     if (!cards.length) return;

//     gsap.fromTo(
//       cards,
//       { y: 24, opacity: 0, scale: 0.9 },
//       {
//         y: 0,
//         opacity: 1,
//         scale: 1,
//         duration: 0.5,
//         stagger: 0.08,
//         ease: "back.out(1.7)",
//         onComplete: () => {
//           isAnimating.current = false;
//         },
//       }
//     );
//   }, [products]);

//   const handleCardEnter = (el) => {
//     gsap.to(el, { y: -8, duration: 0.3, ease: "power2.out" });
//   };

//   const handleCardLeave = (el) => {
//     gsap.to(el, { y: 0, duration: 0.3, ease: "power2.out" });
//   };

//   return (
//     <section
//       ref={sectionRef}
//       className="bg-[#fdf6ec] w-full px-6 py-14 relative"
//     >
//       <div className="absolute bottom-6 w-[8%] right-8 z-10">
//         <img
//           src="/images/home/RBMLogo.png"
//           alt="IMG"
//           className="w-full object-cover object-center"
//         />
//       </div>

//       <div className="px-4 sm:px-10 mx-auto w-full max-w-5xl">
//         {/* Header */}
//         <div className="rb-header">
//           <h2 className="Heading_1 HNM_FONT text-[#c8102e] tracking-tight">
//             RAM BANDHU
//           </h2>
//           <p className="mt-1 Paragraph_Medium text-neutral-700">
//             Ground &amp; blended spices
//           </p>
//         </div>

//         {/* Category pills */}
//         <div className="mt-10 flex flex-wrap gap-3">
//           {categories.map((cat, i) => {
//             const isActive = cat === active;
//             return (
//               <button
//                 key={cat}
//                 ref={(el) => (pillRefs.current[i] = el)}
//                 type="button"
//                 onClick={(e) => handlePillClick(cat, e.currentTarget)}
//                 className={`rounded-full px-4 py-2 Paragraph_Small tracking-wide transition-colors ${
//                   isActive
//                     ? "bg-[#c8102e] text-white"
//                     : "bg-[#f6cfa1] text-[#7a4a1e] hover:bg-[#f0bd85]"
//                 }`}
//               >
//                 {cat}
//               </button>
//             );
//           })}
//         </div>

//         {/* Product cards */}
//         <div className="relative w-full mx-auto pt-10 pb-16">
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center">
//             {products.map((p, i) => (
//               <div
//                 key={p.id}
//                 ref={(el) => (cardRefs.current[i] = el)}
//                 onMouseEnter={(e) => handleCardEnter(e.currentTarget)}
//                 onMouseLeave={(e) => handleCardLeave(e.currentTarget)}
//                 className="relative w-40 sm:w-57 aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer"
//               >
//                 <img
//                   src={p.image}
//                   alt={p.name}
//                   className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-90"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const categoryProducts = {
  "GROUND SPICES": [
    { id: "mirchi", name: "मिर्ची पावडर", image: "/images/home/IMG1.png" },
    { id: "dhaniya", name: "धनिया पावडर", image: "/images/home/IMG2.png" },
    { id: "haldi", name: "हल्दी पावडर", image: "/images/home/IMG3.png" },
  ],
  "BLENDED SPICES": [
    { id: "garam-masala", name: "गरम मसाला", image: "/images/home/IMG2.png" },
    { id: "chana-masala", name: "चना मसाला", image: "/images/home/IMG3.png" },
    { id: "pav-bhaji", name: "पावभाजी मसाला", image: "/images/home/IMG1.png" },
  ],
  "SIGNATURE PRODUCTS": [
    { id: "kitchen-king", name: "किचन किंग", image: "/images/home/IMG3.png" },
    { id: "biryani-masala", name: "बिरयानी मसाला", image: "/images/home/IMG1.png" },
    { id: "meat-masala", name: "मीट मसाला", image: "/images/home/IMG2.png" },
  ],
  PICKLES: [
    { id: "mango-pickle", name: "आम का अचार", image: "/images/home/IMG1.png" },
    { id: "mixed-pickle", name: "मिक्स अचार", image: "/images/home/IMG2.png" },
    { id: "chilli-pickle", name: "मिर्च का अचार", image: "/images/home/IMG3.png" },
  ],
  PAPADS: [
    { id: "urad-papad", name: "उड़द पापड़", image: "/images/home/IMG2.png" },
    { id: "moong-papad", name: "मूंग पापड़", image: "/images/home/IMG1.png" },
    { id: "masala-papad", name: "मसाला पापड़", image: "/images/home/IMG3.png" },
  ],
  JAMS: [
    { id: "mixed-fruit-jam", name: "मिक्स फ्रूट जैम", image: "/images/home/IMG3.png" },
    { id: "strawberry-jam", name: "स्ट्रॉबेरी जैम", image: "/images/home/IMG2.png" },
    { id: "pineapple-jam", name: "पाइनएप्पल जैम", image: "/images/home/IMG1.png" },
  ],
  "BEVERAGE MIXES": [
    { id: "lemon-mix", name: "नींबू मिक्स", image: "/images/home/IMG2.png" },
    { id: "jaljeera", name: "जलजीरा", image: "/images/home/IMG3.png" },
    { id: "thandai", name: "ठंडाई", image: "/images/home/IMG1.png" },
  ],
  "SPICE MIXES": [
    { id: "sambar-mix", name: "सांबर मिक्स", image: "/images/home/IMG3.png" },
    { id: "rasam-mix", name: "रसम मिक्स", image: "/images/home/IMG1.png" },
    { id: "curry-mix", name: "करी मिक्स", image: "/images/home/IMG2.png" },
  ],
  SNACKS: [
    { id: "namkeen", name: "नमकीन", image: "/images/home/IMG1.png" },
    { id: "sev", name: "सेव", image: "/images/home/IMG2.png" },
    { id: "chivda", name: "चिवड़ा", image: "/images/home/IMG3.png" },
  ],
};

const categories = Object.keys(categoryProducts);

function ArrowIcon({ direction = "right" }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ transform: direction === "left" ? "rotate(180deg)" : "none" }}
    >
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}

export default function RamBandhuCategory() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCategory = categories[activeIndex];
  const products = categoryProducts[activeCategory];

  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const titleRef = useRef(null);
  const boxRef = useRef(null);
  const isAnimating = useRef(false);
  const dirRef = useRef(1); // 1 = next, -1 = prev

  // Entrance animation on mount
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".rb-header",
        { y: -16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
      );

      gsap.fromTo(
        boxRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out", delay: 0.15 }
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

  const goTo = (nextIndex, direction) => {
    if (isAnimating.current || nextIndex === activeIndex) return;
    isAnimating.current = true;
    dirRef.current = direction;

    const cards = cardRefs.current.filter(Boolean);
    const outX = direction === 1 ? -60 : 60;

    const tl = gsap.timeline({
      onComplete: () => {
        isAnimating.current = false;
      },
    });

    tl.to(titleRef.current, {
      x: outX,
      opacity: 0,
      duration: 0.25,
      ease: "power2.in",
    }, 0);

    tl.to(cards, {
      x: outX,
      opacity: 0,
      scale: 0.92,
      duration: 0.3,
      stagger: 0.05,
      ease: "power2.in",
      onComplete: () => {
        setActiveIndex(nextIndex);
      },
    }, 0);
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
    const cards = cardRefs.current.filter(Boolean);
    const inX = dirRef.current === 1 ? 60 : -60;

    gsap.fromTo(
      titleRef.current,
      { x: inX, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.35, ease: "power2.out" }
    );

    if (cards.length) {
      gsap.fromTo(
        cards,
        { x: inX, y: 12, opacity: 0, scale: 0.92 },
        {
          x: 0,
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: "back.out(1.7)",
        }
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  const handleCardEnter = (el) => {
    gsap.to(el, { y: -8, duration: 0.3, ease: "power2.out" });
  };

  const handleCardLeave = (el) => {
    gsap.to(el, { y: 0, duration: 0.3, ease: "power2.out" });
  };

  return (
    <section
      ref={sectionRef}
      className="bg-[#fdf6ec] w-full px-6 py-14 relative"
    >
      <div className="rb-logo absolute bottom-6 w-[8%] right-8 z-10">
        <img
          src="/images/home/RBMLogo.png"
          alt="IMG"
          className="w-full object-cover object-center"
        />
      </div>

      <div className="px-4 sm:px-10 mx-auto w-full max-w-5xl">
        {/* Header */}
        <div className="rb-header">
          <h2 className="Heading_1 HNM_FONT text-[#c8102e] tracking-tight">
            RAM BANDHU
          </h2>
          <p className="mt-1 Paragraph_Medium text-neutral-700">
            Ground &amp; blended spices
          </p>
        </div>

        {/* Carousel */}
        <div className="mt-10 flex items-center gap-2 sm:gap-6">
          {/* Prev arrow */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous category"
            className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#c8102e] text-[#c8102e] flex items-center justify-center hover:bg-[#c8102e] hover:text-white transition-colors"
          >
            <ArrowIcon direction="left" />
          </button>

          {/* Box: title + tiles */}
          <div
            ref={boxRef}
            className="flex-1 min-w-0 rounded-3xl border-2 border-[#c8102e]/30 bg-white/40 px-4 sm:px-10 py-8 overflow-hidden"
          >
            <div className="overflow-hidden">
              <h3
                ref={titleRef}
                className="Paragraph_Large sm:Heading_3 font-bold tracking-wide text-[#7a4a1e] text-center mb-8"
              >
                {activeCategory}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 place-items-center">
              {products.map((p, i) => (
                <div
                  key={p.id}
                  ref={(el) => (cardRefs.current[i] = el)}
                  onMouseEnter={(e) => handleCardEnter(e.currentTarget)}
                  onMouseLeave={(e) => handleCardLeave(e.currentTarget)}
                  className="relative w-40 sm:w-full max-w-[220px] aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer "
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-90"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Next arrow */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next category"
            className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#c8102e] text-[#c8102e] flex items-center justify-center hover:bg-[#c8102e] hover:text-white transition-colors"
          >
            <ArrowIcon direction="right" />
          </button>
        </div>

        {/* Dot indicators for direct jump */}
        <div className="mt-6 flex justify-center gap-2 flex-wrap">
          {categories.map((cat, i) => (
            <button
              key={cat}
              type="button"
              onClick={() => goTo(i, i > activeIndex ? 1 : -1)}
              aria-label={`Go to ${cat}`}
              className={`h-2.5 rounded-full transition-all ${
                i === activeIndex
                  ? "w-6 bg-[#c8102e]"
                  : "w-2.5 bg-[#c8102e]/25 hover:bg-[#c8102e]/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}