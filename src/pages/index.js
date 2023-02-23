import * as React from "react";

import { Layout } from "../components/base/Layout/Layout";
import { Home } from "../components/features/Home/Home";

const IndexPage = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
