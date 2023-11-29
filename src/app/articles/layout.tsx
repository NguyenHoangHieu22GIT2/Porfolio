import { Layout } from "@/components/Layout/Layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Articles that Hieu have written",
  description: "All the knowledge are in here",
};

export default function articleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
