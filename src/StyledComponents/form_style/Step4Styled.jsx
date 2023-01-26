import styled from "styled-components";
import { Coolgray, MarineBlue, Alabaster } from "../colors";

const Step4Styled = styled.div`
  
  color: #000;

  h2 {
    font-size: 2rem;
    font-weight: 700;
    line-height: 2.3125rem;
    color: ${MarineBlue}; 
    padding-bottom: 0.625rem;
  }

  p {
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5625rem;
    color: ${Coolgray}; 
  }

  .infos {
    margin-top: 20px;
    width: 100%;
    background-color: ${Alabaster};

     
    .plan {
      display: flex;
      justify-content: space-between;
    }
  }
`

export default Step4Styled;