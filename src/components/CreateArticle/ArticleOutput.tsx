import React, { useState } from "react";
import { Remark } from "react-remark";
type props = {
  data: string;
};

export const ArticleOutput = (props: props) => {
  return (
    <div className="prose text-white border border-muted-foreground rounded-lg prose-lg">
      <Remark>{props.data}</Remark>
    </div>
  );
};
