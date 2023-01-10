import styled from "styled-components";
import bg_sidebar from "../assets/images/bg-sidebar-desktop.svg";
import { LightGray } from "../StyledComponents/colors";
import bg_sidebar_mobile from "../assets/images/bg-sidebar-mobile.svg"

const Article = styled.article`
  width: 900px;
  height: 600px;
  border-radius: 20px;
  padding: 20px;
  color: ${LightGray};
  background-color: #fff;
  display: grid;
  grid-template-columns: 274px auto;
  gap: 10px;
  
  .steps {
    background: url(${bg_sidebar}) no-repeat;
    background-size: 100%; 
    border-radius: 15px;

    .step {
      padding: 20px;
      grid-column: 1;
      display: flex;
      align-items: center;
      gap: 20px;
      .number-step {
        width: 40px;
        height: 40px;
        padding: 5px;
        display: grid; 
        place-content: center;
        background-color: transparent; 
        border-radius: 50%;
        border: 1px solid #fff;
      }
    }
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

    .steps {
      display: flex;
      align-items: center; 
      justify-content: center;
      border-radius: 0px;
      background: url(${bg_sidebar_mobile}) no-repeat;
      background-size: 100%;
      width: 100%;
      height: 140px;
      position: absolute;
      left: 0;
      top: 0;

      .info {
        display: none;
      }
    }
  }
`

export default Article;