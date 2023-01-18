import styled from "styled-components";
import { MarineBlue } from "../../StyledComponents/colors";
import { White } from "../../StyledComponents/colors";

export function Buttons({ valid }) {
  return (
    <WrapperBtns className="buttons">
      <button type="button" className="back">
        Go Back
      </button>
      <button type="submit" className={valid ? "next disabled" : "next"} disabled={valid}>
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

  .next.disabled {
    background-color: ${MarineBlue} !Important; 
    opacity: 0.6;
    cursor: default;
  }

  .back {
    &:hover {
      background-color: transparent !Important;
      color: #000;
    }
  }
`

export default WrapperBtns;