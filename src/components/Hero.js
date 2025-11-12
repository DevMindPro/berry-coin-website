import React from 'react';
import { ArrowRight, FileText, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-16 section-padding min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="bg-gradient-to-r from-primary-600 to-berry-600 bg-clip-text text-transparent">
              Berry Coin
            </span>
            <br />
            <span className="text-2xl md:text-4xl lg:text-5xl font-semibold text-gray-700 dark:text-gray-300">
              Growing the Future, One Token at a Time
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
            The next-generation decentralized digital asset built to bridge blockchain innovation with real-world value.
          </p>

          {/* Key Features Tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {['DeFi', 'NFT', 'AI Trading Bot', 'DAO', 'Real-World Assets (RWA)'].map((feature) => (
              <span
                key={feature}
                className="px-4 py-2 bg-gradient-to-r from-primary-100 to-berry-100 dark:from-primary-900 dark:to-berry-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
              >
                {feature}
              </span>
            ))}
          </div>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary flex items-center justify-center group">
              Get Started
              <TrendingUp className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn-secondary flex items-center justify-center group">
              Read Whitepaper
              <FileText className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Floating Animation Elements */}
          <div className="relative mt-16">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 bg-gradient-to-r from-primary-400/20 to-berry-400/20 rounded-full blur-3xl animate-pulse-slow"></div>
            </div>
            <div className="relative">
              <div className="w-32 h-32 mx-auto bg-gradient-to-r from-primary-500 to-berry-500 rounded-full flex items-center justify-center animate-float">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-berry-600 bg-clip-text text-transparent">
                    B
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;