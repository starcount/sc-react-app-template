import React, { PropsWithChildren } from "react";

import { ThemeProvider } from "@mui/system";
import { createTheme } from "@mui/material/styles";

interface ThemeContainerProps {
  children: React.ReactNode;
}

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#00B0CC",
      light: "#19E0FF",
      dark: "#0087A3",
      contrastText: "#212b3a",
    },
    secondary: {
      main: "#EB6D09",
      light: "#FF8624",
      dark: "#C64A00",
      contrastText: "#212b3a",
    },
    info: {
      main: "#f5b49f",
      light: "#f7ebea",
      dark: "#ea673b",
      contrastText: "#212b3a",
    },
    warning: {
      main: "#ab9ec9",
      light: "#ebe7f2",
      dark: "#543b94",
      contrastText: "#212b3a",
    },
    error: {
      main: "#F3546D",
      light: "#ffe8ee",
      dark: "#ff0047",
      contrastText: "#212b3a",
    },
    background: {
      default: "#212b3a",
      paper: "#0B1627",
    },
  },
  typography: {
    fontFamily: "cera-pro",
  },
});

export const ThemeContainer = ({
  children,
}: PropsWithChildren<ThemeContainerProps>): JSX.Element | null => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
