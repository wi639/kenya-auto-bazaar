import React from 'react';
import { Calendar, Fuel, Gauge, MapPin } from 'lucide-react';
import { Car } from '../../data/cars';
import { formatPrice } from '../../lib/utils';
import { motion } from 'framer-motion';

interface CarCardProps {
  car: Car;
  onClick: (car: Car) => void;
}

export const CarCard = ({ car, onClick }: CarCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 group cursor-pointer"
      onClick={() => onClick(car)}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={car.image} 
          alt={`${car.make} ${car.model}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-md text-slate-900 px-3 py-1 rounded-full text-xs font-bold shadow-sm">
            {car.year}
          </span>
        </div>
        <div className="absolute bottom-4 right-4">
          <span className="bg-red-600 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">
            {formatPrice(car.price)}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-1 text-slate-400 text-xs mb-2">
          <MapPin className="w-3 h-3" />
          {car.location}, Kenya
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-4">
          {car.make} {car.model}
        </h3>

        <div className="grid grid-cols-3 gap-4 py-4 border-t border-slate-50">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1.5 text-slate-400">
              <Gauge className="w-4 h-4" />
              <span className="text-[10px] uppercase font-bold tracking-wider">Mileage</span>
            </div>
            <span className="text-sm font-semibold text-slate-700">{(car.mileage / 1000).toFixed(0)}k km</span>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1.5 text-slate-400">
              <Fuel className="w-4 h-4" />
              <span className="text-[10px] uppercase font-bold tracking-wider">Fuel</span>
            </div>
            <span className="text-sm font-semibold text-slate-700">{car.fuel}</span>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1.5 text-slate-400">
              <Calendar className="w-4 h-4" />
              <span className="text-[10px] uppercase font-bold tracking-wider">Year</span>
            </div>
            <span className="text-sm font-semibold text-slate-700">{car.year}</span>
          </div>
        </div>

        <button className="w-full mt-4 py-3 rounded-xl border-2 border-slate-100 text-slate-600 font-bold group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 transition-all">
          View Details
        </button>
      </div>
    </motion.div>
  );
};