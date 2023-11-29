import { Article } from "@/components/Articles/Article/Article";
import { Layout } from "@/components/Layout/Layout";
import { Container } from "@/components/ui/Container";
import { ArticleType } from "@/type/Article";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

export default function page() {
  const { data, isLoading, error } = useQuery<ArticleType>({
    queryKey: [`article${1}`],
    queryFn: ({ signal }) => {
      return axios.get(`/api/articles/${1}`).then((result) => result.data);
    },
  });
  return (
    <Container>
      <div className="flex mt-5 gap-2">
        {/* <Article /> */}
        <div>Text</div>
      </div>
    </Container>
  );
}
