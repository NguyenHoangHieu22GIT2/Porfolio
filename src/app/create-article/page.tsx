"use client";
import { ArticleInput } from "@/components/CreateArticle/ArticleInput";
import { ArticleOutput } from "@/components/CreateArticle/ArticleOutput";
import { Layout } from "@/components/Layout/Layout";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { useUserSession } from "@/utils/store";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function createArticlePage() {
  const route = useRouter();
  const { bossId } = useUserSession();
  const [markdown, setMarkdown] = useState("");
  function onChangeMarkdown(markdown: string) {
    setMarkdown(markdown);
  }
  if (!bossId) {
    return route.replace("/");
  }
  return (
    <Layout>
      <Container>
        <div className="flex gap-5 mt-5 [&>*]:basis-1/2">
          <ArticleInput
            markdown={markdown}
            onChangeMarkdown={onChangeMarkdown}
          />
          <ArticleOutput data={markdown} />
        </div>
      </Container>
    </Layout>
  );
}
