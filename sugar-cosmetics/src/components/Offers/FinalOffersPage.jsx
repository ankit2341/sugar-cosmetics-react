import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import Footer from "../Footer";
import TitleForall from "../HomePage/TitleForall";
import Navbar from "../Navbar";

const offers = [
  "https://d32baadbbpueqt.cloudfront.net/Promotion/c2c72347-5808-4298-9f58-5ffc971d348d.jpg",
  "https://d32baadbbpueqt.cloudfront.net/Promotion/c333b6cb-2fdc-4cae-80ae-294c8ea99474.jpg",
  "https://d32baadbbpueqt.cloudfront.net/Promotion/50157311-8d25-4278-b20c-16392c635252.jpg",
  "https://d32baadbbpueqt.cloudfront.net/Promotion/d04c8d0b-d9b8-4074-9024-4ba34fb54a31.jpg",
  "https://d32baadbbpueqt.cloudfront.net/Promotion/cac8c2c9-e518-455f-b973-b03b8d7ab627.jpg",
  "https://d32baadbbpueqt.cloudfront.net/Promotion/db0c68f4-988b-4d2d-ae17-99f945eacc49.jpg",
];
export default function FinalOfferPage() {
  function mycopy() {
    // Get the text field

    // Copy the text inside the text field
    navigator.clipboard.writeText("GOMSMD");

    // Alert the copied text
    swal("Copied!", "Code GOMSMD Copied Successfully!", "success");
  }
  const navigate = useNavigate();
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
      <TitleForall titlename={"OFFERS"}/>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,349px)",
          gridTemplateRows: "repeat(2,330px)",
          gap: "15px",
          marginLeft:"40px",
          marginBottom: "30px",
        }}
      >
        {offers.map((el) => {
          return (
            <div
              style={{
                width: "349px",
                height: "330px",
                backgroundColor: "#fff",
                borderRadius: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-evenly",
                boxShadow: "0 2px 5px rgb(0 0 0 / 10%)",
              }}
            >
              <img
                src={el}
                style={{ width: "325px", height: "244px" }}
                alt=""
              />
              <div
                style={{
                  width: "324px",
                  height: "45px",
                  display: "flex",
                  justifyContent: "right",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    width: "114px",
                    height: "45px",
                    border: "1.5px dashed #FC2779",
                    color: "#FC2779",
                    borderRadius: "10px",
                    backgroundColor: "#FFF5EE",
                  }}
                >
                  <span style={{ fontSize: "14px" }}>GOMSMD</span>{" "}
                  <span>
                    <img
                      onClick={mycopy}
                      style={{
                        cursor: "pointer",
                        width: "15px",
                        height: "18px",
                      }}
                      src="https://in.sugarcosmetics.com/desc-images/copyIconBlack.png"
                      alt=""
                    />
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div style={{ color: "lightgray" }}>
        _______________________________________________________________________________________________________________________________________________________________________________
      </div>
      <Footer />
    </>
  );
}
