import styled from "styled-components";

const Step3Styled = styled.div`
  color: black;
  padding: 20px 50px;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;

  form {
    height: 100%;
    position: relative;

    fieldset {
      border: transparent;

      .check {
        display: flex;
        gap: 15px;
        flex-direction: column;
    
        label {
          border: 1px solid;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          text-align: left;
        }
      }
    
      .buttons {
        position: absolute;
        bottom: 0;
      }
    }
  }
`

export default Step3Styled;