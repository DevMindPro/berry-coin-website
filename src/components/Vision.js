import React from 'react';
import { Target, AlertTriangle, CheckCircle, Zap, Shield, Globe, Users } from 'lucide-react';

const Vision = () => {
  const problems = [
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Lack of Real Utility",
      description: "Most tokens lack practical application beyond speculation"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Centralized Power",
      description: "Traditional systems concentrate control in few hands"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Unstable Ecosystems",
      description: "Volatile markets with unsustainable tokenomics"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Disconnect from Real Economy",
      description: "Digital assets isolated from tangible value creation"
    }
  ];

  const solutions = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Utility-Driven Ecosystem",
      description: "Multi-layered platform with real-world applications"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Transparent Governance",
      description: "Community-controlled DAO with on-chain voting"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Sustainable Tokenomics",
      description: "Deflationary mechanisms with balanced allocation"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Real-World Integration",
      description: "Bridge between blockchain and tangible assets"
    }
  ];

  return (
    <section id="vision" className="section-padding bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Vision: <span className="bg-gradient-to-r from-primary-600 to-berry-600 bg-clip-text text-transparent">Bridging the Divide</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-4xl mx-auto">
            A next-generation AI Fund and WealthTech platform that fuses artificial intelligence, quantitative finance, and global market access to help investors make smarter, faster, and more adaptive financial decisions. We specialize in developing intelligent investment systems that optimize portfolios, enhance transparency, and empower both institutions and individual investors worldwide.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* The Problem */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              The Problem We Solve
            </h3>
            <div className="space-y-6">
              {problems.map((problem, index) => (
                <div key={index} className="card group hover:bg-red-50 dark:hover:bg-red-900/20">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg text-red-600 dark:text-red-400 group-hover:scale-110 transition-transform">
                      {problem.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {problem.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {problem.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* The Solution */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Our Core Solutions
            </h3>
            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <div key={index} className="card group hover:bg-green-50 dark:hover:bg-green-900/20">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform">
                      {solution.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {solution.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;