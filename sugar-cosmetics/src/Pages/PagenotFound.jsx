import { Link, useNavigate } from "react-router-dom";

export default function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        fontFamily: "Roboto",
        height: "100vh",
        border: "1px solid",
        top: "-300px",
        backgroundImage:
          "url(https://in.sugarcosmetics.com/desc-images/404bg.svg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div
        style={{
          width: "80%",
          marginLeft: "30px",
          color: "#6C757D",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <img
          style={{ marginTop: "10px", cursor: "pointer" }}
          onClick={() => {
            navigate("/");
          }}
          src="https://in.sugarcosmetics.com/desc-images/SUGARLogo1.png"
          alt=""
        />
        <div>
          <Link
            style={{
              textDecoration: "none",
              fontSize: "13px",
              color: "#6C757D",
              fontWeight: "bold",
            }}
            to="/MakeUp"
          >
            MAKEUP
          </Link>
        </div>
        <div>
          <Link
            style={{
              textDecoration: "none",
              fontSize: "13px",
              color: "#6C757D",
              fontWeight: "bold",
            }}
            to="/Brushes"
          >
            BRUSHES
          </Link>
        </div>
        <div>
          <Link
            style={{
              textDecoration: "none",
              fontSize: "13px",
              color: "#6C757D",
              fontWeight: "bold",
            }}
            to="/SkinCare"
          >
            SKINCARE
          </Link>
        </div>
        <div>
          <Link
            style={{
              textDecoration: "none",
              fontSize: "13px",
              color: "#6C757D",
              fontWeight: "bold",
            }}
            to="/Gifting"
          >
            TRENDING
          </Link>
        </div>
        <div>
          <Link
            style={{
              textDecoration: "none",
              fontSize: "13px",
              color: "#6C757D",
              fontWeight: "bold",
            }}
            to="/"
          >
            BLOG
          </Link>
        </div>
        <div>
          <Link
            style={{
              textDecoration: "none",
              fontSize: "13px",
              color: "#6C757D",
              fontWeight: "bold",
            }}
            to="/Offers"
          >
            OFFERS
          </Link>
        </div>
      </div>
      <div
        style={{
          width: "1328px",
          marginTop: "100px",
          height: "143px",
          paddingLeft: "100px",
          textAlign: "left",
          color: "#3A2A68",
          fontSize: "95px",
        }}
      >
        Woops...!
      </div>

      <div
        style={{
          height: "98px",
          width: "532px",
          textAlign: "left",
          paddingTop: "20px",
          paddingBottom: "20px",
          marginBottom: "30px",
          paddingLeft: "100px",
        }}
      >
        <p>Either this page dosen't exist or the link entered is incorrect.</p>
        <p>While we look, we'll ensure you never lost!</p>
      </div>

      <div
        style={{
          width: "1328px",
          height: "40px",
          paddingLeft: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "left",
        }}
      >
        <div
          style={{
            width: "191px",
            height: "40px",
            color: "#ffffff",
            backgroundColor: "#FC2779",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            borderRadius: "4px",
          }}
          onClick={() => {
            navigate(-1);
          }}
        >
          Back To Previous Page
        </div>

        <div style={{ marginLeft: "30px", marginRight: "30px" }}>or</div>

        <div
          style={{
            width: "191px",
            height: "40px",
            color: "#ffffff",
            backgroundColor: "#FC2779",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            borderRadius: "4px",
          }}
          onClick={() => {
            navigate("/");
          }}
        >
          Return To Home Page
        </div>
      </div>
    </div>
  );
}
