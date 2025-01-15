export async function geocodeLocation(location: string) {
    const API_KEY = process.env.NEXT_PUBLIC_POSITIONSTACK_API_KEY;
    const response = await fetch(
      `http://api.positionstack.com/v1/forward?access_key=${API_KEY}&query=${encodeURIComponent(location)}`
    );
    const data = await response.json();
    return {
      lat: data.data[0].latitude,
      lng: data.data[0].longitude
    };
  }