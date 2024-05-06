import type { NextApiRequest, NextApiResponse } from 'next';

export async function POST(req: NextApiRequest, res: NextApiResponse) {

  const { firstname, lastname, email, password } = req.body;
  return Response.json({
    message: 'User registered successfully',
    data: [{ firstname, lastname, email, password }],
  });
}

export default POST;

