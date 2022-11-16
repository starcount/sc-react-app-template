import React from "react";
import {useAuth0} from "@auth0/auth0-react";

import {PageLayout} from "@/components/page-layout";

export const HomePage: React.FC = () => {
  const {user} = useAuth0();

  if (!user) {
    return null;
  }

  return (
    <PageLayout>
      <h1>Home Page</h1>
    </PageLayout>
  );
}