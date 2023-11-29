import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Article",
  description: "Hieu create article, hooray",
};

export default function CreateArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
