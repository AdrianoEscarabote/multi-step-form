import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Step4Styled from "../../StyledComponents/form_style/Step4Styled";
import { useInfo } from "../../context";

export default function Step04({ handleColorSteps }) {

  useEffect(() => {
    handleColorSteps(3);
  }, []);
  
  const getInfo = useInfo();
  
  return (
      <Step4Styled>
        <h2>Finishing up</h2>
        <p>Double-check everything looks OK before confirming.</p>

        <section className="infos">
          <div className="plan">
            <div>
              <p>{getInfo.plan} ({getInfo.type})</p>
              <Link to="/plan">change</Link>
            </div>
            <p>{getInfo.pricePlan}</p>
          </div>
          <div className="services">

          </div>
          <div className="total">

          </div>
        </section>

        <h1>{getInfo.name} ::</h1>
        <h1>{getInfo.email} ::</h1>
        <h1>{getInfo.phone} ::</h1>
        <h1>{getInfo.plan} ::</h1>
        <h1>{getInfo.type} ::</h1>

        <span>Total (per month/year)</span>

        <Link to="/contact">Go Back</Link>
      </Step4Styled> 
  );
};