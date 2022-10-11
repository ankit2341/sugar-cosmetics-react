import "../styles/Navbar.css"
import {NavbarInput, NavbarLoginRegister} from "./NavbarComponents/NavbarC"
import {Link} from "react-router-dom";
import { useState } from "react";

export default function Navbar(){

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 110){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
  window.addEventListener('scroll', changeNavbarColor);
    
    return (
        <div className={colorChange ?"Navbar_main_fixed" :"Navbar_main"}  >
         <div className="Navbar_first">
            <div style={{marginLeft:"0xp"}}>
            <img src="https://i.postimg.cc/440XRksF/Capture.jpg" alt="sugar" />
            </div>

            <div style={{width:"700px",height:"40px",marginLeft:"0px"}}>
                <NavbarInput/>
            </div>

            <div style={{width:"170px",height:"80px",display:"flex",alignItems:"center",justifyContent:"center",marginLeft:"100px"}}>
            <NavbarLoginRegister/>
            </div>

            <div style={{display:"flex",width:"100px",height:"80px",alignItems:"center",justifyContent:"space-between",marginLeft:"30px"}}>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="18" height="18" viewBox="0 0 512 512"><path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"/></svg>
                </div>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="18" height="18" viewBox="0 0 448 512"><path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 96c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24zm200-24c0 13.3-10.7 24-24 24s-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24z"/></svg>
                </div>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="18" height="18" viewBox="0 0 512 512"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192zm64 0c0 141.4-114.6 256-256 256S0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM256 336c44.2 0 80-35.8 80-80s-35.8-80-80-80s-80 35.8-80 80s35.8 80 80 80zm0 64c-79.5 0-144-64.5-144-144s64.5-144 144-144s144 64.5 144 144s-64.5 144-144 144zm32-144c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z"/></svg>
                </div>
            </div>
         </div>

         <div className="Navbar_second">
            <div>
            <Link to="/">Makeup</Link>
            <Link to="/">Brushes</Link>
            <Link to="/">Skincare</Link>
            <Link to="/">Gifting</Link>
            <Link to="/">Blog</Link>
            <Link to="/">Offers</Link>
            <Link to="/">Stores</Link>
            <Link to="/">Diwali Gifting</Link>
            </div>
         </div>
        </div>
    )
}