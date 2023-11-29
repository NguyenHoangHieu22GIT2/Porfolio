import connectMongo from "@/utils/connectMongodb";
import userDocument from "@/models/User";
import { User } from "@/type/User";
import { NextResponse, NextRequest } from "next/server";
import { ResponseType } from "@/type/Response";
export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { username, password }: User = await req.json();
    console.log(username, password);
    await connectMongo();
    const result = await userDocument.findOne<User>({ username, password });
    if (!result) {
      return new Response(
        JSON.stringify(
          "Wrong credentials. Please don't login if you are not Hoang Hieu",
        ),
        { status: 404 },
      );
    }
    return new Response(JSON.stringify({ _id: result._id }), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify("Internal Server Error, please try again later!"),
      {
        status: 500,
      },
    );
  }
}
