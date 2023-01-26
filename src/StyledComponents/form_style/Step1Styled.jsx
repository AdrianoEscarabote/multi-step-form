import styled from "styled-components";
import { MarineBlue, StrawberryRed } from "../colors";
import { Coolgray } from "../colors";
import { White } from "../colors";
import { Magnolia } from "../colors";

const Step1Styled = styled.div`
  display: flex;
  padding: 2.5rem 5.25rem 0rem 3.125rem;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${White};
  border-radius: 10px !Important; 
  position: relative;

  h2 {
    font-size: 2rem;
    font-weight: 700;
    line-height: 2.3125rem;
    color: ${MarineBlue}; 
  }

  p {
    padding-top: 0.625rem;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5625rem;
    color: ${Coolgray}; 
  }

  form {
    margin-top: 2.25rem;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column; 
    position: relative;

    fieldset {
      border: transparent;
      display: flex;
      flex-direction: column;
      gap: 1.125rem;

      .label_span {
        display: flex;
        justify-content: space-between;
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 1rem;
        color: ${MarineBlue};
  
        span {
          display: none; 
          color: ${Magnolia}; 
        }
      }
    
      input {
        margin-top: -0.5rem; 
        width: 100%;
        background: #FFFFFF;
        border: 0.0625rem solid #D6D9E5;
        border-radius: 0.5rem;
        height: 3.125rem;
        padding-left: 1.0625rem;
        font-weight: 500;
        font-size: 1rem;
        line-height: 1.125rem;
        display: flex;
        align-items: center;
        color: ${MarineBlue};
        &::-webkit-input-placeholder,
        &::-moz-placeholder { 
          color: ${Coolgray}; 
        }
      }
    }
  }

  .link-router {
    margin-top: 2.5rem;
    width: 100%;
    display: flex;
    justify-content: space-between;

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
      position: absolute;
      bottom: 1rem;
      right: 5rem;
      pointer-events: auto;
    }

    .link.disabled {
      background-color: ${MarineBlue} !Important; 
      opacity: 0.6;
      pointer-events: none;
    }
  }

  .error_message {
    display: block !Important;
    color: ${StrawberryRed} !Important;
    font-weight: 700;
  }

  .error_input {
    outline: 0.0625rem solid ${StrawberryRed};
    border: 0.0625rem solid ${StrawberryRed};
  }

  @media(max-width: 43.75rem) {
    
    @media(max-height: 800px) {
      margin-top: 0px !Important;
    } 

    @media(max-height: 700px) {
      margin-top: 70px !Important;
    }

    border-radius: 0.625rem;
    padding: 2.5rem 2.25rem 3rem 2.25rem;
    align-items: flex-start;
    flex-direction: column;
    position: initial;
    margin-top: -180px;
    height: auto;
    z-index: 100;
    margin-bottom: 2.5rem;

    form {
      position: initial !Important;
    }

    .link-router {
      width: 100%;
      height: 100px;
      position: absolute;
      bottom: 0px;
      left: 0;
      background-color: ${White} !Important;

      .link {
        top: 20px;
        right: 20px;
      }
    }
  }

  @media (max-width: 420px) {
    padding: 20px;

  }
`

export default Step1Styled;