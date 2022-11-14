import React, {useRef, useState} from 'react';
import {useAuth0} from "@auth0/auth0-react";

import {useOnClickOutside} from "../../hooks/useOnClickOutside";
import {UserIcon} from "../../assets/images/UserIcon";

export const User = () => {
    const userMenuRef = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState(false);
    const {user, logout} = useAuth0();

    useOnClickOutside(userMenuRef, () => {
        setIsOpen(false);
    });

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    const handleLogout = () => {
        logout({
            returnTo: window.location.origin,
        });
    };

    return (
        <div className="user-widget">
            <div className="user-details-container" ref={userMenuRef}>
                <div className="user-menu-toggle" onClick={toggleMenu}>
                    <UserIcon/>
                </div>
                <div className="user-details">
                    <div className="user-name">{user?.name}</div>
                    <div className="user-email">{user?.email}</div>
                </div>
            </div>

            {isOpen && (
                <div className="user-menu-container">
                    <div className="menu-item" onClick={handleLogout}>Logout</div>
                </div>
            )}
        </div>
    );
};