import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongoose';
import Recipe from '@/models/Recipe';

export async function GET(request: NextRequest) {
  await dbConnect();

  try {
    const users = await Recipe.find({});
    return NextResponse.json({ success: true, data: users });
  } catch (error) {
    // @ts-expect-error
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
