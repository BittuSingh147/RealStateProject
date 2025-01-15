'use client';

import { useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useProjectStore } from '@/store/projectStore';
import { ProjectMap } from '@/components/ProjectMap';
import { Project } from '@/app/types';

export default function CityPage() {
  const { cityName } = useParams();
  const { projects, loading, error, setProjects, setLoading, setError } = useProjectStore();

  useEffect(() => {
    async function fetchProjects() {
      setLoading(true);
      try {
        const response = await fetch(`/api/projects?city=${cityName}`);
        const data = await response.json();
        setProjects(data);
      } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'Failed to fetch projects';
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    }

    if (cityName) {
      fetchProjects();
    }
  }, [cityName, setLoading, setProjects, setError]);

  const mapCenter = projects[0]?.coordinates || { lat: 17.3850, lng: 78.4867 }; // Default to Hyderabad

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">
          Real Estate Projects in {cityName}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Projects List */}
          <div className="space-y-4">
            {loading && (
              <div className="flex items-center justify-center h-32">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              </div>
            )}
            
            {error && (
              <div className="p-4 bg-destructive/10 text-destructive rounded-lg">
                {error}
              </div>
            )}

            {projects.map((project: Project) => (
              <div 
                key={project.id}
                className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
                <p className="text-muted-foreground mb-1">{project.location}</p>
                <p className="text-lg font-medium mb-1">{project.priceRange}</p>
                <p className="text-sm text-muted-foreground">Builder: {project.builder}</p>
              </div>
            ))}
          </div>

          {/* Map */}
          <div className="h-[600px] rounded-lg overflow-hidden">
            <ProjectMap projects={projects} center={mapCenter} />
          </div>
        </div>
      </div>
    </div>
  );
}