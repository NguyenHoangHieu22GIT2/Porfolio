import React from "react";
import { Container } from "../ui/Container";
import { ArticleForList, ArticleType } from "@/type/Article";
import { ListArticleItem } from "../Articles/ListArticleItem";
import { articlesData } from "../HomePage/Articles";

export const Blogs = (props: {}) => {
  return (
    <div>
      <Container>
        <h1 className="font-bold text-3xl">Since you are curious about me</h1>
        <p className="text-muted-foreground">
          maybe you want to read some of my blogs to understand about my
          lifestyle and How I learnt programming
        </p>
        <ListArticleItem articles={articlesData} />
      </Container>
    </div>
  );
};
