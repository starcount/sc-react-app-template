import React, {useEffect} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {HomePage} from "./pages/home-page";
import {CallbackPage} from "./pages/callback-page";
import {NotFoundPage} from "./pages/not-found-page";
import {UnauthorizedPage} from "./pages/unauthorized-page";
import {useAuth0} from "@auth0/auth0-react";
import {PageLayout} from "../src/components/page-layout/page-layout";
import {Spinner} from "../src/components/Spinner";


function App() {
    const {isLoading, isAuthenticated, loginWithRedirect} = useAuth0();

    useEffect(() => {
        if (isLoading || isAuthenticated) {
            return;
        }

        const fn = async () => {
            await loginWithRedirect({
                redirect_uri: window.location.origin,
            });
        }
        fn();
    }, [isLoading, isAuthenticated]);

    if (isLoading) {
        return (
            <div className="page-layout">
                <Spinner/>
            </div>
        );
    }

    return (
        <PageLayout>
            <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/callback" component={CallbackPage}/>
                <Route path="*" component={NotFoundPage}/>
                {/* If the user is rejected by log-in, redirect them to the unauthorized page */}
                <Route path="/unauthorized" component={UnauthorizedPage}/>

                {/* Redirect /login to AppWrapper to delegate auth decisions */}
                <Redirect from="/login" to="/"/>

            </Switch>
        </PageLayout>
    );
}

export default App;
