// // "use client";

// // import { useRef, useEffect } from "react";
// // import Image from "next/image";
// // import gsap from "gsap";
// // import BTN from "../common/BTN";

// // export default function Building() {
// //   const leftPackRef = useRef(null);
// //   const rightPackRef = useRef(null);

// //   // useEffect(() => {
// //   //   const ctx = gsap.context(() => {
// //   //     // Respect users who prefer reduced motion
// //   //     const prefersReducedMotion = window.matchMedia(
// //   //       "(prefers-reduced-motion: reduce)"
// //   //     ).matches;

// //   //     if (prefersReducedMotion) return;

// //   //     // Left product — gentle float + subtle tilt
// //   //     gsap.to(leftPackRef.current, {
// //   //       y: -50,
// //   //       rotate: 8,
// //   //       duration: 1.2,
// //   //       ease: "sine.inOut",
// //   //       yoyo: true,
// //   //       repeat: -1,
// //   //       transformOrigin: "center center",
// //   //     });

// //   //     // Right product — mirrored float, slightly slower + offset
// //   //     // so the two never sync up (feels more natural/organic)
// //   //     gsap.to(rightPackRef.current, {
// //   //       y: -50,
// //   //       rotate: -8,
// //   //       duration: 1.6,
// //   //       ease: "sine.inOut",
// //   //       yoyo: true,
// //   //       repeat: -1,
// //   //       delay: 0.6,
// //   //       transformOrigin: "center center",
// //   //     });
// //   //     gsap.to( '.EC', {
// //   //       rotate: 360,
// //   //       duration: 5,
// //   //       ease: "sine.inOut",
// //   //       yoyo: true,
// //   //       repeat: -1,
// //   //       delay: 0.6,
// //   //       transformOrigin: "center center",
// //   //     });
// //   //   });

// //   //   return () => ctx.revert();
// //   // }, []);

// //   return (
// //     <section className="relative flex min-h-[80svh] w-fit mx-auto items-center justify-center px-6">

// //       {/* Left Product */}
// //       {/* <div className="absolute -left-[18%] bottom-[35%] -translate-y-[20%]">
// //         <Image
// //           ref={leftPackRef}
// //           src="/images/home/YellowPack.png"
// //           alt="Product"
// //           width={100}
// //           height={140}
// //           className="rotate-[5deg] will-change-transform"
// //         />
// //       </div> */}

// //       {/* Right Product */}
// //       {/* <div className="absolute -right-[15%] bottom-[25%] -translate-y-[20%]">
// //         <Image
// //           ref={rightPackRef}
// //           src="/images/home/GreenPack.png"
// //           alt="Product"
// //           width={100}
// //           height={140}
// //           className="rotate-[-5deg] will-change-transform"
// //         />
// //       </div> */}

// //       {/* Content */}
// //       <div className="relative z-10 flex max-w-[850px] flex-col items-center text-center">

// //         {/* Top Text */}
// //         <div className="mb-4 flex items-center gap-3">
// //           <span className="Paragraph_Small uppercase HNR_FONT text-[#D9472B]">
// //             Since 1993 • Guntur To Every Indian Kitchen
// //           </span>
// //         </div>

// //         {/* Decorative Star */}
// //         {/* <Image
// //           src="/images/home/EllipseOrange.png"
// //           alt="Star"
// //           width={100}
// //           height={100}
// //           className="absolute -right-10 -top-15 EC"
// //         /> */}

// //         {/* Heading */}
// //         <h1 className="Heading_1 HNM_FONT uppercase">
// //           Building India's  <br/> Trusted Food Brands.
// //         </h1>

// //         {/* Description */}
// //         <p className="mt-4 max-w-[740px] Paragraph_Medium HNR_FONT text-[#5B514C]">
// //           Pioneering purity and uncompromising quality in every household.
// //           Our legacy is built on authentic flavour and world-class
// //           manufacturing standards.
// //         </p>

// //         {/* Buttons */}
// //         <div className="mt-10 flex gap-5 max-sm:flex-col">
          
// //            <BTN txt={`Explore Our Brands`} variant="B1"/>
// //            <BTN txt={`Become A Partner`} variant="B2"/>
// //         </div>

// //       </div>
// //     </section>
// //   );
// // }

// "use client";

// import { useRef, useState, useCallback } from "react";
// import gsap from "gsap";
// import BTN from "../common/BTN";

// // Dummy trail images — swap these paths with your real assets
// const TRAIL_IMAGES = [
//   "/images/home/YellowPack.png",
//   "/images/home/GreenPack.png",
//   "/images/home/YellowPack.png",
//   "/images/home/GreenPack.png",
// ];

