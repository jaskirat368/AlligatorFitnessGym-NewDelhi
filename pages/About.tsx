import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { PageWrapper } from '../components/PageWrapper';
import { BUSINESS_INFO } from '../constants';

export const About: React.FC = () => {
  return (
    <PageWrapper className="pt-20 min-h-screen bg-gray-950">
      {/* Header */}
      <div className="bg-brand-primary text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="font-heading text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight drop-shadow-lg">About Alligator Fitness</h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">More than just a gym. We are a community dedicated to discipline, health, and progress.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="font-heading text-3xl font-bold text-white mb-6">Our Story & Philosophy</h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Located in the heart of Paharganj, Alligator Fitness Gym was established with a singular vision: to provide a professional, high-quality training facility accessible to everyone.
            </p>
            <p className="text-gray-300 mb-4 leading-relaxed">
              We believe that fitness is not a luxury, but a necessity. Our philosophy centers on <strong>discipline without intimidation</strong>. Whether you are a beginner stepping into a gym for the first time or an athlete looking to push limits, our doors are open.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We don't sell shortcuts. We provide the tools, the guidance, and the environment you need to do the work and see the results.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-800 h-80 md:h-96 relative group">
            <img 
              src="https://image2url.com/r2/default/images/1771516087160-51660339-35f7-45a3-8a5f-4c73fba29f6f.png" 
              alt="Alligator Fitness Gym Philosophy" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 shadow-lg text-center hover:bg-gray-800 transition-all hover:-translate-y-1">
            <div className="w-16 h-16 bg-gray-800 text-green-400 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl border border-gray-700">✨</div>
            <h3 className="font-heading text-xl font-bold mb-3 text-white">Hygiene First</h3>
            <p className="text-gray-400">We maintain rigorous cleaning protocols. Fresh air, sanitized equipment, and a spotless floor are our promises to you.</p>
          </div>
          <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 shadow-lg text-center hover:bg-gray-800 transition-all hover:-translate-y-1">
            <div className="w-16 h-16 bg-gray-800 text-green-400 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl border border-gray-700">🤝</div>
            <h3 className="font-heading text-xl font-bold mb-3 text-white">Supportive Environment</h3>
            <p className="text-gray-400">A "family vibe" where ego is left at the door. Our staff and members support each other's journeys.</p>
          </div>
          <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 shadow-lg text-center hover:bg-gray-800 transition-all hover:-translate-y-1">
            <div className="w-16 h-16 bg-gray-800 text-green-400 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl border border-gray-700">🏋️</div>
            <h3 className="font-heading text-xl font-bold mb-3 text-white">Modern Equipment</h3>
            <p className="text-gray-400">From squat racks and deadlift platforms to cardio machines and functional areas, we are fully equipped.</p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-brand-primary to-green-900 rounded-2xl p-10 md:p-16 text-center text-white shadow-2xl border border-green-800">
          <h2 className="font-heading text-3xl font-bold mb-6">Experience the Difference</h2>
          <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">Come visit us, feel the energy, and meet our trainers. No pressure, just a friendly tour.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={`tel:${BUSINESS_INFO.phone}`}>
              <Button variant="secondary" className="bg-white text-brand-primary font-bold hover:bg-gray-100">Call Now</Button>
            </a>
            <Link to="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white/10">Visit Us Today</Button>
            </Link>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};