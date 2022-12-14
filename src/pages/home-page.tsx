import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import { PageLayout } from "@/components";

export const HomePage: React.FC = () => {
  const { user } = useAuth0();

  if (!user) {
    return null;
  }

  return (
    <PageLayout>
      <div className="page-layout-content"></div>
    </PageLayout>
  );
};
