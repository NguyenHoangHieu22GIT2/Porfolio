import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Hoang Hieu",
  description: "About the creator of this website",
};

export default function aboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
