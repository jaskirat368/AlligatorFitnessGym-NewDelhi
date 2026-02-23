import React from 'react';
import { Button } from '../components/Button';
import { PROGRAMS, BUSINESS_INFO } from '../constants';
import { Link } from 'react-router-dom';
import { PageWrapper } from '../components/PageWrapper';
import { TiltCard } from '../components/TiltCard';

export const Programs: React.FC = () => {
  return (
    <PageWrapper className="pt-20 min-h-screen bg-gray-950">
      <div className="bg-brand-primary text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="font-heading text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight drop-shadow-lg">Our Training Programs</h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">Expertly designed programs to help you achieve your specific fitness goals.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROGRAMS.map((program) => (
            <TiltCard key={program.id} className="h-full">
                <Link 
                  to={`/programs/${program.id}`}
                  className="group block bg-gray-900 rounded-xl shadow-lg overflow-hidden border border-gray-800 hover:border-green-500/50 hover:shadow-green-900/20 transition-all duration-300 flex flex-col h-full"
                >
                    {/* Image Section */}
                    <div className="w-full h-56 overflow-hidden relative">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                    <img 
                        src={program.image} 
                        alt={program.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-grow flex flex-col">
                    <h3 className="font-heading text-xl font-bold mb-3 text-white group-hover:text-green-400 transition-colors">
                        {program.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                        {program.shortDescription}
                    </p>
                    
                    {/* Learn More Button */}
                    <div className="mt-auto pt-4 border-t border-gray-800 group-hover:border-gray-700 transition-colors">
                        <span className="inline-flex items-center text-green-400 font-bold text-sm tracking-wide group-hover:text-green-300">
                        LEARN MORE 
                        <svg className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                        </span>
                    </div>
                    </div>
                </Link>
            </TiltCard>
          ))}
        </div>

        <div className="text-center pt-16 pb-12 border-t border-gray-800 mt-16">
            <h3 className="text-2xl font-bold mb-6 text-white">Not sure which program fits you?</h3>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href={`tel:${BUSINESS_INFO.phone}`}>
                    <Button variant="primary" className="w-full sm:w-auto">Call for Free Consultation</Button>
                </a>
                <Link to="/contact">
                    <Button variant="outline" className="w-full sm:w-auto border-gray-500 text-gray-300 hover:border-green-400 hover:text-green-400 hover:bg-transparent">Visit Us</Button>
                </Link>
            </div>
        </div>
      </div>
    </PageWrapper>
  );
};