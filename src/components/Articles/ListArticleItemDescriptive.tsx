import { ArticleForList, ArticleType } from "@/type/Article";
import React from "react";
import { ArticleItem } from "./ArticleItem";
import { ArticleItemDescriptive } from "./ArticleItemDescriptive";

interface props {
  articles: ArticleForList[];
}

export const ListArticleItemDescriptive = (props: props) => {
  return (
    <div className="flex flex-col gap-3 ">
      {props.articles.map((article, index) => (
        <ArticleItemDescriptive
          typeArticle={`${article.articleType}s`}
          key={index}
          article={article}
        />
      ))}
    </div>
  );
};
