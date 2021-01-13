import React from "react";
import { Link } from "../components/Link";
import { FrontMatter } from "../types";
import { MDXProvider } from "@mdx-js/react";
import { DocsLayout } from "../layouts/DocsLayout";

const components = {
  a: Link,
};

const Layout: React.FC<{ frontMatter: FrontMatter }> = props => (
  <MDXProvider components={components}>
    <DocsLayout {...props}>{props.children}</DocsLayout>
  </MDXProvider>
);

export default Layout;
