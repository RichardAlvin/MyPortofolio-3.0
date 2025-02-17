import data from "@/data/work.json";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    
    // Get query parameters
    const isHighlight = searchParams.get("IsHighlight");
    const searchQuery = searchParams.get("search")?.toLowerCase() || "";
    const category = searchParams.get("category")?.toLowerCase() || "";

    // Filter data based on query params
    let filteredData = data;

    // Filter by highlight
    if (isHighlight) {
        const highlightFilter = isHighlight === "true";
        filteredData = filteredData.filter(work => work.isHighlight === highlightFilter);
    }

    // Filter by search query (title)
    if (searchQuery) {
        filteredData = filteredData.filter(work => work.title.toLowerCase().includes(searchQuery));
    }

    // Filter by category
    if (category) {
        filteredData = filteredData.filter(work => work.category.toLowerCase() === category);
    }

    return NextResponse.json({ data: filteredData });
}