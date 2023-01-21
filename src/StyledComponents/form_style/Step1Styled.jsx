import styled from "styled-components";
import { MarineBlue } from "../colors";
import { Coolgray } from "../colors";
import { White } from "../colors";
import { Magnolia } from "../colors";

const Step1Styled = styled.div`
  display: flex;
  padding: 40px 84px 0px 50px;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${White};
  position: relative;

  h2 {
    font-size: 32px;
    font-weight: 700;
    line-height: 37px;
    color: ${MarineBlue}; 
  }

  p {
    padding-top: 10px;
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
    color: ${Coolgray}; 
  }

  form {
    margin-top: 36px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column; 
    position: relative;

    fieldset {
      border: transparent;
      display: flex;
      flex-direction: column;
      gap: 18px;

      .label_span {
        display: flex;
        justify-content: space-between;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        color: ${MarineBlue};
  
        span {
          display: none; 
          color: ${Magnolia}; 
        }
      }
    
      input {
        margin-top: -8px; 
        width: 100%;
        background: #FFFFFF;
        border: 1px solid #D6D9E5;
        border-radius: 8px;
        height: 50px;
        padding-left: 17px;
        font-weight: 500;
        font-size: 16px;
        line-height: 18px;
        display: flex;
        align-items: center;
        color: ${MarineBlue};
        &::-webkit-input-placeholder,
        &::-moz-placeholder { 
          color: ${Coolgray}; 
        }
      }

      .link-router {
        margin-top: 40px;
        width: 100%;
        display: flex;
        justify-content: space-between;

        a {
          text-decoration: none;
          width: 121.72px;
          border-radius: 8px;
          height: 48px;
          background-color: ${MarineBlue};
          color: ${White};
          cursor: pointer;
          display: grid;
          place-content: center;
          position: absolute;
          bottom: 16px;
          right: 0;
          pointer-events: auto;
        }

        .link.disabled {
          background-color: ${MarineBlue} !Important; 
          opacity: 0.6;
          pointer-events: none;
        }
      }
    }
  }

  .error_message {
    display: block !Important;
    color: red !Important;
  }

  @media(max-width: 700px) {
    background-color: white;
    top: 100px;
    border-radius: 10px;
    background-color: #fff;
  }
`

export default Step1Styled;