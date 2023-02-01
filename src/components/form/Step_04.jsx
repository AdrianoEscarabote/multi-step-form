import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Step4Styled from "../../StyledComponents/form_style/Step4Styled";
import { useInfo } from "../../context";

export default function Step04({ handleColorSteps }) {

  useEffect(() => {
    handleColorSteps(3);
  }, []);
  
  const getInfo = useInfo();

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
              getInfo.addOns.sort((price1, price2) => price1.price - price2.price)
              .map((element, index) => {
                return (
                  <li key={index}>
                    <p className="item-name">{element.name}</p>
                    <p className="item-price">+${element.price}/{element.type}</p>
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

        <div className="container-link">
          <div className="link-router">
            <Link to="/contact" aria-label="go back to the previous step" className="back">Go Back</Link>
            <Link to="/thanks" className="link" aria-label="confirm the form">Confirm</Link>
          </div>  
        </div>
       

      </Step4Styled> 
  );
};