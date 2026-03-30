import React, { useState, useEffect } from 'react';
import { Menu, X, Car, Phone, MapPin, Search } from 'lucide-react';
import { cn } from '../../lib/utils';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "bg-white/90 backdrop-blur-md shadow-md py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-red-600 p-2 rounded-lg">
            <Car className="text-white w-6 h-6" />
          </div>
          <span className={cn(
            "text-2xl font-bold tracking-tight",
            isScrolled ? "text-slate-900" : "text-white"
          )}>
            Auto<span className="text-red-600">Ke</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className={cn(
          "hidden md:flex items-center gap-8 font-medium",
          isScrolled ? "text-slate-700" : "text-white/90"
        )}>
          <a href="#" className="hover:text-red-600 transition-colors">Home</a>
          <a href="#inventory" className="hover:text-red-600 transition-colors">Inventory</a>
          <a href="#about" className="hover:text-red-600 transition-colors">About</a>
          <a href="#contact" className="hover:text-red-600 transition-colors">Contact</a>
          <button className="bg-red-600 text-white px-6 py-2.5 rounded-full hover:bg-red-700 transition-all shadow-lg hover:shadow-red-500/30">
            Sell Your Car
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className={isScrolled ? "text-slate-900" : "text-white"} />
          ) : (
            <Menu className={isScrolled ? "text-slate-900" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-xl p-6 flex flex-col gap-4 md:hidden animate-in slide-in-from-top duration-300">
          <a href="#" className="text-slate-700 font-medium py-2">Home</a>
          <a href="#inventory" className="text-slate-700 font-medium py-2">Inventory</a>
          <a href="#about" className="text-slate-700 font-medium py-2">About</a>
          <a href="#contact" className="text-slate-700 font-medium py-2">Contact</a>
          <button className="bg-red-600 text-white px-6 py-3 rounded-xl font-bold">
            Sell Your Car
          </button>
        </div>
      )}
    </nav>
  );
};