import styled from "styled-components";
import { MarineBlue } from "../colors";
import { Coolgray } from "../colors";

const Step1Styled = styled.div`
  display: flex;
  padding: 20px 50px;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 15px;
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
    display: flex;
    width: 100%;
    flex-direction: column; 
    gap: 15px;

    .label_span {
      display: flex;
      justify-content: space-between;
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      color: ${MarineBlue};

      span {
        display: none; 
        color: red; 
      }
    }

    input {
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
      color: ${Coolgray};
    }
  }

  .error_message {
    display: block !Important;
  }
`

export default Step1Styled;