import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Pricing = () => {
  const [billingType, setBillingType] = useState<'monthly' | 'per-session'>('monthly');

  const monthlyPlans = [
    {
      name: '11 Plus and Entrance Exam',
      prices: {
        oneSession: '£165/Month',
        twoSessions: '£245/Month'
      },
      features: [
        'Expert 11+ preparation',
        'Comprehensive exam coverage',
        'Practice materials included',
        'Progress tracking',
        'Parent consultations'
      ],
      recommended: false
    },
    {
      name: 'GCSE Maths',
      prices: {
        oneSession: '£149/Month',
        twoSessions: '£229/Month'
      },
      features: [
        'Specialized GCSE curriculum',
        'Exam technique training',
        'Past paper practice',
        'Regular assessments',
        'Study materials included'
      ],
      recommended: true
    },
    {
      name: 'Maths & English',
      prices: {
        oneSession: '£139/Month',
        twoSessions: '£219/Month'
      },
      features: [
        'Combined subject expertise',
        'Comprehensive coverage',
        'Personalized learning plan',
        'Regular progress reports',
        'Study resources provided'
      ],
      recommended: false
    },
    {
      name: 'SATs',
      prices: {
        oneSession: '£139/Month',
        twoSessions: '£219/Month'
      },
      features: [
        'SATs-focused curriculum',
        'Practice tests',
        'Exam strategies',
        'Progress monitoring',
        'Learning materials included'
      ],
      recommended: false
    }
  ];

  const perSessionPlans = [
    {
      name: '11 Plus and Entrance Exam',
      prices: {
        oneSession: '£34/Session',
        twoSessions: '£24/Session'
      },
      features: [
        'Flexible scheduling',
        'No long-term commitment',
        'Same expert tutors',
        'Full session resources',
        'Pay as you go'
      ],
      recommended: false
    },
    {
      name: 'GCSE Maths',
      prices: {
        oneSession: '£32/Session',
        twoSessions: '£22/Session'
      },
      features: [
        'Individual sessions',
        'Targeted support',
        'Exam preparation',
        'Study materials',
        'Flexible booking'
      ],
      recommended: true
    },
    {
      name: 'Maths & English',
      prices: {
        oneSession: '£30/Session',
        twoSessions: '£20/Session'
      },
      features: [
        'Combined subjects',
        'Flexible learning',
        'Personalized attention',
        'Learning resources',
        'Book when needed'
      ],
      recommended: false
    },
    {
      name: 'SATs',
      prices: {
        oneSession: '£30/Session',
        twoSessions: '£20/Session'
      },
      features: [
        'SATs preparation',
        'Individual attention',
        'Practice materials',
        'Flexible scheduling',
        'Pay per session'
      ],
      recommended: false
    }
  ];

  const activePlans = billingType === 'monthly' ? monthlyPlans : perSessionPlans;

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
        className="bg-[#1434cb] text-white py-16"
        initial="hidden"
        animate="visible"
        variants={headerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Transparent Pricing for Quality Education</h1>
          <p className="text-xl">Choose the plan that works best for your learning journey</p>
        </div>
      </motion.div>

      {/* Billing Toggle */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="flex justify-center space-x-4 mb-12">
          <motion.button
            className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
              billingType === 'monthly'
                ? 'bg-[#1434cb] text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
            onClick={() => setBillingType('monthly')}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Monthly
          </motion.button>
          <motion.button
            className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
              billingType === 'per-session'
                ? 'bg-[#1434cb] text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
            onClick={() => setBillingType('per-session')}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Per Session
          </motion.button>
        </div>
      </div>

      {/* Pricing Plans */}
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {activePlans.map((plan, index) => (
            <motion.div
              key={index}
              className={`rounded-lg shadow-lg overflow-hidden ${
                plan.recommended ? 'border-2 border-[#7c1411] transform scale-105' : ''
              }`}
              variants={cardVariants}
            >
              {plan.recommended && (
                <div className="bg-[#7c1411] text-white text-center py-2">
                  Best Value
                </div>
              )}
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">{plan.name}</h2>
                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-sm text-gray-500">1 session per week</p>
                    <p className="text-3xl font-bold text-[#1434cb]">{plan.prices.oneSession}</p>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-500">2 sessions per week</p>
                    <p className="text-3xl font-bold text-[#7c1411]">{plan.prices.twoSessions}</p>
                    <span className="inline-block bg-[#7c1411]/10 text-[#7c1411] text-sm font-semibold px-3 py-1 rounded-full mt-2">
                      Best Deal
                    </span>
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <Check className="h-5 w-5 text-[#1434cb] mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <motion.button
                  className={`w-full py-3 px-4 rounded-md font-bold transition duration-300 ${
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
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Need a Custom Learning Plan?</h3>
        <p className="text-gray-600 mb-8">
          Contact us to discuss your specific requirements and create a personalized learning package.
        </p>
        <motion.a
          href="/contact"
          className="inline-block bg-[#7c1411] hover:bg-[#a31a16] text-white font-bold py-3 px-8 rounded-md transition duration-300"
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