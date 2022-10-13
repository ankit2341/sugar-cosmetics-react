import BestSellers from "../components/HomePage/Bestsellers";
import ControlledCarousel from "../components/HomePage/Carousal";
import Navbar from "../components/Navbar";
import "../styles/Home.css"
import SwiperVideos from "../components/HomePage/SwiperVideos";
import TitleForall from "../components/HomePage/SugarStreaming";

export default function Home(){
    return (
     <>
     <Navbar/>
     <ControlledCarousel/>
     <BestSellers/>
     <TitleForall titlename={"SUGAR STREAMING"}/>
     <SwiperVideos/>
     <div style={{height:"1000px"}}></div>
     </>
    )
}