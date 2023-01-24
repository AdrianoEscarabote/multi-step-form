import styled from "styled-components";
import bg_sidebar from "../assets/images/bg-sidebar-desktop.svg";
import { LightGray, White } from "../StyledComponents/colors";
import bg_sidebar_mobile from "../assets/images/bg-sidebar-mobile.svg";
import { PastelBlue } from "../StyledComponents/colors";
import { LightBlue } from "../StyledComponents/colors";
import { MarineBlue } from "../StyledComponents/colors";

const Article = styled.article`
  width: 58.75rem;
  height: 37.5rem;
  border-radius: 0.9375rem;
  padding: 1rem;
  color: ${LightGray};
  background-color: ${White};
  display: grid;
  grid-template-columns: 17.125rem auto;
  gap: 3.125rem;
  margin-bottom: 0.375rem;
  
  .steps {
    background: url(${bg_sidebar}) no-repeat;
    background-size: 100%; 
    border-radius: 0.5625rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2.4375rem 0rem 0rem 2rem;
    gap: 1.9375rem;

    .step {
      grid-column: 1;
      display: flex;
      align-items: center;
      gap: 0.95rem;

      .number-step {
        width: 2.0625rem;
        height: 2.0625rem;
        padding: 0.3125rem;
        display: grid; 
        place-content: center;
        background-color: transparent; 
        border: 0.0625rem solid #FFFFFF;
        border-radius: 2.0625rem;
        font-weight: 700;
        font-size: 0.875rem;
        line-height: 1rem;
      }

      .info {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        p {
          font-weight: 700;
          font-size: 0.875rem;
          line-height: 1rem;
          letter-spacing: 0.075rem;
          text-transform: uppercase;
        }

        .step_num {
          font-weight: 400;
          font-size: 0.75rem;
          line-height: 0.875rem;
          letter-spacing: 0.0125rem;
          color: ${PastelBlue}; 
        }
      }
    }
  }

  .active {
    background-color: ${LightBlue} !Important;
    color: ${MarineBlue};
  }

  @media (max-width: 57.5rem) {
    width: 100%;
    grid-template-columns: 15.25rem auto;
    height: 34.375rem;
  }

  @media (max-width: 45rem) {
    width: 100%;
    height: 100vh;
    border-radius: 0rem;
    display: flex;
    flex-direction: column;
    background-color: ${LightBlue};

    .steps {
      display: flex;
      align-items: flex-start; 
      justify-content: center;
      padding-top: 1.25rem;
      border-radius: 0rem;
      background: url(${bg_sidebar_mobile}) no-repeat;
      background-size: 100%;
      width: 100%;
      height: 11.25rem;
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