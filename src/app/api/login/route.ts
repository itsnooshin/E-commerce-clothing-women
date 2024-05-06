import { NextRequest, NextResponse } from 'next/server';

const POST = async function (req: NextRequest) {
  const { email, password } = await req.json();

  return NextResponse.json({
    message: 'User login successfully',
    data: [{ email, password }],
  });
};

export { POST };
