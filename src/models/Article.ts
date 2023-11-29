import { ArticleType } from "@/type/Article";
import { Schema, model, models } from "mongoose";

const articleSchema = new Schema<ArticleType>(
  {
    articleTitle: {
      required: true,
      type: String,
    },
    articleDescription: {
      required: true,
      type: String,
    },
    articleBody: {
      required: true,
      type: String,
    },
    articleType: {
      required: true,
      type: String,
    },
    articleImage: {
      required: true,
      type: String,
    },
  },
  { timestamps: true },
);

const articleDocument = models.articles || model("articles", articleSchema);

export default articleDocument;
