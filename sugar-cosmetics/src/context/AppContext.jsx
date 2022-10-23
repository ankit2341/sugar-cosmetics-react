import React,{useState} from "react";

export const Appcontext=React.createContext();

export function Appcontextprovider({children}){

    const[Loginstate,setLoginState]=useState({
        isAuth:false,
        userdata:null
    });

    const [fParams,setFParams]=useState({
        prod_type:"Blush",
        prod_category:"Powder",
        feature:"Gluten Free",
        filterdata:[]
    })

    const LoginUser=(userinfo)=>{
        setLoginState({
            isAuth:true,
            userdata:userinfo
        })
    }

    const LogoutUser=()=>{
        setLoginState({
            isAuth:false,
            userdata:null
        })
    }

    const filterParams=(type,category,feature,resdata)=>{
       setFParams({
        prod_type:type,
        prod_category:category,
        feature:feature,
        filterdata:resdata
       })
    }

  

    return(
        <Appcontext.Provider value={{Loginstate,LoginUser,LogoutUser,fParams,filterParams}}>
            {children}
        </Appcontext.Provider>
    )
}