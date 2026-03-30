import React from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, ChevronRight } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://storage.googleapis.com/dala-prod-public-storage/generated-images/0e55971f-5079-4fb4-b474-ce0d59e3cc0a/hero-bg-0096ba26-1774856265677.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="inline-block bg-red-600 text-white px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase mb-6">
            Leading Dealership in Kenya
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            Find Your Dream <br />
            <span className="text-red-500">Ride In Kenya</span>
          </h1>
          <p className="text-lg text-slate-200 mb-8 leading-relaxed">
            Browse through thousands of certified pre-owned and new vehicles from verified sellers across Nairobi, Mombasa, and beyond.
          </p>

          <div className="bg-white p-2 rounded-2xl shadow-2xl flex flex-col md:flex-row gap-2 max-w-3xl">
            <div className="flex-1 flex items-center gap-3 px-4 py-3 border-b md:border-b-0 md:border-r border-slate-100">
              <Search className="text-slate-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Search Make, Model..." 
                className="bg-transparent border-none focus:ring-0 text-slate-700 w-full"
              />
            </div>
            <div className="flex-1 flex items-center gap-3 px-4 py-3 border-b md:border-b-0 md:border-r border-slate-100">
              <MapPin className="text-slate-400 w-5 h-5" />
              <select className="bg-transparent border-none focus:ring-0 text-slate-700 w-full appearance-none">
                <option>All Locations</option>
                <option>Nairobi</option>
                <option>Mombasa</option>
                <option>Kisumu</option>
                <option>Eldoret</option>
              </select>
            </div>
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2">
              Search Inventory
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Floating stats */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-7xl px-6 hidden lg:block">
        <div className="flex gap-12 text-white">
          <div>
            <div className="text-3xl font-bold">1,500+</div>
            <div className="text-slate-400 text-sm">Cars Available</div>
          </div>
          <div className="w-px h-12 bg-white/10" />
          <div>
            <div className="text-3xl font-bold">450+</div>
            <div className="text-slate-400 text-sm">Verified Sellers</div>
          </div>
          <div className="w-px h-12 bg-white/10" />
          <div>
            <div className="text-3xl font-bold">12k+</div>
            <div className="text-slate-400 text-sm">Happy Customers</div>
          </div>
        </div>
      </div>
    </div>
  );
};