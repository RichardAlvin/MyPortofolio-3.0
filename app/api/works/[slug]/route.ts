import { NextRequest, NextResponse } from "next/server";
import data from "@/data/work.json";

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const work = data.find((x) => x.slug === params.slug);
  if (!work) {
    return NextResponse.json({ error: "Work not found" }, { status: 404 });
  }

  return NextResponse.json({ work });
}