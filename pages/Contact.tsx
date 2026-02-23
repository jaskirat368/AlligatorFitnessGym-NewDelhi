import React from 'react';
import { BUSINESS_INFO } from '../constants';
import { Button } from '../components/Button';
import { PageWrapper } from '../components/PageWrapper';

export const Contact: React.FC = () => {
  return (
    <PageWrapper className="pt-20 min-h-screen bg-gray-950">
      <div className="bg-brand-primary text-white py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <h1 className="font-heading text-4xl md:text-5xl font-black mb-6 relative z-10 uppercase tracking-tight drop-shadow-lg">Contact Us</h1>
        <p className="text-xl text-green-100 relative z-10">Visit us today for a tour of the facility.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Info Section */}
            <div className="space-y-10">
                <div className="bg-gray-900/80 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-gray-800 relative overflow-hidden group">
                    {/* Decorative background element */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
                    
                    <h2 className="font-heading text-3xl font-black text-white mb-8 border-l-4 border-brand-primary pl-6 relative z-10">
                        Get In Touch
                    </h2>
                    
                    <div className="grid grid-cols-1 gap-5 relative z-10">
                        {/* Phone Card */}
                        <div className="group/item flex items-center p-4 rounded-xl bg-gray-800/40 border border-gray-700/50 hover:border-green-500/50 hover:bg-gray-800 transition-all duration-300">
                            <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-2xl group-hover/item:scale-110 group-hover/item:bg-green-500/20 transition-all duration-300 text-green-400">
                                📞
                            </div>
                            <div className="ml-5">
                                <p className="text-[10px] text-green-400 font-bold uppercase tracking-widest mb-0.5">Call Us</p>
                                <a href={`tel:${BUSINESS_INFO.phone}`} className="text-lg font-bold text-white hover:text-green-400 transition-colors">
                                    {BUSINESS_INFO.phoneDisplay}
                                </a>
                            </div>
                        </div>

                        {/* Address Card */}
                        <div className="group/item flex items-center p-4 rounded-xl bg-gray-800/40 border border-gray-700/50 hover:border-green-500/50 hover:bg-gray-800 transition-all duration-300">
                            <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-2xl group-hover/item:scale-110 group-hover/item:bg-green-500/20 transition-all duration-300 text-green-400">
                                📍
                            </div>
                            <div className="ml-5">
                                <p className="text-[10px] text-green-400 font-bold uppercase tracking-widest mb-0.5">Visit Us</p>
                                <p className="text-gray-300 text-sm leading-relaxed">{BUSINESS_INFO.address}</p>
                            </div>
                        </div>

                        {/* Timings Card */}
                        <div className="group/item flex items-center p-4 rounded-xl bg-gray-800/40 border border-gray-700/50 hover:border-green-500/50 hover:bg-gray-800 transition-all duration-300">
                            <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-2xl group-hover/item:scale-110 group-hover/item:bg-green-500/20 transition-all duration-300 text-green-400">
                                🕒
                            </div>
                            <div className="ml-5">
                                <p className="text-[10px] text-green-400 font-bold uppercase tracking-widest mb-0.5">Opening Hours</p>
                                <p className="text-white font-medium text-sm">Mon-Sat: {BUSINESS_INFO.timings.weekdays}</p>
                                <p className="text-red-400 text-xs mt-0.5 font-medium">Sunday: Closed</p>
                            </div>
                        </div>
                    </div>

                    {/* Unique Instagram Button */}
                    <div className="mt-8 relative z-10">
                        <a 
                            href="https://www.instagram.com/alligatorgym01?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/insta relative block w-full overflow-hidden rounded-2xl p-[2px] focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-transform hover:scale-[1.02] duration-300"
                        >
                            <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-purple-600 animate-gradient-xy opacity-75 group-hover/insta:opacity-100 transition-opacity"></span>
                            <div className="relative flex items-center justify-between bg-gray-900 rounded-2xl px-5 py-4 transition-all duration-300 group-hover/insta:bg-gray-900/90">
                                <div className="flex items-center space-x-4">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400 to-purple-600 rounded-full blur opacity-60 group-hover/insta:opacity-100 transition-opacity"></div>
                                        <div className="relative w-10 h-10 bg-black rounded-full flex items-center justify-center text-white">
                                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-white font-bold text-base group-hover/insta:text-transparent group-hover/insta:bg-clip-text group-hover/insta:bg-gradient-to-r group-hover/insta:from-yellow-400 group-hover/insta:to-pink-500 transition-all">Follow on Instagram</p>
                                        <p className="text-gray-400 text-[10px] uppercase tracking-wider">@alligatorgym01</p>
                                    </div>
                                </div>
                                <div className="text-gray-500 group-hover/insta:translate-x-1 transition-transform duration-300 group-hover/insta:text-white">
                                    →
                                </div>
                            </div>
                        </a>
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-gray-800 relative z-10">
                        <a href={`tel:${BUSINESS_INFO.phone}`} className="block">
                            <Button fullWidth className="py-4 text-lg shadow-[0_0_20px_rgba(34,197,94,0.2)] hover:shadow-[0_0_30px_rgba(34,197,94,0.4)]">
                                Call Now to Book a Visit
                            </Button>
                        </a>
                    </div>
                </div>
            </div>

            {/* Map Section */}
            <div className="h-[500px] bg-gray-800 rounded-xl overflow-hidden shadow-lg relative border border-gray-800">
                <iframe 
                    src={BUSINESS_INFO.mapEmbedUrl}
                    width="100%" 
                    height="100%" 
                    style={{border: 0}} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Alligator Gym Location"
                    className="w-full h-full"
                ></iframe>
                
                {/* Overlay hint */}
                <div className="absolute bottom-4 left-4 bg-gray-900 p-3 rounded shadow-md text-xs font-semibold text-white border border-gray-700 pointer-events-none">
                    Navigate via Google Maps
                </div>
            </div>
        </div>
      </div>
    </PageWrapper>
  );
};