import { NextRequest, NextResponse } from "next/server";
import data from "@/data/article.json";

export async function GET(
  request: NextRequest,
  context: { params: { slug?: string } }
) {
  const params = await context.params;

  if (!params?.slug) {
    return NextResponse.json({ error: "Slug parameter is missing" }, { status: 400 });
  }

  const article = data.find((x) => x.slug === params.slug);

  if (!article) {
    return NextResponse.json({ error: "Article not found" }, { status: 404 });
  }

  return NextResponse.json({ article });
}