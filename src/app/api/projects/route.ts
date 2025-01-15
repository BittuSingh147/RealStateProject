import { NextResponse } from 'next/server';
import { scrapeProjects } from '@/lib/scraper';


export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const cityName = searchParams.get('city');

  if (!cityName) {
    return NextResponse.json({ error: 'City name is required' }, { status: 400 });
  }

  try {
    const projects = await scrapeProjects(cityName);
    return NextResponse.json(projects);
  } catch (error: unknown) {
    // Use the error in the error response
    const errorMessage = error instanceof Error ? error.message : 'Failed to fetch projects';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
