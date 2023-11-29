import { cn } from "@/lib/utils";
import { PropsClassName } from "@/type/PropsClassName";
import Link from "next/link";
import React from "react";
import { Button } from "./button";

type props = {
  href: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;
} & PropsClassName;

export const LinkButton = (props: props) => {
  return (
    <Link className={props.className} href={props.href}>
      <Button
        variant={props.variant ? props.variant : "default"}
        className="border px-5 py-2 rounded-lg  transition"
      >
        {props.children}
      </Button>
    </Link>
  );
};
