import { NextRequest, NextResponse } from 'next/server';

const POST = async function (req: NextRequest) {
  const { firstname, lastname, email, password } = await req.json();
  return NextResponse.json({
    message: 'User registered successfully',
    data: [{ firstname, lastname, email, password }],
  });
};

export { POST };




