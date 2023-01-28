import styled from "styled-components";
import { Coolgray, MarineBlue, Alabaster, LightGray, White, PurplishBlue } from "../colors";

const Step4Styled = styled.div`
  color: #000;
  position: relative;
  padding: 2.50rem 5.2rem 2.50rem 3.2rem;

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
    margin-top: 35px;
    width: 100%;
    background-color: ${Coolgray};
    border-radius: 10px;
    padding: 20px;
     
    .plan {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid ${Coolgray};
      padding-bottom: 20px;

      div {
        p {
          font-weight: 700;
          color: ${MarineBlue};
          font-size: 18px;
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

    .services {
      padding-top: 40px;

      ul {
        display: flex;
        flex-direction: column;
        width: 100%; 
        gap: 10px;
        
        li {
          display: flex;
          justify-content: space-between;
        }
      }
    }
  }

  .total {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 20px;

    .result {
      color: ${PurplishBlue};
    }
  }
 
  .link-router {
    margin-top: 2.5rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    bottom: -35px;
    left: -2px;
    position: relative;

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

    .back {
      background-color: transparent;
      color: ${Coolgray};
      position: relative;
      left: -1.875rem; 
      font-weight: 700; 
    }
  }
`

export default Step4Styled;