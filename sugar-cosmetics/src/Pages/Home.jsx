import BestSellers from "../components/HomePage/Bestsellers";
import ControlledCarousel from "../components/HomePage/Carousal";
import Navbar from "../components/Navbar";
import "../styles/Home.css"

export default function Home(){
    return (
     <>
     <Navbar/>
     <ControlledCarousel/>
     <BestSellers/>
     <div style={{height:"1000px"}}></div>
     </>
    )
}