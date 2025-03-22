import React, { useState } from 'react';
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

  return (
    <div className="bg-white">
      {/* Pricing Header */}
      <div className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Transparent Pricing for Quality Education</h1>
          <p className="text-xl">Choose the plan that works best for your learning journey</p>
        </div>
      </div>

      {/* Billing Toggle */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="flex justify-center space-x-4 mb-12">
          <button
            className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
              billingType === 'monthly'
                ? 'bg-secondary text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
            onClick={() => setBillingType('monthly')}
          >
            Monthly
          </button>
          <button
            className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
              billingType === 'per-session'
                ? 'bg-secondary text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
            onClick={() => setBillingType('per-session')}
          >
            Per Session
          </button>
        </div>
      </div>

      {/* Pricing Plans */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {activePlans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-lg shadow-lg overflow-hidden pricing-card ${
                plan.recommended ? 'border-2 border-secondary transform scale-105' : ''
              }`}
            >
              {plan.recommended && (
                <div className="bg-secondary text-white text-center py-2">
                  Best Value
                </div>
              )}
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">{plan.name}</h2>
                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-sm text-gray-500">1 session per week</p>
                    <p className="text-3xl font-bold text-primary">{plan.prices.oneSession}</p>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-500">2 sessions per week</p>
                    <p className="text-3xl font-bold text-secondary">{plan.prices.twoSessions}</p>
                    <span className="inline-block bg-secondary/10 text-secondary text-sm font-semibold px-3 py-1 rounded-full mt-2">
                      Best Deal
                    </span>
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <Check className="h-5 w-5 text-secondary mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 px-4 rounded-md font-bold transition duration-300 ${
                    plan.recommended
                      ? 'bg-secondary hover:bg-secondary-dark text-white'
                      : 'bg-primary hover:bg-primary-dark text-white'
                  }`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Need a Custom Learning Plan?</h3>
          <p className="text-gray-600 mb-8">
            Contact us to discuss your specific requirements and create a personalized learning package
          </p>
          <a
            href="/contact"
            className="inline-block bg-secondary hover:bg-secondary-dark text-white font-bold py-3 px-8 rounded-md transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Pricing;