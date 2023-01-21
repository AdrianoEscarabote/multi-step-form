import { useEffect } from "react";
import { Link } from "react-router-dom";
import { UserProvider, useUser } from "../../context";
import Step4Styled from "../../StyledComponents/form_style/Step4Styled";

export default function Step04({ handleColorSteps }) {
  useEffect(() => {
    handleColorSteps(3)
  }, [])

  const {user} = useUser();

  return (
    <UserProvider>
      <Step4Styled>
        <h2>Finishing up</h2>
        <h1>{user.name}</h1>
        <p>Double-check everything looks OK before confirming.</p>
        <span>Total (per month/year)</span>

        <Link to="/contact">Go Back</Link>
      </Step4Styled>  
    </UserProvider>
  );
};