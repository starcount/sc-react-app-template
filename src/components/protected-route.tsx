import React, {ComponentType} from "react";
import {withAuthenticationRequired} from "@auth0/auth0-react";
import {Route, RouteProps} from "react-router-dom";

import {Spinner} from "@/components/Spinner";

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
                <div className="page-layout">
                    <Spinner/>
                </div>
            ),
        })}
        {...args}
    />
);
