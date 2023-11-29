import { Blogs } from "@/components/AboutPage/Blogs";
import { MyHistory } from "@/components/AboutPage/MyHistory";
import { Technologies } from "@/components/AboutPage/Technologies";
import { Layout } from "@/components/Layout/Layout";
import { ContainedSeparator } from "@/components/ui/ContainedSeparator";
import { Separator } from "@/components/ui/separator";
import React, { Fragment } from "react";

export default function aboutPage() {
  return (
    <Fragment>
      <MyHistory /> <ContainedSeparator />
      <Technologies />
      <ContainedSeparator />
      <Blogs />
    </Fragment>
  );
}
