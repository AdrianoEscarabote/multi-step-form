import styled from "styled-components";
import { MarineBlue } from "../../StyledComponents/colors";
import { White } from "../../StyledComponents/colors";

export function Buttons(props) {
  return (
    <WrapperBtns>
      <button type="button">
        Go Back
      </button>
      <button type="submit" disabled={props.valid}>
        Next Step
      </button>
    </WrapperBtns>
  )
}

const WrapperBtns = styled.div`
  margin-top: 40px;
  width: 100%;
  display: flex;
  justify-content: space-between;

  button {
    width: 121.72px;
    border-radius: 8px;
    height: 48px;
    background-color: ${MarineBlue};
    color: ${White};
    cursor: pointer;
  }
`

export default WrapperBtns;