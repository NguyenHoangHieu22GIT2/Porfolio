import { NextRequest, NextResponse } from "next/server";
import connectMongo from "@/utils/connectMongodb";
import userDocument from "@/models/User";
import articleDocument from "@/models/Article";
import { ArticleType } from "@/type/Article";

export async function GET(req: NextRequest, res: NextResponse) {
  await connectMongo();
  const articles = await articleDocument
    .find({ $or: [{ articleType: "blog" }, { articleType: "project" }] })
    .limit(3)
    .skip(0);
  return new Response(JSON.stringify(articles), {
    status: 200,
    statusText: "Queried Articles successfully!",
  });
}

export async function POST(req: NextRequest, res: NextResponse) {
  const result: Omit<ArticleType, "_id" | "createdAt"> = await req.json();
  await connectMongo();
  console.log(result);
  const article = articleDocument.create({
    ...result,
  } as Omit<ArticleType, "_id" | "createdAt">);
  return new Response(JSON.stringify(article), {
    status: 201,
    statusText: "Create Article successfully",
  });
}
