import React,{useState} from "react";

export const Appcontext=React.createContext();

export function Appcontextprovider({children}){

    const[Loginstate,setLoginState]=useState({
        isAuth:false,
        userdata:null
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

    const SignUpUser=(userinfo)=>{
        setLoginState({
            isAuth:true,
            userdata:userinfo
        })
    }

    return(
        <Appcontext.Provider value={{Loginstate,LoginUser,LogoutUser,SignUpUser}}>
            {children}
        </Appcontext.Provider>
    )
}