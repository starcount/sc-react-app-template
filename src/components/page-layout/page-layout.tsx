import React from 'react';

import {Navbar} from "../navbar";
import {useAuth0} from "@auth0/auth0-react";
import {Spinner} from "../../components/Spinner";

interface PageLayoutProps {
  children?: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({children}) => {
    const {isLoading} = useAuth0();

    if (isLoading) {
      return (
        <div className="page-layout">
          <Spinner/>
        </div>
      );
    }

    return (
      <div className="page-layout">
        <Navbar/>
        <div>
          {children}
        </div>
      </div>
    );
  }
;
