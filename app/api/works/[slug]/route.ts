import { NextRequest, NextResponse } from "next/server";
import data from "@/data/work.json";

export async function GET(
  request: NextRequest,
  context: { params: { slug?: string } }
) {
  const params = await context.params; // Tunggu params agar bisa diakses

  if (!params?.slug) {
    return NextResponse.json({ error: "Slug parameter is missing" }, { status: 400 });
  }

  const work = data.find((x) => x.slug === params.slug);

  if (!work) {
    return NextResponse.json({ error: "Work not found" }, { status: 404 });
  }

  return NextResponse.json({ work });
}