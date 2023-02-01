import styled from "styled-components";
import { Coolgray, MarineBlue, Alabaster, White, PurplishBlue, bgButtonHover} from "../colors";

const Step4Styled = styled.div`
  color: #000;
  padding: 2.5rem 5.2rem 2.5rem 3.2rem;
  position: relative;
  width: 100%;
  animation: rightAnimation 0.5s ease-in-out;

  h2 {
    font-size: 2rem;
    font-weight: 700;
    line-height: 2.3125rem;
    color: ${MarineBlue}; 
    padding-bottom: 0.625rem;
  }

  p {
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5625rem;
    color: ${Coolgray}; 
  }

  .infos {
    margin-top: 2.1875rem;
    width: 100%;
    background-color: ${Alabaster};
    border-radius: 0.625rem;
    padding: 1.25rem;
     
    .plan {
      display: flex;
      justify-content: space-between;
      border-bottom: 0.0625rem solid ${Coolgray};
      padding-bottom: 1.25rem;

      div {
        p {
          font-weight: 500;
          font-size: 1rem;
          line-height: 1.125rem;
          color: ${MarineBlue};
        }

        a {
          color: ${Coolgray};
          font-weight: 400;
          font-size: 14px;
          line-height: 20px;
        }
      }

      p {
        font-weight: 700;
        font-size: 1rem;
        line-height: 1.25rem;
        color: ${MarineBlue};
      }
    }

    .services {
      padding-top: 2.5rem;

      ul {
        display: flex;
        flex-direction: column;
        width: 100%; 
        gap: 0.625rem;
        
        li {
          display: flex;
          justify-content: space-between;

          .item-name {
            font-weight: 400;
            font-size: 0.875rem;
            line-height: 1.25rem;
          }

          .item-price {
            font-weight: 400;
            font-size: 14px;
            color: ${MarineBlue};
            line-height: 20px;
          }
        }
      }
    }
  }

  .total {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 1.25rem;
    

    .result {
      color: ${PurplishBlue};
      font-weight: 700;
      font-size: 1.25rem;
      line-height: 1.25rem;
    }
  }
 
  .link-router {
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 1rem;
    max-width: 25.5063rem;
    width: 100%;

    a {
      position: absolute;
      text-decoration: none;
      width: 7.6075rem;
      border-radius: 0.5rem;
      height: 3rem;
      background-color: ${PurplishBlue};
      color: ${White};
      cursor: pointer;
      display: grid;
      place-content: center;
    }

    .link {
      right: -40px;
      &:hover {
        background-color: #928CFF;
      }
    }

    .back {
      background-color: transparent;
      color: ${Coolgray};
      position: relative;
      left: -1.875rem; 
      font-weight: 700; 

      &:hover {
        color: ${MarineBlue};
      }
    }
  }

  @media (max-width: 57.5625rem) {
    .link-router {
      .link {
        right: 2.5rem;
      }
    }
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

    .infos {
      position: initial !important;
    }

    .link-router {
      position: absolute;
      background-color: ${White};
      padding: 1.25rem;
      max-width: unset !Important;
      left: 0px !Important;
      bottom: 0rem;
      .link {
        right: 1.25rem;
      }
    }
  }

  @media (max-width: 22.5rem) {
    padding: 1.25rem;
    .infos {
      padding: 0.625rem 0.25rem;
    }
    .total {
      padding: 0.625rem 0.25rem;
    }
  } 
`

export default Step4Styled;