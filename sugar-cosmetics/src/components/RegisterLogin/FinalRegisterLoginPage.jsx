import RightSide from "./RightSide";
import SideImg from "./SideImg";

export default function FinalRegisterLoginPage(){
    return(
        <>
        <div style={{width:"100%",height:"96vh",display:"flex",alignItems:"center",justifyContent:"space-evenly"}}>
        <SideImg/>
        <RightSide/>
        </div>
        <div style={{color:"#fff",backgroundColor:"#000",width:"100%",height:"4vh",fontSize:"12px",display:"flex",alignItems:"center",justifyContent:"center"}}>
            <p style={{paddingTop:"15px"}}>Copyright © 2022 SUGAR Cosmetics. All rights reserved.</p>
        </div>
        </>
    )
}