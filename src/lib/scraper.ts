import { Project } from '@/app/types';

export async function scrapeProjects(cityName: string): Promise<Project[]> {
  console.log(`Fetching projects for ${cityName}`);
  const mockProjects: Project[] = [
    {
      id: '1',
      name: 'Sunrise Towers',
      location: 'Gachibowli, Hyderabad',
      priceRange: '₹85L - 1.2Cr',
      builder: 'ABC Builders',
      coordinates: { lat: 17.4400, lng: 78.3489 },
    },
    {
      id: '2',
      name: 'Green Park Residences',
      location: 'Banjara Hills, Hyderabad',
      priceRange: '₹1.5Cr - 2.5Cr',
      builder: 'Green Builders',
      coordinates: { lat: 17.4348, lng: 78.4445 },
    },
    {
      id: '3',
      name: 'Crystal Heights',
      location: 'Kukatpally, Hyderabad',
      priceRange: '₹50L - 75L',
      builder: 'Shine Developers',
      coordinates: { lat: 17.4874, lng: 78.3746 },
    },
    {
      id: '4',
      name: 'Luxury Villa Complex',
      location: 'Jubilee Hills, Hyderabad',
      priceRange: '₹3Cr - 4.5Cr',
      builder: 'Elite Homes',
      coordinates: { lat: 17.4098, lng: 78.4281 },
    },
    {
      id: '5',
      name: 'Silver Sands Apartments',
      location: 'Madhapur, Hyderabad',
      priceRange: '₹90L - 1.4Cr',
      builder: 'Skyline Estates',
      coordinates: { lat: 17.4497, lng: 78.3891 },
    },
    {
      id: '6',
      name: 'Urban Towers',
      location: 'Gachibowli, Hyderabad',
      priceRange: '₹1Cr - 1.8Cr',
      builder: 'Urban Spaces',
      coordinates: { lat: 17.4255, lng: 78.3767 },
    },
    {
      id: '7',
      name: 'Palm Grove Residency',
      location: 'Kondapur, Hyderabad',
      priceRange: '₹55L - 80L',
      builder: 'Palm Developers',
      coordinates: { lat: 17.4403, lng: 78.2995 },
    },
    {
      id: '8',
      name: 'Sunset Villas',
      location: 'Hitech City, Hyderabad',
      priceRange: '₹2Cr - 3Cr',
      builder: 'Sunset Construction',
      coordinates: { lat: 17.4561, lng: 78.3433 },
    },
    {
      id: '9',
      name: 'The Ridge Apartments',
      location: 'Secunderabad, Hyderabad',
      priceRange: '₹70L - 1Cr',
      builder: 'Blue Ridge Developers',
      coordinates: { lat: 17.4500, lng: 78.5263 },
    },
    {
      id: '10',
      name: 'Hilltop View Residences',
      location: 'Nallagandla, Hyderabad',
      priceRange: '₹60L - 90L',
      builder: 'Hilltop Real Estates',
      coordinates: { lat: 17.4904, lng: 78.2982 },
    },
  ];
  

  // Simulate real-time scraping
  return new Promise<Project[]>((resolve) => {
    setTimeout(() => resolve(mockProjects), 2000);
  });
}
