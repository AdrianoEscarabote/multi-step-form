import styled from "styled-components";
import bg_sidebar from "../assets/images/bg-sidebar-desktop.svg";
import { LightGray } from "../StyledComponents/colors"

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
`

export default Article;