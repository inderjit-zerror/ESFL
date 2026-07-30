// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import BrandSection from "./BrandSection";
// import RamBandhuCategory from "./Rambandhucategory";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

// const Sticker = () => {
//   const [showCategory, setShowCategory] = useState(false);
//   const overlayRef = useRef(null);
//   const panelRef = useRef(null);

//   useEffect(() => {
//     const TL1 = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".StickeyHeroContMAin1",
//         start: "top top",
//         end: "bottom bottom",
//         scrub: true,
//       },
//     });
//     TL1.to(".BrandSection2", {
//       top: "0%",
//       ease: "none",
//     });
//     TL1.to(".BrandSection3", {
//       top: "0%",
//       ease: "none",
//     });
//   }, []);

//   // Animate the popup in/out whenever showCategory changes
//   useEffect(() => {
//     if (showCategory) {
//       gsap.set(overlayRef.current, { display: "flex" });
//       gsap.fromTo(
//         overlayRef.current,
//         { opacity: 0 },
//         { opacity: 1, duration: 0.3, ease: "power2.out" },
//       );
//       gsap.fromTo(
//         panelRef.current,
//         { y: -40, opacity: 0, scale: 0.96 },
//         { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.6)" },
//       );
//     } else if (overlayRef.current) {
//       gsap.to(panelRef.current, {
//         y: -30,
//         opacity: 0,
//         scale: 0.96,
//         duration: 0.3,
//         ease: "power2.in",
//       });
//       gsap.to(overlayRef.current, {
//         opacity: 0,
//         duration: 0.3,
//         ease: "power2.in",
//         onComplete: () => {
//           gsap.set(overlayRef.current, { display: "none" });
//         },
//       });
//     }
//   }, [showCategory]);

//   return (
//     <div className="w-full h-[200svh] relative flex StickeyHeroContMAin1">
//       <div className="w-full h-svh flex sticky top-0 left-0">
//         <BrandSection
//           V={'B2'}
//           className="sticky top-0 left-0 DIVC-1"
//           title="RAM BANDHU"
//           subtitle="Ground & blended spices"
//           description={`Ram Bandhu has been a trusted name in Indian kitchens for
// over 32 years, offering a wide range of spices, pickles,
// papads, hing, spice mixes, and snacks.

// Built on quality, trust, and continuous innovation, the brand
// creates products that suit the evolving tastes and lifestyles
// of Indian consumers. with the aim of bringing convenience to the art of cooking. `}
//           highlight={`Experience gastronomic ecstasy with
// Ram Bandhu – Aapka Taste Partner!`}
//           buttonText="View Range"
//           heroImage="/images/home/RamBandhu.jpg"
//           logo="/images/home/RamBandhuLogo.png"
//           onButtonClick={() => setShowCategory(true)}
//         />

//         <BrandSection
//         V={'B1'}
//           bgColor="bg-[#FFC55C]"
//           textColor="text-[#D42E12]"
//           titleColor="text-[#C3071C]"
//           highlightColor="text-[#FFBE55]"
//           buttonBg="bg-[#C3071C]"
//           buttonTextColor="text-[white]"
//           className=" absolute top-[110%] left-0 BrandSection2"
//           title="Temptin'"
//           subtitle="Ground & blended spices"
//           description={`The youthful brand of Temptin’ symbolises the temptation that is associated with lip smacking culinary delights. The very sight of delicious food is an enticement that fills us with the desire to relish it. 

// Brand Temptin' stands for the same feeling and makes your food tempting and irresistible. The range consists of Ketchup, Sauces, Dips, Chutneys, Chinese Spices etc.`}
//           highlight={``}
//           buttonText="View Range"
//           heroImage="/images/home/Temptin.jpg"
//           logo="/images/home/TemptinLogo.png"
//            onButtonClick={() => setShowCategory(true)}
//         />

//         <BrandSection
//         V={'B2'}
//           bgColor="bg-[#641409]"
//           textColor="text-[white]"
//           titleColor="text-[#FFC55C]"
//           highlightColor="text-[white]"
//           buttonBg="bg-[#F4BF5F]"
//           buttonTextColor="text-[#B32727]"
//           className=" absolute top-[110%] left-0 BrandSection3 z-99"
//           title="RBM"
//           subtitle="Premium blends & beverage mixes"
//           description={`RBM stands for ‘Ram Bandhu Masale’. Priced strategically the products under this brand targets the price conscious consumer without compromising on quality or taste.  

