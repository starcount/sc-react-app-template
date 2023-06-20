import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material/styles";

import App from "./App";
import "./styles/styles.scss";

import { AuthContainer } from "@/components/containers";
import { ThemeContainer } from "@/components/containers/theme-container";

ReactDOM.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <BrowserRouter>
        <AuthContainer>
          <ThemeContainer>
            <App />
          </ThemeContainer>
        </AuthContainer>
      </BrowserRouter>
    </StyledEngineProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
