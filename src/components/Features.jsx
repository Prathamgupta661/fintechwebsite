import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  HiCreditCard,
  HiShieldCheck,
  HiCurrencyDollar,
  HiBuildingLibrary,
  HiChartBar,
  HiDevicePhoneMobile,
} from 'react-icons/hi2';

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: HiCreditCard,
      title: 'Payment Gateway',
      description: 'Accept payments seamlessly with support for credit cards, debit cards, UPI, wallets, and 100+ payment methods.',
      color: 'blue',
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      icon: HiBuildingLibrary,
      title: 'Business Banking',
      description: 'Modern digital banking solutions tailored for businesses. Manage accounts, transfers, and payouts effortlessly.',
      color: 'indigo',
      gradient: 'from-indigo-500 to-indigo-600',
    },
    {
      icon: HiShieldCheck,
      title: 'Secure & Compliant',
      description: 'Bank-grade security with PCI-DSS compliance, 256-bit encryption, and advanced fraud detection systems.',
      color: 'green',
      gradient: 'from-green-500 to-green-600',
    },
    {
      icon: HiChartBar,
      title: 'Real-time Analytics',
      description: 'Get instant insights into your transactions, revenue trends, and customer behavior with powerful dashboards.',
      color: 'purple',
      gradient: 'from-purple-500 to-purple-600',
    },
    {
      icon: HiCurrencyDollar,
      title: 'Instant Settlements',
      description: 'Get your money faster with instant settlements. No more waiting days for your funds to arrive.',
      color: 'yellow',
      gradient: 'from-yellow-500 to-yellow-600',
    },
    {
      icon: HiDevicePhoneMobile,
      title: 'Mobile SDKs',
      description: 'Native SDKs for iOS and Android with seamless integration. Build payment experiences your customers love.',
      color: 'pink',
      gradient: 'from-pink-500 to-pink-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section ref={ref} className="py-20 md:py-28 bg-white" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            Features
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Everything you need to
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              grow your business
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Powerful features designed to help businesses of all sizes accept payments,
            manage finances, and scale globally.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
            >
              {/* Icon Container */}
              <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl"
          >
            Explore All Features
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
