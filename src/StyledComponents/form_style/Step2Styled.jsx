import styled from "styled-components";

const Step2Styled = styled.div`
  background-color: pink;
  color: #000;
  padding: 20px 50px;
  
  form {
    position: relative;
    width: 100%;

    .plans {
      display: flex;

      label {
        width: 100%;
        background-color: #fff;   
        border: 1px solid blue;
        border-radius: 10px;
        height: 120px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        
        img {
          width: 40px;
          height: 40px;
        }
  
        p {
          display: flex;
          flex-direction: column;
        }
  
      }
    }

    .switch__container {
      display: flex;
      width: 100%;
      padding-top: 20px;
      gap: 20px;
      justify-content: center;
    }

    .switch {
      position: absolute;
      margin-left: -9999px;
      visibility: hidden;
    }
  
    .switch + label {
      display: flex;
      position: relative;
      cursor: pointer;
      outline: none;
      user-select: none;
    }

    .switch--shadow + label {
      padding: 2px;
      width: 46px;
      height: 25px;
      background-color: #dddddd;
      border-radius: 60px;
    }
    .switch--shadow + label:before,
    .switch--shadow + label:after {
      display: block;
      position: absolute;
      top: 1px;
      left: 1px;
      bottom: 1px;
      content: '';
    }
    .switch--shadow + label:before {
      right: 1px;
      background-color: #CFD8EF;
      border-radius: 60px;
      transition: all 0.4s;
    }
    .switch--shadow + label:after {
      height: 18px;
      width: 18px;
      top: 3.4px;
      left: 3px;
      background-color: #fff;
      border-radius: 50%;
      transition: all 0.4s;
    }
    .switch--shadow:checked + label:before {
      background-color: #7AEADF;
    }
    .switch--shadow:checked + label:after {
      transform: translateX(22px);
    }
  }
`

export default Step2Styled;