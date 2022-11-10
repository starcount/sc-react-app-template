import {AppState, Auth0Provider} from "@auth0/auth0-react";
import React, {PropsWithChildren} from "react";
import {useHistory} from "react-router-dom";

interface AuthContainerProps {
    children: React.ReactNode;
}

export const AuthContainer = ({
                                  children,
                              }: PropsWithChildren<AuthContainerProps>): JSX.Element | null => {
    const history = useHistory();

    const domain = process.env.REACT_APP_AUTH0_DOMAIN;
    const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
    const audience = process.env.REACT_APP_AUTH0_AUDIENCE;
    const redirectUri = process.env.REACT_APP_AUTH0_CALLBACK_URL;

    const onRedirectCallback = (appState?: AppState) => {
        history.push(appState?.returnTo || window.location.pathname);
    };

    if (!(domain && clientId && audience && redirectUri)) {
        return null;
    }

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            audience={audience}
            redirectUri={redirectUri}
            onRedirectCallback={onRedirectCallback}
        >
            {children}
        </Auth0Provider>
    );
};
