import React from "react";

import { Navbar } from "@/components/molecules";
import { useAuth0 } from "@auth0/auth0-react";
import { Spinner } from "@/components/atoms";

interface PageLayoutProps {
  children?: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="page-layout">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="page-layout">
      <Navbar appName="Rename me?" displayAppName={true} />
      <div>{children}</div>
    </div>
  );
};
