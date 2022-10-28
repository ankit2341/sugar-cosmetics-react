import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import "../../styles/userpage.css";
import IfEmpty from "./IfEmpty";
import { Appcontext } from "../../context/AppContext";
import Footer from "../Footer";

export default function FinalRefferPage() {
  const navigate = useNavigate();
  const {Loginstate}=useContext(Appcontext);

  return (
    <>
      <Navbar />
      <div style={{ width: "100%", height: "135px" }}></div>
      <div className="breadcrumbs1">
        <span
          style={{ color: "gray", cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          Home
        </span>
        <svg
          class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
          focusable="false"
          width="25"
          fill="gray"
          height="30"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="KeyboardArrowRightIcon"
        >
          <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path>
        </svg>
        <span
          style={{ fontWeight: "normal", cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          Account
        </span>
        <svg
          class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
          focusable="false"
          width="25"
          fill="gray"
          height="30"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="KeyboardArrowRightIcon"
        >
          <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path>
        </svg>
        <span
          style={{ fontWeight: "bold", cursor: "pointer" }}
          onClick={() => navigate("/user/refer")}
        >
          Refer & Earn
        </span>
      </div>

      {/* -------------------------------userdetails------------------------------------------------------------------ */}

      <div className="main_user_container">
        <div className="user_info">
          <div className="leftside_userinfo">
            <div style={{ width: "297.5px", height: "95px" }}>
              <img
                src="https://media.sugarcosmetics.com/upload/accountMask.png"
                alt=""
                style={{ width: "96px", height: "95px", borderRadius: "50%" }}
              />
            </div>
            <div style={{ width: "297.5px", height: "30px" }}>
              <span
                style={{
                  color: "#fff",
                  fontSize: "18px",
                  marginTop: "10px",
                  fontWeight: "bold",
                }}
              >
                {Loginstate.userdata.username}
              </span>
            </div>
            <div style={{ width: "297.5px", height: "20px" }}>
              <span
                style={{ color: "#fff", fontSize: "14px", fontWeight: "normal" }}
              >
                +91 <span>{Loginstate.userdata.mnumber}</span>
              </span>
            </div>
            <div style={{ width: "297.5px", height: "20px" }}>
              <span
                style={{ color: "#fff", fontSize: "14px", fontWeight: "normal" }}
              >
                {Loginstate.userdata.email}
              </span>
            </div>
          </div>
          <div
            style={{
              width: "317.5px",
              height: "298px",
              backgroundColor: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <div className="leftside_wishlist_arrow">
              <div className="span_div_left" onClick={()=>{navigate("/user/orders")}}>
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ height: "40px", width: "40px" }}
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20 39c10.493 0 19-8.507 19-19S30.493 1 20 1 1 9.507 1 20s8.507 19 19 19Zm0 1c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20Z"
                    fill="#DBDBDB"
                  ></path>
                  <path
                    d="M24.714 18.571h-.943c-.25 0-.49.106-.666.293a1.032 1.032 0 0 0-.277.707c0 .266.1.52.277.707a.916.916 0 0 0 .666.293h.943c.25 0 .49-.105.667-.293.177-.187.276-.441.276-.707 0-.265-.1-.52-.276-.707a.916.916 0 0 0-.667-.293Zm0 4h-.943c-.25 0-.49.106-.666.293a1.032 1.032 0 0 0-.277.707c0 .266.1.52.277.707a.916.916 0 0 0 .666.293h.943c.25 0 .49-.105.667-.293.177-.187.276-.441.276-.707 0-.265-.1-.52-.276-.707a.916.916 0 0 0-.667-.293Zm-5.657-6h5.657c.25 0 .49-.105.667-.293.177-.187.276-.441.276-.707 0-.265-.1-.52-.276-.707a.916.916 0 0 0-.667-.293h-5.657c-.25 0-.49.106-.667.293a1.032 1.032 0 0 0-.276.707c0 .266.1.52.276.708a.916.916 0 0 0 .667.292Zm9.429-6h-13.2c-.25 0-.49.106-.667.293a1.032 1.032 0 0 0-.276.707v3h-2.829c-.25 0-.49.106-.667.293a1.032 1.032 0 0 0-.276.707V26.43c0 .795.298 1.558.829 2.12.53.564 1.25.88 2 .88h12.257c1 0 1.96-.422 2.667-1.172a4.126 4.126 0 0 0 1.104-2.828V11.57c0-.265-.099-.52-.276-.707a.917.917 0 0 0-.666-.293ZM14.343 26.43c0 .265-.1.52-.276.707a.917.917 0 0 1-.667.293.916.916 0 0 1-.667-.293 1.031 1.031 0 0 1-.276-.707V16.57h1.886v9.858Zm13.2-1c0 .53-.199 1.039-.553 1.414a1.833 1.833 0 0 1-1.333.586h-9.598c.11-.321.167-.66.17-1V12.57h11.314V25.43Zm-8.486-4.858H20c.25 0 .49-.105.667-.293.176-.187.276-.441.276-.707 0-.265-.1-.52-.276-.707a.917.917 0 0 0-.667-.293h-.943c-.25 0-.49.106-.667.293a1.032 1.032 0 0 0-.276.707c0 .266.1.52.276.707a.916.916 0 0 0 .667.293Zm0 4H20c.25 0 .49-.105.667-.293.176-.187.276-.441.276-.707 0-.265-.1-.52-.276-.707a.917.917 0 0 0-.667-.293h-.943c-.25 0-.49.106-.667.293a1.032 1.032 0 0 0-.276.707c0 .266.1.52.276.707a.916.916 0 0 0 .667.293Z"
                    fill="#000"
                  ></path>
                </svg>
                <span className="span_leftside">
                  Orders
                </span>
              </div>
              <div
                style={{
                  width: "24px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <svg
                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                  fill="#000"
                  height="24px"
                  width="24px"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="NavigateNextIcon"
                >
                  <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                </svg>
              </div>
            </div>
            <hr
              style={{
                border: "2px solid rgb(227, 227, 227)",
                background: "#212529",
                width: "287.5px",
              }}
            />

            <div className="leftside_wishlist_arrow">
              <div
                style={{
                  width: "125px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  cursor:"pointer"
                }}
                onClick={()=>{navigate("/user/address")}}
              >
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ height: "40px", width: "40px" }}
                >
                  <path
                    d="M40 20c0 11.046-8.954 20-20 20S0 31.046 0 20 8.954 0 20 0s20 8.954 20 20Z"
                    fill="#fff"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20 39c10.493 0 19-8.507 19-19S30.493 1 20 1 1 9.507 1 20s8.507 19 19 19Zm0 1c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20Z"
                    fill="#DBDBDB"
                  ></path>
                  <path
                    d="M28.857 17.64a8.448 8.448 0 0 0-13.08-6.232 8.508 8.508 0 0 0-3.737 6.232 8.41 8.41 0 0 0 2.445 6.788l5.268 5.278a.994.994 0 0 0 1.411 0l5.248-5.278a8.409 8.409 0 0 0 2.445-6.788Zm-3.837 5.387-4.572 4.572-4.571-4.572a6.45 6.45 0 0 1-1.859-5.188 6.529 6.529 0 0 1 2.872-4.8 6.43 6.43 0 0 1 7.117 0 6.53 6.53 0 0 1 2.872 4.78 6.45 6.45 0 0 1-1.859 5.208Zm-4.572-2.038a2.484 2.484 0 1 1 0-4.968 2.484 2.484 0 0 1 0 4.968Z"
                    fill="#212121"
                  ></path>
                </svg>
                <span className="span_leftside">Addresses</span>
              </div>
              <div
                style={{
                  width: "24px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <svg
                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                  height="24px"
                  width="24px"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="NavigateNextIcon"
                >
                  <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                </svg>
              </div>
            </div>

            <hr
              style={{
                border: "2px solid rgb(227, 227, 227)",
                background: "#212529",
                width: "287.5px",
              }}
            />

            <div className="leftside_wishlist_arrow">
              <div className="span_div_left" onClick={()=>{navigate("/user/wishlist")}}>
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ height: "40px", width: "40px" }}
                >
                  <path
                    d="M40 20c0 11.046-8.954 20-20 20S0 31.046 0 20 8.954 0 20 0s20 8.954 20 20Z"
                    fill="#fff"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20 39c10.493 0 19-8.507 19-19S30.493 1 20 1 1 9.507 1 20s8.507 19 19 19Zm0 1c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20Z"
                    fill="#DBDBDB"
                  ></path>
                  <path
                    d="M28.163 12.815a6.318 6.318 0 0 0-3.965-1.786 6.349 6.349 0 0 0-4.19 1.187 6.351 6.351 0 0 0-8.49.924 6.087 6.087 0 0 0-1.513 4.255 6.104 6.104 0 0 0 1.846 4.127l7.446 7.313a.999.999 0 0 0 .71.29 1.016 1.016 0 0 0 .71-.29l7.446-7.313a6.148 6.148 0 0 0 1.36-1.997 6.059 6.059 0 0 0 0-4.713 6.15 6.15 0 0 0-1.36-1.997Zm-1.41 7.323-6.746 6.616-6.747-6.616a4.179 4.179 0 0 1-1.164-2.144 4.13 4.13 0 0 1 .239-2.418c.32-.765.863-1.42 1.561-1.884a4.333 4.333 0 0 1 2.363-.72 4.287 4.287 0 0 1 2.998 1.227 1 1 0 0 0 .71.29 1.014 1.014 0 0 0 .71-.29 4.316 4.316 0 0 1 2.956-1.02 4.304 4.304 0 0 1 2.869 1.236 4.156 4.156 0 0 1 1.236 2.828 4.146 4.146 0 0 1-1.064 2.895h.08Z"
                    fill="#212121"
                  ></path>
                </svg>
                <span className="span_leftside">Wishlist</span>
              </div>
              <div
                style={{
                  width: "24px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <svg
                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                  height="24px"
                  width="24px"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="NavigateNextIcon"
                >
                  <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                </svg>
              </div>
            </div>

            <hr
              style={{
                border: "2px solid rgb(227, 227, 227)",
                background: "#212529",
                width: "287.5px",
              }}
            />

            <div className="leftside_wishlist_arrow">
              <div className="span_div_left" onClick={()=>{navigate("/user/refer")}}>
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ height: "40px", width: "40px" }}
                >
                  <path
                    d="M40 20c0 11.046-8.954 20-20 20S0 31.046 0 20 8.954 0 20 0s20 8.954 20 20Z"
                    fill="#fff"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20 39c10.493 0 19-8.507 19-19S30.493 1 20 1 1 9.507 1 20s8.507 19 19 19Zm0 1c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20Z"
                    fill="#DBDBDB"
                  ></path>
                  <path
                    d="M26 15h-.35a3.45 3.45 0 0 0 .35-1.5 3.49 3.49 0 0 0-6-2.44 3.491 3.491 0 0 0-6 2.44 3.45 3.45 0 0 0 .35 1.5H14a3 3 0 0 0-3 3v2a1 1 0 0 0 1 1h1v6a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-6h1a1 1 0 0 0 1-1v-2a3 3 0 0 0-3-3Zm-7 13h-3a1 1 0 0 1-1-1v-6h4v7Zm0-9h-6v-1a1 1 0 0 1 1-1h5v2Zm0-4h-1.5a1.5 1.5 0 1 1 1.5-1.5V15Zm2-1.5a1.5 1.5 0 1 1 1.5 1.5H21v-1.5ZM25 27a1 1 0 0 1-1 1h-3v-7h4v6Zm2-8h-6v-2h5a1 1 0 0 1 1 1v1Z"
                    fill="#FC2779"
                  ></path>
                </svg>
                <span className="span_leftside" style={{color:"#FC2779"}}>Refer & Earn</span>
              </div>
              <div
                style={{
                  width: "24px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <svg
                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                  height="24px"
                  width="24px"
                  focusable="false"
                  aria-hidden="true"
                  fill="#FC2779"
                  viewBox="0 0 24 24"
                  data-testid="NavigateNextIcon"
                >
                  <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="rightside_user">
         <img src="https://i.postimg.cc/mZMjgXnn/sugar-refer-and-earn.jpg" alt="" style={{width:"100%",height:"100%"}} />
        </div>
      </div>
      <hr style={{marginTop:"70px"}} />
      <Footer/>
    </>
  );
}
