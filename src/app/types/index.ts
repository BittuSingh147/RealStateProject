export interface Project {
  id: string;
  name: string;
  location: string;
  priceRange: string;
  builder: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}