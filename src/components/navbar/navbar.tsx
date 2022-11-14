import React from 'react';
import {Logo} from "../../assets/images/Logo";
import {User} from "../../components/navbar";

interface NavbarProps {
    displayAppName?: boolean;
    appName?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
                                                  displayAppName = true,
                                                  appName
                                              }) => {
    return (
        <div className="app-header">
            <div className="app-header-content">
                <div className="app-header-logo">
                    <a href="/" className="logo">
                        <Logo/>
                    </a>
                </div>
                <div className="app-header-menu">
                    <User/>
                </div>
            </div>
        </div>
    );
};