//  Meat Masala, Chicken Masala, Mutton Biryani Mix, Chicken Gravy are some of the products in the RBM line-up.`}
//           highlight={``}
//           buttonText="View Range"
//           heroImage="/images/home/RBM.jpg"
//           logo="/images/home/RBMLogo.png"
//            onButtonClick={() => setShowCategory(true)}s
//         />
//       </div>

//       {/* Popup overlay */}
//       <div
//         ref={overlayRef}
//         className="fixed inset-0 z-[999] bg-black/60 items-center justify-center p-4"
//         style={{ display: "none" }}
//         onClick={(e) => {
//           if (e.target === overlayRef.current) setShowCategory(false);
//         }}
//       >
//         <div
//           ref={panelRef}
//           className="relative w-full max-w-6xl max-h-[90svh] overflow-y-auto rounded-2xl bg-[#fdf6ec]"
//         >
//           <button
//             type="button"
//             onClick={() => setShowCategory(false)}
//             className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/80 text-[#c8102e] font-bold flex items-center justify-center hover:bg-white"
//             aria-label="Close"
//           >
//             ✕
//           </button>
//           <RamBandhuCategory />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sticker;

"use client";
import React, { useEffect, useRef, useState } from "react";
import BrandSection from "./BrandSection";
import CategoryPopup from "@/components/home/Categorypopup";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// ---- Brand-specific popup data --------------------------------------
// Each brand gets ONE image per category (full width/height in the popup).
// Replace the image paths below with your real per-category banner images.

const RAMBANDHU_POPUP = {
  logo: "/images/home/RamBandhuLogo.png",
  accentColor: "#c8102e",
  categories: [
    { id: "ground-spices", name: "GROUND SPICES", image: "/images/home/ALL.png" },
    { id: "blended-spices", name: "BLENDED SPICES", image: "/images/home/ALL.png" },
    { id: "signature-products", name: "SIGNATURE PRODUCTS", image: "/images/home/ALL.png" },
    { id: "pickles", name: "PICKLES", image: "/images/home/ALL.png" },
    { id: "papads", name: "PAPADS", image: "/images/home/ALL.png" },
    { id: "jams", name: "JAMS", image: "/images/home/ALL.png" },
    { id: "beverage-mixes", name: "BEVERAGE MIXES", image: "/images/home/ALL.png" },
    { id: "spice-mixes", name: "SPICE MIXES", image: "/images/home/ALL.png" },
    { id: "snacks", name: "SNACKS", image: "/images/home/ALL.png" },
  ],
};

const TEMPTIN_POPUP = {
  logo: "/images/home/TemptinLogo.png",
  accentColor: "#C3071C",
  categories: [
    { id: "ketchup", name: "KETCHUP", image: "/images/home/Tem.png" },
    { id: "sauces", name: "SAUCES", image: "/images/home/Tem.png" },
    { id: "dips", name: "DIPS", image: "/images/home/Tem.png" },
    { id: "chutneys", name: "CHUTNEYS", image: "/images/home/Tem.png" },
    { id: "chinese-spices", name: "CHINESE SPICES", image: "/images/home/Tem.png" },
  ],
};

const RBM_POPUP = {
  logo: "/images/home/RBMLogo.png",
  accentColor: "#B32727",
  categories: [
    { id: "meat-masala", name: "MEAT MASALA", image: "/images/home/RBM.png" },
    { id: "chicken-masala", name: "CHICKEN MASALA", image: "/images/home/RBM.png" },
    { id: "mutton-biryani-mix", name: "MUTTON BIRYANI MIX", image: "/images/home/RBM.png" },
    { id: "chicken-gravy", name: "CHICKEN GRAVY", image: "/images/home/RBM.png" },
  ],
};
// -----------------------------------------------------------------------

