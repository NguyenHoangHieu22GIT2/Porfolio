import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { LinkButton } from "../ui/LinkButton";
import { ArticleForList, ArticleType } from "@/type/Article";

interface props {
  article: ArticleForList;
}
// https://cdn.vox-cdn.com/thumbor/IWX18ylj7Jd5mmDTQiYnSj_MOTM=/0x0:1024x768/2000x1333/filters:focal(512x384:513x385)/cdn.vox-cdn.com/uploads/chorus_asset/file/15503231/OZJlR3q.0.0.1442254244.png
export const ArticleItem = ({ article }: props) => {
  return (
    <Card className="">
      <CardHeader className="p-0 mb-9 rounded-tl-lg rounded-tr-lg overflow-hidden">
        <Image
          src={article.articleImage}
          className="hover:scale-125  transition"
          alt={article.articleTitle}
          width={500}
          height={500}
        />
      </CardHeader>
      <CardContent>
        <CardTitle>{article.articleTitle}</CardTitle>
        <CardDescription>{article.articleDescription}</CardDescription>
        <span>{article.createdAt}</span>
      </CardContent>
      <CardFooter>
        <LinkButton href={`/articles/${article.articleType}/${article._id}`}>
          Read
        </LinkButton>
      </CardFooter>
    </Card>
  );
};
