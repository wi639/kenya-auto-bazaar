import React, { useState, useMemo } from 'react';
import { cars, Car } from '../../data/cars';
import { CarCard } from './CarCard';
import { CarModal } from './CarModal';
import { Search, Car as CarIcon } from 'lucide-react';

export const CarGrid = () => {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCars = useMemo(() => {
    return cars.filter(car => {
      const matchesCategory = activeCategory === 'All' || car.description.toLowerCase().includes(activeCategory.toLowerCase()) || car.model.toLowerCase().includes(activeCategory.toLowerCase());
      const matchesSearch = car.make.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            car.model.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="inventory" className="py-24 bg-slate-50 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Featured Listings</h2>
            <p className="text-slate-500 max-w-xl">
              Explore our hand-picked selection of premium vehicles, thoroughly inspected for quality and reliability.
            </p>
          </div>
          <div className="flex flex-col gap-4">
             <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search inventory..." 
                className="bg-white border border-slate-200 rounded-full pl-10 pr-6 py-2 focus:ring-2 focus:ring-red-600 transition-all outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
              {['All', 'SUV', 'Sedan', 'Pickup', 'Hatchback'].map((tag) => (
                <button 
                  key={tag}
                  onClick={() => setActiveCategory(tag)}
                  className={`px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
                    activeCategory === tag ? 'bg-red-600 text-white shadow-lg shadow-red-500/30' : 'bg-white text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        {filteredCars.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCars.map((car) => (
              <CarCard key={car.id} car={car} onClick={setSelectedCar} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-[2rem] p-12 text-center shadow-sm">
             <CarIcon className="w-12 h-12 text-slate-300 mx-auto mb-4" />
             <h3 className="text-xl font-bold text-slate-900">No cars found</h3>
             <p className="text-slate-500">Try adjusting your filters or search query.</p>
             <button 
              onClick={() => {setSearchQuery(''); setActiveCategory('All');}}
              className="mt-6 text-red-600 font-bold hover:underline"
             >
              Reset Filters
             </button>
          </div>
        )}
      </div>

      {selectedCar && (
        <CarModal car={selectedCar} onClose={() => setSelectedCar(null)} />
      )}
    </section>
  );
};