import { ListProjects } from "@/components/Articles/page/ListProjects";
import { articlesData } from "@/components/HomePage/Articles";
import { Layout } from "@/components/Layout/Layout";
import React from "react";

export default function ArticlePage() {
  return (
    <Layout>
      <ListProjects articles={articlesData} />
    </Layout>
  );
}
