import BestsellersCardCarousel from "./BestsellersCardCarousal";
import FourCardsCarousel from "./FourCardsCarousal";
import TitleForall from "./TitleForall";
import { Giftingdata } from "./giftingdata";

export default function Gifting() {
  return (
    <>
      <TitleForall titlename={"GIFTING"} />
      <FourCardsCarousel BestSellersData={Giftingdata} />
    </>
  );
}
