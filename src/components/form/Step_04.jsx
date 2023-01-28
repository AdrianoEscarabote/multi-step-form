import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Step4Styled from "../../StyledComponents/form_style/Step4Styled";
import { useInfo } from "../../context";

export default function Step04({ handleColorSteps }) {

  useEffect(() => {
    handleColorSteps(3);
  }, []);
  
  const getInfo = useInfo();

  useEffect(() => {
    console.log(getInfo.addOns);
  }, []);

  const calcTotal = () => {
    let num = 0;
    getInfo.addOns.forEach((element) => {
      
      return num += Number(element.price);
    });
    return num + Number(String(getInfo.pricePlan).match("[0-9]+"));
  };
  
  return (
      <Step4Styled>
        <h2>Finishing up</h2>
        <p>Double-check everything looks OK before confirming.</p>

        <section className="infos">
          <div className="plan">
            <div>
              <p>{getInfo.plan} ({getInfo.type})</p>
              <Link to="/plan">Change</Link>
            </div>
            <p>{getInfo.pricePlan}</p>
          </div>
          <div className="services">
          <ul>
            {
              getInfo.addOns.map((element, index) => {
                return (
                  <li key={index}>
                    <h3>{element.name}</h3>
                    <h3>+${element.price}/{element.type}</h3>
                  </li>
                )
              })
            }
          </ul>
          </div>
        </section>

        <div className="total">            
          <span>Total (per {getInfo.type === "monthly" ? "month" : "year" })</span>
          <p className="result">${calcTotal()}/{getInfo.type === "yearly" ? "yr" : "mo"}</p>
        </div>
        {/* <h1>{getInfo.name} ::</h1>
        <h1>{getInfo.email} ::</h1>
        <h1>{getInfo.phone} ::</h1> */}


        <div className="link-router">
          <Link to="/contact" className="back">Go Back</Link>
          <Link to="/thanks">Confirm</Link>
        </div>  

      </Step4Styled> 
  );
};