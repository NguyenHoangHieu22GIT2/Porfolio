import { ArticleForList, ArticleType } from "@/type/Article";
import React from "react";
import { ArticleItem } from "./ArticleItem";

interface props {
  articles: ArticleForList[];
}

export const ListArticleItem = (props: props) => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
      {props.articles.map((article, index) => (
        <ArticleItem article={article} key={index} />
      ))}
    </div>
  );
};
