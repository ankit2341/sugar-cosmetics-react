import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import RegisterLogin from "./RegisterLogin";
import React, { useEffect, useState } from "react";
import "firebase/auth";
import PageNotFound from "./PagenotFound.jsx";
import FinalMakeupPage from "../components/Makeup/FinalMakeuppage";
import FinalSkincarePage from "../components/SkincarePage/FinalSkinCarePgae";
import FinalGiftingPage from "../components/Gifting/FinalGiftingPage";
import FinalBrushesPage from "../components/Brushes/FinalBrushesPage";
import FinalOfferPage from "../components/Offers/FinalOffersPage";
import ThumbnailCarousal, {
  ImageMagnifier,
} from "../components/ProductDiscription/thumbnailcarousal";
import ProductDiscription from "../components/ProductDiscription/ProductDescription";
import FinalOrdersPage from "../components/userpage/FinalOrdersPage";
import FinalWishlistPage from "../components/userpage/FinalWishlistPage";
import FinalAddressPage from "../components/userpage/FinalAddressesPage";
import FinalRefferPage from "../components/userpage/FinalReferPage";
import Cart from "./Cart";
import PrivateRoute from "../context/PrivateRoute";
import SearchResultsPage from "./SearchResultsPage";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login-register" element={<RegisterLogin />}></Route>
      <Route path="/results" element={<SearchResultsPage/>}></Route>
      <Route path="/MakeUp" element={<FinalMakeupPage />}></Route>
      <Route path="*" element={<PageNotFound />}></Route>
      <Route path="/Brushes" element={<FinalBrushesPage />}></Route>
      <Route path="/SkinCare" element={<FinalSkincarePage />}></Route>
      <Route path="/Gifting" element={<FinalGiftingPage />}></Route>
      <Route path="/Offers" element={<FinalOfferPage />}></Route>
      <Route path="/results/:id" element={<ProductDiscription/>}></Route>
      <Route path="/user/orders" element={<PrivateRoute><FinalOrdersPage/></PrivateRoute>}></Route>
      <Route path="/user/wishlist" element={<PrivateRoute><FinalWishlistPage/></PrivateRoute>}></Route>
      <Route path="/user/address" element={<PrivateRoute><FinalAddressPage/></PrivateRoute>}></Route>
      <Route path="/user/refer" element={<PrivateRoute><FinalRefferPage/></PrivateRoute>}></Route>
      <Route path="/Cart" element={<Cart/>}></Route>
    </Routes>
  );
}
