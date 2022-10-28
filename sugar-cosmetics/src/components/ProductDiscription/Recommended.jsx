import FourCardsCarousel from "../HomePage/FourCardsCarousal";
import { JustinData } from "../HomePage/justindata";
import TitleForall from "../HomePage/TitleForall";
import { useEffect } from "react";


export default function Recommended() {
 
  return (
    <>
      <TitleForall titlename={"RECOMMENDED PRODUCTS"} />
      <FourCardsCarousel BestSellersData={JustinData} />
    </>
  );
}
