import styled from "styled-components";
import { Coolgray, MarineBlue, Alabaster, LightGray, White, PurplishBlue } from "../colors";

const Step4Styled = styled.div`
  color: #000;
  position: relative;
  padding: 2.5rem 5.2rem 2.5rem 3.2rem;

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
    margin-top: 2.1875rem;
    width: 100%;
    background-color: ${Coolgray};
    border-radius: 0.625rem;
    padding: 1.25rem;
     
    .plan {
      display: flex;
      justify-content: space-between;
      border-bottom: 0.0625rem solid ${Coolgray};
      padding-bottom: 1.25rem;

      div {
        p {
          font-weight: 700;
          color: ${MarineBlue};
          font-size: 1.125rem;
        }
        a {
          color: ${Coolgray};
          font-size: 0.9375rem;
        }
      }

      p {
        font-weight: 600;
        color: ${MarineBlue};
      }
    }

    .services {
      padding-top: 2.5rem;

      ul {
        display: flex;
        flex-direction: column;
        width: 100%; 
        gap: 0.625rem;
        
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
    padding: 1.25rem;

    .result {
      color: ${PurplishBlue};
    }
  }
 
  .link-router {
    margin-top: 2.5rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    bottom: -2.1875rem;
    left: -0.125rem;
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

  @media (max-width: 45rem) {
    margin-top: 6.25rem;
    z-index: 100 !Important;
    height: auto;
    border-radius: 0.625rem;
    position: initial !Important;
    padding: 2.5rem 2.25rem 3rem 2.25rem;
    margin-bottom: 3rem; 
    background-color: ${White};

    .infos {
      position: initial !important;
    }

    .link-router {
      position: absolute;
      background-color: ${White};
      padding: 1.25rem;
    }
  }
`

export default Step4Styled;