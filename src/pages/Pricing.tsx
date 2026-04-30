import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Pricing = () => {
  const [billingType, setBillingType] = useState<'monthly' | 'per-session' | 'one-to-one' | 'premium'>('monthly');

  const plans = {
    monthly: [
      {
        name: 'SATs',
        prices: { oneSession: '£164/Month', twoSessions: '£260/Month' },
        features: ['SATs-focused curriculum', 'Practice tests', 'Exam strategies', 'Progress monitoring', 'Learning materials included'],
        recommended: false,
      },
      {
        name: '11 Plus and Entrance Exam',
        prices: { oneSession: '£168/Month', twoSessions: '£258/Month' },
        features: ['Expert 11+ preparation', 'Comprehensive exam coverage', 'Practice materials included', 'Progress tracking', 'Parent consultations'],
        recommended: false,
      },
      {
        name: 'Key Stage Maths & English',
        prices: { oneSession: '£142/Month', twoSessions: '£228/Month' },
        features: ['Combined subject expertise', 'Comprehensive coverage', 'Personalized learning plan', 'Regular progress reports', 'Study resources provided'],
        recommended: false,
      },
      {
        name: 'GCSE Maths/English/Science',
        prices: { oneSession: '£164/Month', twoSessions: '£260/Month' },
        features: ['Specialized GCSE curriculum', 'Exam technique training', 'Past paper practice', 'Regular assessments', 'Study materials included'],
        recommended: true,
      },
    ],
    'per-session': [
      {
        name: 'SATs',
        prices: { oneSession: '£32/Session', twoSessions: '£26/Session' },
        features: ['Flexible scheduling', 'No long-term commitment', 'Same expert tutors', 'Full session resources', 'Pay as you go'],
        recommended: false,
      },
      {
        name: '11 Plus and Entrance Exam',
        prices: { oneSession: '£34/Session', twoSessions: '£26/Session' },
        features: ['Flexible scheduling', 'No long-term commitment', 'Same expert tutors', 'Full session resources', 'Pay as you go'],
        recommended: false,
      },
      {
        name: 'Maths & English',
        prices: { oneSession: '£32/Session', twoSessions: '£26/Session' },
        features: ['Combined subjects', 'Flexible learning', 'Personalized attention', 'Learning resources', 'Book when needed'],
        recommended: false,
      },
      {
        name: 'Maths/English/Science',
        prices: { oneSession: '£34/Session', twoSessions: '£28/Session' },
        features: ['Individual sessions', 'Targeted support', 'Exam preparation', 'Study materials', 'Flexible booking'],
        recommended: true,
      },
    ],
    'one-to-one': [
      {
        name: 'SATs',
        prices: { oneSession: '£36/Session', twoSessions: '£28/Session' },
        features: ['Individual attention', 'Practice materials', 'Flexible scheduling', 'Pay per session', 'Progress tracking'],
        recommended: false,
      },
      {
        name: '11 Plus and Entrance Exam',
        prices: { oneSession: '£42/Session', twoSessions: '£36/Session' },
        features: ['Expert tutors', 'Comprehensive preparation', 'Flexible scheduling', 'Parent consultations', 'Progress tracking'],
        recommended: false,
      },
      {
        name: 'Maths & English',
        prices: { oneSession: '£36/Session', twoSessions: '£28/Session' },
        features: ['Personalized learning', 'Flexible scheduling', 'Comprehensive coverage', 'Progress tracking', 'Study materials included'],
        recommended: false,
      },
      {
        name: 'GCSE Maths/English/Science',
        prices: { oneSession: '£38/Session', twoSessions: '£32/Session' },
        features: ['Specialized curriculum', 'Exam preparation', 'Flexible scheduling', 'Study materials', 'Progress tracking'],
        recommended: true,
      },
    ],
    premium: [
      {
        name: 'SATs',
        prices: { oneSession: '£34/Session', twoSessions: '£28/Session' },
        features: ['Premium tutors', 'Practice tests', 'Flexible scheduling', 'Progress tracking', 'Learning materials included'],
        recommended: false,
      },
      {
        name: '11 Plus and Entrance Exam',
        prices: { oneSession: '£38/Session', twoSessions: '£32/Session' },
        features: ['Premium preparation', 'Comprehensive coverage', 'Flexible scheduling', 'Parent consultations', 'Progress tracking'],
        recommended: false,
      },
      {
        name: 'Maths & English',
        prices: { oneSession: '£34/Session', twoSessions: '£28/Session' },
        features: ['Premium learning', 'Flexible scheduling', 'Comprehensive coverage', 'Progress tracking', 'Study materials included'],
        recommended: false,
      },
      {
        name: 'GCSE Maths/English/Science',
        prices: { oneSession: '£38/Session', twoSessions: '£32/Session' },
        features: ['Premium curriculum', 'Exam preparation', 'Flexible scheduling', 'Study materials', 'Progress tracking'],
        recommended: true,
      },
    ],
  };

  const activePlans = plans[billingType];

  // Animation Variants
  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
    tap: { scale: 0.95 }
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
      {/* Pricing Header */}
      <motion.div
        className="relative bg-gradient-to-r from-[#1434cb] via-[#019fe3] to-[#1434cb] text-white py-12 sm:py-16 md:py-20 overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={headerVariants}
      >
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-white rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 sm:mb-4">
            Accessible learning, Honest Pricing
          </h1>
          <div className="w-16 sm:w-24 h-1 bg-white mx-auto rounded-full mb-4 sm:mb-6"></div>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl px-4 text-white/90 max-w-3xl mx-auto">
            Choose the right support for your Educational Journey
          </p>
        </div>
      </motion.div>

      {/* Billing Toggle */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 md:pt-16">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-12">
          {Object.keys(plans).map((type) => (
            <motion.button
              key={type}
              className={`px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl font-bold transition-all duration-300 text-xs sm:text-sm md:text-base shadow-lg ${
                billingType === type
                  ? 'bg-gradient-to-r from-[#1434cb] to-[#019fe3] text-white scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
              onClick={() => setBillingType(type as 'monthly' | 'per-session' | 'one-to-one' | 'premium')}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              {type.replace('-', ' ').toUpperCase()}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Pricing Plans */}
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 md:pb-20"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {activePlans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 ${
                plan.recommended ? 'ring-2 sm:ring-4 ring-[#7c1411] scale-100 sm:scale-105' : 'hover:shadow-2xl'
              }`}
              variants={cardVariants}
            >
              {plan.recommended && (
                <div className="absolute top-0 right-0">
                  <div className="bg-gradient-to-r from-[#7c1411] to-[#a31a16] text-white px-3 sm:px-4 md:px-6 py-1 sm:py-1.5 md:py-2 text-xs sm:text-sm font-bold rounded-bl-xl sm:rounded-bl-2xl shadow-lg">
                    ⭐ Best Value
                  </div>
                </div>
              )}
              
              <div className="p-4 sm:p-6 md:p-8">
                {/* Plan Name */}
                <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-4 sm:mb-6 mt-1 sm:mt-2 leading-tight">
                  {plan.name}
                </h2>
                
                {/* Pricing */}
                <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                  {/* 1 Session */}
                  <div className="pb-3 sm:pb-4 border-b border-gray-200">
                    <p className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">1 session per week</p>
                    <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1434cb] leading-tight">
                      {plan.prices.oneSession}
                    </p>
                  </div>
                  
                  {/* 2 Sessions */}
                  <div className="pt-1 sm:pt-2">
                    <p className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">2 sessions per week</p>
                    <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#7c1411] leading-tight">
                      {plan.prices.twoSessions}
                    </p>
                    <span className="inline-block bg-[#7c1411]/10 text-[#7c1411] text-xs sm:text-sm font-bold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full mt-1 sm:mt-2">
                      💎 Best Plan
                    </span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-gray-600 text-xs sm:text-sm leading-relaxed">
                      <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-green-100 flex items-center justify-center mr-2 sm:mr-3 mt-0.5">
                        <Check className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-green-600" strokeWidth={3} />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.button
                  onClick={() => window.location.href = '/courses'}
                  className={`w-full py-3 sm:py-3.5 md:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl font-bold transition-all duration-300 text-xs sm:text-sm md:text-base shadow-lg flex items-center justify-center gap-2 ${
                    plan.recommended
                      ? 'bg-gradient-to-r from-[#7c1411] to-[#a31a16] hover:from-[#a31a16] hover:to-[#7c1411] text-white'
                      : 'bg-gradient-to-r from-[#1434cb] to-[#019fe3] hover:from-[#019fe3] hover:to-[#1434cb] text-white'
                  }`}
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  Get Started
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Additional Information */}
      <motion.div
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 md:pb-20 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 md:p-12">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
            Need a Custom Learning Plan?
          </h3>
          <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base md:text-lg leading-relaxed">
            Contact us to discuss your specific requirements and create a personalized learning package.
          </p>
          <motion.a
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#7c1411] to-[#a31a16] hover:from-[#a31a16] hover:to-[#7c1411] text-white font-bold py-3 sm:py-3.5 md:py-4 px-6 sm:px-8 rounded-lg sm:rounded-xl transition-all duration-300 shadow-lg text-sm sm:text-base md:text-lg"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Contact Us
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default Pricing;