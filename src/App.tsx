import React from 'react';
import {Route, Switch} from "react-router-dom";
import {useAuth0} from "@auth0/auth0-react";
import {PageLoader} from "./components/page-loader";
import {HomePage} from "./pages/home-page";
import {ProtectedRoute} from "./components/protected-route";
import {ProfilePage} from "./pages/profile-page";
import {PublicPage} from "./pages/public-page";
import {ProtectedPage} from "./pages/protected-page";
import {AdminPage} from "./pages/admin-page";
import {CallbackPage} from "./pages/callback-page";
import {NotFoundPage} from "./pages/not-found-page";

function App() {
    const { isLoading } = useAuth0();

    if (isLoading) {
        return (
            <div className="page-layout">
                <PageLoader />
            </div>
        );
    }

    return (
        <Switch>
            <Route path="/" exact component={HomePage} />
            <ProtectedRoute path="/profile" component={ProfilePage} />
            <Route path="/public" component={PublicPage} />
            <ProtectedRoute path="/protected" component={ProtectedPage} />
            <ProtectedRoute path="/admin" component={AdminPage} />
            <Route path="/callback" component={CallbackPage} />
            <Route path="*" component={NotFoundPage} />
        </Switch>
    );
}

export default App;
