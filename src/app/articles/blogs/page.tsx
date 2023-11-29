import { ListBlogs } from "@/components/Articles/page/ListBlogs";
import { articlesData } from "@/components/HomePage/Articles";
import { Layout } from "@/components/Layout/Layout";
import React from "react";

export default function ArticlePage() {
  return (
    <section>
      <ListBlogs articles={articlesData} />
    </section>
  );
}
