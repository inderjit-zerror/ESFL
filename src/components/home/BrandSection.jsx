"use client";

import Image from "next/image";
import BTN from "../common/BTN";

export default function BrandSection({
  title,
  subtitle,
  description,
  highlight,
  V,

  heroImage,
  logo,

  buttonText = "View Range",
  onButtonClick,

  bgColor = "bg-[#D52E12]",
  textColor = "text-white",
  titleColor = "text-[#FFBE55]",
  highlightColor = "text-[#FFBE55]",

  buttonBg = "bg-[#F7C35A]",
  buttonTextColor = "text-[#B32D18]",

  reverse = false,

  className,
}) {
  return (
    <section
      className={`${bgColor} ${className} w-full h-svh overflow-hidden flex justify-center items-center `}
    >
      <div
        className={`mx-auto grid h-fit pr-10 py-5  grid-cols-2 ${
          reverse ? "md:[&>*:first-child]:order-2" : ""
        } max-md:grid-cols-1`}
      >
        {/* Left Content */}
        <div className="flex items-center py-20  pl-10">
          <div className="max-w-[90%]">

            <h2
              className={`Heading_1 HNM_FONT ${titleColor} uppercase`}
            >
              {title}
            </h2>

            <p
              className={`Paragraph_Medium HNR_FONT  mt-2 ${textColor}`}
            >
              {subtitle}
            </p>

            <p
              className={`Paragraph_Medium mt-14 HNR_FONT whitespace-pre-line ${textColor}`}
            >
              {description}
            </p>

            <h3
              className={`Paragraph_Medium text-[1.2rem]! leading-[1.2rem]! mt-5 HNR_FONT uppercase ${highlightColor}`}
            >
              {highlight}
            </h3>

            <div
              
              onClick={onButtonClick}
              className={` mt-12 `}
            >
            <BTN txt={buttonText} variant={V}/>
              
            </div>

          </div>
        </div>

        {/* Right Image */}
        <div className="relative h-[75vh] group overflow-hidden mt-[10vh]  ">

          <Image
            src={heroImage}
            alt={title}
            fill
            className="object-cover transition-all duration-300 ease-in group-hover:scale-[1.05]"
          />

          {logo && (
            <Image
              src={logo}
              alt="logo"
              width={140}
              height={80}
              className="absolute right-8 top-8 z-10 object-contain"
            />
          )}
        </div>
      </div>
    </section>
  );
}