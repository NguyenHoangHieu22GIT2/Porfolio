"use client";
import { Article } from "@/components/Articles/Article/Article";
import { Layout } from "@/components/Layout/Layout";
import { Container } from "@/components/ui/Container";
import { ArticleType } from "@/type/Article";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
// import { useParams } from "next/navigation";

export default function projectpage() {
  // const params = useParams();
  // console.log(params.id);
  const { data, isLoading, error } = useQuery<ArticleType>({
    queryKey: [`article${1}`],
    queryFn: ({ signal }) => {
      return axios.get(`/api/articles/${1}`).then((result) => result.data);
    },
  });
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (typeof data !== "object") {
    return <h2>No Article found...</h2>;
  }
  console.log(data);
  return (
    <Layout>
      <Container>
        <div className="flex mt-5 gap-2">
          {/* <Article article={data} /> */}
          <div>Text</div>
        </div>
      </Container>
    </Layout>
  );
}
