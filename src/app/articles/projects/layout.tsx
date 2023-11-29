import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "All projects of Hieu",
};

export default function articleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
