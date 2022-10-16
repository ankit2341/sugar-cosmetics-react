import {Routes,Route} from "react-router-dom";
import Home from "./Home";
import RegisterLogin from "./RegisterLogin";

export default function AllRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/login-register" element={<RegisterLogin/>}></Route>
            <Route path="/results" element></Route>
        </Routes>
    )
}