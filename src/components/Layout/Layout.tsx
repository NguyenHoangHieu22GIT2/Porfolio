"use client";
import React, { ReactNode } from "react";
import Header from "./Header";
import dynamic from "next/dynamic";
import { Footer } from "./Footer";
import { ContainedSeparator } from "../ui/ContainedSeparator";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SWRConfig } from "swr";
import { fetcher } from "@/utils/fetcher";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
interface props {
  children: ReactNode;
}
const DynamicHeader = dynamic(() => import("./Header"), {
  ssr: false,
});

export const Layout = (props: props) => {
  const [client] = React.useState(new QueryClient());
  return (
    <QueryClientProvider client={client}>
      <main>
        <DynamicHeader />
        {props.children}
        <ContainedSeparator />
        <Footer />
      </main>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
