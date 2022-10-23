import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import { ImageMagnifier } from "./thumbnailcarousal";

export default function ProductDiscription() {
    const navigate=useNavigate();
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
          style={{ fontWeight: "bold", cursor: "pointer" }}
          onClick={() => navigate("/Offers")}
        >
          Offers
        </span>
      </div>
      <ImageMagnifier
        width={"600px"}
        height={"600px"}
        src="https://www.dc.com/sites/default/files/Char_Gallery_Batman_DTC1018_6053f2162bdf03.97426416.jpg"
      />
    </>
  );
}
