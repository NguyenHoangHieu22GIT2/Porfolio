"use client";
import { ListBlogs } from "@/components/Articles/page/ListBlogs";
import { ListProjects } from "@/components/Articles/page/ListProjects";
import { articlesData } from "@/components/HomePage/Articles";
import { Layout } from "@/components/Layout/Layout";
import { ContainedSeparator } from "@/components/ui/ContainedSeparator";
import { ArticleForList, ArticleType } from "@/type/Article";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

export default function ArticlePage() {
  const {
    isLoading,
    error,
    data: articlesData,
  } = useQuery<ArticleForList[]>({
    queryFn: ({ signal }) => {
      return axios
        .get("/api/articles", { signal })
        .then((result) => result.data);
    },
    queryKey: ["articles"],
  });
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  const projectArticles: ArticleForList[] = [];
  const blogArticles = articlesData
    ? articlesData.filter((article) => {
      if (article.articleType === "project") {
        projectArticles.push(article);
      }
      return article.articleType === "blog";
    })
    : [];
  return (
    <section>
      <ListBlogs articles={blogArticles} />
      <ContainedSeparator />
      <ListProjects articles={projectArticles} />
    </section>
  );
}
