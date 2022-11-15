import React, {useEffect} from 'react';

import {Navbar} from "../navbar";

interface PageLayoutProps {
    children?: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({children}) => {
    return (
        <div className="page-layout">
            <Navbar/>
            <div>
                {children}
            </div>
        </div>
    );
};
