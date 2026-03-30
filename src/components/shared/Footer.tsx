import React from 'react';
import { Phone, Mail, MapPin, Car, Send, Share2, MessageCircle, Globe } from 'lucide-react';

export const Footer = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-400 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-red-600 p-2 rounded-lg">
                <Car className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                Auto<span className="text-red-600">Ke</span>
              </span>
            </div>
            <p className="mb-8 leading-relaxed">
              Kenya's most trusted marketplace for buying and selling vehicles. Quality and transparency at every step.
            </p>
            <div className="flex gap-4">
              {[Globe, Share2, MessageCircle].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-white transition-colors">Our Inventory</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sell Your Car</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Financing Options</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Safety Tips</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-600 shrink-0" />
                <span>Valley Arcade, Lavington, Nairobi, Kenya</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-red-600 shrink-0" />
                <span>+254 700 000 000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-red-600 shrink-0" />
                <span>hello@autoke.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Newsletter</h4>
            <p className="mb-6 text-sm">Subscribe to get the latest car deals and news.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-slate-800 border-none rounded-xl py-4 pl-4 pr-12 focus:ring-2 focus:ring-red-600 transition-all text-white"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-red-600 p-2.5 rounded-lg text-white hover:bg-red-700">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm">© 2024 AutoKe Kenya. All rights reserved.</p>
          <div className="flex gap-8 text-sm">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};