import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Project } from '@/app/types';


const defaultIcon = L.icon({
  iconUrl: '/mapicon.webp',
  iconRetinaUrl: '/mapicon.webp',
  shadowUrl: '/shadow.jpg',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = defaultIcon;

interface ProjectMapProps {
  projects: Project[];
  center: { lat: number; lng: number };
}

function MapUpdater({ center }: { center: { lat: number; lng: number } }) {
  const map = useMap();

  useEffect(() => {
    map.setView([center.lat, center.lng], 13);
  }, [center, map]);

  useEffect(() => {
    
    map.on('click', (e) => {
      const { lat, lng } = e.latlng;
      map.flyTo([lat, lng], map.getZoom());
    });

    return () => {
      map.off('click');
    };
  }, [map]);

  return null;
}

export function ProjectMap({ projects, center }: ProjectMapProps) {
  return (
    <MapContainer 
      center={[center.lat, center.lng]} 
      zoom={13} 
      className="h-[600px] w-full rounded-lg"
      style={{ height: '600px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <MapUpdater center={center} />
      {projects.map((project) => (
        <Marker 
          key={project.id}
          position={[project.coordinates.lat, project.coordinates.lng]}
          eventHandlers={{
            click: () => {
             
              console.log('Clicked project:', project.name);
            },
          }}
        >
          <Popup>
            <div className="p-2">
              <h3 className="font-bold">{project.name}</h3>
              <p>{project.location}</p>
              <p>{project.priceRange}</p>
              <p>Builder: {project.builder}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}