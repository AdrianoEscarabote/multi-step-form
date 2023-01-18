import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyle from "./StyledComponents/global_style";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>
)