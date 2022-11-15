import React from 'react';

import {Logo} from "../../assets/images/Logo";
import {Profile} from "../../components/navbar/profile";

interface NavbarProps {
    displayAppName?: boolean;
    appName?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
                                                  displayAppName = true,
                                                  appName
                                              }) => {
    return (
        <div className="navbar">
            <div className="navbar-content">
                <div className="navbar-logo">
                    <a href="/" className="logo">
                        <Logo/>
                    </a>
                </div>
                <div className="navbar-menu">
                    <Profile/>
                </div>
            </div>
        </div>
    );
};