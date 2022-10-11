import ControlledCarousel from "../components/HomePage/Carousal";
import Navbar from "../components/Navbar";

export default function Home(){
    return (
     <>
     <Navbar/>
     <ControlledCarousel/>
     <div style={{height:"1000px"}}></div>
     </>
    )
}