// let idCounter = 0;

// export default function Building() {
//   const sectionRef = useRef(null);
//   const lastSpawnRef = useRef(0);
//   const lastPosRef = useRef({ x: 0, y: 0 });
//   const [trail, setTrail] = useState([]);

//   const SPAWN_INTERVAL = 120; // ms between each spawned image
//   const LIFETIME = 900; // ms an image stays before it fades out

//   const handleMouseMove = useCallback((e) => {
//     const now = Date.now();
//     if (now - lastSpawnRef.current < SPAWN_INTERVAL) return;

//     const rect = sectionRef.current.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;

//     // Direction of travel since the last spawned point
//     const dx = x - lastPosRef.current.x;
//     const dy = y - lastPosRef.current.y;

//     lastSpawnRef.current = now;
//     lastPosRef.current = { x, y };

//     const id = idCounter++;
//     const img = TRAIL_IMAGES[id % TRAIL_IMAGES.length];

//     setTrail((prev) => [...prev, { id, x, y, dx, dy, img }]);

//     // Auto-remove after its lifetime (actual DOM removal happens
//     // after the fade-out animation finishes, via onAnimComplete)
//     setTimeout(() => {
//       setTrail((prev) =>
//         prev.map((item) => (item.id === id ? { ...item, fading: true } : item))
//       );
//     }, LIFETIME);
//   }, []);

//   const removeItem = (id) => {
//     setTrail((prev) => prev.filter((item) => item.id !== id));
//   };

//   // Attach gsap animation as soon as the node mounts
//   const attachRef = (node, item) => {
//     if (!node || node._animated) return;
//     node._animated = true;

//     // Entrance: pop in and drift slightly toward the mouse direction
//     gsap.fromTo(
//       node,
//       {
//         opacity: 0,
//         scale: 0.4,
//         x: 0,
//         y: 0,
//       },
//       {
//         opacity: 1,
//         scale: 1,
//         x: item.dx * 0.6,
//         y: item.dy * 0.6,
//         duration: 0.5,
//         ease: "power2.out",
//       }
//     );
//   };

//   // When fading flag turns true, animate opacity/scale down then remove
//   const attachFadeRef = (node, item) => {
//     if (!node || !item.fading || node._faded) return;
//     node._faded = true;

//     gsap.to(node, {
//       opacity: 0,
//       scale: 0.3,
//       y: "+=20",
//       duration: 0.5,
//       ease: "power1.in",
//       onComplete: () => removeItem(item.id),
//     });
//   };

//   return (
//     <section
//       ref={sectionRef}
//       onMouseMove={handleMouseMove}
//       className="relative flex min-h-[80svh] w-full  mx-auto items-center justify-center px-6 overflow-hidden"
//     >
//       {/* Mouse trail images */}
//       {trail.map((item) => (
//         <div
//           key={item.id}
//           ref={(node) => {
//             if (!node) return;
//             attachRef(node, item);
//             attachFadeRef(node, item);
//           }}
//           className="pointer-events-none absolute z-0"
//           style={{
//             left: item.x - 50,
//             top: item.y - 70,
//             width: 100,
//             height: 140,
//           }}
//         >
//           <img
//             src={item.img}
//             alt=""
//             width={100}
//             height={140}
//             className="h-full w-full object-contain will-change-transform"
//             draggable={false}
//           />
//         </div>
//       ))}

//       {/* Content */}
//       <div className="relative z-10 flex max-w-[850px] h-fit  flex-col items-center text-center">
//         {/* Top Text */}
//         <div className="mb-4 flex items-center gap-3">
//           <span className="Paragraph_Small uppercase HNR_FONT text-[#D9472B]">
//             Since 1993 • Guntur To Every Indian Kitchen
//           </span>
//         </div>

//         {/* Heading */}
//         <h1 className="Heading_1 HNM_FONT uppercase">
//           Building India's <br /> Trusted Food Brands.
//         </h1>

//         {/* Description */}
//         <p className="mt-4 max-w-[740px] Paragraph_Medium HNR_FONT text-[#5B514C]">
//           Pioneering purity and uncompromising quality in every household.
//           Our legacy is built on authentic flavour and world-class
//           manufacturing standards.
//         </p>

//         {/* Buttons */}
//         <div className="mt-10 flex gap-5 max-sm:flex-col">
//           <BTN txt={`Explore Our Brands`} variant="B1" />
//           <BTN txt={`Become A Partner`} variant="B2" />
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useRef, useState, useCallback } from "react";
import gsap from "gsap";
import BTN from "../common/BTN";

