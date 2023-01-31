import { Link } from "react-router-dom";
import styled from "styled-components";
import { MarineBlue, White } from "../../StyledComponents/colors";

const NotFound = () => {
  return (
    <NotFoundStyled>
      <h2>Sorry, we can’t find the page you’re looking for.</h2>
      <Link to="/">Click here to return</Link>
    </NotFoundStyled>
  )
}

const NotFoundStyled = styled.div`
  padding: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column; 
  color: ${MarineBlue};
  gap: 0.625rem;

  h2 {
    font-size: 1.75rem;
    text-align: center;
  }

  a {
    background-color: ${MarineBlue};
    color: ${White};
    padding: 0.625rem;
    border-radius: 0.5rem;
    font-weight: 700;
    text-decoration: none;
    width: 100%;
    max-width: 10.5625rem;
  }

  @media (max-width: 720px) {
    background-color: ${White};
    border-radius: 0.625rem;
    z-index: 100;
    position: fixed;
    top: 7.1875rem;
    left: 0.625rem;
    right: 0.625rem;
  }
`

export default NotFound;