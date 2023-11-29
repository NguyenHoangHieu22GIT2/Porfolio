export type ArticleType = {
  _id: string;
  articleImage: string;
  articleTitle: string;
  articleDescription: string;
  createdAt: string;
  articleBody: string;
  articleType: "project" | "blog";
};

export type ArticleForList = Pick<
  ArticleType,
  | "articleTitle"
  | "articleDescription"
  | "createdAt"
  | "articleImage"
  | "articleType"
  | "_id"
>;
