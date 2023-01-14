import styled from "styled-components";
import { MarineBlue } from "../colors";
import { Coolgray } from "../colors";

const Step2Styled = styled.div`
  color: #000;
  padding: 20px 50px;
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  position: relative;

  h2 {
    font-size: 32px;
    font-weight: 700;
    line-height: 37px;
    color: ${MarineBlue}; 
  }

  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
    color: ${Coolgray}; 
  }
  
  form {
    background-color: #454543;
    position: relative;
    width: 100%;
    height: 100%;

    fieldset {
      border: transparent;

      .plans {
        display: flex;
  
        label {
          width: 100%;
          background-color: #fff;   
          border-radius: 10px;
          height: 120px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          
          img {
            width: 40px;
            height: 40px;
          }
    
          p {
            display: flex;
            flex-direction: column;
          }
    
        }
      }
  
      .switch__container {
        display: flex;
        width: 100%;
        padding-top: 20px;
        gap: 20px;
        justify-content: center;
  
        span.active {
          color: red;
          font-size: 22px;
        }
        span {
          color: blue;
        }
      }
  
      .switch {
        position: absolute;
        margin-left: -9999px;
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
        padding: 2px;
        width: 46px;
        height: 25px;
        background-color: #dddddd;
        border-radius: 60px;
      }
      .switch--shadow + label:before,
      .switch--shadow + label:after {
        display: block;
        position: absolute;
        top: 1px;
        left: 1px;
        bottom: 1px;
        content: '';
      }
      .switch--shadow + label:before {
        right: 1px;
        background-color: #CFD8EF;
        border-radius: 60px;
        transition: all 0.4s;
      }
      .switch--shadow + label:after {
        height: 18px;
        width: 18px;
        top: 3.4px;
        left: 3px;
        background-color: #fff;
        border-radius: 50%;
        transition: all 0.4s;
      }
      .switch--shadow:checked + label:before {
        background-color: #7AEADF;
      }
      .switch--shadow:checked + label:after {
        transform: translateX(22px);
      }
    }

  }

  .buttons {
    position: absolute;
    bottom: 0;
    
  }

  .selected {
    border: 1px solid red;
  }
  
  .plans_yearly {
    .plans {
      label {
        height: 150px !Important;
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

  @media (max-width: 720px) {
    margin-top: 100px;
    z-index: 100;
  }
`

export default Step2Styled;