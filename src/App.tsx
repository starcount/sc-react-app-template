import React from 'react';
import {Route, Switch} from "react-router-dom";
import {HomePage} from "./pages/home-page";
import {CallbackPage} from "./pages/callback-page";
import {NotFoundPage} from "./pages/not-found-page";
import {useAuth0} from "@auth0/auth0-react";
import {PageLayout} from "../src/components/page-layout/page-layout";
import {Spinner} from "../src/components/Spinner";

function App() {
    const {isLoading} = useAuth0();

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
            </Switch>
        </PageLayout>
    );
}

export default App;
