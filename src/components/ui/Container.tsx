import { cn } from "@/lib/utils";
import { PropsClassName } from "@/type/PropsClassName";
import React, { ReactNode } from "react";

type props = {
  children: ReactNode;
} & PropsClassName;

export const Container = (props: props) => {
  return (
    <div
      className={cn(
        "max-w-xl md:max-w-4xl lg:max-w-6xl lg:px-2 mx-auto px-2",
        props.className,
      )}
    >
      {props.children}
    </div>
  );
};
