import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Link } from "react-router-dom";
import { useState } from "react";
import React from "react";
import { authentification } from "../../firebase";
import { RecaptchaVerifier,signInWithPhoneNumber } from "firebase/auth";


export default function RightSide() {
  const [otpentry, setotpentry] = useState("");
  const [mnumber, setNumber] = useState("");
  const [enterotp, setenterotp] = useState(false);
  const [signup, setsignup] = useState(false);
  const [cheked, setchecked] = useState(true);

  function checkrecaptcha(){

    window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
      }
    }, authentification);

  }

  function requestotp(){
    let phoneNumber=`+91${mnumber}`;
    console.log(phoneNumber)
    setenterotp(true);
    checkrecaptcha();
    let appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(authentification,phoneNumber,appVerifier)
    .then((confirmationResult) => {
      window.confirmationResult=confirmationResult;
      alert("OTP Sent")
    }).catch((error) => {
      console.log(error);
      setenterotp(false);
      alert("Error Sending OTP");
    });
  }

  function verifyotp(){
    let confirmationResult=window.confirmationResult;
    
    confirmationResult.confirm(otpentry).then((result) => {
      // User signed in successfully.
      const user = result.user;
      alert("signed in")
      // ...
    }).catch((error) => {
      // User couldn't sign in (bad verification code?)
      // ...
    });
    
  }

  if (enterotp) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
          background:
            "url(https://media.sugarcosmetics.com/upload/loginPageBackGroundTexture.png)",
          width: "64%",
          height: "96vh",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "left",
            paddingRight: "900px",
            paddingTop: "5%",
            paddingBottom: "0%",
          }}
        >
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#757575"
              width="60"
              height="15"
              viewBox="0 0 448 512"
            >
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
          </Link>
        </div>

        <div>
          <img
            style={{ width: "169px", height: "108px" }}
            src="https://media.sugarcosmetics.com/upload/Hi!.png"
            alt=""
          />
          <div style={{ margin: "auto" }}>
            <h6
              style={{
                fontWeight: "bold",
                marginTop: "20px",
                marginBottom: "30px",
              }}
            >
              Login/Sign Up Using Phone
            </h6>
          </div>
        </div>

        <div>
          <InputGroup
            className="mb-3"
            style={{
              width: "353px",
              paddingLeft: "0px",
              background: "transparent",
              border: "1px solid gray",
              height: "56px",
            }}
          >
            <Form.Control
              placeholder="Enter OTP"
              value={otpentry}
              onChange={(e) => {
                setotpentry(e.target.value);
              }}
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Text
              id="basic-addon2"
              style={{ background: "transparent" }}
            >
              <svg
                onClick={() => {
                  setotpentry("");
                }}
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#000"
                viewBox="0 0 512 512"
              >
                <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zm97.9-320l-17 17-47 47 47 47 17 17L320 353.9l-17-17-47-47-47 47-17 17L158.1 320l17-17 47-47-47-47-17-17L192 158.1l17 17 47 47 47-47 17-17L353.9 192z" />
              </svg>
            </InputGroup.Text>
          </InputGroup>
        </div>
        <div style={{ marginTop: "10px" }}>
          <p style={{ fontSize: "12px", margintop: "10px", color: "#757575" }}>
            Didn’t get the OTP?{" "}
            <span style={{ color: "#FC2779", fontWeight: "bold" }}>
              Resend now
            </span>
          </p>
        </div>
        <div>
          <p
            style={{
              width: "715px",
              height: "75px",
              color: "#757575",
              fontSize: "14px",
            }}
          >
            Registering for this site allows you to access your order status and
            history. Just fill in the above fields, and we'll get a new account
            set up for you in no time. We will only ask you for information
            necessary to make the purchase process faster and easier.
          </p>
        </div>
        {otpentry.length != 6 ? (
          <div>
            <button 
              disabled={true}
              style={{
                padding: "10px 25px",
                fontSize: "14px",
                borderRadius: "10px",
                backgroundColor: "lightgray",
                color: "gray",
                border: "none",
              }}
            >
              VALIDATE THIS
            </button>
          </div>
        ) : (
          <div>
            <button onClick={verifyotp}
              style={{
                padding: "10px 25px",
                fontSize: "14px",
                borderRadius: "10px",
                backgroundColor: "#000",
                color: "#fff",
              }}
            >
              VALIDATE THIS
            </button>
          </div>
        )}

        <div style={{ color: "lightgray" }}>
          ___________________________________________________________________________________________________
        </div>
        <div
          style={{
            width: "705px",
            height: "70px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div>
            <input
              style={{
                color: "#fff",
                backgroundColor: "#000",
                accentColor: "#000",
              }}
              checked={cheked}
              onChange={() => {
                cheked == true ? setchecked(false) : setchecked(true);
              }}
              type="checkbox"
            />
          </div>

          <div>
            <p
              style={{
                fontSize: "13px",
                paddingTop: "15px",
                paddingLeft: "10px",
                color: "#757575",
              }}
            >
              Get important updates on Whatsapp Terms and Conditions
            </p>
          </div>
        </div>

        <div style={{ color: "lightgray" }}>
          ___________________________________________________________________________________________________
        </div>
        <div>
          <p
            style={{
              fontSize: "12px",
              paddingTop: "15px",
              paddingLeft: "15px",
            }}
          >
            By Signing up or logging in, you agree to our Terms and Conditions
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        background:
          "url(https://media.sugarcosmetics.com/upload/loginPageBackGroundTexture.png)",
        width: "64%",
        height: "96vh",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "left",
          paddingRight: "900px",
          paddingTop: "5%",
          paddingBottom: "5%",
        }}
      >
        <Link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#757575"
            width="60"
            height="15"
            viewBox="0 0 448 512"
          >
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
          </svg>
        </Link>
      </div>
      <div>
        <img
          style={{ width: "169px", height: "108px" }}
          src="https://media.sugarcosmetics.com/upload/Hi!.png"
          alt=""
        />
        <div style={{ margin: "auto" }}>
          <h6
            style={{
              fontWeight: "bold",
              marginTop: "20px",
              marginBottom: "30px",
            }}
          >
            Login/Sign Up Using Phone
          </h6>
        </div>
      </div>

      <div>
        <InputGroup className="mb-3" style={{ width: "353px", height: "56px" }}>
          <InputGroup.Text
            id="basic-addon1"
            style={{ backgroundColor: "#fff" }}
          >
            +91
          </InputGroup.Text>
          <Form.Control
            placeholder="Enter Mobile Number"
            aria-label="+91"
            type="tel"
            aria-describedby="basic-addon1"
            value={mnumber}
            onChange={(e) => setNumber(e.target.value)}
          />
        </InputGroup>
        <Form.Text id="passwordHelpBlock" muted></Form.Text>
      </div>

      <div>
        <p
          style={{
            width: "715px",
            height: "75px",
            color: "#757575",
            fontSize: "14px",
          }}
        >
          Registering for this site allows you to access your order status and
          history. Just fill in the above fields, and we'll get a new account
          set up for you in no time. We will only ask you for information
          necessary to make the purchase process faster and easier.
        </p>
      </div>
      {mnumber.length !== 10 ? (
        <div>
          <button
            disabled={true}
            style={{
              padding: "10px 25px",
              fontSize: "14px",
              borderRadius: "10px",
              backgroundColor: "lightgray",
              color: "gray",
              border: "none",
            }}
          >
            SEND ME OTP
          </button>
        </div>
      ) : (
        <div>
          <button onClick={requestotp}
            style={{
              padding: "10px 25px",
              fontSize: "14px",
              borderRadius: "10px",
              backgroundColor: "#000",
              color: "#fff",
            }}
          >
            SEND ME OTP
          </button>
        </div>
      )}

      <div style={{ color: "lightgray" }}>
        ___________________________________________________________________________________________________
      </div>
      <div
        style={{
          width: "705px",
          height: "70px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <input
            style={{
              color: "#fff",
              backgroundColor: "#000",
              accentColor: "#000",
            }}
            checked={cheked}
            onChange={() => {
              cheked == true ? setchecked(false) : setchecked(true);
            }}
            type="checkbox"
          />
        </div>

        <div>
          <p
            style={{
              fontSize: "13px",
              paddingTop: "15px",
              paddingLeft: "10px",
              color: "#757575",
            }}
          >
            Get important updates on Whatsapp Terms and Conditions
          </p>
        </div>
      </div>

      <div style={{ color: "lightgray" }}>
        ___________________________________________________________________________________________________
      </div>
      <div id="recaptcha-container"></div>
      <div>
        <p
          style={{ fontSize: "12px", paddingTop: "15px", paddingLeft: "15px" }}
        >
          By Signing up or logging in, you agree to our Terms and Conditions
        </p>
      </div>
    </div>
  );
}
