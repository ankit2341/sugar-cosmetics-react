import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import swal from "sweetalert";
import { useContext, useState } from "react";
import "../../styles/Home.css";
import { Appcontext } from "../../context/AppContext";

export default function MyVerticallyCenteredModal(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastname] = useState("");
  const [mnumber, setMnumber] = useState("");
  const [pincode, setPin] = useState("");
  const [area, setArea] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [flat, setflat] = useState("");
  const { address, AddAddress } = useContext(Appcontext);

  const addressSaving = (event) => {
    event.preventDefault();

    AddAddress({
      firstN: firstName,
      lastN: lastName,
      mobile: mnumber,
      pin: pincode,
      areaa: area,
      statee: state,
      cityy: city,
      flatt: flat,
    });
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add New Address
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Control
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Control
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastname(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Control
                type="number"
                placeholder="Enter 10 digit Phone Number to save and continue"
                value={mnumber}
                className="inputnumber_otp"
                onChange={(e) => setMnumber(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Control
                type="text"
                placeholder="Flat/House No."
                value={flat}
                onChange={(e) => setflat(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Control
              placeholder="Apartment,Area,Locality,Road..."
              value={area}
              onChange={(e) => setArea(e.target.value)}
            />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Control
                placeholder="Pincode"
                type="number"
                className="inputnumber_otp"
                value={pincode}
                onChange={(e) => setPin(e.target.value)}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridCity">
              {pincode.length == 6 ? (
                <Button
                  style={{ backgroundColor: "#000", color: "#fff" }}
                  onClick={() => {
                    swal({
                      icon: "success",
                      text: "estimated delivery in between 2 to 10 days",
                      buttons: false,
                    });
                  }}
                >
                  CHECK
                </Button>
              ) : (
                <Button
                  style={{ backgroundColor: "#000", color: "#fff" }}
                  disabled
                >
                  {" "}
                  CHECK
                </Button>
              )}
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridState">
              <Form.Control
                placeholder="State"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Control
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </Form.Group>
          </Row>

          
          {firstName == "" ||
          lastName == "" ||
          mnumber == "" ||
          mnumber.length != 10 ||
          state == "" ||
          city == "" ||
          area == "" ||
          pincode == "" ||
          flat == "" ? (
            <Button
              variant="primary"
              type="submit"
              style={{
                marginLeft: "270px",
                backgroundColor: "#000",
                color: "#fff",
              }}
              disabled
            >
              SAVE AND CONTINUE
            </Button>
          ) : (
            <Button
              variant="primary"
              type="submit"
              style={{
                marginLeft: "270px",
                backgroundColor: "#000",
                color: "#fff",
              }}
              onClick={addressSaving}
            >
              SAVE AND CONTINUE
            </Button>
          )}
        </Form>
      </Modal.Body>
    </Modal>
  );
}
