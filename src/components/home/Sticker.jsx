'use client'
import React, { useEffect } from "react";
import BrandSection from "./BrandSection";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

const Sticker = () => {

    useEffect(()=>{
        const TL1 = gsap.timeline({
            scrollTrigger:{
                trigger:'.StickeyHeroContMAin1',
                start:'top top',
                end:"bottom bottom",
                scrub:true,
            }
        })
        TL1.to('.BrandSection2',{
            top:'0%',
            ease:'none'
        })
        TL1.to('.BrandSection3',{
            top:'0%',
            ease:'none'
        })
    },[])

  return (
    <div className="w-full h-[200svh] relative flex StickeyHeroContMAin1">
      <div className="w-full h-svh flex sticky top-0 left-0">
        <BrandSection
          className="sticky top-0 left-0"
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
          heroImage="/images/home/RamBandhu.png"
          logo="/images/home/RamBandhuLogo.png"
        />

        <BrandSection
          bgColor="bg-[#FFC55C]"
          textColor="text-[#D42E12]"
          titleColor="text-[#C3071C]"
          highlightColor="text-[#FFBE55]"
          buttonBg="bg-[#C3071C]"
          buttonTextColor="text-[white]"
          className=" absolute top-[110%] left-0 BrandSection2"
          title="Temptin"
          subtitle="Ground & blended spices"
          description={`The youthful brand of Temptin’ symbolises the temptation that is associated with lip smacking culinary delights. The very sight of delicious food is an enticement that fills us with the desire to relish it. 

Brand Temptin' stands for the same feeling and makes your food tempting and irresistible. The range consists of Ketchup, Sauces, Dips, Chutneys, Chinese Spices etc.`}
          highlight={``}
          buttonText="View Range"
          heroImage="/images/home/Temptin.png"
          logo="/images/home/TemptinLogo.png"
        />


         <BrandSection
          bgColor="bg-[#641409]"
          textColor="text-[white]"
          titleColor="text-[#FFC55C]"
          highlightColor="text-[white]"
          buttonBg="bg-[#F4BF5F]"
          buttonTextColor="text-[#B32727]"
          className=" absolute top-[110%] left-0 BrandSection3"
          title="RBM"
          subtitle="Premium blends & beverage mixes"
          description={`RBM stands for ‘Ram Bandhu Masale’. Priced strategically the products under this brand targets the price conscious consumer without compromising on quality or taste.  

 Meat Masala, Chicken Masala, Mutton Biryani Mix, Chicken Gravy are some of the products in the RBM line-up.`}
          highlight={``}
          buttonText="View Range"
          heroImage="/images/home/RBM.png"
          logo="/images/home/RBMLogo.png"
        />
      </div>
    </div>
  );
};

export default Sticker;
