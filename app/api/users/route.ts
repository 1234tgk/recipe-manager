import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '../../../lib/mongoose';
import User from '../../../models/User';

export async function GET(request: NextRequest) {
  await dbConnect();

  try {
    const users = await User.find({});
    return NextResponse.json({ success: true, data: users });
  } catch (error) {
    // @ts-expect-error
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}

// Add other HTTP methods if needed (e.g., POST, PUT, DELETE)
