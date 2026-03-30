import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/home/Hero';
import { CarGrid } from './components/home/CarGrid';
import { Footer } from './components/shared/Footer';
import { Toaster } from 'sonner';
import { motion } from 'framer-motion';
import { Trophy, Star, Shield, Zap } from 'lucide-react';

const Features = () => {
  const items = [
    { icon: Trophy, title: 'Award Winning', desc: 'Best dealership in the region for 3 consecutive years.' },
    { icon: Shield, title: '100% Inspected', desc: 'Every car goes through a rigorous 150-point quality check.' },
    { icon: Star, title: 'Premium Service', desc: 'Personalized concierge service for every single client.' },
    { icon: Zap, title: 'Instant Valuation', desc: 'Get a fair market price for your car in minutes.' }
  ];

  return (
    <section id="about" className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {items.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:rotate-6 transition-all duration-300">
                <item.icon className="w-8 h-8 text-red-600 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-500">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto bg-red-600 rounded-[3rem] p-12 md:p-24 relative overflow-hidden">
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8">Ready to sell your car?</h2>
          <p className="text-red-100 text-xl mb-12">
            Get the best market price in Kenya. We handle all the paperwork while you sit back and relax.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-red-600 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all">
              List Your Car Now
            </button>
            <button className="bg-red-700 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-red-800 transition-all border border-red-500">
              Contact Sales
            </button>
          </div>
        </div>
        
        {/* Abstract background shapes */}
        <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-500 rounded-full blur-3xl opacity-50" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-400 rounded-full blur-3xl opacity-30" />
        </div>
      </div>
    </section>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CarGrid />
        <CTA />
      </main>
      <Footer />
      <Toaster position="top-right" richColors />
    </div>
  );
}

export default App;