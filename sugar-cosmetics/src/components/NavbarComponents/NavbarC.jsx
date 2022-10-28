import { Button } from "@chakra-ui/button";
import { InputGroup, InputLeftAddon, Input } from "@chakra-ui/input";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/Navbar.css";
import { useState, useContext } from "react";
import { Appcontext } from "../../context/AppContext";
import swal from "sweetalert";
import Alert from "react-bootstrap/Alert";
import CloseButton from "react-bootstrap/CloseButton";
import Form from "react-bootstrap/Form";

export function NavbarInput() {
  const { searchInput, SettingInputEmpty } = useContext(Appcontext);
  const [sinput,setSinput]=useState("");
  const navigate=useNavigate();
  
  return (
    <>
      <InputGroup className="mb-3 NavbarInput">
        <Form.Control
          className="input_focus_nav"
          style={{ width: "580px", height: "38px", marginTop: "1px",color:"#FF0000" }}
          placeholder={`Try "Lipstick"`}
          value={sinput}
          onChange={(e) => {
            setSinput(e.target.value);
          }}
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button
          id="button-addon2"
          style={{
            height: "40px",
            width: "116px",
            borderBottomRightRadius: "7px",
            borderTopRightRadius: "7px",
          }}
          onClick={()=>{SettingInputEmpty(sinput);navigate("/results")}}
        >
          <span>
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              alt="search_icon"
              style={{
                height: "16px",
                width: "18px",
                paddingTop: "0px",
                marginRight: "5px",
              }}
            >
              <path
                d="m15.646 14.651-2.942-2.944a7.246 7.246 0 0 0-.804-9.869A7.1 7.1 0 0 0 6.942.003 7.106 7.106 0 0 0 2.09 2.109 7.233 7.233 0 0 0 .003 7.004a7.24 7.24 0 0 0 1.819 5.003 7.093 7.093 0 0 0 9.78.812l2.918 2.944a.793.793 0 0 0 .868.175c.097-.04.185-.1.258-.175a.804.804 0 0 0 0-1.112ZM7.153 12.82a5.516 5.516 0 0 1-3.083-.944A5.59 5.59 0 0 1 2.025 9.36a5.648 5.648 0 0 1-.316-3.236 5.617 5.617 0 0 1 1.52-2.868A5.536 5.536 0 0 1 6.07 1.725a5.505 5.505 0 0 1 3.207.318 5.562 5.562 0 0 1 2.49 2.063 5.637 5.637 0 0 1-.69 7.072 5.526 5.526 0 0 1-3.925 1.64Z"
                fill="#212121"
              ></path>
            </svg>
          </span>
          <span>Search</span>
        </Button>
      </InputGroup>
    </>
  );
}

export function NavbarLoginRegister() {
  const { Loginstate, LogoutUser } = useContext(Appcontext);

  function Onlogoutuser() {
    swal({
      title: "Are you sure?",
      text: "Are you sure? you want to logout ?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        LogoutUser();
        swal("Logged out successfully! Thank you for shopping!", {
          icon: "success",
        });
      }
    });
  }

  if (Loginstate.isAuth == true) {
    return (
      <>
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 19 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          alt="person_icon"
          style={{ width: "19px", height: "19px" }}
        >
          <path
            d="M9.5 0C4.253 0 0 4.367 0 9.753c0 5.387 4.253 9.753 9.5 9.753S19 15.14 19 9.753C19 4.367 14.747 0 9.5 0Zm0 2.714c2.126 0 3.848 1.768 3.848 3.95 0 2.183-1.722 3.952-3.848 3.952s-3.848-1.77-3.848-3.951c0-2.183 1.722-3.951 3.848-3.951Zm0 15.344c-2.445 0-4.636-1.114-6.12-2.874 1.234-2.151 3.512-3.596 6.12-3.596s4.886 1.445 6.12 3.596c-1.484 1.76-3.675 2.874-6.12 2.874Z"
            fill="#fff"
          ></path>
        </svg>
        <p
          to="/login-register"
          style={{
            fontSize: "15px",
            marginTop: "15px",
            textDecoration: "none",
            color: "#fff",
            marginLeft: "5px",
            cursor: "pointer",
          }}
          onClick={Onlogoutuser}
        >
          Hi, <span>{Loginstate.userdata.username}</span>
        </p>
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ fontSize: "10px", marginLeft: "15px", cursor: "pointer" }}
        >
          <path
            d="m6.71 6.83 4.24-4.24a1 1 0 1 0-1.41-1.42L6 4.71 2.46 1.17a1 1 0 0 0-1.41 0 1 1 0 0 0-.29.71 1 1 0 0 0 .29.71l4.24 4.24a1 1 0 0 0 1.42 0Z"
            fill="#fff"
          ></path>
        </svg>
      </>
    );
  }
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#fff"
        width="20"
        height="20"
        viewBox="0 0 512 512"
      >
        <path d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM512 256c0 141.4-114.6 256-256 256S0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM256 272c39.8 0 72-32.2 72-72s-32.2-72-72-72s-72 32.2-72 72s32.2 72 72 72z" />
      </svg>
      <Link
        to="/login-register"
        style={{
          fontSize: "15px",
          marginTop: "0px",
          textDecoration: "none",
          color: "#fff",
          marginLeft: "5px",
        }}
      >
        Login/Register
      </Link>
    </>
  );
}
