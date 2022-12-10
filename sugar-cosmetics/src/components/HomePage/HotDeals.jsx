import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";

function HotDeals({ DataCard }) {
  return (
    <>
      <Carousel style={{ marginTop: "20px" }} className="hotdeals_laptop">
        <Carousel.Item>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "95%",
              margin: "auto",
            }}
          >
            <img
              className="d-block w-100"
              style={{ width: "25%", height: "300px", borderRadius: "10px" }}
              src={DataCard[0]}
              alt="First slide"
            />

            <img
              className="d-block w-100"
              style={{
                width: "25%",
                height: "300px",
                borderRadius: "10px",
                marginRight: "3%",
                marginLeft: "3%",
              }}
              src={DataCard[1]}
              alt="First slide"
            />

            <img
              className="d-block w-100"
              style={{ width: "25%", height: "300px", borderRadius: "10px" }}
              src={DataCard[2]}
              alt="First slide"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "95%",
              margin: "auto",
            }}
          >
            <img
              className="d-block w-100"
              style={{ width: "25%", height: "300px", borderRadius: "10px" }}
              src={DataCard[3]}
              alt="First slide"
            />

            <img
              className="d-block w-100"
              style={{
                width: "25%",
                height: "300px",
                borderRadius: "10px",
                marginRight: "3%",
                marginLeft: "3%",
              }}
              src={DataCard[4]}
              alt="First slide"
            />

            <img
              className="d-block w-100"
              style={{ width: "25%", height: "300px", borderRadius: "10px" }}
              src={DataCard[5]}
              alt="First slide"
            />
          </div>
        </Carousel.Item>
      </Carousel>

      <Carousel style={{ marginTop: "20px" }} className="hotdeals_ipad">
        <Carousel.Item>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "95%",
              margin: "auto",
            }}
          >
            <img
              className="d-block w-100"
              style={{ width: "25%", height: "300px", borderRadius: "10px" }}
              src={DataCard[0]}
              alt="First slide"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "95%",
              margin: "auto",
            }}
          >
            <img
              className="d-block w-100"
              style={{ width: "25%", height: "300px", borderRadius: "10px" }}
              src={DataCard[3]}
              alt="First slide"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "95%",
              margin: "auto",
            }}
          >
            <img
              className="d-block w-100"
              style={{ width: "25%", height: "300px", borderRadius: "10px" }}
              src={DataCard[2]}
              alt="First slide"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "95%",
              margin: "auto",
            }}
          >
            <img
              className="d-block w-100"
              style={{ width: "25%", height: "300px", borderRadius: "10px" }}
              src={DataCard[5]}
              alt="First slide"
            />
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default HotDeals;
