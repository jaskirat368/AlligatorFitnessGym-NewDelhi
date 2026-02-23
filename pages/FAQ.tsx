import React from 'react';
import { FAQS, BUSINESS_INFO } from '../constants';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { PageWrapper } from '../components/PageWrapper';

export const FAQ: React.FC = () => {
  return (
    <PageWrapper className="pt-20 min-h-screen bg-gray-950">
      <div className="bg-brand-primary text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="font-heading text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight drop-shadow-lg">Frequently Asked Questions</h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">Common questions about Alligator Fitness Gym.</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-6">
            {FAQS.map((faq, index) => (
                <div key={index} className="bg-gray-900 rounded-lg shadow-md p-6 md:p-8 border border-gray-800 border-l-4 border-l-brand-primary hover:border-gray-700 transition-colors">
                    <h3 className="font-heading text-lg font-bold text-white mb-3">{faq.question}</h3>
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
            ))}
        </div>

        <div className="mt-16 text-center border-t border-gray-800 pt-12">
            <h3 className="text-xl font-bold text-white mb-4">Have more questions?</h3>
            <div className="flex justify-center gap-4">
                <a href={`tel:${BUSINESS_INFO.phone}`}>
                    <Button variant="primary">Call Us Now</Button>
                </a>
                <Link to="/contact">
                    <Button variant="outline" className="border-gray-600 text-gray-300 hover:border-green-400 hover:text-green-400 hover:bg-transparent">Contact Page</Button>
                </Link>
            </div>
        </div>
      </div>
    </PageWrapper>
  );
};