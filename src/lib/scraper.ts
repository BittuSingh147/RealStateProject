import { Project } from '@/app/types';

const projectsData: { [key: string]: Project[] } = {
  mumbai: [
    {
      id: '1',
      name: 'Sea Breeze Heights',
      location: 'Worli, Mumbai',
      priceRange: '₹4.5Cr - 6Cr',
      builder: 'Lodha Group',
      coordinates: { lat: 19.0178, lng: 72.8478 }
    },
    {
      id: '2',
      name: 'Marina Bay Towers',
      location: 'Bandra West, Mumbai',
      priceRange: '₹3.8Cr - 5.2Cr',
      builder: 'Oberoi Realty',
      coordinates: { lat: 19.0596, lng: 72.8295 }
    },
    {
      id: '3',
      name: 'Coastal Gardens',
      location: 'Juhu, Mumbai',
      priceRange: '₹6Cr - 8.5Cr',
      builder: 'Godrej Properties',
      coordinates: { lat: 19.1075, lng: 72.8263 }
    }
  ],
  bangalore: [
    {
      id: '4',
      name: 'Tech Park Residences',
      location: 'Whitefield, Bangalore',
      priceRange: '₹1.2Cr - 1.8Cr',
      builder: 'Prestige Group',
      coordinates: { lat: 12.9698, lng: 77.7499 }
    },
    {
      id: '5',
      name: 'Green Valley Apartments',
      location: 'Electronic City, Bangalore',
      priceRange: '₹85L - 1.2Cr',
      builder: 'Brigade Group',
      coordinates: { lat: 12.8458, lng: 77.6714 }
    },
    {
      id: '6',
      name: 'Silicon Heights',
      location: 'Sarjapur Road, Bangalore',
      priceRange: '₹1.5Cr - 2.2Cr',
      builder: 'Sobha Limited',
      coordinates: { lat: 12.9217, lng: 77.6803 }
    }
  ],
  delhi: [
    {
      id: '7',
      name: 'Capital Premium Towers',
      location: 'Dwarka, Delhi',
      priceRange: '₹1.8Cr - 2.5Cr',
      builder: 'DLF Limited',
      coordinates: { lat: 28.5921, lng: 77.0460 }
    },
    {
      id: '8',
      name: 'Diplomatic Enclave Residences',
      location: 'Chanakyapuri, Delhi',
      priceRange: '₹4Cr - 6.5Cr',
      builder: 'Tata Housing',
      coordinates: { lat: 28.6004, lng: 77.1896 }
    },
    {
      id: '9',
      name: 'Metro View Apartments',
      location: 'Rohini, Delhi',
      priceRange: '₹1.2Cr - 1.6Cr',
      builder: 'Unitech Group',
      coordinates: { lat: 28.7158, lng: 77.1367 }
    }
  ],
  hyderabad: [
    {
      id: '10',
      name: 'Cyber Heights',
      location: 'HITEC City, Hyderabad',
      priceRange: '₹1.1Cr - 1.6Cr',
      builder: 'Raheja Corp',
      coordinates: { lat: 17.4456, lng: 78.3772 }
    },
    {
      id: '11',
      name: 'Lake View Residences',
      location: 'Gachibowli, Hyderabad',
      priceRange: '₹95L - 1.3Cr',
      builder: 'Aparna Constructions',
      coordinates: { lat: 17.4400, lng: 78.3489 }
    },
    {
      id: '12',
      name: 'Pearl Paradise',
      location: 'Jubilee Hills, Hyderabad',
      priceRange: '₹2.5Cr - 3.8Cr',
      builder: 'My Home Group',
      coordinates: { lat: 17.4319, lng: 78.4073 }
    }
  ]
};

export async function scrapeProjects(cityName: string): Promise<Project[]> {
  // Convert city name to lowercase for case-insensitive matching
  const normalizedCityName = cityName.toLowerCase();
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Check if we have data for the requested city
  if (!projectsData[normalizedCityName]) {
    throw new Error(`No projects found for ${cityName}`);
  }
  
  return projectsData[normalizedCityName];
}