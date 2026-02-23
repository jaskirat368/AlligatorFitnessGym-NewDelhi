import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { PageWrapper } from '../components/PageWrapper';
import { TiltCard } from '../components/TiltCard';
import { Reveal } from '../components/Reveal';
import { BUSINESS_INFO, PROGRAMS, REVIEWS } from '../constants';

export const Home: React.FC = () => {
  return (
    <PageWrapper className="bg-gray-950">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center bg-gray-950 text-white overflow-hidden pt-32 pb-20">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Alligator Fitness Gym Interior" 
            className="w-full h-full object-cover opacity-30 scale-105 animate-pulse-slow"
          />
          {/* Premium Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/50 to-gray-950"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-green-900/40 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center mt-12 md:mt-0">
          
          {/* Trust Badge with Floating Animation */}
          <div className="mb-8 inline-flex items-center px-5 py-2 rounded-full border border-green-500/30 bg-green-900/20 backdrop-blur-md shadow-[0_0_15px_rgba(46,190,99,0.2)] animate-float">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-primary animate-pulse mr-3"></span>
            <span className="text-brand-primary font-sans font-bold tracking-widest text-sm uppercase">#1 Rated Gym in Paharganj</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-black mb-8 tracking-tight uppercase leading-[1.1] drop-shadow-2xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-brand-primary to-green-400 filter drop-shadow-sm">Professional</span> Gym & <br className="hidden lg:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-brand-primary to-green-400 filter drop-shadow-sm">Fitness</span> Training <br className="hidden md:block lg:hidden"/>
            <span className="block mt-2 text-white">In New Delhi</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed opacity-90">
            Certified coaching · Clean environment · Result-focused training
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16 w-full sm:w-auto">
            <a href={`tel:${BUSINESS_INFO.phone}`} className="w-full sm:w-auto group">
              <Button variant="primary" className="w-full sm:w-auto text-lg px-10 py-4">
                START NOW 
                <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Button>
            </a>
            <Link to="/contact" className="w-full sm:w-auto">
              {/* Uses Outline Variant (White border, White text -> Hover: White bg, Dark Text) */}
              <Button variant="outline" className="w-full sm:w-auto text-lg px-10 py-4 backdrop-blur-sm">
                📍 VISIT GYM
              </Button>
            </Link>
          </div>

          {/* Social Proof Bar */}
          <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-8 bg-white/5 rounded-2xl px-8 py-4 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors duration-300 cursor-default">
             <div className="flex items-center space-x-2">
                 <div className="flex text-yellow-400 text-lg drop-shadow-md">
                    {'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}
                 </div>
                 <span className="font-heading font-bold text-white text-xl">4.8</span>
             </div>
             <div className="hidden md:block w-px h-8 bg-gray-700"></div>
             <div className="text-center md:text-left">
               <p className="text-gray-300 text-sm font-medium">Trusted by Community</p>
               <p className="text-white text-xs font-bold uppercase tracking-wider opacity-80">551+ Google Reviews</p>
             </div>
          </div>
        </div>
        
        {/* Subtle Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block opacity-50">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7-7-7" />
            </svg>
        </div>
      </section>

      {/* Programs Overview with 3D Tilt */}
      <section className="py-20 bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight drop-shadow-lg">Our Training Programs</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">We offer diverse training options suited for every fitness level.</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROGRAMS.slice(0, 9).map((program, index) => (
              <Reveal key={program.id} delay={index * 0.1} className="h-full">
                <TiltCard className="h-full">
                  <Link to="/programs" className="group block bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-700 h-full">
                    <div className="h-48 overflow-hidden relative">
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                      <img src={program.image} alt={program.title} className="w-full h-full object-cover transition-transform duration-500" />
                    </div>
                    <div className="p-6">
                      <h3 className="font-heading text-xl font-bold text-white group-hover:text-brand-primary transition-colors mb-2">{program.title}</h3>
                      <p className="text-gray-400 mb-4 line-clamp-2">{program.shortDescription}</p>
                      <span className="text-brand-primary font-semibold text-sm group-hover:text-green-400 group-hover:underline">Learn More →</span>
                    </div>
                  </Link>
                </TiltCard>
              </Reveal>
            ))}
          </div>
          
          <Reveal delay={0.4}>
            <div className="text-center mt-12">
              <Link to="/programs">
                {/* Changed to outline-brand to ensure correct color behavior */}
                <Button variant="outline-brand">View All Programs</Button>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Special Amenities Section - Flip Cards */}
      <section className="py-24 bg-gray-950 relative overflow-hidden border-t border-gray-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900/10 via-gray-950 to-gray-950"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight drop-shadow-lg">
                Premium <span className="text-brand-primary">Amenities</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Hover over Or Touch the cards to see what we offer.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {/* Amenity Flip Cards */}
            {[
                { icon: "☕", title: "Cafeteria", desc: "Healthy, delicious diet food to fuel your post-workout recovery." },
                { icon: "🧖", title: "Sauna & Spa", desc: "Relax your muscles and detoxify in our premium steam & sauna rooms." },
                { icon: "✂️", title: "Unisex Salon", desc: "Look as good as you feel with our on-site grooming services." },
                { icon: "🛋️", title: "Chill Zone", desc: "A comfortable lounge area to relax and socialize with members." },
                { icon: "📶", title: "Free WiFi", desc: "High-speed internet so you can stream music or work on the go." }
            ].map((item, index) => (
                <Reveal key={index} delay={index * 0.1} direction="up" className="h-64">
                  <div className="group h-full w-full cursor-pointer [perspective:1000px]">
                      {/* 
                         Using Tailwind arbitrary values for 3D transforms to ensure functionality:
                         [transform-style:preserve-3d] - Ensures child elements exist in 3D space
                         group-hover:[transform:rotateY(180deg)] - Rotates the card 180deg on hover
                      */}
                      <div className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] rounded-2xl shadow-xl">
                          {/* Front Face */}
                          <div className="absolute inset-0 [backface-visibility:hidden] w-full h-full bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
                              <div className="w-16 h-16 mb-5 rounded-full bg-gray-800 flex items-center justify-center text-3xl text-white shadow-lg ring-1 ring-white/5">
                                  {item.icon}
                              </div>
                              <h3 className="text-white font-bold text-lg">{item.title}</h3>
                              <p className="text-xs text-brand-primary mt-2 font-medium tracking-wide">HOVER OR TOUCH TO FLIP</p>
                          </div>

                          {/* Back Face */}
                          {/* [transform:rotateY(180deg)] rotates the back face so it's hidden initially */}
                          <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] w-full h-full bg-gradient-to-br from-brand-primary to-green-800 rounded-2xl p-6 flex flex-col items-center justify-center text-center border border-green-600">
                              <div className="text-4xl mb-3">✨</div>
                              <h3 className="text-white font-bold mb-2">{item.title}</h3>
                              <p className="text-sm text-white/90 font-medium leading-relaxed">{item.desc}</p>
                          </div>
                      </div>
                  </div>
                </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-800 text-white relative overflow-hidden">
        {/* Changed bg from brand-primary to gray-800 to avoid overwhelming brightness, using brand-primary as accents/gradients instead */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-green-900/40"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <Reveal direction="left">
              <div>
                <h2 className="font-heading text-4xl md:text-5xl font-black mb-6 text-white uppercase tracking-tight drop-shadow-lg">
                  <span className="text-brand-primary">Why Choose</span> Alligator Fitness?
                </h2>
                <ul className="space-y-6">
                  {[
                    "Experienced & Certified Trainers",
                    "Top-tier Modern Equipment",
                    "Separate Sections for Cardio & Strength",
                    "Hygienic, Clean & Safe Environment",
                    "Supportive Community Atmosphere",
                    "Personalized Attention"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <span className="bg-brand-primary/10 backdrop-blur-sm text-brand-primary rounded-full p-1 border border-brand-primary/20">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-lg font-medium text-gray-100">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-10">
                  <Link to="/about">
                    {/* Using outline-brand here gives a green outline on dark bg, which looks better than white outline on hover */}
                    <Button variant="outline-brand">Learn About Our Story</Button>
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.3}>
              <TiltCard>
                  <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl border border-gray-700 group">
                  {/* Updated image to be black and white and seamless */}
                  <img 
                      src="https://lh3.googleusercontent.com/p/AF1QipN9QTW4mczAv_OkvLMdz_XcSWWDpcLsnQfosNXV=s1360-w1360-h1020-rw" 
                      alt="Alligator Fitness Interior" 
                      className="w-full h-full object-cover grayscale brightness-90 contrast-125 transition-all duration-500 group-hover:scale-105"
                  />
                  {/* Overlays for seamless integration */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 bg-green-900/10 mix-blend-overlay"></div>
                  </div>
              </TiltCard>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Reviews Preview with Tilt */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight drop-shadow-lg">What Our Members Say</h2>
              <div className="flex justify-center items-center space-x-2">
                <span className="text-yellow-500 text-2xl">★★★★★</span>
                <span className="text-gray-400 font-semibold">4.8/5 based on 551 Reviews</span>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.slice(0, 3).map((review, index) => (
              <Reveal key={review.id} delay={index * 0.15} className="h-full">
                <TiltCard className="h-full">
                  <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 shadow-lg hover:border-gray-700 transition-colors h-full">
                      <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                          {review.author[0]}
                      </div>
                      <div className="ml-3">
                          <p className="font-bold text-gray-100">{review.author}</p>
                          <p className="text-xs text-gray-500">{review.timeAgo}</p>
                      </div>
                      </div>
                      <div className="mb-4 text-yellow-500 text-sm">★★★★★</div>
                      <p className="text-gray-300 text-sm leading-relaxed line-clamp-4">"{review.text}"</p>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.4} direction="up">
            <div className="text-center mt-12">
              <Link to="/reviews">
                {/* Standard outline looks elegant here on black bg */}
                <Button variant="outline">Read More Reviews</Button>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Final CTA - Green Background with Grey Dotted Pattern */}
      <section className="py-20 relative overflow-hidden bg-brand-primary">
        {/* Dotted Pattern Overlay - Using radial gradient for seamless grey dots */}
        <div 
            className="absolute inset-0 opacity-20 pointer-events-none" 
            style={{ 
                backgroundImage: 'radial-gradient(#374151 2px, transparent 2px)', 
                backgroundSize: '24px 24px' 
            }}
        ></div>
        
        {/* Subtle gradient overlay to add depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>

        <Reveal direction="up" threshold={0.3}>
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="font-heading text-4xl sm:text-5xl font-black text-white mb-6 uppercase tracking-tight drop-shadow-lg">Ready to Transform Your Life?</h2>
            <p className="text-xl text-green-50 mb-10 font-medium">Don't wait for tomorrow. Start your fitness journey with Alligator Fitness today.</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a href={`tel:${BUSINESS_INFO.phone}`} className="w-full sm:w-auto">
                {/* Secondary variant (White) provides better contrast against the green background */}
                <Button variant="secondary" className="w-full sm:w-auto text-lg px-10 py-4 shadow-xl">
                  Call Now to Join
                </Button>
              </a>
              <Link to="/contact" className="w-full sm:w-auto">
                {/* Outline with white border works well on green */}
                <Button variant="outline" className="w-full sm:w-auto text-lg px-10 py-4 hover:bg-white hover:text-brand-primary">
                  View Location
                </Button>
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </PageWrapper>
  );
};