import { NextApiRequest, NextApiResponse } from 'next';

async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { firstname, lastname, email, password } = req.body;
  return Response.json({
    message: 'User registered successfully',
    data: [{ firstname, lastname, email, password }],
  });
}

export { POST };
