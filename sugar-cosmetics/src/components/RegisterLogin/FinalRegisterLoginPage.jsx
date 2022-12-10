import RightSide from "./RightSide";
import SideImg from "./SideImg";
import "../../styles/login.css";

export default function FinalRegisterLoginPage() {
  return (
    <>
      <div className="login_page">
        <SideImg />
        <RightSide />
      </div>
      <div
        style={{
          color: "#fff",
          backgroundColor: "#000",
          width: "100%",
          height: "4vh",
          fontSize: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p style={{ paddingTop: "15px" }}>
          Copyright © 2022 SUGAR Cosmetics. All rights reserved.
        </p>
      </div>
    </>
  );
}
