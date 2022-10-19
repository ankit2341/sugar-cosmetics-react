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

let Hotdealsdata = [
  "https://d32baadbbpueqt.cloudfront.net/Homepage/ee7aec73-2712-4b13-b979-8af7326e6219.jpg",
  "https://d32baadbbpueqt.cloudfront.net/Homepage/6f66062a-1a39-4252-852b-646acb35d9af.jpg",
  "https://d32baadbbpueqt.cloudfront.net/Homepage/6359ed8e-1f43-44aa-b602-5142a7bfbd9f.jpg",
  "https://d32baadbbpueqt.cloudfront.net/Homepage/7b0cbcd1-1433-484d-8ae1-6f54f52e73fa.jpg",
  "https://d32baadbbpueqt.cloudfront.net/Homepage/ee7aec73-2712-4b13-b979-8af7326e6219.jpg",
  "https://d32baadbbpueqt.cloudfront.net/Homepage/6f66062a-1a39-4252-852b-646acb35d9af.jpg",
];

export default function Home() {
  return (
    <>
      <Navbar />
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
