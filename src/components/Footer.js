import React from 'react';
import { 
  Twitter, 
  Github, 
  MessageCircle, 
  Mail, 
  Globe,
  FileText,
  Shield,
  Users
} from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { name: 'Twitter', icon: <Twitter className="w-5 h-5" />, href: 'https://twitter.com/berrycoin', color: 'hover:text-blue-400' },
    { name: 'Discord', icon: <MessageCircle className="w-5 h-5" />, href: 'https://discord.gg/berrycoin', color: 'hover:text-purple-400' },
    { name: 'Telegram', icon: <MessageCircle className="w-5 h-5" />, href: 'https://t.me/berrycoin', color: 'hover:text-blue-500' },
    { name: 'GitHub', icon: <Github className="w-5 h-5" />, href: 'https://github.com/DevMindPro/berry-coin-website', color: 'hover:text-gray-400' },
    { name: 'Email', icon: <Mail className="w-5 h-5" />, href: 'mailto:info@berrycoin.com', color: 'hover:text-red-400' }
  ];

  const quickLinks = [
    { name: 'Whitepaper', icon: <FileText className="w-4 h-4" />, href: '#whitepaper' },
    { name: 'Security Audit', icon: <Shield className="w-4 h-4" />, href: '#security' },
    { name: 'Community', icon: <Users className="w-4 h-4" />, href: '#community' },
    { name: 'Documentation', icon: <Globe className="w-4 h-4" />, href: '#documentation' }
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-berry-500 to-berry-700 rounded-full mr-3"></div>
              <span className="text-2xl font-bold">Berry Coin</span>
            </div>
            <p className="text-gray-400 mb-6">
              Growing the Future, One Token at a Time. Building a decentralized ecosystem that bridges 
              blockchain innovation with real-world value.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className={`p-2 bg-gray-800 rounded-lg transition-colors duration-300 ${link.color}`}
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {link.icon}
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-xl font-bold mb-6">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates and announcements.
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button className="px-4 py-2 bg-gradient-to-r from-primary-600 to-berry-600 rounded-lg hover:from-primary-700 hover:to-berry-700 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Disclaimer Section */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="bg-gray-800 rounded-lg p-6">
            <h4 className="font-bold text-yellow-400 mb-3 flex items-center">
              <Shield className="w-5 h-5 mr-2" />
              Important Disclaimer
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Berry Coin is a digital asset project designed for community and utility use. It does not constitute 
              investment advice, and token value may fluctuate depending on market conditions. All participants are 
              encouraged to conduct their own due diligence before participating. Cryptocurrency investments carry 
              inherent risks, and past performance does not guarantee future results. Please consult with financial 
              advisors and understand the regulatory requirements in your jurisdiction before participating.
            </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Berry Coin. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <button className="hover:text-white transition-colors duration-300">Privacy Policy</button>
              <button className="hover:text-white transition-colors duration-300">Terms of Service</button>
              <button className="hover:text-white transition-colors duration-300">Risk Disclosure</button>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="fixed bottom-6 right-6">
          <a
            href="#home"
            className="w-12 h-12 bg-gradient-to-r from-primary-600 to-berry-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;