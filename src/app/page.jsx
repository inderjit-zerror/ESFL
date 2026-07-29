import BrandSection from "@/components/home/BrandSection";
import Building from "@/components/home/Building";
import Factory from "@/components/home/Factory";
import Hero from "@/components/home/Hero";
import HomeCTA from "@/components/home/HomeCTA";
import LatestCampaignsAndNews from "@/components/home/Latestcampaignsandnews";
import PresentAcrossCountry from "@/components/home/Presentacrosscountry";
import RamBandhuCategory from "@/components/home/Rambandhucategory";
import SevenSection from "@/components/home/SevenSection";
import Sticker from "@/components/home/Sticker";
import { createPageMetadata } from "@/lib/seo";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Building />
      <Sticker />
      {/* <RamBandhuCategory/> */}
      <Factory />
      <PresentAcrossCountry/>
      <LatestCampaignsAndNews/>
      {/* <HomeCTA /> */}
      <SevenSection/>

     
    </>
  );
};

export default HomePage;

export async function generateMetadata() {
  return createPageMetadata("/");
}
