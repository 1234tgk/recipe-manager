import { NextRequest, NextResponse } from 'next/server';
import rawRecipes from '@/lib/sample_mflix.recipes.json';
import { notFound } from 'next/navigation';

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  //   await dbConnect();

  try {
    // const recipes = await Recipe.find({});
    const recipes = rawRecipes;
    const recipeIndex = recipes.findIndex((r) => r._id.$oid === params.id);

    if (recipeIndex === -1) {
      return notFound();
    }

    return NextResponse.json({ success: true, data: recipes[recipeIndex] });
  } catch (error) {
    // @ts-expect-error
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
