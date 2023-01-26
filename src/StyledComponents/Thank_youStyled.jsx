import styled from "styled-components";
import { MarineBlue } from "./colors";

const Thank_youStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  gap: 14px;
  
  img {
    margin-right: 35px;
  }

  h2 {
    font-size: 32px;
    margin-right: 40px;
    padding-top: 10px;
    color: ${MarineBlue};
  }

  p {
    font-size: 16px;
    font-weight: 500;
    max-width: 460px;
    margin-right: 50px;
    color: #797979;
  }
`

export default Thank_youStyled;