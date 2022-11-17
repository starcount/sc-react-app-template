import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material/styles";

import App from "./App";
import "./styles/styles.scss";

import { AuthContainer } from "@/components/containers";

ReactDOM.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <BrowserRouter>
        <AuthContainer>
          <App />
        </AuthContainer>
      </BrowserRouter>
    </StyledEngineProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
