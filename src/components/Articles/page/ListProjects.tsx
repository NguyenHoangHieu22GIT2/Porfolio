import { Container } from "@/components/ui/Container";
import React from "react";
import { ListArticleItem } from "../ListArticleItem";
import { ArticleForList } from "@/type/Article";
import { ListArticleItemDescriptive } from "../ListArticleItemDescriptive";
import { LinkButton } from "@/components/ui/LinkButton";
import Link from "next/link";

type props = {
  articles: ArticleForList[];
};

export const ListProjects = (props: props) => {
  return (
    <section className="mt-5">
      <Container>
        <Link
          href="/articles/projects"
          className="font-bold hover:underline inline-block text-3xl mb-3"
        >
          Most viewed Projects
        </Link>
        <ListArticleItemDescriptive articles={props.articles} />
        <LinkButton
          className="mt-5 inline-block"
          variant={"link"}
          href="/articles/projects"
        >
          More...
        </LinkButton>
      </Container>
    </section>
  );
};
