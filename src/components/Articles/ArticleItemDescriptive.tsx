import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import { ArticleForList } from "@/type/Article";
import { LinkButton } from "../ui/LinkButton";
import { Button } from "../ui/button";
import { BsFillBookmarkPlusFill } from "react-icons/bs";
import Link from "next/link";
type props = {
  article: ArticleForList;
  typeArticle: "projects" | "blogs";
};

export const ArticleItemDescriptive = (props: props) => {
  console.log(props.article);
  return (
    <Card className="md:flex block items-center">
      <CardHeader className="p-0 pb-6 md:p-0 md:pb-0 basis-1/4">
        <Link href={`/articles/${props.typeArticle}/1`}>
          <Image
            src="https://images04.nicepage.com/feature/583347/blog-category.jpg"
            alt={props.article.articleTitle}
            width={1920}
            height={1080}
            className="rounded-tl-lg rounded-tr-lg object-cover md:rounded-tr-none md:rounded-bl-lg"
          />
        </Link>
      </CardHeader>
      <CardContent className="basis-2/4">
        <CardTitle>{props.article.articleTitle}</CardTitle>
        <CardDescription>
          {props.article.articleDescription.slice(0, 250)}...
        </CardDescription>
      </CardContent>
      <CardFooter className="basis-1/4 self-center flex gap-3 items-center">
        <LinkButton variant={"default"} href="/articles/blogs/1">
          Read
        </LinkButton>
        <Button variant={"secondary"} className="flex gap-2 items-center">
          <span> BookMark </span>
          <BsFillBookmarkPlusFill />
        </Button>
      </CardFooter>
    </Card>
  );
};
