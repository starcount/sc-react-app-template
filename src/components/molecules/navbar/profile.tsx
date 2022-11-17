import React, { useRef, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import { useOnClickOutside } from "@/hooks/useOnClickOutside";

export const Profile = () => {
  const userMenuRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth0();

  useOnClickOutside(userMenuRef, () => {
    setIsOpen(false);
  });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    logout({
      returnTo: window.location.origin,
    });
  };

  return (
    <div className="profile-widget" ref={userMenuRef}>
      <div className="profile-header">
        <div className="profile-menu-toggle" onClick={toggleMenu}>
          <img src={user?.picture} alt="Profile" className="profile-avatar" />
        </div>
        <div className="profile-details">
          <div className="user-name">{user?.nickname}</div>
          <div className="user-email">{user?.email}</div>
        </div>
      </div>

      {isOpen && (
        <div className="profile-menu-container">
          <div className="menu-items-container" onClick={handleLogout}>
            <div className="menu-item">
              <a onClick={handleLogout}>Logout </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
