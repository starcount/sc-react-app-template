import React, {useEffect, useState} from 'react';
import {NavDropdown} from 'react-bootstrap';
import Gravatar from 'react-gravatar';

interface UserProps {
    authInstance: object;
    domain?: string;
    clientId?: string;
    userManagementUrl: string;
}

const Avatar = (email: string | undefined) => (
    <div className="avatar-wrapper">
        <Gravatar email={email} size={28} className="avatar-img"/>
        <div className="hover-overlay"/>
        <div className="icon-chevron-down"/>
    </div>
);

export const User: React.FC<UserProps> = ({authInstance, domain, clientId, userManagementUrl}) => {
    const [authenticated, setAuthenticated] = useState(null);
    const [userInfo, setUserInfo] = useState(null);
    const [auth, setAuth] = useState(authInstance);

    useEffect(() => {
        return () => {
            checkAuthentication()
        };
    }, []);
    
    const checkAuthentication = async () => {
        const authenticated = await auth.isAuthenticated();

        if (authenticated) {
            auth.getUserInfo((err, userInfo) => {
                setUserInfo({userInfo, authenticated});
            });
        }
    };

    const logOut = () => {
        auth.logout();
    };

    return (
        <div>
            {authenticated && (
                <div className="avatar__placeholder"/>
            )}
            <div className="user-area">
                <div className="user-widget">
                    <div className="user-name">{userInfo.nickname}</div>
                    <NavDropdown
                        onToggle={onDropdownToggle}
                        noCaret={true}
                        id="nav-dropdown"
                        pullRight={true}
                        title={<Avatar email={userInfo?.name}/>}
                    >
                        <li>
                            <a target="_new" href={userManagementUrl}>User Management</a>
                        </li>

                        <li onClick={logOut}>
                            <a href="#">Logout</a>
                        </li>
                    </NavDropdown>
                </div>
            </div>
        </div>
    );
};