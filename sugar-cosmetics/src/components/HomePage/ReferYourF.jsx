import TitleForall from "./TitleForall";
import {Link,useNavigate} from "react-router-dom";

export default function ReferYourF() {
  return (
    <>
      <TitleForall titlename={"REFER YOUR FREIND"} />
      <div
        style={{
          width: "95%",
          margin: "auto",
          height: "350px",
          marginTop: "20px",
        }}
      >
       <Link to={"/user/refer"}><img
          style={{
            borderRadius: "10px",
            width: "100%",
            margin: "auto",
            height: "350px",
          }}
          src="https://d32baadbbpueqt.cloudfront.net/Homepage/8bfe8bb4-002d-4097-a773-6af33325a594.jpg"
          alt=""
        /></Link> 
      </div>
    </>
  );
}
