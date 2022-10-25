import React, { useState } from "react";

export const Appcontext = React.createContext();

export function Appcontextprovider({ children }) {
  const [Loginstate, setLoginState] = useState({
    isAuth: false,
    userdata: null,
  });

  const [fParams, setFParams] = useState({
    prod_type: "Blush",
    prod_category: "Powder",
    feature: "Gluten Free",
    filterdata: [],
  });

  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [address, setAddress] = useState([]);

  const LoginUser = (userinfo) => {
    setLoginState({
      isAuth: true,
      userdata: userinfo,
    });
  };

  const LogoutUser = () => {
    setLoginState({
      isAuth: false,
      userdata: null,
    });
  };

  const filterParams = (type, category, feature, resdata) => {
    setFParams({
      prod_type: type,
      prod_category: category,
      feature: feature,
      filterdata: resdata,
    });
  };

  const Addtocart = (data) => {
    setCart([...cart, data]);
  };

  const AddtoWishlist = (data) => {
    setWishlist([...wishlist, data]);
  };

  const AddAddress = (adddata) => {
    setAddress([...address, adddata]);
  };

  return (
    <Appcontext.Provider
      value={{
        Loginstate,
        LoginUser,
        LogoutUser,
        fParams,
        filterParams,
        cart,
        Addtocart,
        wishlist,
        AddtoWishlist,
        address,
        AddAddress,
      }}
    >
      {children}
    </Appcontext.Provider>
  );
}
