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
        <h1>{getInfo.name} ::</h1>
        <h1>{getInfo.email} ::</h1>
        <h1>{getInfo.phone} ::</h1>
        <p>Double-check everything looks OK before confirming.</p>
        <span>Total (per month/year)</span>

        <Link to="/contact">Go Back</Link>
      </Step4Styled> 
  );
};