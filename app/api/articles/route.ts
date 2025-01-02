import data from "@/data/article.json"
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        data,
    })
}