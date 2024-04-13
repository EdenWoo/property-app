import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';

export const GET = async () => {
  const data = await fs.readFile(
    process.cwd() + '/app/api/agency/agency.json',
    'utf8'
  );
  return NextResponse.json(JSON.parse(data));
};
