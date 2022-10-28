import { useNavigate } from "react-router-dom";
import TitleForall from "./TitleForall";

export default function ThisorThat() {
  const navigate=useNavigate();

  return (
    <>
      <TitleForall titlename={"THIS OR THAT"} />
      <div
        style={{
          height: "440px",
          width: "95%",
          margin: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <img
          style={{ borderRadius: "10px", width: "49%", height: "400px",cursor:"pointer" }}
          src="https://d32baadbbpueqt.cloudfront.net/Homepage/d1b038a4-418a-4309-92b1-9aff3b4393ea.jpg"
          alt="" onClick={()=>{navigate("/MakeUp")}}
        />
        <img
          style={{ borderRadius: "10px", width: "49%", height: "400px",cursor:"pointer" }}
          src="https://d32baadbbpueqt.cloudfront.net/Homepage/984514b9-81c3-4e2a-922e-7b18f42ef77f.jpg"
          alt="" onClick={()=>{navigate("/Brushes")}}
        />
      </div>
    </>
  );
}
