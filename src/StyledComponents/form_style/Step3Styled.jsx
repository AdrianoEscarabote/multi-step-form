import styled from "styled-components";
import { Coolgray, LightGray, Magnolia, MarineBlue, PurplishBlue, White } from "../colors";

const Step3Styled = styled.div`
  color: black;
  padding: 3.25rem 5.125rem 1.25rem 3.125rem;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;

  h2 {
    color: ${MarineBlue};
    font-size: 2.0322rem;
    line-height: 2.0625rem;  
    padding-bottom: 0.625rem;
  }

  p {
    color: ${Coolgray};
    font-size: 1.008rem;
    line-height: 1.5rem;
  }

  form {
    margin-top: 2.25rem;
    height: 100%;
    position: relative;

    fieldset {
      border: transparent;

      .check {
        display: flex;
        gap: 0.9375rem;
        flex-direction: column;
    
        label {
          padding: 1.375rem;
          border: 0.0625rem solid;
          width: 100%;
          height: 5.12rem;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 1.25rem;
          border-radius: 0.625rem;
          border: 0.0625rem solid ${LightGray};
          position: relative;
          cursor: pointer;

          &:hover {
            border: 0.0625rem solid ${PurplishBlue};
          }

          .details {
            display: flex;
            flex-direction: column;
            justify-self: flex-start;
            align-items: flex-start;
            gap: 0.5069rem;

            p {
              color: ${MarineBlue};
              font-size: 1.0121rem;
              font-weight: 600;
              line-height: 1rem;
            }

            .info {
              font-weight: 400;
              font-size: 0.8871rem;
              line-height: 0.875rem;
              color: ${Coolgray}; 
            }
          }

          .price {
            position: absolute;
            right: 1.25rem;
            color: ${PurplishBlue};
          }
        }
      }

      .link-router {
        margin-top: 2.5rem;
        width: 100%;
        display: flex;
        justify-content: space-between;
        position: absolute;
        bottom: -0.3125rem;
        left: -0.125rem;

        a {
          text-decoration: none;
          width: 7.6075rem;
          border-radius: 0.5rem;
          height: 3rem;
          background-color: ${MarineBlue};
          color: ${White};
          cursor: pointer;
          display: grid;
          place-content: center;
          font-weight: 700;
        }
  
        .back {
          background-color: transparent;
          color: ${Coolgray};
          position: relative;
          left: -1.875rem; 
        }
      }
    }
  }

  .link.disabled {
    background-color: ${MarineBlue} !Important; 
    opacity: 0.6;
    pointer-events: none;
  }

  .checked {
    border: 0.0625rem solid ${PurplishBlue} !Important;
  }

  @media (max-width: 45rem) {
    margin-top: 6.25rem;
    z-index: 100 !Important;
    height: auto;
    border-radius: 0.625rem;
    position: initial !Important;
    padding: 2.5rem 2.25rem 3rem 2.25rem;
    margin-bottom: 3rem; 
    background-color: ${White};

    form {
      position: initial !Important;

      .details {
        padding-right: 2.5rem;
      }
    }

    .link-router {
      background-color: ${White};
      padding: 1.25rem;
    }
  }

  @media (max-width: 26.25rem) {
    padding: 1.25rem;
  }
`

export default Step3Styled;