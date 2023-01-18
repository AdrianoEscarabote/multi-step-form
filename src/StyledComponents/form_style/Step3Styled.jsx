import styled from "styled-components";
import { Coolgray, LightGray, Magnolia, MarineBlue, PurplishBlue } from "../colors";

const Step3Styled = styled.div`
  color: black;
  padding: 20px 50px;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;

  h2 {
    color: ${MarineBlue};
    font-size: 32.5144px;
    line-height: 33px;  
    padding-bottom: 10px;
  }

  p {
    color: ${Coolgray};
    font-size: 16.1285px;
    line-height: 24px;
  }

  form {
    margin-top: 36px;
    height: 100%;
    position: relative;

    fieldset {
      border: transparent;

      .check {
        display: flex;
        gap: 15px;
        flex-direction: column;
    
        label {
          padding: 22px;
          border: 1px solid;
          width: 100%;
          height: 81.92px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 20px;
          border-radius: 10px;
          border: 1px solid ${LightGray};
          position: relative;
          cursor: pointer;

          &:hover {
            border: 1px solid ${PurplishBlue};
          }

          .details {
            display: flex;
            flex-direction: column;
            justify-self: flex-start;
            align-items: flex-start;
            gap: 8.11px;

            p {
              color: ${MarineBlue};
              font-size: 16.1929px;
              font-weight: 600;
              line-height: 16px;
            }

            .info {
              font-weight: 400;
              font-size: 14.1929px;
              line-height: 14px;
              color: ${Coolgray}; 
            }
          }

          .price {
            position: absolute;
            right: 20px;
            color: ${PurplishBlue};
          }
        }
      }
    
      .buttons {
        position: absolute;
        bottom: 0;
      }
    }
  }

  .checked {
    border: 1px solid ${PurplishBlue} !Important;
  }
`

export default Step3Styled;