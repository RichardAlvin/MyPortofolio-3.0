import { NextRequest, NextResponse } from "next/server";
import data from "@/data/article.json";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {

  const slug = (await params).slug;
  if (!slug) {
    return NextResponse.json({ error: "Slug parameter is missing" }, { status: 400 });
  }

  const article = data.find((x) => x.slug === slug);

  if (!article) {
    return NextResponse.json({ error: "Article not found" }, { status: 404 });
  }

  return NextResponse.json({ article }, { status: 200 });
}