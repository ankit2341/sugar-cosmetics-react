import { BestSellersData } from "../HomePage/bestsellerdata";
import FourCardsCarousel from "../HomePage/FourCardsCarousal";
import { JustinData } from "../HomePage/justindata";
import TitleForall from "../HomePage/TitleForall";


export default function ShopFromRecentlyViewed() {
  return (
    <>
      <TitleForall titlename={"SHOP FROM RECENTLY VIEWED"} />
      <FourCardsCarousel BestSellersData={BestSellersData} />
    </>
  );
}
