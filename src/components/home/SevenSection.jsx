"use client";
import React, { useEffect, useRef } from "react";
// import MovingSlider from '../MovingSlider'
import { FaXTwitter } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import gsap from "gsap";
import { GoArrowUpRight } from "react-icons/go";

const SocialLable = ({ lable, text }) => {
  return (
    <>
      <div className="w-fit h-fit flex Font2 font-bold select-none cursor-pointer  group  text-[18px] max-md:text-[14px] max-md:font-light bg-[#D8300F] px-[20px] py-[15px] max-md:px-[10px] max-md:py-[7px] rounded-lg gap-[4vw] justify-center items-center">
        <div className="w-fit Paragraph_Medium MNM_FONT h-fit flex gap-[10px] justify-center items-center group-hover:translate-x-[10px] transition-all duration-500">
          {lable}
          {text}
        </div>

        <div className="w-[25px] h-[25px] max-md:hidden flex rounded-lg justify-center items-center p-[4px] bg-white group-hover:translate-x-[-10px] transition-all duration-500">
          <GoArrowRight className="text-[#D8300F]" />
        </div>
      </div>
    </>
  );
};

const imgArr = [
  `/images/home/RamBandhu.png`,
  `/images/home/P2.png`,
  `/images/home/RBM.png`,
  `/images/home/RamBandhu.png`,
  `/images/home/Temptin.png`,
];

const CustomImg = () => {
  return (
    <>
      <div className="w-fit h-fit flex justify-center items-center gap-[20px] select-none cursor-pointer">
        {imgArr.map((item, index) => {
          return (
            <div
              key={index}
              className="w-[350px] h-[450px] max-md:w-[250px] max-md:h-[350px] overflow-hidden rounded-xl relative group"
            >
              <img
                src={item}
                alt="img"
                className="w-full h-full object-cover"
              />

              {/* BlackScreen */}
              <div className="w-full h-full absolute top-0 transition-all duration-500 opacity-0 left-0 bg-[#00000071] z-[20] group-hover:opacity-100 flex justify-center items-center">
                <div className="w-fit h-fit flex Font3  justify-center text-white items-center gap-[10px] text-center">
                  <p className="text-[18px] leading-[18px]">View Post</p>
                  <div className="w-[20px] h-[22px] bg-white flex justify-center items-center text-black rounded-lg">
                    <GoArrowUpRight className="font-[10px]" />
                  </div>
                </div>
              </div>

              {/* Btn */}
                <a target="blank" href="https://www.instagram.com/RambandhuOfficial">
              <div className="w-fit h-fit absolute top-4 left-4 Font3 text-white px-[20px] py-[10px] rounded-[10px]  bg-[#D8300F] flex justify-center items-center gap-[10px] z-40 hover:px-[25px] transition-all duration-500">
                <FaInstagram />

                Instagram
              </div>
              </a>
              
            </div>
          );
        })}
      </div>
    </>
  );
};

const SevenSection = () => {
  const marqueeRef = useRef(null);
  const tweenRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      tweenRef.current = gsap.to(marqueeRef.current, {
        xPercent: 50, // 👉 move only 50% instead of full
        duration: 60,
        repeat: -1,
        ease: "none",
      });
    });

    return () => ctx.revert();
  }, []);

  const handleMouseEnter = () => {
    tweenRef.current?.pause();
  };

  const handleMouseLeave = () => {
    tweenRef.current?.resume();
  };

  return (
    <div className="w-full h-fit flex flex-col overflow-hidden  max-sm:translate-y-[-30dvh]">
      <div className="w-full h-fit flex flex-col bg-white text-white py-[6vw] max-md:pt-[50px] justify-center items-center ">
        {/* SubText */}
        <div className="w-full h-fit  flex justify-center items-center  ">
          <span className="Font3 w-fit h-fit rounded-sm text-[1.4rem] leading-[1.4rem] px-[13px] py-[7px]  bg-[#D8300F] uppercase">
            Stay in Touch
          </span>
        </div>

        {/* Title */}
        <div className="w-fit h-fit flex flex-col Heading_1 MNM_FONT text-[#D8300F] font-semibold text-[5vw] mt-[2vw] leading-[4vw] Font3 justify-center items-center max-md:mt-[20px] max-md:text-[7vw] max-md:leading-[6vw]">
          <div className="w-fit h-fit flex uppercase justify-center items-center">
            <h1>Follow</h1>
          </div>
          <div className="w-fit h-fit flex uppercase justify-center items-center">
            <h1>@RambandhuOfficial</h1>
          </div>
          <div className="w-fit h-fit flex uppercase justify-center items-center">
            <h1>For More</h1>
          </div>
        </div>

        {/* BTN`S */}
        <div className="w-full h-fit flex justify-center Paragraph_Medium MNM_FONT items-center gap-[10px] mt-[40px]">
          <a target="blank" href="https://www.instagram.com/RambandhuOfficial">
            <SocialLable
              lable={<FaInstagram className=" Paragraph_Medium MNM_FONT" />}
              text={"Instagram"}
            />
          </a>
          <a target="blank" href="https://www.facebook.com/RamBandhuOfficial">
          <SocialLable
            lable={<FaFacebook className=" Paragraph_Medium MNM_FONT" />}
            text={"Facebook"}
          />
            </a>
          <a target="blank" href="https://x.com/RambandhuMasale">
          <SocialLable
            lable={<FaXTwitter className=" Paragraph_Medium MNM_FONT" />}
            text={"Twiter"}
          />
          </a>
        </div>

        {/* ImageSlide */}
        <div className="w-full h-fit flex overflow-hidden mt-[50px]">
          <div
            ref={marqueeRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="w-fit h-fit flex translate-x-[-70%] gap-[20px]"
          >
            <CustomImg />
            <CustomImg />
            <CustomImg />
            <CustomImg />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SevenSection;
