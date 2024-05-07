import { NextRequest, NextResponse } from 'next/server';

const POST = async function (req: NextRequest) {
  const { cookies } = req;

  cookies.delete('token');

  return NextResponse.json({
    message: 'logout successfully',
  });
};

export { POST };
