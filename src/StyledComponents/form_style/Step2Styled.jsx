import styled from "styled-components";
import { Alabaster, LightBlue, LightGray, MarineBlue, PurplishBlue, White } from "../colors";
import { Coolgray } from "../colors";

const Step2Styled = styled.div`
  color: #000;
  padding: 2.5rem 5.3125rem 2.5rem 3.125rem;
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  position: relative;
  background-color: ${White};

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
  
  form {
    margin-top: 2.25rem;
    position: relative;
    width: 100%;
    height: 100%;

    fieldset {
      border: transparent;

      .plans {
        display: flex;
        gap: 1.125rem;
  
        label {
          padding: 1.3125rem 1rem;
          width: 100%;
          background-color: #fff;   
          border: 0.0625rem solid #6069f363;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 1.875rem;
          cursor: pointer;
          max-width: 8.8644rem;
          height: 9.9913rem;
          border: 0.0625rem solid #DBDBDD;
          border-radius: 0.625rem;


          &:hover {
            border: 0.0625rem solid #524E98;
          }
          
          img {
            width: 2.5rem;
            height: 2.5rem;
          }
    
          p {
            display: flex;
            flex-direction: column;
          }
    
        }
        input {
          display: none;
        }
      }
  
      .switch__container {
        position: absolute; 
        background-color: ${Alabaster};
        border-radius: 0.625rem;
        top: 11.375rem;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 1rem;
        gap: 1.25rem;
        justify-content: center;
  
        span.active_radio {
          color: ${MarineBlue};
          font-weight: 600;
          font-size: 0.9455rem;
          line-height: 0.9375rem;
        }
        span {
          color: ${Coolgray};
          font-weight: 600;
          font-size: 0.9455rem;
          line-height: 0.9375rem;
        }
      }
  
      .switch {
        position: absolute;
        margin-left: -624.9375rem;
        visibility: hidden;
      }
    
      .switch + label {
        display: flex;
        position: relative;
        cursor: pointer;
        outline: none;
        user-select: none;
      }
  
      .switch--shadow + label {
        padding: 0.125rem;
        width: 2.875rem;
        height: 1.5625rem;
        background-color: #dddddd;
        border-radius: 3.75rem;
      }
      .switch--shadow + label:before,
      .switch--shadow + label:after {
        display: block;
        position: absolute;
        top: 0.0625rem;
        left: 0.0625rem;
        bottom: 0.0625rem;
        content: '';
      }
      .switch--shadow + label:before {
        right: 0.0625rem;
        background-color: #CFD8EF;
        border-radius: 3.75rem;
        transition: all 0.4s;
      }
      .switch--shadow + label:after {
        height: 1.125rem;
        width: 1.125rem;
        top: 0.2125rem;
        left: 0.1875rem;
        background-color: #fff;
        border-radius: 50%;
        transition: all 0.4s;
      }
      .switch--shadow:checked + label:before {
        background-color: #7AEADF;
      }
      .switch--shadow:checked + label:after {
        transform: translateX(1.375rem);
      }
    }
    .link-router {
      margin-top: 2.5rem;
      width: 100%;
      display: flex;
      justify-content: space-between;
      position: absolute;
      bottom: -1.5rem;

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
        font-weight: 700;
      }

      .back {
        background-color: transparent;
        color: ${Coolgray};
        position: relative;
        left: -1.875rem; 
      }
    }
  }

  .link.disabled {
    background-color: ${MarineBlue} !Important; 
    opacity: 0.6;
    pointer-events: none;
  }

  .selected {
    border: 0.0625rem solid ${PurplishBlue} !Important;
  }
  
  .plans_yearly {
    .plans {
      label {
        height: 10.8125rem !Important;
      }
    }
    
    .yearly {
      display: flex !Important;
    }
  }

  .yearly {
    color: blue;
    display: none;
  }

  @media (max-width: 45rem) {
    margin-top: 6.25rem;
    z-index: 100 !Important;
    height: auto;
    border-radius: 0.625rem;
    position: initial !Important;
    padding: 2.5rem 2.25rem 3rem 2.25rem;
    margin-bottom: 10rem;

    form {
      position: initial !Important;

      .plans {
        flex-direction: column;

        label {
          max-width: 100% !Important;
          flex-direction: row !Important;
          height: auto !Important;
          justify-content: flex-start !Important;
        }
      }

      .switch__container {
        position: initial !Important;
      }
    }

    .link-router {
      position: absolute;
      bottom: 0px;
      left: 0px;
      width: 100%;
      background-color: #000;
      align-items: center;
      height: 100px;

      .link {
        margin-right: 20px;
      }

      .back {
        margin-left: 20px; 
      }
    }
  }
`

export default Step2Styled;