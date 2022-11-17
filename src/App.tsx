import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { HomePage } from "./pages/home-page";
import { CallbackPage } from "./pages/callback-page";
import { NotFoundPage } from "./pages/not-found-page";
import { UnauthorizedPage } from "./pages/unauthorized-page";
import { ProtectedRoute } from "@/components/routes";

function App() {
  return (
    <Switch>
      <ProtectedRoute path="/" exact component={HomePage} />
      <Route path="/callback" component={CallbackPage} />
      <Route path="*" component={NotFoundPage} />
      {/* If the user is rejected by log-in, redirect them to the unauthorized page */}
      <Route path="/unauthorized" component={UnauthorizedPage} />

      {/* Redirect /login to AppWrapper to delegate auth decisions */}
      <Redirect from="/login" to="/" />
    </Switch>
  );
}

export default App;
