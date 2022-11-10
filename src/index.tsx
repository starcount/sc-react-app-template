import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, useNavigate} from "react-router-dom";
import {Auth0Provider} from "@auth0/auth0-react";

import App from './App';

import './styles/index.css';
import {config} from "./config";

const navigate = useNavigate();

const onRedirectCallback = (appState: any) => {
    navigate(
        appState && appState.returnTo ? appState.returnTo : window.location.pathname
    );
};


const providerConfig = {
    domain: config.authO.domain,
    clientId: config.authO.clientId,
    ...(config.authO.audience ? {audience: config.authO.audience} : null),
    redirectUri: process.env.REACT_APP_AUTH0_CALLBACK_URL,
    onRedirectCallback,
};

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Auth0Provider {...providerConfig}>
                <App/>
            </Auth0Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
