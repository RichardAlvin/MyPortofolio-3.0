import { NextRequest, NextResponse } from "next/server";
import data from "@/data/work.json";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {

  const slug = (await params).slug;
  if (!slug) {
    return NextResponse.json({ error: "Slug parameter is missing" }, { status: 400 });
  }

  const work = data.find((x) => x.slug === slug);

  if (!work) {
    return NextResponse.json({ error: "Work not found" }, { status: 404 });
  }

  return NextResponse.json({ work }, { status: 200 });
}