import styled from "styled-components";

const Step1Styled = styled.div`
  background-color: #444444;
  display: flex;
  padding: 20px 50px;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 15px;
  position: relative;

  form {
    display: flex;
    width: 100%;
    flex-direction: column; 
    gap: 15px;

    .label_span {
      display: flex;
      justify-content: space-between;

      span {
        display: none; 
        color: red; 
      }
    }

    input {
      width: 100%;
      border-radius: 10px;
    }
  }

  .error_message {
    display: block !Important;
  }
`

export default Step1Styled;