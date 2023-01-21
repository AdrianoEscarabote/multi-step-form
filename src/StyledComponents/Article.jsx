import styled from "styled-components";
import bg_sidebar from "../assets/images/bg-sidebar-desktop.svg";
import { LightGray } from "../StyledComponents/colors";
import bg_sidebar_mobile from "../assets/images/bg-sidebar-mobile.svg";
import { PastelBlue } from "../StyledComponents/colors";
import { LightBlue } from "../StyledComponents/colors";
import { MarineBlue } from "../StyledComponents/colors";

const Article = styled.article`
  width: 940px;
  height: 600px;
  border-radius: 15px;
  padding: 16px;
  color: ${LightGray};
  background-color: #fff;
  display: grid;
  grid-template-columns: 274px auto;
  gap: 50px;
  margin-bottom: 14px;
  
  .steps {
    background: url(${bg_sidebar}) no-repeat;
    background-size: 100%; 
    border-radius: 9px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 39px 0px 0px 32px;
    gap: 31px;

    .step {
      grid-column: 1;
      display: flex;
      align-items: center;
      gap: 15.2px;

      .number-step {
        width: 33px;
        height: 33px;
        padding: 5px;
        display: grid; 
        place-content: center;
        background-color: transparent; 
        border: 1px solid #FFFFFF;
        border-radius: 33px;
        font-weight: 700;
        font-size: 14px;
        line-height: 16px;
      }

      .info {
        display: flex;
        flex-direction: column;
        gap: 4px;
        p {
          font-weight: 700;
          font-size: 14px;
          line-height: 16px;
          letter-spacing: 1.2px;
          text-transform: uppercase;
        }

        .step_num {
          font-weight: 400;
          font-size: 12px;
          line-height: 14px;
          letter-spacing: 0.2px;
          color: ${PastelBlue}; 
        }
      }
    }
  }

  .active {
    background-color: ${LightBlue} !Important;
    color: ${MarineBlue};
  }

  @media (max-width: 920px) {
    width: 100%;
    grid-template-columns: 244px auto;
    height: 550px;
  }

  @media (max-width: 720px) {
    width: 100%;
    height: 100vh;
    border-radius: 0px;
    display: flex;
    flex-direction: column;
    background-color: ${LightBlue};

    .steps {
      display: flex;
      align-items: flex-start; 
      justify-content: center;
      padding-top: 20px;
      border-radius: 0px;
      background: url(${bg_sidebar_mobile}) no-repeat;
      background-size: 100%;
      width: 100%;
      height: 180px;
      position: absolute;
      left: 0;
      top: 0;

      .info {
        display: none !Important;
      }
    }
  }
`

export default Article;