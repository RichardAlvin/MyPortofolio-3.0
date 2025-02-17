import data from "@/data/work.json"
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const isHighlight = searchParams.get("IsHighlight");

    const highlightFilter = isHighlight === "true";

    const filteredData = isHighlight ? data.filter(work => work.isHighlight === highlightFilter) : data;
    return NextResponse.json({
        data: filteredData
    })
}