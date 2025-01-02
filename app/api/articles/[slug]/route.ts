import data from "@/data/article.json"
import { NextResponse } from "next/server";

export async function GET(context: any) {
    const { params } = context;
    const article = data.filter((x) => params.slug === x.slug.toString());

    return NextResponse.json({
        article,
    })
}