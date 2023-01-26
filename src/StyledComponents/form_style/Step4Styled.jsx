import styled from "styled-components";
import { Coolgray, MarineBlue, Alabaster, LightGray, White } from "../colors";

const Step4Styled = styled.div`
  
  color: #000;
  position: relative;

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
      padding: 20px;
      border-radius: 10px;

      div {
        p {
          font-weight: 700;
          color: ${MarineBlue};
          font-size: 20px;
        }
        a {
          color: ${Coolgray};
          font-size: 15px;
        }
      }

      p {
        font-weight: 600;
        color: ${MarineBlue};
      }
    }
  }
 
  .link-router {
    margin-top: 2.5rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 0;

    a {
      text-decoration: none;
      width: 7.6075rem;
      border-radius: 0.5rem;
      height: 3rem;
      background-color: ${MarineBlue};
      color: ${White};
      cursor: pointer;
      display: grid;
      place-content: center;
    }
  }
`

export default Step4Styled;