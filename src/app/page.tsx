"use client";
import { Articles } from "@/components/HomePage/Articles";
import { Introduction } from "@/components/HomePage/Introduction";
import { Newsletter } from "@/components/HomePage/Newsletter";
import { Footer } from "@/components/Layout/Footer";
import { Layout } from "@/components/Layout/Layout";
import { ContainedSeparator } from "@/components/ui/ContainedSeparator";

import { Separator } from "@/components/ui/separator";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Introduction />
      <ContainedSeparator />
      <Articles />
      <ContainedSeparator />
      <Newsletter />
      <ContainedSeparator />
    </Fragment>
  );
}
