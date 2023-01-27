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
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  color: ${MarineBlue};
  gap: 10px;

  h2 {
    font-size: 28px;
    text-align: center;
  }

  a {
    background-color: ${MarineBlue};
    color: ${White};
    padding: 10px;
    border-radius: 8px;
    font-weight: 700;
    text-decoration: none;
  }
`

export default NotFound;