import { Project } from '@/app/types';
import { generateProjects } from './fakeDataGenerator';

export async function scrapeProjects(cityName: string): Promise<Project[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  try {
    const projects = await generateProjects(cityName);
    return projects;
  } catch (error) {
    throw new Error(`Failed to fetch projects for ${cityName}: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}