import { NextResponse } from "next/server";
import { getAllBrands, getAllCategories } from "@/api/services/route.services";

export async function GET() {
  const brands = await getAllBrands();
  const categories = await getAllCategories();

  return NextResponse.json({
    brands,
    categories,
  });
}