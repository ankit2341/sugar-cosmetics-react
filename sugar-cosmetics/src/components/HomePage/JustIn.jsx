import BestsellersCardCarousel from "./BestsellersCardCarousal";
import FourCardsCarousel from "./FourCardsCarousal";
import TitleForall from "./TitleForall";
import { JustinData } from "./justindata";

export default function JustIn() {
  return (
    <>
      <TitleForall titlename={"JUST IN"} />
      <FourCardsCarousel BestSellersData={JustinData} />
    </>
  );
}
