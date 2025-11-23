import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiChevronLeft, HiChevronRight, HiStar } from 'react-icons/hi';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      company: 'TechStart',
      image: '👩‍💼',
      content: 'PayFlow has transformed how we handle payments. The seamless integration and lightning-fast settlements have improved our cash flow significantly. Best payment platform we\'ve ever used!',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Founder, EcomPro',
      company: 'EcomPro',
      image: '👨‍💻',
      content: 'Switching to PayFlow was the best decision for our e-commerce business. The analytics dashboard gives us insights we never had before, and customer checkout is now 3x faster.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'CFO, GrowthCorp',
      company: 'GrowthCorp',
      image: '👩‍💼',
      content: 'The security features and fraud detection are top-notch. We\'ve seen zero chargebacks since switching to PayFlow. Their support team is incredibly responsive too!',
      rating: 5,
    },
    {
      name: 'David Kumar',
      role: 'CTO, FinanceHub',
      company: 'FinanceHub',
      image: '👨‍💼',
      content: 'Integration was surprisingly simple. Their developer documentation is excellent, and the API is well-designed. We went live in just 2 days!',
      rating: 5,
    },
  ];

  const companies = [
    { name: 'TechStart', logo: '🚀' },
    { name: 'EcomPro', logo: '🛒' },
    { name: 'GrowthCorp', logo: '📈' },
    { name: 'FinanceHub', logo: '💼' },
    { name: 'CloudSys', logo: '☁️' },
    { name: 'DataFlow', logo: '📊' },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={ref} className="py-20 md:py-28 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Loved by businesses
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              around the world
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust PayFlow for their payment needs.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="relative max-w-4xl mx-auto mb-16"
        >
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full filter blur-3xl opacity-20"></div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="relative z-10"
              >
                {/* Rating Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <HiStar key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Content */}
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 italic">
                  "{testimonials[currentIndex].content}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-3xl">
                    {testimonials[currentIndex].image}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-gray-600">{testimonials[currentIndex].role}</p>
                    <p className="text-sm text-blue-600 font-semibold">
                      {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex gap-4 mt-8 relative z-10">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevTestimonial}
                className="w-12 h-12 bg-blue-100 hover:bg-blue-200 rounded-full flex items-center justify-center transition-colors"
              >
                <HiChevronLeft className="w-6 h-6 text-blue-600" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextTestimonial}
                className="w-12 h-12 bg-blue-100 hover:bg-blue-200 rounded-full flex items-center justify-center transition-colors"
              >
                <HiChevronRight className="w-6 h-6 text-blue-600" />
              </motion.button>

              {/* Dots Indicator */}
              <div className="flex gap-2 items-center ml-auto">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? 'w-8 bg-blue-600'
                        : 'w-2 bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trusted Companies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <p className="text-center text-gray-600 mb-8 font-semibold">
            Trusted by leading companies
          </p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
            {companies.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all flex flex-col items-center justify-center gap-2 border border-gray-100"
              >
                <span className="text-4xl">{company.logo}</span>
                <span className="text-sm font-semibold text-gray-700">
                  {company.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
