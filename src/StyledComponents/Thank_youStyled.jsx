import styled from "styled-components";
import { MarineBlue, White } from "./colors";

const Thank_youStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  gap: 0.875rem;
  animation: leftAnimation 0.6s ease-in-out;
  
  img {
    margin-right: 2.1875rem;
  }

  h2 {
    font-weight: 700;
    font-size: 2rem;
    line-height: 2.3125rem;
    color: ${MarineBlue};
  }

  p {
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5625rem;
    max-width: 28.75rem;
    margin-right: 3.125rem;
    color: #797979;
  }

  @media (max-width: 720px) {
    background-color: ${White};
    padding: 1.25rem;
    border-radius: 0.625rem;
    z-index: 100;
    position: fixed;
    top: 7.1875rem;
    left: 0.625rem;
    right: 0.625rem;

    img,
    h2,
    p {
      margin-right: 0rem;
    }
  }
`

export default Thank_youStyled;