import { useContext } from "react";
import { Navigate } from "react-router-dom";
import swal from "sweetalert";
import { Appcontext } from "./AppContext";

export default function PrivateRoute({children}){
    const {Loginstate}=useContext(Appcontext);

    if(!Loginstate.isAuth){
        swal({
            title:"Not Logged In!",
            text:"Login Now to access wishlist,orders,addresses and more!",
            buttons:false,
            icon:"warning"
        })
        return <Navigate to="/login-register"/>
    }

    return children;
}