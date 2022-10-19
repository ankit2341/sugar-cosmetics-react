import BestsellersCardCarousel from "./BestsellersCardCarousal";
import { supersaverdata } from "./supersaverdata";

export default function SuperSaver() {
  return (
    <div className="BestSellers1">
      <div className="titleBS">
        <div className="hr_tag">
          <h4 style={{ color: "#FC2779" }}>───</h4>
        </div>
        <div>
          <h5 style={{ color: "#ffffff", fontWeight: "bold" }}>SUPER SAVERS</h5>
        </div>
        <div className="hr_tag">
          <h4 style={{ color: "#FC2779" }}>───</h4>
        </div>
      </div>

      <div style={{ marginTop: "0px" }}>
        <BestsellersCardCarousel BestSellersData={supersaverdata} />
      </div>
    </div>
  );
}
