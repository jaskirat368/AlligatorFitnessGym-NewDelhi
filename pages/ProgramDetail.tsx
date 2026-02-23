import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PROGRAMS, BUSINESS_INFO } from '../constants';
import { Button } from '../components/Button';
import { PageWrapper } from '../components/PageWrapper';

export const ProgramDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const program = PROGRAMS.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!program) {
    return (
      <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center text-white pt-20">
        <h2 className="text-3xl font-bold mb-4">Program Not Found</h2>
        <Button onClick={() => navigate('/programs')}>Back to Programs</Button>
      </div>
    );
  }

  return (
    <PageWrapper className="pt-20 min-h-screen bg-gray-950">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/40 to-transparent z-20"></div>
        <img 
          src={program.image} 
          alt={program.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 z-30 p-8 md:p-16">
          <div className="max-w-7xl mx-auto">
            <Link to="/programs" className="inline-flex items-center text-green-400 hover:text-green-300 mb-4 font-semibold transition-colors">
              ← Back to Programs
            </Link>
            <h1 className="font-heading text-4xl md:text-6xl font-black text-white mb-4 uppercase tracking-tight drop-shadow-xl">
              {program.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl font-light">
              {program.shortDescription}
            </p>
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Methodology */}
            <section className="bg-gray-900 p-8 rounded-2xl border border-gray-800 shadow-xl">
              <div className="flex items-center mb-6">
                <span className="w-12 h-12 bg-green-900/30 text-green-400 rounded-lg flex items-center justify-center text-2xl mr-4 border border-green-500/20">🔧</span>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-white">How It Works</h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                {program.methodology}
              </p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {/* Target Audience */}
               <section className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-gray-700 transition-colors">
                  <h3 className="font-heading text-xl font-bold text-white mb-4 flex items-center">
                    <span className="mr-3 text-2xl">🎯</span> Who is this for?
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{program.targetAudience}</p>
               </section>

               {/* Expected Progress */}
               <section className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-gray-700 transition-colors">
                  <h3 className="font-heading text-xl font-bold text-white mb-4 flex items-center">
                    <span className="mr-3 text-2xl">📈</span> Expected Results
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{program.progress}</p>
               </section>

               {/* Common Problems */}
               <section className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-gray-700 transition-colors">
                  <h3 className="font-heading text-xl font-bold text-white mb-4 flex items-center">
                    <span className="mr-3 text-2xl">⚠️</span> Problems Solved
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{program.commonProblems}</p>
               </section>

               {/* Safety */}
               <section className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-gray-700 transition-colors">
                  <h3 className="font-heading text-xl font-bold text-white mb-4 flex items-center">
                    <span className="mr-3 text-2xl">🛡️</span> Safety First
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{program.safety}</p>
               </section>
            </div>

          </div>

          {/* Sidebar CTA */}
          <div className="lg:col-span-1">
            <div className="bg-brand-primary rounded-2xl p-8 sticky top-24 shadow-2xl border border-green-700">
              <h3 className="font-heading text-2xl font-bold text-white mb-4">Ready to Start?</h3>
              <p className="text-green-100 mb-8">
                Take the first step towards your goal. Book a visit or call us to discuss this program with a trainer.
              </p>
              
              <div className="space-y-4">
                <a href={`tel:${BUSINESS_INFO.phone}`} className="block">
                  <Button variant="secondary" fullWidth className="bg-white text-brand-primary hover:bg-gray-100 font-bold py-4">
                    Call {BUSINESS_INFO.phoneDisplay}
                  </Button>
                </a>
                <Link to="/contact" className="block">
                  <Button variant="outline" fullWidth className="border-green-300 text-white hover:bg-green-700 py-4">
                    Book a Visit
                  </Button>
                </Link>
              </div>

              <div className="mt-8 pt-8 border-t border-green-700/50">
                <p className="text-sm text-green-200 text-center">
                  📍 Located in Paharganj, New Delhi
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </PageWrapper>
  );
};