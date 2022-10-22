import Accordion from "react-bootstrap/Accordion";
import { useNavigate } from "react-router-dom";

const makeupProdType = [
  "Blush",
  "Bronzer",
  "Eyebrow",
  "Eyeliner",
  "Eyeshadow",
  "Foundation",
  "Lip liner",
  "Lipstick",
  "Mascara",
  "Nail polish",
];

const makeupCategory = [
  "Powder",
  "Cream",
  "Pencil",
  "Liquid",
  "Gel",
  "Cream",
  "Palette",
  "Concealer",
  "Contour",
  "Mineral",
  "Highlighter",
  "Lipstick",
  "Lip gloss",
  "Lip stain",
];

const makeupFeature = [
  "Vegan",
  "Canadian",
  "Natural",
  "Gluten free",
  "Non-gmo",
  "Purpicks",
  "Certclean",
  "Ewg verified",
  "Organic",
  "Usda organic",
  "Hypoallergenic",
  "No talc",
  "Ecocert",
];

export default function FilterMakeup() {
  const navigate = useNavigate();
  return (
    <>
      <div className="filter">
        <div
          style={{
            width: "314px",
            height: "64px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            fontWeight: "bold",
          }}
        >
          Filters{" "}
          <span
            style={{ color: "#FC2779", marginLeft: "140px", cursor: "pointer" }}
            onClick={() => {
              window.location.reload();
            }}
          >
            Reset
          </span>{" "}
        </div>
        <Accordion flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header style={{ fontWeight: "bolder" }}>
              Product Type
            </Accordion.Header>
            <Accordion.Body>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                {makeupProdType.map((el) => {
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
          <Accordion.Item eventKey="1">
            <Accordion.Header>Category</Accordion.Header>
            <Accordion.Body>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                {makeupCategory.map((el) => {
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
          <Accordion.Item eventKey="2">
            <Accordion.Header>Feature</Accordion.Header>
            <Accordion.Body>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                {makeupFeature.map((el) => {
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
    </>
  );
}
