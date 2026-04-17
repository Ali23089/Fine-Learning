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
    <div className="bg-gray-50">
      {/* Pricing Header */}
      <motion.div
        className="bg-[#1434cb] text-white py-12 sm:py-16"
        initial="hidden"
        animate="visible"
        variants={headerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Accessible learning, Honest Pricing</h1>
          <p className="text-lg sm:text-xl px-4">Choose the right support for your Educational Journey</p>
        </div>
      </motion.div>

      {/* Billing Toggle */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
          {Object.keys(plans).map((type) => (
            <motion.button
              key={type}
              className={`px-4 sm:px-6 py-2 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base ${
                billingType === type
                  ? 'bg-[#1434cb] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
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
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {activePlans.map((plan, index) => (
            <motion.div
              key={index}
              className={`rounded-lg shadow-lg overflow-hidden ${
                plan.recommended ? 'border-2 border-[#7c1411] transform scale-105' : ''
              }`}
              variants={cardVariants}
            >
              {plan.recommended && (
                <div className="bg-[#7c1411] text-white text-center py-2 text-sm sm:text-base">
                  Best Value
                </div>
              )}
              <div className="p-4 sm:p-6">
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">{plan.name}</h2>
                <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500">1 session per week</p>
                    <p className="text-2xl sm:text-3xl font-bold text-[#1434cb]">{plan.prices.oneSession}</p>
                  </div>
                  <div className="pt-3 sm:pt-4 border-t border-gray-200">
                    <p className="text-xs sm:text-sm text-gray-500">2 sessions per week</p>
                    <p className="text-2xl sm:text-3xl font-bold text-[#7c1411]">{plan.prices.twoSessions}</p>
                    <span className="inline-block bg-[#7c1411]/10 text-[#7c1411] text-xs sm:text-sm font-semibold px-2 sm:px-3 py-1 rounded-full mt-2">
                      Best Plan
                    </span>
                  </div>
                </div>
                <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600 text-xs sm:text-sm">
                      <Check className="h-4 w-4 sm:h-5 sm:w-5 text-[#1434cb] mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <motion.button
                  className={`w-full py-2 sm:py-3 px-4 rounded-md font-bold transition duration-300 text-sm sm:text-base ${
                    plan.recommended
                      ? 'bg-[#7c1411] hover:bg-[#a31a16] text-white'
                      : 'bg-[#1434cb] hover:bg-[#0f2ca1] text-white'
                  }`}
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Additional Information */}
      <motion.div
        className="mt-12 sm:mt-16 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Need a Custom Learning Plan?</h3>
        <p className="text-gray-600 mb-6 sm:mb-8 px-4 text-sm sm:text-base">
          Contact us to discuss your specific requirements and create a personalized learning package.
        </p>
        <motion.a
          href="/contact"
          className="inline-block bg-[#7c1411] hover:bg-[#a31a16] text-white font-bold py-3 px-6 sm:px-8 rounded-md transition duration-300 text-sm sm:text-base"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          Contact Us
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Pricing;