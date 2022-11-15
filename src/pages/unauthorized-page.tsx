import React from 'react';

export const UnauthorizedPage = () => {
  return (
    <div className="login-form">
      <div className="centred login-box">
        <i className="white icon-logo"/>
        <hr/>
        <div>
          <p>You don't have access to this app</p>
        </div>
      </div>
    </div>
  );
}