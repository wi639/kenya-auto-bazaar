import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Gauge, Fuel, Calendar, Zap, ShieldCheck, CheckCircle2, Phone } from 'lucide-react';
import { Car } from '../../data/cars';
import { formatPrice } from '../../lib/utils';
import { toast } from 'sonner';

interface CarModalProps {
  car: Car;
  onClose: () => void;
}

export const CarModal = ({ car, onClose }: CarModalProps) => {
  const handleInquiry = () => {
    toast.success("Inquiry sent! A dealer will contact you shortly.");
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
          onClick={onClose}
        />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-5xl bg-white rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
        >
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 z-10 p-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white md:text-slate-900 md:bg-slate-100 md:hover:bg-slate-200"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Left: Image Gallery */}
          <div className="w-full md:w-1/2 relative bg-slate-100 h-64 md:h-auto">
            <img 
              src={car.image} 
              alt={car.model}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-6 left-6 right-6 flex gap-2">
              <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-green-500" />
                <span className="text-xs font-bold text-slate-900">Verified Listing</span>
              </div>
            </div>
          </div>

          {/* Right: Details */}
          <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto">
            <div className="mb-8">
              <div className="flex items-center gap-2 text-slate-500 mb-2">
                <span className="text-sm font-semibold">{car.year}</span>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm font-semibold">{car.location}, Kenya</span>
                </div>
              </div>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-2">{car.make} {car.model}</h2>
              <div className="text-3xl font-black text-red-600">{formatPrice(car.price)}</div>
            </div>

            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center p-4 bg-slate-50 rounded-2xl">
                <Gauge className="w-6 h-6 text-slate-400 mb-1" />
                <span className="text-[10px] text-slate-400 font-bold uppercase">Mileage</span>
                <span className="text-sm font-bold text-slate-700">{car.mileage.toLocaleString()} km</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-slate-50 rounded-2xl">
                <Fuel className="w-6 h-6 text-slate-400 mb-1" />
                <span className="text-[10px] text-slate-400 font-bold uppercase">Fuel</span>
                <span className="text-sm font-bold text-slate-700">{car.fuel}</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-slate-50 rounded-2xl">
                <Zap className="w-6 h-6 text-slate-400 mb-1" />
                <span className="text-[10px] text-slate-400 font-bold uppercase">Transmission</span>
                <span className="text-sm font-bold text-slate-700">{car.transmission}</span>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Description</h3>
              <p className="text-slate-600 leading-relaxed">
                {car.description}
              </p>
            </div>

            <div className="mb-10">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Key Features</h3>
              <div className="grid grid-cols-2 gap-y-3">
                {car.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <button 
                onClick={handleInquiry}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-red-500/30 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Contact Seller
              </button>
              <button className="px-6 py-4 bg-slate-900 hover:bg-black text-white rounded-2xl transition-all">
                Save
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};