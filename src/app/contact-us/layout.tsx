import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Nguyen Hoang Hieu",
  description: "All the deals go here",
};

export default function contactUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
