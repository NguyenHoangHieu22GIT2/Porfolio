import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All blogs of Hieu",
  description: "Go read it man",
};

export default function articleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
