import React from "react";

const HomeCTA = () => {
  return (
    <div className="w-full min-h-[70svh] bg-[#FFC55C] flex flex-col justify-center items-center relative">
      <h1 className=" uppercase Heading_1 HNM_FONT text-[#D42E12]">
        Join our success story.
      </h1>
      <p className="text-[#5A4642] Paragraph_Medium leading-[1.2rem]! HNR_Font mt-5 max-w-[35%] text-center">
        Partner with one of India's fastest-growing food companies grow with us
        across 15 countries and counting.
      </p>
      <button
        className={`Paragraph_Small HNR_FONT mt-10 rounded-full px-8 py-2.5 bg-[#D42E12] text-white uppercase transition hover:bg-[#b32911]`}
      >
        Explore now
      </button>

      <img src="/images/home/CTA1.png" alt="IMG" className="w-[20%] aspect-square absolute left-0 top-[5%]" />
      <img src="/images/home/CTA2.png" alt="IMG" className="w-[20%] aspect-square absolute right-0 bottom-[0%]" />
    </div>
  );
};

export default HomeCTA;
