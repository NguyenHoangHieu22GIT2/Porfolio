import React from "react";
import { Container } from "./Container";
import { Separator } from "./separator";

export const ContainedSeparator = (props: {}) => {
  return (
    <Container>
      <Separator className="my-5" />
    </Container>
  );
};
