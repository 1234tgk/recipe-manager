import { NextRequest, NextResponse } from 'next/server';
import rawRecipes from '@/lib/sample_mflix.recipes.json';

export async function GET(request: NextRequest) {
  //   await dbConnect();

  try {
    // const recipes = await Recipe.find({});
    const recipes = rawRecipes;
    return NextResponse.json({ success: true, data: recipes });
  } catch (error) {
    // @ts-expect-error
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
