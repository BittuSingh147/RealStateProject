
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Search, Building2, MapPin } from 'lucide-react';

export default function Home() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const popularCities = [
    { name: 'Hyderabad', image: '/hyderbad.png' },
    { name: 'Bangalore', image: '/banglore.webp' },
    { name: 'Delhi', image: '/delhi.jpg' },
    { name: 'Mumbai', image: '/mumbai.webp' }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/city/${searchQuery}`);
    }
  };

  const handleCityClick = (cityName: string) => {
    router.push(`/city/${cityName}`);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Find Your Perfect Home
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-100">
            Explore real estate projects across major Indian cities
          </p>
          
          {/* Search Form */}
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Enter city name..."
                  className="w-full h-12 pl-10 pr-4 rounded-lg text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="px-6 h-12 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Popular Cities */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Popular Cities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularCities.map((city) => (
            <div
              key={city.name}
              className="relative group cursor-pointer rounded-lg overflow-hidden shadow-lg"
              onClick={() => handleCityClick(city.name)}
            >
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
              <div className="h-64 w-full relative">
                <Image
                  src={city.image}
                  alt={city.name}
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="text-xl font-semibold">{city.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-muted py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Why Choose Our Platform
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Building2 className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Verified Projects</h3>
              <p className="text-muted-foreground">
                All listed projects are verified and trustworthy
              </p>
            </div>
            <div className="text-center p-6">
              <MapPin className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Interactive Maps</h3>
              <p className="text-muted-foreground">
                Explore projects with our interactive map interface
              </p>
            </div>
            <div className="text-center p-6">
              <Search className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Easy Search</h3>
              <p className="text-muted-foreground">
                Find properties quickly with our advanced search
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}