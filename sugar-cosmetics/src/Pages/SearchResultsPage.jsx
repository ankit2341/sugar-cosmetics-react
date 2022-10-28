import Navbar from "../components/Navbar";
import { Appcontext } from "../context/AppContext";
import {useContext,useEffect,useState} from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import ProductNotFound from "../components/Makeup/productNotFound";
import Card2 from "../components/Makeup/Card";
import Card from "react-bootstrap/Card";
import Placeholder from "react-bootstrap/Placeholder";
import Accordion from "react-bootstrap/Accordion";

const sortvalue = ["Price: Low To High", "Price: High To Low"];

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

export default function SearchResultsPage(){
    const [sortV, setSortV] = useState("");
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const {fParams,filterParamsconst,searchInput,SettingInputEmpty}=useContext(Appcontext);
    const[type,setType]=useState("Blush");
    const[category,setCategory]=useState("");
    const[feature,setFeature]=useState("");
    const[filtereddata,setFiltereddata]=useState([]);
    console.log(type,searchInput);

    useEffect(()=>{
      if(sortV=="Price: Low To High"){
        setLoading(true);
        let sorteddata=filtereddata.sort(function(a,b){
          return(
            Number(b.price)-Number(a.price)
          )
        })
       
        setFiltereddata(sorteddata);
        setLoading(false);
      }
      if(sortV=="Price: High To Low"){
        setLoading(true);
        let sorteddata=filtereddata.sort(function(a,b){
          return(
            Number(a.price)-Number(b.price)
          )
        })
       
        setFiltereddata(sorteddata);
        setLoading(false);
      }
     },[sortV])

    useEffect(() => {
      // 👇️ scroll to top on page load
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, [searchInput]);
  

    useEffect(()=>{
        setLoading(true);
        const Returnfetchuser = () => {
             
            return fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${searchInput}&product_category=${category}&product_tags=${feature}`).then((res) =>
            res.json()
          );
         
        };
       
        Returnfetchuser().then((res) => {
          setTimeout(() => {
            setFiltereddata(res);
            setLoading(false);
       
          }, 1000);
          
         //  console.log(filtereddata);
          
          });
    },[searchInput])
   
    useEffect(()=>{
      setLoading(true);
      const Returnfetchuser = () => {
           
          return fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${type}&product_category=${category}&product_tags=${feature}`).then((res) =>
          res.json()
        );
       
      };
     
      Returnfetchuser().then((res) => {
        setTimeout(() => {
          setFiltereddata(res);
          setLoading(false);
     
        }, 1000);
        
       //  console.log(filtereddata);
        
        });
     // console.log(type,category,feature);
     
    },[type,category,feature])
    

    return(
        <>
         <Navbar />
      <div style={{ width: "100%", height: "135px" }}></div>
        <div style={{width:"100%",height:"19px",marginTop:"10px",marginBottom:"10px",fontSize:"13px",display:"flex",alignItems:"center",justifyContent:"left"}}>
         <div style={{width:"20%",height:"19px",color:"#808080"}}>Search Results for {searchInput}</div>
        </div>

        <div style={{ display: "flex", width: "95%", margin: "auto" }}>
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
                              fontSize: "16px",
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
          <div className="filter">
        <div
          style={{
            width: "294px",
            height: "64px",
            paddingLeft:"10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            fontWeight: "bold",
          }}
        >
          Filters <span style={{marginLeft:"5px",overflow:"hidden",fontSize:"12px",color:"#212121",fontWeight:"normal"}}>{type},{category},{feature}</span>
          <span
            style={{ color: "#FC2779", marginLeft: "20px", cursor: "pointer" }}
            onClick={() => {
              window.location.reload();
            }}
          >
            Reset
          </span>
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
                        name="gender" onChange={(e)=>{setType(e.target.value)}}
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
                        name="gender" onChange={(e)=>{setCategory(e.target.value)}}
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
                        name="gender"  onChange={(e)=>{setFeature(e.target.value)}}
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
            : filtereddata.length==undefined ||filtereddata.length==0? <ProductNotFound/>:
            filtereddata.map((el) => {
                return <Card2 carddata={el} id={el.id}/>;
              })}
          {/* cards */}
        </div>
      </div>
      <div style={{ color: "lightgray",marginTop:"190px" }}>
        _______________________________________________________________________________________________________________________________________________________________________________
      </div>
      <Footer />


        </>
    )
}