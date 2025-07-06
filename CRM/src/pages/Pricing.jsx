import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';
import CountUp from 'react-countup';

const pricingPlans = [
  {
    name: 'Free',
    price: { monthly: 0, yearly: 0 },
    description: 'For individuals and small teams getting started.',
    features: [
      'Up to 500 contacts',
      'Basic lead management',
      'Email integration',
      'Community support',
    ],
    cta: 'Get Started for Free',
    popular: false,
  },
  {
    name: 'Pro',
    price: { monthly: 49, yearly: 490 },
    pricePeriod: { monthly: '/ month', yearly: '/ year' },
    description: 'For growing businesses that need more power.',
    features: [
      'Unlimited contacts',
      'Advanced lead scoring',
      'Workflow automation',
      'Custom reporting',
      'Priority support',
    ],
    cta: 'Start a Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: { monthly: 99, yearly: 990 },
    pricePeriod: { monthly: '/ month', yearly: '/ year' },
    description: 'For large organizations with complex needs.',
    features: [
      'Everything in Pro, plus:',
      'Dedicated account manager',
      'Advanced security & SSO',
      'Custom onboarding',
      'API access',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">Find the perfect plan</h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">Simple, transparent pricing that grows with you.</p>
        </motion.div>

        <motion.div 
          className="mt-10 flex justify-center items-center space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <span className={`text-lg font-medium cursor-pointer ${billingCycle === 'monthly' ? 'text-gray-900' : 'text-gray-500'}`}>
            Monthly
          </span>
          <div 
            className="relative w-14 h-8 flex items-center bg-gray-300 rounded-full cursor-pointer p-1"
            onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
          >
            <motion.div 
              className="w-6 h-6 bg-white rounded-full shadow-md"
              layout
              transition={{ type: 'spring', stiffness: 700, damping: 30 }}
              style={{
                position: 'absolute',
                left: billingCycle === 'monthly' ? '4px' : 'auto',
                right: billingCycle === 'yearly' ? '4px' : 'auto',
              }}
            />
          </div>
          <span className={`text-lg font-medium cursor-pointer ${billingCycle === 'yearly' ? 'text-gray-900' : 'text-gray-500'}`}>
            Yearly
          </span>
          <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">SAVE 20%</span>
        </motion.div>

        <div className="mt-12 grid gap-10 lg:grid-cols-3 lg:gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative bg-white border rounded-2xl shadow-lg flex flex-col ${plan.popular ? 'border-orange-500' : 'border-gray-200'}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
            >
              {plan.popular && (
                <div className="absolute top-0 -translate-y-1/2 w-full flex justify-center">
                  <span className="bg-orange-500 text-white text-xs font-semibold px-4 py-1 rounded-full uppercase tracking-wider">Most Popular</span>
                </div>
              )}
              <div className="p-8 flex-grow">
                <h3 className="text-2xl font-semibold text-gray-900">{plan.name}</h3>
                <p className="mt-4 text-gray-500">{plan.description}</p>
                <div className="mt-6 flex items-baseline h-12">
                  <span className="text-5xl font-extrabold text-gray-900">
                    <CountUp
                      start={billingCycle === 'monthly' ? plan.price.yearly : plan.price.monthly}
                      end={plan.price[billingCycle]}
                      duration={0.5}
                      prefix="$"
                    />
                  </span>
                  {plan.pricePeriod && (
                    <span className="text-lg font-medium text-gray-500 ml-1">
                      {plan.pricePeriod[billingCycle]}
                    </span>
                  )}
                </div>
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <div className="flex-shrink-0">
                        <FiCheck className="h-6 w-6 text-green-500" aria-hidden="true" />
                      </div>
                      <p className="ml-3 text-base text-gray-700">{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 bg-gray-50 rounded-b-2xl">
                <a
                  href="#"
                  className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md transition-colors duration-300 ${
                    plan.popular
                      ? 'bg-orange-500 text-white hover:bg-orange-600'
                      : 'bg-orange-100 text-orange-700 hover:bg-orange-200'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
