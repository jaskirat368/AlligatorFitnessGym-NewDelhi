import React from 'react';
import { REVIEWS, BUSINESS_INFO } from '../constants';
import { Button } from '../components/Button';
import { PageWrapper } from '../components/PageWrapper';
import { TiltCard } from '../components/TiltCard';

export const Reviews: React.FC = () => {
  return (
    <PageWrapper className="pt-20 min-h-screen bg-gray-950">
      <div className="bg-brand-primary text-white py-16 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h1 className="font-heading text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight drop-shadow-lg">Member Success Stories</h1>
            
            <div className="flex flex-col items-center gap-6 mt-6">
                <div className="inline-flex items-center space-x-2 bg-black/30 backdrop-blur-sm rounded-full px-6 py-2 border border-white/20">
                    <span className="text-yellow-400 text-2xl">★★★★★</span>
                    <span className="font-semibold text-lg text-white">{BUSINESS_INFO.rating} Rating on Google</span>
                </div>
                
                <a href={BUSINESS_INFO.googleReviewUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-brand-primary transition-all duration-300">
                        <span className="mr-2">✍️</span> Leave a Review on Google
                    </Button>
                </a>
            </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.map((review) => (
                <TiltCard key={review.id} className="h-full">
                    <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 flex flex-col h-full hover:border-brand-primary/40 transition-all duration-300">
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-primary to-green-800 text-white flex items-center justify-center font-bold text-lg shadow">
                                    {review.author[0]}
                                </div>
                                <div className="ml-3">
                                    <h4 className="font-bold text-white text-sm">{review.author}</h4>
                                    <p className="text-xs text-gray-400">{review.details || 'Verified Member'}</p>
                                </div>
                            </div>
                            <span className="text-xs text-gray-500">{review.timeAgo}</span>
                        </div>
                        
                        <div className="flex text-yellow-400 text-sm mb-3">
                            {'★'.repeat(review.rating)}
                        </div>

                        <p className="text-gray-300 text-sm leading-relaxed flex-grow">
                            "{review.text}"
                        </p>

                        {review.likes && review.likes > 0 ? (
                            <div className="mt-4 flex items-center text-xs text-gray-500">
                                <span className="mr-1">👍</span> {review.likes}
                            </div>
                        ) : null}
                    </div>
                </TiltCard>
            ))}
        </div>

        <div className="mt-20 text-center bg-gradient-to-r from-brand-primary to-green-900 rounded-2xl p-12 text-white border border-green-800 shadow-2xl">
            <h2 className="font-heading text-3xl font-bold mb-4">Join our satisfied members</h2>
            <p className="mb-8 text-green-100">Experience the best workout environment in Paharganj.</p>
            <a href={`tel:${BUSINESS_INFO.phone}`}>
                <Button variant="secondary" className="bg-white text-brand-primary font-bold hover:bg-gray-100 border-none">Start Your Journey Today</Button>
            </a>
        </div>
      </div>
    </PageWrapper>
  );
};