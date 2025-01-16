import { Project } from '@/app/types';
import { geocodeLocation } from './geocoding';

const builders = [
  'DLF Limited',
  'Godrej Properties',
  'Prestige Group',
  'Lodha Group',
  'Sobha Limited',
  'Brigade Group',
  'Tata Housing',
  'Raheja Developers',
  'Unitech Group',
  'Hiranandani Group'
];

const propertyPrefixes = [
  'Royal', 'Green', 'Golden', 'Silver', 'Crystal', 'Park', 'Lake', 'Garden',
  'Metro', 'City', 'Urban', 'Sky', 'Sea', 'River', 'Valley'
];

const propertyTypes = [
  'Heights', 'Towers', 'Residency', 'Gardens', 'Apartments', 'Plaza',
  'Enclave', 'Estate', 'Paradise', 'Arcade', 'Square', 'Hub'
];


function generatePriceRange(cityTier: number): string {
  const basePrice = Math.random() * 100;
  let minPrice: number, maxPrice: number;

  switch(cityTier) {
    case 1: // Metro cities
      minPrice = basePrice * 10 + 200;
      maxPrice = minPrice + (Math.random() * 200) + 100;
      break;
    case 2: // Tier 2 cities
      minPrice = basePrice * 5 + 100;
      maxPrice = minPrice + (Math.random() * 100) + 50;
      break;
    default: // Tier 3 cities
      minPrice = basePrice * 2 + 50;
      maxPrice = minPrice + (Math.random() * 50) + 25;
      break;
  }

  // Convert to crores/lakhs format
  return formatPriceRange(minPrice * 100000, maxPrice * 100000);
}

function formatPriceRange(min: number, max: number): string {
  function formatAmount(amount: number): string {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(1)}Cr`;
    } else {
      return `₹${(amount / 100000).toFixed(1)}L`;
    }
  }
  return `${formatAmount(min)} - ${formatAmount(max)}`;
}


function generateNearbyCoordinates(baseLocation: { lat: number; lng: number }): { lat: number; lng: number } {
  const radius = 0.05; 
  const angle = Math.random() * Math.PI * 2;
  const r = Math.sqrt(Math.random()) * radius;

  return {
    lat: baseLocation.lat + r * Math.cos(angle),
    lng: baseLocation.lng + r * Math.sin(angle)
  };
}

export async function generateProjects(cityName: string): Promise<Project[]> {
  
  const baseCoordinates = await geocodeLocation(cityName);

  const metroCities = ['mumbai', 'delhi', 'bangalore', 'chennai', 'kolkata', 'hyderabad'];
  const tier2Cities = ['pune', 'ahmedabad', 'jaipur', 'lucknow', 'chandigarh', 'kochi'];
  
  const cityTier = metroCities.includes(cityName.toLowerCase()) ? 1 :
                   tier2Cities.includes(cityName.toLowerCase()) ? 2 : 3;

  const numProjects = Math.floor(Math.random() * 7) + 6;
  const projects: Project[] = [];

  for (let i = 0; i < numProjects; i++) {
    const coordinates = generateNearbyCoordinates(baseCoordinates);
    const propertyName = `${propertyPrefixes[Math.floor(Math.random() * propertyPrefixes.length)]} ${
      propertyTypes[Math.floor(Math.random() * propertyTypes.length)]}`;
    
    projects.push({
      id: `${cityName.toLowerCase()}-${i + 1}`,
      name: propertyName,
      location: `${generateLocalArea(cityName)}, ${cityName}`,
      priceRange: generatePriceRange(cityTier),
      builder: builders[Math.floor(Math.random() * builders.length)],
      coordinates
    });
  }

  return projects;
}

function generateLocalArea(cityName: string): string {
  const areas = [
    'Central', 'North', 'South', 'East', 'West',
    'Old City', 'New Town', 'Lake View', 'Hill Side',
    'Downtown', 'Uptown', 'Business District'
  ];
  
  return `${areas[Math.floor(Math.random() * areas.length)]} ${cityName}`;
}
