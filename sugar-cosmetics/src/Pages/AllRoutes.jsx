import {Routes,Route} from "react-router-dom";
import Home from "./Home";
import RegisterLogin from "./RegisterLogin";
import React, { useEffect, useState } from "react";
import "firebase/auth";
import PageNotFound from "./PagenotFound.jsx";



export default function AllRoutes(){

    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/login-register" element={<RegisterLogin/>}></Route>
            <Route path="/results" element></Route>
            <Route path="*" element={<PageNotFound/>}></Route>
        </Routes>
    )
}