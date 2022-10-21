import { Button } from "@chakra-ui/button";
import { InputGroup, InputLeftAddon, Input } from "@chakra-ui/input";
import { Link } from "react-router-dom";
import "../../styles/Navbar.css";
import { useState, useContext } from "react";
import { Appcontext } from "../../context/AppContext"; 
import swal from "sweetalert";

export function NavbarInput() {
  return (
    <>
      <div className="NavbarInput">
        <InputGroup>
          <Input
            border="1px solid #212121"
            _focus={{ border: "none" }}
            variant="unstyled"
            type="text"
            placeholder='Try "colourpop"'
          />
          <Button
            leftIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#212121"
                width="15"
                height="15"
                viewBox="0 0 512 512"
              >
                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
              </svg>
            }
            variant="ghost"
          >
            Search
          </Button>
        </InputGroup>
      </div>
    </>
  );
}

export function NavbarLoginRegister() {
  const { Loginstate, LogoutUser } = useContext(Appcontext);

 function Onlogoutuser(){
  swal({
    title: "Are you sure?",
    text: "Are you sure? you want to logout ?",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
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
          xmlns="http://www.w3.org/2000/svg"
          fill="#fff"
          width="20"
          height="20"
          viewBox="0 0 512 512"
        >
          <path d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM512 256c0 141.4-114.6 256-256 256S0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM256 272c39.8 0 72-32.2 72-72s-32.2-72-72-72s-72 32.2-72 72s32.2 72 72 72z" />
        </svg>
        <p
          to="/login-register"
          style={{
            fontSize: "15px",
            marginTop: "15px",
            textDecoration: "none",
            color: "#fff",
            marginLeft: "5px",
          }}
          onClick={Onlogoutuser}
        >
          Hi, {Loginstate.userdata.username}
        </p>
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
