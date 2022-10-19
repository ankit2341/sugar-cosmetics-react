import BestsellersCardCarousel from "./BestsellersCardCarousal";
import FourCardsCarousel from "./FourCardsCarousal";
import TitleForall from "./TitleForall";
import { BestSellersData } from "./bestsellerdata";

export default function Skincare() {
  return (
    <>
      <TitleForall titlename={"SKINCARE"} />
      <FourCardsCarousel BestSellersData={BestSellersData} />
    </>
  );
}
