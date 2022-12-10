import BestsellersCardCarousel from "./BestsellersCardCarousal";
import { BestSellersData } from "./bestsellerdata";

export default function BestSellers() {
  return (
    <div className="BestSellers">
      <div className="titleBS">
        <div className="hr_tag">
          <h4 style={{ color: "#FC2779" }}>───</h4>
        </div>
        <div>
          <h5 style={{ color: "#ffffff", fontWeight: "bold" }}>BESTSELLERS</h5>
        </div>
        <div className="hr_tag">
          <h4 style={{ color: "#FC2779" }}>───</h4>
        </div>
      </div>

      <div className="main_bestsellers">
        <BestsellersCardCarousel BestSellersData={BestSellersData} />
      </div>
    </div>
  );
}