// Dummy trail images — swap these paths with your real assets
const TRAIL_IMAGES = [
  "/images/home/YellowPack.png",
  "/images/home/GreenPack.png",
  "/images/home/IMG1.png",
  "/images/home/IMG2.png",
  "/images/home/IMG3.png",
  
];

let idCounter = 0;

export default function Building() {
  const sectionRef = useRef(null);
  const lastSpawnRef = useRef(0);
  const lastPosRef = useRef({ x: 0, y: 0 });
  const [trail, setTrail] = useState([]);

  const SPAWN_INTERVAL = 120; // ms between each spawned image
  const LIFETIME = 900; // ms an image stays before it fades out

  const handleMouseMove = useCallback((e) => {
    const now = Date.now();
    if (now - lastSpawnRef.current < SPAWN_INTERVAL) return;

    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Direction of travel since the last spawned point
    const dx = x - lastPosRef.current.x;
    const dy = y - lastPosRef.current.y;

    lastSpawnRef.current = now;
    lastPosRef.current = { x, y };

    const id = idCounter++;
    const img = TRAIL_IMAGES[id % TRAIL_IMAGES.length];

    setTrail((prev) => [...prev, { id, x, y, dx, dy, img }]);

    // Auto-remove after its lifetime (actual DOM removal happens
    // after the fade-out animation finishes, via onAnimComplete)
    setTimeout(() => {
      setTrail((prev) =>
        prev.map((item) => (item.id === id ? { ...item, fading: true } : item))
      );
    }, LIFETIME);
  }, []);

  const removeItem = (id) => {
    setTrail((prev) => prev.filter((item) => item.id !== id));
  };

  // Attach gsap animation as soon as the node mounts
  const attachRef = (node, item) => {
    if (!node || node._animated) return;
    node._animated = true;

    // Entrance: pop in and drift slightly toward the mouse direction
    gsap.fromTo(
      node,
      {
        opacity: 0,
        scale: 0.4,
        x: 0,
        y: 0,
      },
      {
        opacity: 1,
        scale: 1,
        x: item.dx * 0.6,
        y: item.dy * 0.6,
        duration: 0.5,
        ease: "power2.out",
      }
    );
  };

  // When fading flag turns true, animate opacity/scale down then remove
  const attachFadeRef = (node, item) => {
    if (!node || !item.fading || node._faded) return;
    node._faded = true;

    gsap.to(node, {
      opacity: 0,
      scale: 0.3,
      y: "+=20",
      duration: 0.5,
      ease: "power1.in",
      onComplete: () => removeItem(item.id),
    });
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative flex min-h-[60svh] w-full mx-auto items-center justify-center px-6 overflow-hidden"
    >
      {/* Mouse trail images */}
      {trail.map((item) => (
        <div
          key={item.id}
          ref={(node) => {
            if (!node) return;
            attachRef(node, item);
            attachFadeRef(node, item);
          }}
          className="pointer-events-none absolute z-0"
          style={{
            left: item.x - 50,
            top: item.y - 70,
            width: 100,
            height: 140,
          }}
        >
          <img
            src={item.img}
            alt=""
            width={100}
            height={140}
            className="h-full w-full object-contain will-change-transform"
            draggable={false}
          />
        </div>
      ))}

      {/* Content */}
      <div
        // Stops the mousemove event from bubbling up to the section
        // handler, so no trail images spawn while hovering this area.
        onMouseMove={(e) => e.stopPropagation()}
        className="relative z-10 flex max-w-[850px] h-fit flex-col items-center text-center"
      >
        {/* Top Text */}
        <div className="mb-4 flex items-center gap-3">
          <span className="Paragraph_Small uppercase HNR_FONT text-[#D9472B]">
            Winning the hearts of our consumers since 1994
          </span>
        </div>

        {/* Heading */}
        <h1 className="Heading_1 HNM_FONT uppercase">
          Building India's <br /> Trusted Food Brands.
        </h1>

        {/* Description */}
        <p className="mt-4 max-w-[740px] Paragraph_Medium HNR_FONT text-[#5B514C]">
          Pioneering purity and uncompromising quality in every household.
          Our legacy is built on authentic flavour and world-class
          manufacturing standards.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex gap-5 max-sm:flex-col">
          <BTN txt={`Know More`} variant="B1" />
          <BTN txt={`Become Channel Partner`} variant="B2" />
        </div>
      </div>
    </section>
  );
}