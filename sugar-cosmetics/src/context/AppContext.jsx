import React, { useState } from "react";

export const Appcontext = React.createContext();

export function Appcontextprovider({ children }) {
  // const [Loginstate, setLoginState] = useState({
  //   isAuth: false,
  //   userdata: null,
  // });


  // for testing---------------------------
  const [Loginstate, setLoginState] = useState({
    isAuth: true,
    userdata: {username:"Ankit Patil",
               mnumber:"7972592414",
               email:"ankit@gmail.com",
               password:""
               },
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
  const [orders,setOrders]=useState([]);
  const [defaultAddress,setDefaultAddress]=useState({});

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

  const removeAddress=(toberemoved)=>{
    setAddress(toberemoved);
  };

  const SettingDefaultAdd=(value)=>{
       setDefaultAddress(value);
  }

  const ShowOrders=(orderData)=>{
    setOrders([...orders,orderData])
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
        removeAddress,
        defaultAddress,
        SettingDefaultAdd,
        orders,
        ShowOrders
      }}
    >
      {children}
    </Appcontext.Provider>
  );
}
