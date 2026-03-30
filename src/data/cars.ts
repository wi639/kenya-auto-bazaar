export interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  image: string;
  mileage: number;
  fuel: string;
  transmission: string;
  location: string;
  description: string;
  features: string[];
}

export const cars: Car[] = [
  {
    id: '1',
    make: 'Toyota',
    model: 'Land Cruiser Prado',
    year: 2021,
    price: 8500000,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/0e55971f-5079-4fb4-b474-ce0d59e3cc0a/car-toyota-prado-d48188e7-1774856265781.webp',
    mileage: 15000,
    fuel: 'Diesel',
    transmission: 'Automatic',
    location: 'Nairobi',
    description: 'Immaculate condition, fully loaded with leather interior and sunroof. Recent import with low mileage.',
    features: ['Leather Seats', 'Sunroof', '4WD', 'Backup Camera', 'Navigation System']
  },
  {
    id: '2',
    make: 'Mercedes Benz',
    model: 'C-Class',
    year: 2019,
    price: 4200000,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/0e55971f-5079-4fb4-b474-ce0d59e3cc0a/car-mercedes-cclass-df609331-1774856269519.webp',
    mileage: 45000,
    fuel: 'Petrol',
    transmission: 'Automatic',
    location: 'Mombasa',
    description: 'Smooth driving experience with premium finishes. Well maintained and very clean interior.',
    features: ['Ambient Lighting', 'Heated Seats', 'Bluetooth', 'Parking Sensors']
  },
  {
    id: '3',
    make: 'Subaru',
    model: 'Forester',
    year: 2018,
    price: 2800000,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/0e55971f-5079-4fb4-b474-ce0d59e3cc0a/car-subaru-forester-7dc55a43-1774856265777.webp',
    mileage: 62000,
    fuel: 'Petrol',
    transmission: 'CVT',
    location: 'Nairobi',
    description: 'Perfect family SUV with symmetrical AWD. Great for both city and off-road trips.',
    features: ['AWD', 'EyeSight Technology', 'Roof Rails', 'Alloy Wheels']
  },
  {
    id: '4',
    make: 'Volkswagen',
    model: 'Golf GTI',
    year: 2020,
    price: 3800000,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/0e55971f-5079-4fb4-b474-ce0d59e3cc0a/car-vw-golf-ce950ae3-1774856265573.webp',
    mileage: 28000,
    fuel: 'Petrol',
    transmission: 'DSG',
    location: 'Eldoret',
    description: 'The ultimate hot hatch. Fast, fun, and practical for daily use.',
    features: ['Turbocharged', 'Sport Suspension', 'Digital Cockpit', 'Apple CarPlay']
  },
  {
    id: '5',
    make: 'Isuzu',
    model: 'D-Max',
    year: 2022,
    price: 5500000,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/0e55971f-5079-4fb4-b474-ce0d59e3cc0a/car-isuzu-dmax-5734a19b-1774856265659.webp',
    mileage: 12000,
    fuel: 'Diesel',
    transmission: 'Manual',
    location: 'Kisumu',
    description: 'Workhorse that never gives up. Excellent towing capacity and fuel efficiency.',
    features: ['Payload capacity 1.1T', 'Diff Lock', 'Bluetooth', 'Air Conditioning']
  },
  {
    id: '6',
    make: 'BMW',
    model: 'X5',
    year: 2020,
    price: 7800000,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/0e55971f-5079-4fb4-b474-ce0d59e3cc0a/car-bmw-x5-c00ef17c-1774856265776.webp',
    mileage: 35000,
    fuel: 'Diesel',
    transmission: 'Automatic',
    location: 'Nairobi',
    description: 'Luxury meets performance. High specification with executive package.',
    features: ['Panoramic Roof', '360 Camera', 'Heated Steering', 'Gesture Control']
  }
];