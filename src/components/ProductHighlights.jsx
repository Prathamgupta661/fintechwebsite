import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  HiCheckCircle,
  HiSparkles,
  HiLightningBolt,
  HiShieldCheck,
} from 'react-icons/hi';

const ProductHighlights = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const products = [
    {
      title: 'Lightning-Fast Checkout',
      description: 'Reduce checkout time by 60% with our optimized payment flow. One-click payments, auto-filled details, and seamless user experience.',
      features: [
        'One-click payment processing',
        'Smart auto-fill technology',
        'Mobile-optimized interface',
        'Multi-currency support',
      ],
      icon: HiLightningBolt,
      gradient: 'from-blue-500 to-cyan-500',
      imagePosition: 'left',
    },
    {
      title: 'Enterprise-Grade Security',
      description: 'Sleep soundly knowing your transactions are protected by military-grade encryption and advanced fraud detection powered by AI.',
      features: [
        'PCI-DSS Level 1 certified',
        '256-bit SSL encryption',
        'AI-powered fraud detection',
        '24/7 security monitoring',
      ],
      icon: HiShieldCheck,
      gradient: 'from-green-500 to-emerald-500',
      imagePosition: 'right',
    },
    {
      title: 'Smart Business Insights',
      description: 'Make data-driven decisions with powerful analytics and reporting tools. Track every metric that matters to your business.',
      features: [
        'Real-time revenue tracking',
        'Customer behavior analytics',
        'Customizable reports',
        'Export data in any format',
      ],
      icon: HiSparkles,
      gradient: 'from-purple-500 to-pink-500',
      imagePosition: 'left',
    },
  ];

  return (
    <section ref={ref} className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white" id="solutions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            Product Highlights
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Built for modern
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              businesses like yours
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how PayFlow's innovative features help thousands of businesses
            streamline payments and accelerate growth.
          </p>
        </motion.div>

        {/* Products List */}
        <div className="space-y-32">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                product.imagePosition === 'right' ? 'lg:grid-flow-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={product.imagePosition === 'right' ? 'lg:col-start-1' : ''}>
                <div className={`inline-flex items-center gap-3 mb-6 px-4 py-2 bg-gradient-to-r ${product.gradient} rounded-full`}>
                  <product.icon className="w-6 h-6 text-white" />
                  <span className="text-white font-semibold text-sm">Key Feature</span>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {product.title}
                </h3>

                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {product.description}
                </p>

                <div className="space-y-4">
                  {product.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.2 + 0.3 + idx * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <HiCheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-lg">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`mt-8 px-8 py-3 bg-gradient-to-r ${product.gradient} text-white font-semibold rounded-lg hover:shadow-lg transition-all`}
                >
                  Learn More
                </motion.button>
              </div>

              {/* Visual Mockup */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.2 + 0.2, duration: 0.6 }}
                className={product.imagePosition === 'right' ? 'lg:col-start-2' : ''}
              >
                <div className={`relative bg-gradient-to-br ${product.gradient} rounded-2xl p-8 shadow-2xl`}>
                  {/* Mock Interface */}
                  <div className="bg-white rounded-xl p-6 space-y-4">
                    {/* Header */}
                    <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 bg-gradient-to-br ${product.gradient} rounded-lg flex items-center justify-center`}>
                          <product.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="h-3 w-24 bg-gray-300 rounded"></div>
                          <div className="h-2 w-16 bg-gray-200 rounded mt-2"></div>
                        </div>
                      </div>
                      <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
                    </div>

                    {/* Content Bars */}
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="h-3 bg-gray-300 rounded" style={{ width: `${70 + i * 5}%` }}></div>
                          <div className="h-3 w-12 bg-gray-200 rounded"></div>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${50 + i * 10}%` } : {}}
                            transition={{ delay: index * 0.2 + 0.5 + i * 0.1, duration: 1 }}
                            className={`h-full bg-gradient-to-r ${product.gradient}`}
                          ></motion.div>
                        </div>
                      </div>
                    ))}

                    {/* Action Button */}
                    <div className="pt-4">
                      <div className={`h-10 bg-gradient-to-r ${product.gradient} rounded-lg`}></div>
                    </div>
                  </div>

                  {/* Floating Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.2 + 1, duration: 0.5 }}
                    className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4"
                  >
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 bg-gradient-to-r ${product.gradient} rounded-full animate-pulse`}></div>
                      <span className="text-sm font-semibold text-gray-900">Live</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductHighlights;
