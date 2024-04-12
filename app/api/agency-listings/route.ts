import {promises as fs} from 'fs';
import {NextResponse} from 'next/server';

export const GET = async () => {
    const data = await fs.readFile(process.cwd() + '/app/api/agency-listings/agency-listings.json', 'utf8');
    return NextResponse.json(JSON.parse(data));
};
