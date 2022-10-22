import Navbar from "../Navbar";
import FilterMakeup from "./FilterMakeup";
import "../../styles/makeup.css";
import Accordion from "react-bootstrap/Accordion";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Placeholder from "react-bootstrap/Placeholder";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";
import Card2 from "./Card";

const sortvalue = ["Price: Low To High", "Price: High To Low"];

export default function FinalMakeupPage() {
  const [sortV, setSortV] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  return (
    <>
      <Navbar />
      <div style={{ width: "100%", height: "135px" }}></div>
      <div>
        <div
          style={{
            filter: "blur(8px)",
            background:
              "url(https://d32baadbbpueqt.cloudfront.net/Collection/6a68d77f-80b5-4860-9a4d-6005844c937d.jpg)",
            webkitFilter: "blur(20px)",
            width: "100%",
            height: "270px",
            display: "flex",
            alignItems: "center",
            backgroundPosition: "50%",
            position: "absolute",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
        <img
          src="https://d32baadbbpueqt.cloudfront.net/Collection/6a68d77f-80b5-4860-9a4d-6005844c937d.jpg"
          alt=""
          style={{ position: "relative", width: "979px", height: "270px" }}
        />
      </div>
      <div className="breadcrumbs">
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
          onClick={() => navigate("/makeup")}
        >
          MakeUp
        </span>
      </div>
      <div style={{ display: "flex", width: "90%", margin: "auto" }}>
        <div style={{ width: "313px", height: "auto" }}>
          <div
            style={{
              marginBottom: "20px",
              paddingTop: "5px",
              width: "313px",
              backgroundColor: "#fff",
              borderRadius: "10px",
              boxShadow: "rgb(185 185 185 / 25%) 0px 0px 9px",
            }}
          >
            <Accordion flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header style={{ fontWeight: "bolder" }}>
                  Sort By:{sortV}
                </Accordion.Header>
                <Accordion.Body>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    {sortvalue.map((el) => {
                      return (
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "left",
                            marginBottom: "5px",
                          }}
                        >
                          <input
                            className="radiofilter"
                            type="radio"
                            value={el}
                            name="gender"
                            onChange={() => {
                              setSortV(el);
                            }}
                          />
                          <label
                            style={{
                              marginLeft: "20px",
                              fontSize: "12px",
                              color: "#212121",
                            }}
                            htmlFor=""
                          >
                            {el}
                          </label>
                        </div>
                      );
                    })}
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>

          <div>
            <FilterMakeup />
          </div>
        </div>
        <div className="prod_data">
          {loading
            ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((el) => {
                return (
                  <Card
                    style={{
                      width: "346px",
                      height: "420px",
                      borderRadius: "10px",
                    }}
                  >
                    <Card.Img
                      style={{
                        width: "146px",
                        height: "222px",
                        margin: "auto",
                        marginTop: "10px",
                      }}
                      variant="top"
                      src="https://www.macmillandictionary.com/us/external/slideshow/full/Grey_full.png"
                      animation="glow"
                    />
                    <Card.Body>
                      <Placeholder as={Card.Title} animation="glow">
                        <Placeholder xs={10} />
                      </Placeholder>
                      <Placeholder as={Card.Title} animation="glow">
                        <Placeholder
                          style={{ marginTop: "5px", marginBottom: "5px" }}
                          xs={5}
                        />
                      </Placeholder>
                      <Placeholder as={Card.Title} animation="glow">
                        <Placeholder xs={8} />
                      </Placeholder>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                          marginTop: "30px",
                        }}
                      >
                        <Placeholder.Button
                          variant="dark"
                          style={{
                            width: "42px",
                            height: "42px",
                          }}
                          xs={3}
                        />
                        <Placeholder.Button
                          style={{
                            width: "222px",
                            height: "44px",
                          }}
                          variant="dark"
                        />
                      </div>
                    </Card.Body>
                  </Card>
                );
              })
            : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((el) => {
                return <Card2 />;
              })}
          {/* cards */}
        </div>
      </div>
      <div style={{ color: "lightgray" }}>
        _______________________________________________________________________________________________________________________________________________________________________________
      </div>
      <Footer />
    </>
  );
}
