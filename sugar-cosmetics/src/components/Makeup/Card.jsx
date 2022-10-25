import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link, Navigate, useNavigate } from "react-router-dom";

export default function Card2({carddata,id}) {
  const navigate=useNavigate();
  return (
    <Card
      style={{
        width: "346px",
        height: "420px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",borderRadius:"10px"
      }}
    >
      <Card.Body style={{ margin: "auto" }}>
        <Link to={`/results/${id}`}><Card.Img
          style={{
            width: "146px",
            height: "222px",
            margin: "auto",
            marginTop: "0px",
          }}
          variant="top"
          src={carddata.api_featured_image}
        /></Link>
        <Card.Title
          style={{
            fontSize: "12.8px",
            color: "#212121",
            marginBottom: "10px",
            marginTop: "10px",
          }}
        >
          {carddata.name}
        </Card.Title>
        <Card.Subtitle
          className="mb-2 text-muted"
          style={{ fontSize: "14px", color: "#757575", marginBottom: "5px" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "95px",
              width: "100%",
              height: "18px",
            }}
          >
            <img
              style={{ height: "12px", width: "25px" }}
              src="https://i.postimg.cc/SR65TFbL/bx.jpg"
              alt=""
            />
            <p style={{ marginTop: "15px" }}> {carddata.product_colors.length} shades</p>
          </div>
        </Card.Subtitle>
        <Card.Text
          style={{ fontSize: "18px", fontWeight: "bold", marginTop: "10px" }}
        >
          ₹ {carddata.price}
        </Card.Text>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <div
            style={{
              width: "42px",
              height: "42px",
              border: "2px solid #000",
              borderRadius: "5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={()=>{navigate(`/results/${id}`)}}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginLeft: "0px" }}
              fill="#000"
              width="30"
              height="30"
              viewBox="0 0 512 512"
            >
              <path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z" />
            </svg>
          </div>

          <Button
            style={{
              width: "222px",
              height: "44px",
              marginLeft: "20px",
              borderRadius: "5px",
              backgroundColor: "#000000",
              color: "#fff",
              fontWeight: "bold",
            }}
            onClick={()=>{navigate(`/results/${id}`)}}
          >
           {carddata.product_colors.length==0?"ADD TO CART":"SELECT SHADE"}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
