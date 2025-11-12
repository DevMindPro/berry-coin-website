import React from 'react';
import { 
  ArrowLeftRight, 
  Coins, 
  Image, 
  CreditCard, 
  Building2,
  Zap,
  Shield,
  Globe,
  TrendingUp,
  Vote
} from 'lucide-react';

const Ecosystem = () => {
  const ecosystemComponents = [
    {
      id: '5.1',
      title: 'BerrySwap (DEX)',
      description: 'Decentralized exchange for trading, staking, and liquidity.',
      icon: <ArrowLeftRight className="w-8 h-8" />,
      features: ['Low fees', 'Liquidity rewards', 'Multi-chain support (BSC, ETH, Polygon)'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: '5.2',
      title: 'BerryStaking',
      description: 'Flexible and fixed models for passive BERRY income.',
      icon: <Coins className="w-8 h-8" />,
      features: ['Fixed-term APY', 'Community pools', 'DAO-governed rewards'],
      color: 'from-green-500 to-green-600'
    },
    {
      id: '5.3',
      title: 'BerryNFT',
      description: 'NFT marketplace integrated into the ecosystem.',
      icon: <Image className="w-8 h-8" />,
      features: ['Collectibles', 'Staking', 'NFT-to-earn/Utility models'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: '5.4',
      title: 'BerryPay',
      description: 'Payment gateway for merchants and service providers.',
      icon: <CreditCard className="w-8 h-8" />,
      features: ['Instant settlement', 'Integration with online stores/apps'],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: '5.5',
      title: 'BerryDAO',
      description: 'Community governance protocol.',
      icon: <Vote className="w-8 h-8" />,
      features: ['Voting on proposals', 'Treasury usage', 'On-chain decision-making'],
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      id: '5.6',
      title: 'BerryRWA',
      description: 'Integration with real-world assets (RWA).',
      icon: <Building2 className="w-8 h-8" />,
      features: ['Tokenization of agricultural/commodity/energy assets', 'Tangible value bridge'],
      color: 'from-red-500 to-pink-500'
    }
  ];

  return (
    <section id="ecosystem" className="section-padding gradient-bg">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            The Berry Ecosystem: <span className="bg-gradient-to-r from-primary-600 to-berry-600 bg-clip-text text-transparent">Utility at its Core</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Six interconnected components creating a comprehensive blockchain ecosystem with real-world applications.
          </p>
        </div>

        {/* Ecosystem Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ecosystemComponents.map((component, index) => (
            <div
              key={component.id}
              className="card group hover:scale-105 transition-all duration-300"
            >
              {/* Header with Icon */}
              <div className="flex items-start mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${component.color} text-white group-hover:scale-110 transition-transform`}>
                  {component.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {component.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {component.description}
              </p>

              {/* Features */}
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Key Features:
                </h4>
                <ul className="space-y-1">
                  {component.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Ecosystem Benefits */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Ecosystem Benefits
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: <Zap className="w-6 h-6" />, title: "Utility-Driven", desc: "Every component serves a real purpose" },
              { icon: <Shield className="w-6 h-6" />, title: "Secure & Audited", desc: "Smart contracts audited by top firms" },
              { icon: <Globe className="w-6 h-6" />, title: "Multi-Chain", desc: "Cross-chain compatibility" },
              { icon: <TrendingUp className="w-6 h-6" />, title: "Deflationary", desc: "Built-in token burn mechanism" }
            ].map((benefit, index) => (
              <div key={index} className="card text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary-500 to-berry-500 rounded-full text-white mb-4">
                  {benefit.icon}
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {benefit.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;