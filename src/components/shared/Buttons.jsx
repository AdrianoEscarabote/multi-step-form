import styled from "styled-components";

export function Buttons() {
  return (
    <WrapperBtns>
      <button type="button">
        Go Back
      </button>
      <button type="submit">
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
    width: 120px;
  }
`

export default WrapperBtns;