const Sticker = () => {
  // null = closed, otherwise one of "RAMBANDHU" | "TEMPTIN" | "RBM"
  const [activePopup, setActivePopup] = useState(null);
  const overlayRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    const TL1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".StickeyHeroContMAin1",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });
    TL1.to(".BrandSection2", {
      top: "0%",
      ease: "none",
    });
    TL1.to(".BrandSection3", {
      top: "0%",
      ease: "none",
    });
  }, []);

  // Animate the popup in/out whenever activePopup changes
  useEffect(() => {
    const isOpen = activePopup !== null;

    if (isOpen) {
      gsap.set(overlayRef.current, { display: "flex" });
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "power2.out" },
      );
      gsap.fromTo(
        panelRef.current,
        { y: -40, opacity: 0, scale: 0.96 },
        { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.6)" },
      );
    } else if (overlayRef.current) {
      gsap.to(panelRef.current, {
        y: -30,
        opacity: 0,
        scale: 0.96,
        duration: 0.3,
        ease: "power2.in",
      });
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(overlayRef.current, { display: "none" });
        },
      });
    }
  }, [activePopup]);

  const closePopup = () => setActivePopup(null);

  // Pick the right data set for whichever popup is currently open
  const popupData =
    activePopup === "RAMBANDHU"
      ? RAMBANDHU_POPUP
      : activePopup === "TEMPTIN"
      ? TEMPTIN_POPUP
      : activePopup === "RBM"
      ? RBM_POPUP
      : null;

  return (
    <div className="w-full h-[200svh] relative flex StickeyHeroContMAin1">
      <div className="w-full h-svh flex sticky top-0 left-0">
        <BrandSection
          V={'B2'}
          className="sticky top-0 left-0 DIVC-1"
          title="RAM BANDHU"
          subtitle="Ground & blended spices"
          description={`Ram Bandhu has been a trusted name in Indian kitchens for
over 32 years, offering a wide range of spices, pickles,
papads, hing, spice mixes, and snacks.

Built on quality, trust, and continuous innovation, the brand
creates products that suit the evolving tastes and lifestyles
of Indian consumers. with the aim of bringing convenience to the art of cooking. `}
          highlight={`Experience gastronomic ecstasy with
Ram Bandhu – Aapka Taste Partner!`}
          buttonText="View Range"
          heroImage="/images/home/RamBandhu.jpg"
          logo="/images/home/RamBandhuLogo.png"
          onButtonClick={() => setActivePopup("RAMBANDHU")}
        />

        <BrandSection
          V={'B1'}
          bgColor="bg-[#FFC55C]"
          textColor="text-[#D42E12]"
          titleColor="text-[#C3071C]"
          highlightColor="text-[#FFBE55]"
          buttonBg="bg-[#C3071C]"
          buttonTextColor="text-[white]"
          className=" absolute top-[110%] left-0 BrandSection2"
          title="Temptin'"
          subtitle="Ground & blended spices"
          description={`The youthful brand of Temptin’ symbolises the temptation that is associated with lip smacking culinary delights. The very sight of delicious food is an enticement that fills us with the desire to relish it. 

Brand Temptin' stands for the same feeling and makes your food tempting and irresistible. The range consists of Ketchup, Sauces, Dips, Chutneys, Chinese Spices etc.`}
          highlight={``}
          buttonText="View Range"
          heroImage="/images/home/Temptin.jpg"
          logo="/images/home/TemptinLogo.png"
          onButtonClick={() => setActivePopup("TEMPTIN")}
        />

        <BrandSection
          V={'B2'}
          bgColor="bg-[#641409]"
          textColor="text-[white]"
          titleColor="text-[#FFC55C]"
          highlightColor="text-[white]"
          buttonBg="bg-[#F4BF5F]"
          buttonTextColor="text-[#B32727]"
          className=" absolute top-[110%] left-0 BrandSection3 z-99"
          title="RBM"
          subtitle="Premium blends & beverage mixes"
          description={`RBM stands for ‘Ram Bandhu Masale’. Priced strategically the products under this brand targets the price conscious consumer without compromising on quality or taste.  

 Meat Masala, Chicken Masala, Mutton Biryani Mix, Chicken Gravy are some of the products in the RBM line-up.`}
          highlight={``}
          buttonText="View Range"
          heroImage="/images/home/RBM.jpg"
          logo="/images/home/RBMLogo.png"
          onButtonClick={() => setActivePopup("RBM")}
        />
      </div>

      {/* Popup overlay — shared shell, content swaps per brand */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-[999] bg-black/60 items-center justify-center p-4"
        style={{ display: "none" }}
        onClick={(e) => {
          if (e.target === overlayRef.current) closePopup();
        }}
      >
        <div
          ref={panelRef}
          className="relative   overflow-y-auto rounded-2xl bg-[#fdf6ec] "
        >
          <button
            type="button"
            onClick={closePopup}
            className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/80 text-[#c8102e] font-bold flex items-center justify-center hover:bg-white"
            aria-label="Close"
          >
            ✕
          </button>

          {popupData && (
            <CategoryPopup
              logo={popupData.logo}
              categories={popupData.categories}
              accentColor={popupData.accentColor}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Sticker;