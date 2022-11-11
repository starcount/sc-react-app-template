import React from 'react';

import 'navbar.scss'
import {Link} from "react-router-dom";
import {User} from "./user";

interface NavbarProps {
    displayAppName: boolean;
    appName: string;
    homeRoute: string;
    authInstance: object;
    userManagementUrl: string;
}

export const Navbar: React.FC<NavbarProps> = ({
                                                  displayAppName = true,
                                                  appName = 'No App Name Specified',
                                                  homeRoute = '/',
                                                  authInstance,
                                                  userManagementUrl,
                                              }) => {
    return (
        <div className="framework-header">
            <div className="container">
                <div className="breadcrumb-area">
                    <Link to={'/'}>
                        <i className="main icon-logo"/>
                    </Link>
                    {displayAppName && (
                        <>
                            <div className="header-divider"/>
                            <Link to={homeRoute}>
                                <div className="app-name">{appName}</div>
                            </Link>
                        </>
                    )}
                </div>
                <User authInstance={authInstance} userManagementUrl={userManagementUrl}/>
            </div>
        </div>
    );
};