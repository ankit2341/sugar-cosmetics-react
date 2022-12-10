import BestSellers from "../components/HomePage/Bestsellers";
import ControlledCarousel from "../components/HomePage/Carousal";
import Navbar from "../components/Navbar";
import "../styles/Home.css";
import SwiperVideos from "../components/HomePage/SwiperVideos";
import TitleForall from "../components/HomePage/TitleForall";
import HotDeals from "../components/HomePage/HotDeals";
import JustIn from "../components/HomePage/JustIn";
import ReferYourF from "../components/HomePage/ReferYourF";
import SuperSaver from "../components/HomePage/SuperSavers";
import NewlyLaunched from "../components/HomePage/NewlyLaunched";
import ThisorThat from "../components/HomePage/ThisorThat";
import Skincare from "../components/HomePage/Skincare";
import Footer from "../components/Footer";
import ShukarSugar from "../components/HomePage/ShukarSugar";
import Toppicks from "../components/HomePage/Toppicks";
import Gifting from "../components/HomePage/Gifting";
import { useContext, useState } from "react";
import { Appcontext } from "../context/AppContext";
import { useEffect } from "react";
import { Link } from "react-router-dom";

let Hotdealsdata = [
  "https://d32baadbbpueqt.cloudfront.net/Homepage/ee7aec73-2712-4b13-b979-8af7326e6219.jpg",
  "https://d32baadbbpueqt.cloudfront.net/Homepage/6f66062a-1a39-4252-852b-646acb35d9af.jpg",
  "https://d32baadbbpueqt.cloudfront.net/Homepage/6359ed8e-1f43-44aa-b602-5142a7bfbd9f.jpg",
  "https://d32baadbbpueqt.cloudfront.net/Homepage/7b0cbcd1-1433-484d-8ae1-6f54f52e73fa.jpg",
  "https://d32baadbbpueqt.cloudfront.net/Homepage/ee7aec73-2712-4b13-b979-8af7326e6219.jpg",
  "https://d32baadbbpueqt.cloudfront.net/Homepage/6f66062a-1a39-4252-852b-646acb35d9af.jpg",
];

export default function Home() {
  const [loading, setLoading] = useState(true);
  const { Loginstate } = useContext(Appcontext);
  const [show, setShow] = useState(true);
  console.log(Loginstate);
  setTimeout(() => {
    setLoading(false);
  }, 1000);

  if (loading) {
    return (
      <>
        <div className="navbar_visible">
          <Navbar />
        </div>

        <div id="add_div"></div>
        <div
          style={{
            width: "100%",
            height: "150px",
            display: "flex",
            marginTop: "150px",
            marginBottom: "40px",
            alignItems: "center",
            justifyContent: "center",
            background:
              "url(https://media.sugarcosmetics.com/upload/homePageBackGroundTexture.jpg)",
          }}
        >
          <div className="hr_tag">
            <h4 style={{ color: "#FC2779" }}>───</h4>
          </div>
          <div>
            <h5 style={{ color: "#ffffff", fontWeight: "bold" }}>
              BESTSELLERS
            </h5>
          </div>
          <div className="hr_tag">
            <h4 style={{ color: "#FC2779" }}>───</h4>
          </div>
        </div>
        <TitleForall titlename={"HOT DEALS"} />
        <div style={{ marginTop: "30px", marginBottom: "40px" }}></div>
        <TitleForall titlename={"JUST IN"} />
        <div style={{ marginTop: "30px", marginBottom: "40px" }}></div>
        <TitleForall titlename={"SHUKAR HAIN,SUGAR HAIN"} />
        <div style={{ marginTop: "30px", marginBottom: "40px" }}></div>
        <TitleForall titlename={"TOP PICKS"} />
        <div style={{ marginTop: "30px", marginBottom: "40px" }}></div>
        <TitleForall titlename={"GIFTING"} />
        <div style={{ marginTop: "30px", marginBottom: "40px" }}></div>
        <div
          style={{
            width: "100%",
            height: "150px",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            background:
              "url(https://media.sugarcosmetics.com/upload/VTOBackgroungTexture.png)",
          }}
        >
          <div className="hr_tag">
            <h4 style={{ color: "#FC2779" }}>───</h4>
          </div>
          <div>
            <h5 style={{ color: "#ffffff", fontWeight: "bold" }}>
              SUPER SAVERS
            </h5>
          </div>
          <div className="hr_tag">
            <h4 style={{ color: "#FC2779" }}>───</h4>
          </div>
        </div>
        <div style={{ marginTop: "30px", marginBottom: "40px" }}></div>
        <TitleForall titlename={"THIS OR THAT"} />
        <div style={{ marginTop: "30px", marginBottom: "40px" }}></div>
        <TitleForall titlename={"SKINCARE"} />
        <div style={{ marginTop: "30px", marginBottom: "40px" }}></div>
      </>
    );
  }
  return (
    <>
      <Navbar />
      <div id="add_div"></div>
      <ControlledCarousel />
      <BestSellers />
      <TitleForall titlename={"HOT DEALS"} />
      <HotDeals DataCard={Hotdealsdata} />
      <JustIn />
      <ShukarSugar />
      <Toppicks />
      <Gifting />
      <ReferYourF />
      <SuperSaver />
      <NewlyLaunched />
      <TitleForall titlename={"SUGAR STREAMING"} />
      <SwiperVideos />
      <ThisorThat />
      <Skincare />
      <Footer />
    </>
  );
}
