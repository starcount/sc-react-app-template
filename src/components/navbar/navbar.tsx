import React from 'react';

import {Logo} from "../../assets/images/Logo";
import {Profile} from "../../components/navbar/profile";
import {useAuth0} from "@auth0/auth0-react";

interface NavbarProps {
  displayAppName?: boolean;
  appName?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
                                                displayAppName = true,
                                                appName
                                              }) => {
  const {isAuthenticated} = useAuth0();

  return (
    <div className="navbar">
      <div className="navbar-content">
        <div className="navbar-logo">
          <a href="/" className="logo">
            <Logo/>
          </a>
        </div>
        {isAuthenticated && (
          <div className="navbar-menu">
            <Profile/>
          </div>
        )}
      </div>
    </div>
  );
};