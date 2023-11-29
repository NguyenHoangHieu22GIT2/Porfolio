import { ArticleType } from "@/type/Article";
import React from "react";

type props = {
  article: ArticleType
}

export const Article = ({ article }: props) => {
  return (
    <div className="prose prose-lg dark:!text-white [&>h1]:!text-white">
      <h1>
        {article.articleTitle}
      </h1>
      <p>
        {article.articleBody}
      </p>
    </div>
  );
};
