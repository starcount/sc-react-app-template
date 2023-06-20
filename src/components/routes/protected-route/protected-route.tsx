import React, { ComponentType } from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { Route, RouteProps } from "react-router-dom";

import { Spinner } from "@/components/atoms/spinner";
import { Grid } from "@mui/material";

interface ProtectedRouteProps extends RouteProps {
  component: ComponentType;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  component,
  ...args
}) => (
  <Route
    component={withAuthenticationRequired(component, {
      onRedirecting: () => (
        <Grid
          container
          xs={12}
          justifyContent="center"
          alignItems="center"
          style={{ height: "100%" }}
        >
          <Spinner />
        </Grid>
      ),
    })}
    {...args}
  />
);
