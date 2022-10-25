import { useNavigate } from "react-router-dom";

export default function IfEmpty({btn_text,img_src,first,second}) {
    const navigate=useNavigate();
  return (
    <div
      style={{
        width: "1101px",
        height: "342px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <img
        src={img_src}
        alt=""
        style={{ width: "214px", height: "195px" }}
      />
      <p
        style={{
          marginTop: "15px",
          color: "#212121",
          fontSize: "15px",
          lineHeight: "0px",
        }}
      >
        {first}
      </p>
      <p style={{ color: "#757575", fontSize: "16px", lineHeight: "0px" }}>
        {second}
      </p>
      <button
        style={{
          width: "121px",
          height: "44px",
          backgroundColor: "#000",
          marginTop: "10px",
          color: "#fff",
          borderRadius: "5px",
        }}
        onClick={() => {
          navigate("/");
        }}
      >
        {btn_text}
      </button>
    </div>
  );
}
