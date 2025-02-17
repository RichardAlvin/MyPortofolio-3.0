import { NextRequest, NextResponse } from "next/server";
import data from "@/data/article.json";

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const article = data.find((x) => x.slug === params.slug);
  if (!article) {
    return NextResponse.json({ error: "Article not found" }, { status: 404 });
  }

  return NextResponse.json({ article });
}