import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";

export const GET = async (request, { params }) => {
  //fetch data

  const { id } = params;

  try {
    await connect();

    const posts = await Post.findById(id);

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
