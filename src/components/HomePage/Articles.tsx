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
import Link from "next/link";
import { Container } from "../ui/Container";
import { LinkButton } from "../ui/LinkButton";
import { ListArticleItem } from "../Articles/ListArticleItem";
import { ArticleForList, ArticleType } from "@/type/Article";

export const articlesData: ArticleForList[] = [];

export const Articles = (props: {}) => {
  return (
    <div>
      <Container>
        <div className="mb-5">
          <h1 className="text-4xl font-bold">
            I love to share my knowledge to everyone.
          </h1>
          <p className="text-muted-foreground">
            Here are some blogs I created to teach about websites
          </p>
        </div>
        <ListArticleItem articles={articlesData} />
      </Container>
    </div>
  );
};
