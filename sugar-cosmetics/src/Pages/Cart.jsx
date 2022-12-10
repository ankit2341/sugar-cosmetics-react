import { Link, useNavigate } from "react-router-dom";
import BreadCrumps from "../components/Makeup/BreadCrumps";
import Navbar from "../components/Navbar";
import "../styles/cart.css";
import { useContext, useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import { cart_bonus } from "./cart_bonus";
import { Appcontext } from "../context/AppContext";
import Footer from "../components/Footer";
import IfEmpty from "../components/userpage/IfEmpty";
import swal from "sweetalert";
import Confetti from "react-confetti";

export default function Cart() {
  const navigate = useNavigate();
  const { cart, RemoveFromCart, defaultAddress, ShowOrders, Loginstate } =
    useContext(Appcontext);
  const [count, setCount] = useState(1);
  const [total, setTotal] = useState();
  const [coupon, setCoupan] = useState("");
  const [couponapplied, setcouponapplied] = useState(false);
  const [confetti, setConfetti] = useState(false);

  function checkCoupan() {
    if (coupon == "GOMSMD") {
      swal({
        text: "Coupon Applied Successfully!",
        buttons: false,
        icon: "success",
      });
      setcouponapplied(true);
      setCoupan("");
      setTotal(total * 0.2);
    }
  }

  function addtoorders() {
    if (Loginstate.isAuth == false) {
      return swal({
        title: "Not Logged In!",
        text: "It seems that you are not Logged in LogIn now and checkout!",
        icon: "error",
      });
    }
    ShowOrders(cart);
    swal({
      title: "Order Placed Successfully!",
      text: "You will be redirected! Thanks for Shopping with us! ",
      icon: "success",
      buttons: false,
    });
    setConfetti(true);
    setTimeout(() => {
      navigate("/user/orders");
    }, 5000);
  }

  useEffect(() => {
    let sum = 0;
    cart.map((el) => {
      sum += Number(el.price);
    });

    setTotal(Math.round(sum));
  }, [cart]);

  function addingtotalqty(price) {
    setTotal(total + Number(price));
  }

  const removeitemformcart = (data) => {
    swal({
      title: "Are you sure?",
      text: "You want to remove this product from cart",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        let removedcart = cart.filter((el) => {
          return el.id !== data.id;
        });
        RemoveFromCart(removedcart);
        swal("Product has been removed from cart successfully!", {
          icon: "success",
        });
      }
    });
  };

  if (confetti == true) {
    return (
      <>
        <div
          style={{
            width: "750px",
            height: "100px",
            margin: "auto",
            marginTop: "40vh",
            position: "relative",
            animationName: "example",
            animationDuration: "2s",
            animationIterationCount: "infinite",
          }}
        >
          <h1 style={{ zIndex: "100", fontWeight: "bolder" }}>
            ORDER PLACED SUCCESSFULLY!
          </h1>
        </div>

        <div style={{ width: "100%", height: "100vh" }}>
          <Confetti
            numberOfPieces={"1000"}
            colors={["#000", "#FC2779", "#212121", "#757575"]}
            recycle={false}
          />
        </div>
      </>
    );
  }

  if (cart.length == 0 || undefined) {
    return (
      <>
        <Navbar />
        <div className="add_div" style={{ height: "50px" }}></div>
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
            onClick={() => navigate("/Cart")}
          >
            Cart
          </span>
        </div>
        <div
          style={{
            width: "80%",
            backgroundColor: "#fff",
            borderRadius: "20px",
            height: "419px",
            margin: "auto",
            marginBottom: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IfEmpty
            img_src={"https://in.sugarcosmetics.com/Cart_nofound.svg"}
            first={"Hey! It's lonely here."}
            second={
              "Your bag seems to have no company.Why not add some products?"
            }
            btn_text={"SHOP NOW"}
          />
        </div>
        <hr />
        <Footer />
      </>
    );
  }

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
          onClick={() => navigate("/Cart")}
        >
          Cart
        </span>
      </div>

      <div className="cart_main_container">
        <div className="left_side_cart">
          <div className="bonus_offer">
            <div
              style={{
                width: "674px",
                height: "64px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  width: "618px",
                  height: "21px",
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#000",
                  textAlign: "left",
                }}
              >
                BONUS OFFERS
              </div>
              <div style={{ width: "20px", height: "21px" }}>
                <svg
                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium CartStyle_expandMoreIcon___A7so css-vubbuv"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="ExpandMoreIcon"
                >
                  <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
                </svg>
              </div>
            </div>
            <div style={{ width: "674px", height: "186.25px" }}>
              {cart_bonus.map((el) => {
                return (
                  <>
                    <div
                      style={{
                        width: "642px",
                        height: "55px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <div style={{ width: "64px", height: "48px" }}>
                        <img
                          src={el.api_featured_image}
                          alt=""
                          style={{
                            width: "36px",
                            height: "48px",
                            border: "1px solid #000",
                            borderRadius: "3px",
                          }}
                        />
                      </div>
                      <div
                        style={{
                          width: "405px",
                          height: "48px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "left",
                          flexDirection: "column",
                          textAlign: "left",
                        }}
                      >
                        <div style={{ width: "400px", height: "24px" }}>
                          <h6
                            style={{
                              fontSize: "12px",
                              color: "#212121",
                              textAlign: "left",
                            }}
                          >
                            {el.name}
                          </h6>
                        </div>
                        <div style={{ width: "400px", height: "24px" }}>
                          <p
                            style={{
                              fontSize: "14px",
                              color: "#000",
                              textAlign: "left",
                              fontWeight: "bold",
                            }}
                          >
                            ₹ <span>{el.price}</span>
                          </p>
                        </div>
                      </div>
                      <div
                        style={{
                          width: "160px",
                          height: "48px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "right",
                        }}
                      >
                        <button
                          onClick={() => {
                            navigate(`/results/${el.id}`);
                          }}
                          style={{
                            cursor: "pointer",
                            width: "127px",
                            height: "36px",
                            color: "#fff",
                            backgroundColor: "#000",
                            fontSize: "14px",
                            fontWeight: "normal",
                            borderRadius: "7px",
                          }}
                        >
                          ADD TO CART
                        </button>
                      </div>
                    </div>
                    <hr style={{ lineHeight: "10px" }} />
                  </>
                );
              })}
              <div
                onClick={() => {
                  navigate(`/MakeUp`);
                }}
                style={{
                  cursor: "pointer",
                  color: "#FC2779",
                  fontSize: "14px",
                  textAlign: "right",
                  width: "642px",
                  padding: "0px 0px 10px 0px",
                }}
              >
                + View More
              </div>
            </div>
          </div>

          <div
            style={{
              width: "704px",
              height: "21px",
              fontSize: "18px",
              color: "#212121",
              fontWeight: "bold",
              textAlign: "left",
              margin: "auto",
              marginTop: "20px",
              marginBottom: "10px",
            }}
          >
            CART SUMMARY
          </div>

          <div
            style={{
              width: "704px",
              height: "auto",
              border: "1px solid #757575",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            {cart.map((el) => {
              return (
                <>
                  <div
                    style={{
                      width: "642px",
                      borderBottom: "1px solid #757575",
                      height: "48px",
                      paddingTop: "0",
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      marginBottom: "10px",
                    }}
                  >
                    <div style={{ width: "64px", height: "48px" }}>
                      <Link to={`/results/${el.id}`}>
                        <img
                          src={el.api_featured_image}
                          alt=""
                          style={{
                            width: "36px",
                            cursor: "pointer",
                            height: "48px",
                            border: "1px solid #000",
                            borderRadius: "3px",
                          }}
                        />
                      </Link>
                    </div>
                    <div
                      style={{
                        width: "405px",
                        height: "48px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "left",
                        flexDirection: "column",
                        textAlign: "left",
                      }}
                    >
                      <div style={{ width: "400px", height: "24px" }}>
                        <h6
                          style={{
                            fontSize: "12px",
                            color: "#212121",
                            textAlign: "left",
                          }}
                        >
                          {el.name}
                        </h6>
                      </div>
                      <div style={{ width: "400px", height: "24px" }}>
                        <p
                          style={{
                            fontSize: "14px",
                            color: "#000",
                            textAlign: "left",
                            fontWeight: "bold",
                          }}
                        >
                          ₹ <span>{el.price}</span>
                        </p>
                      </div>
                    </div>
                    <div
                      style={{
                        width: "160px",
                        height: "48px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div>
                        <svg
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            removeitemformcart(el);
                          }}
                          width="1em"
                          height="1em"
                          viewBox="0 0 16 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          class="cursor"
                        >
                          <path
                            d="M6.333 14a.833.833 0 0 0 .834-.833v-5a.833.833 0 1 0-1.667 0v5a.833.833 0 0 0 .833.833Zm8.334-10h-3.334v-.833a2.5 2.5 0 0 0-2.5-2.5H7.167a2.5 2.5 0 0 0-2.5 2.5V4H1.333a.833.833 0 0 0 0 1.667h.834v9.166a2.5 2.5 0 0 0 2.5 2.5h6.666a2.5 2.5 0 0 0 2.5-2.5V5.667h.834a.833.833 0 0 0 0-1.667Zm-8.334-.833a.833.833 0 0 1 .834-.834h1.666a.833.833 0 0 1 .834.834V4H6.333v-.833Zm5.834 11.666a.833.833 0 0 1-.834.834H4.667a.833.833 0 0 1-.834-.834V5.667h8.334v9.166ZM9.667 14a.833.833 0 0 0 .833-.833v-5a.833.833 0 1 0-1.667 0v5a.833.833 0 0 0 .834.833Z"
                            fill="#757575"
                          ></path>
                        </svg>
                      </div>

                      <div
                        style={{
                          width: "100px",
                          height: "28px",
                          color: "#000",
                          fontWeight: "normal",
                          marginLeft: "20px",
                        }}
                      >
                        <button
                          disabled={count == 0}
                          style={{
                            width: "30px",
                            height: "30px",
                            backgroundColor: "#fff",
                            border: "1px solid #757575",
                            borderTopLeftRadius: "5px",
                            borderBottomLeftRadius: "5px",
                          }}
                          onClick={() => {
                            setCount((prev) => prev - 1);
                            addingtotalqty(el.price);
                          }}
                        >
                          -
                        </button>
                        <button
                          style={{
                            width: "30px",
                            height: "30px",
                            backgroundColor: "#fff",
                            border: "1px solid #757575",
                          }}
                        >
                          {count}
                        </button>
                        <button
                          disabled={count == 20}
                          style={{
                            width: "30px",
                            height: "30px",
                            backgroundColor: "#fff",
                            border: "1px solid #757575",
                            borderTopRightRadius: "5px",
                            borderBottomRightRadius: "5px",
                          }}
                          onClick={() => {
                            setCount((prev) => prev + 1);
                            addingtotalqty(el.price);
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>

        <div className="right_side_cart">
          <p
            style={{
              fontSize: "18px",
              color: "#212121",
              fontWeight: "bold",
              textAlign: "left",
              marginLeft: "20px",
              marginTop: "20px",
            }}
          >
            APPLY COUPON
          </p>
          <div
            style={{
              width: "704px",
              height: "82px",
              borderRadius: "7px",
              border: "1px solid lightgray",
              margin: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <input
              type="text"
              style={{ width: "499px", height: "40px", paddingLeft: "10px" }}
              placeholder="Enter Gift Code or Discount Code"
              value={coupon}
              onChange={(e) => {
                setCoupan(e.target.value);
              }}
            />
            {couponapplied == true ? (
              <button
                disabled={true}
                style={{
                  width: "150px",
                  height: "38px",
                  marginLeft: "20px",
                  color: "#000",
                  borderRadius: "5px",
                }}
                onClick={checkCoupan}
              >
                APPLY
              </button>
            ) : (
              <button
                style={{
                  width: "150px",
                  height: "38px",
                  marginLeft: "20px",
                  color: "#fff",
                  backgroundColor: "#000",
                  borderRadius: "5px",
                }}
                onClick={checkCoupan}
              >
                APPLY
              </button>
            )}
          </div>

          <p
            style={{
              fontSize: "18px",
              color: "#212121",
              fontWeight: "bold",
              textAlign: "left",
              marginLeft: "20px",
              marginTop: "20px",
            }}
          >
            PRICE DETAILS
          </p>
          <div
            style={{
              width: "702px",
              height: "149px",
              border: "1px solid lightgray",
              borderRadius: "7px",
              margin: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                width: "670px",
                height: "24px",
                color: "#757575",
                fontSize: "14px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p>Subtotal</p>
              <p>₹{total}</p>
            </div>
            <div
              style={{
                width: "670px",
                height: "24px",
                color: "#757575",
                fontSize: "14px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p>Taxes</p>
              <p>₹76.00</p>
            </div>
            <div
              style={{
                width: "670px",
                height: "24px",
                color: "#757575",
                fontSize: "14px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p>Shipping</p>
              <p>₹100.00</p>
            </div>
            <div
              style={{
                width: "650px",
                height: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "left",
                color: "lightgrey",
              }}
            >
              ──────────────────────────────────────────────────────────
            </div>
            <div
              style={{
                width: "670px",
                height: "35px",
                color: "#212121",
                fontSize: "20px",
                fontWeight: "bold",
                display: "flex",
                alignItems: "fcenter",
                justifyContent: "space-between",
              }}
            >
              <p>Total</p>
              <p>₹{total + 76.0 + 100.0}</p>
            </div>
          </div>

          <p
            style={{
              fontSize: "18px",
              color: "#212121",
              fontWeight: "bold",
              textAlign: "left",
              marginLeft: "20px",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            DELIVERY ADDRESS
          </p>
          <div
            style={{
              width: "704px",
              height: "172px",
              border: "1px solid lightgray",
              borderRadius: "7px",
              margin: "auto",
              paddingLeft: "20px",
            }}
          >
            {defaultAddress.firstN == undefined ? (
              <p style={{ marginTop: "70px", textAlign: "center" }}>
                Login To Add Address or Already Logged in please add address and
                set default address
              </p>
            ) : (
              <>
                <di style={{ width: "682px", height: "102px" }}>
                  <div
                    style={{
                      width: "400px",
                      height: "30px",
                      fontWeight: "bold",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    {defaultAddress.firstN + " " + defaultAddress.lastN}
                  </div>
                  <div
                    style={{
                      width: "400px",
                      height: "50px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "left",
                      overflow: "hidden",
                    }}
                  >
                    {defaultAddress.areaa}
                  </div>
                  <div
                    style={{
                      width: "400px",
                      height: "30px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "left",
                    }}
                  >
                    <span>{defaultAddress.statee}</span>
                    <span style={{ marginLeft: "30px" }}>
                      {defaultAddress.cityy}
                    </span>
                    <span style={{ marginLeft: "30px" }}>
                      {defaultAddress.pin}
                    </span>
                  </div>
                  <div
                    style={{
                      width: "400px",
                      height: "20px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "left",
                    }}
                  >
                    Phone Number :{defaultAddress.mobile}
                  </div>
                </di>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#212121",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    navigate("/user/address");
                  }}
                >
                  CHANGE DELIVERY ADDRESS
                </p>
              </>
            )}
          </div>
        </div>
      </div>
      {/* fixed-----------------------------------total bar---------------------------------------- */}

      <div
        style={{
          position: "fixed",
          bottom: "0",
          left: "0",
          right: "0",
          backgroundColor: "#fff",
          borderTop: "1px solid #e4e4e4",
          boxShadow: "0 -12px 17px rgb(34 34 34 / 5%)",
          width: "100%",
          height: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "1064px",
            height: "64px",
            display: "flex",
            alignItems: "center",
            justifyContent: "left",
          }}
        >
          <p>
            Delivering to -{" "}
            {defaultAddress.firstN != undefined &&
            defaultAddress.lastN != undefined
              ? defaultAddress.firstN + " " + defaultAddress.lastN
              : "Login first"}
          </p>
        </div>
        <div
          style={{
            width: "319px",
            height: "64px",
            display: "flex",
            alignItems: "center",
            justifyContent: "left",
          }}
        >
          <button
            style={{
              width: "319px",
              height: "48px",
              color: "#fff",
              backgroundColor: "#000",
              borderRadius: "7px",
            }}
            onClick={addtoorders}
          >
            ₹ {total + 76 + 100} PLACE ORDER
          </button>
        </div>
      </div>
      <hr />
      <Footer />
    </>
  );
}
