import React from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 text-white pt-20 pb-10 relative overflow-hidden border-t border-gray-900">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-green-900/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[10%] right-[5%] w-[30%] h-[30%] bg-brand-primary/5 rounded-full blur-[80px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6 group">
                <span className="font-heading font-black text-2xl md:text-3xl tracking-tighter text-white transition-colors uppercase inline-block">
                    ALLIGATOR
                    <span className="text-brand-primary ml-2 drop-shadow-[0_0_8px_rgba(46,190,99,0.8)]">
                    FITNESS
                    </span>
                </span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed text-sm">
              We are dedicated to building a stronger, healthier community in New Delhi. 
              Join us to experience professional training in a premium environment.
            </p>
            <div className="flex space-x-4">
              {/* Instagram Button */}
              <a 
                href="https://www.instagram.com/alligatorgym01?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all duration-300 shadow-lg group"
                aria-label="Follow us on Instagram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-bold mb-6 text-white tracking-wide">Explore</h4>
            <ul className="space-y-4">
              <li><Link to="/programs" className="text-gray-400 hover:text-brand-primary transition-colors text-sm font-medium hover:pl-2 duration-300 block">Training Programs</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-brand-primary transition-colors text-sm font-medium hover:pl-2 duration-300 block">About Us</Link></li>
              <li><Link to="/reviews" className="text-gray-400 hover:text-brand-primary transition-colors text-sm font-medium hover:pl-2 duration-300 block">Success Stories</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-brand-primary transition-colors text-sm font-medium hover:pl-2 duration-300 block">Contact Us</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-heading text-lg font-bold mb-6 text-white tracking-wide">Support</h4>
            <ul className="space-y-4">
              <li><Link to="/faq" className="text-gray-400 hover:text-brand-primary transition-colors text-sm font-medium hover:pl-2 duration-300 block">FAQ</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-brand-primary transition-colors text-sm font-medium hover:pl-2 duration-300 block">Membership Info</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-brand-primary transition-colors text-sm font-medium hover:pl-2 duration-300 block">Book a Tour</Link></li>
              <li><a href={`tel:${BUSINESS_INFO.phone}`} className="text-gray-400 hover:text-brand-primary transition-colors text-sm font-medium hover:pl-2 duration-300 block">Speak to Manager</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-bold mb-6 text-white tracking-wide">Visit Us</h4>
            <div className="space-y-4 text-sm text-gray-400">
              <p className="flex items-start leading-relaxed">
                <span className="mr-3 text-brand-primary mt-1">📍</span>
                <span>{BUSINESS_INFO.address}</span>
              </p>
              <p className="flex items-center">
                <span className="mr-3 text-brand-primary">📞</span>
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-white transition-colors font-semibold tracking-wide">{BUSINESS_INFO.phoneDisplay}</a>
              </p>
              <div className="pt-4 mt-4 border-t border-gray-800">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Opening Hours</p>
                <p className="text-white">Mon-Sat: {BUSINESS_INFO.timings.weekdays}</p>
                <p className="text-red-400">Sun: {BUSINESS_INFO.timings.sunday}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} Alligator Fitness Gym. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-brand-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};