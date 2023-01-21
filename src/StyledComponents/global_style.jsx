import {createGlobalStyle} from "styled-components";
import {LightBlue} from "./colors";

const globalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: 0.4s;
  }
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }
  ul {
    list-style: none;
  }
  html:focus-within {
    scroll-behavior: smooth;
  }
  body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    font-family: 'Ubuntu', sans-serif;
  }
  img,
  picture {
    max-width: 100%;
    display: block;
  }
  input,
  button,
  textarea, 
  select {
    font: inherit;
  }
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  body {
    background-color: ${LightBlue};
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 16px;
    padding: 10px ;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
    border: 0;
  }

  @media (max-width: 720px) {
    body {
      padding: 0px !Important;
      background-color: #fff;
    }
  }
`

export default globalStyle;