import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Appcontext } from "./AppContext";

export default function PrivateRoute({children}){
    const {Loginstate}=useContext(Appcontext);

    if(!Loginstate.isAuth){
        return <Navigate to="/login-register"/>
    }

    return children;
}