import { motion } from 'framer-motion';
import {
  HiMail,
  HiPhone,
  HiLocationMarker,
} from 'react-icons/hi';
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaInstagram,
} from 'react-icons/fa';

const Footer = () => {
  const footerSections = [
    {
      title: 'Products',
      links: [
        { name: 'Payment Gateway', href: '#' },
        { name: 'Business Banking', href: '#' },
        { name: 'Invoicing', href: '#' },
        { name: 'Analytics', href: '#' },
        { name: 'Mobile SDKs', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Press Kit', href: '#' },
        { name: 'Contact', href: '#' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '#' },
        { name: 'API Reference', href: '#' },
        { name: 'Developer Tools', href: '#' },
        { name: 'Support Center', href: '#' },
        { name: 'Community', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
        { name: 'Cookie Policy', href: '#' },
        { name: 'GDPR', href: '#' },
        { name: 'Security', href: '#' },
      ],
    },
  ];

  const socialLinks = [
    { icon: FaTwitter, href: '#', color: 'hover:text-blue-400' },
    { icon: FaLinkedin, href: '#', color: 'hover:text-blue-600' },
    { icon: FaGithub, href: '#', color: 'hover:text-gray-700' },
    { icon: FaFacebook, href: '#', color: 'hover:text-blue-500' },
    { icon: FaInstagram, href: '#', color: 'hover:text-pink-500' },
  ];

  const contactInfo = [
    { icon: HiMail, text: 'support@payflow.com' },
    { icon: HiPhone, text: '+1 (555) 123-4567' },
    { icon: HiLocationMarker, text: 'San Francisco, CA 94102' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Stay updated</h3>
              <p className="text-gray-400">
                Get the latest news, updates, and payment insights delivered to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all whitespace-nowrap"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 md:gap-10 lg:gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <span className="text-2xl font-bold">PayFlow</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Modern payment solutions for businesses of all sizes. Fast, secure, and reliable.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-gray-400">
                  <item.icon className="w-5 h-5 text-blue-500" />
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-bold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Pratham. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 md:gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 ${social.color} transition-all hover:bg-gray-700`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

            {/* Additional Links */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Sitemap
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Accessibility
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Credits
              </a>
            </div>
          </div>

          {/* Payment Methods & Certifications */}
          <div className="mt-8 pt-6 border-t border-gray-800">
            <div className="flex flex-wrap justify-center gap-3 sm:gap-6 items-center">
              <span className="text-gray-500 text-sm w-full sm:w-auto text-center">Supported Payment Methods:</span>
              <div className="flex gap-3 sm:gap-4">
                {['💳', '💰', '📱', '🏦', '🌐'].map((emoji, i) => (
                  <div key={i} className="w-10 h-6 sm:w-12 sm:h-8 bg-gray-800 rounded flex items-center justify-center">
                    <span className="text-lg sm:text-xl">{emoji}</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-center text-gray-500 text-xs mt-4">
              PCI-DSS Certified | ISO 27001 | SOC 2 Type II Compliant
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
