import data from "@/data/article.json"
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const isHighlight = searchParams.get("IsHighlight");

    const highlightFilter = isHighlight === "true";

    const filteredData = isHighlight ? data.filter(article => article.isHighlight === highlightFilter) : data;
    return NextResponse.json({
        data: filteredData
    })
}