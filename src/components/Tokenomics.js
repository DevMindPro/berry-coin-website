import React from 'react';
import { 
  Coins, 
  TrendingDown, 
  Wallet,
  ArrowLeftRight,
  Image,
  Vote,
  CreditCard,
  Building2,
  Zap
} from 'lucide-react';

const Tokenomics = () => {
  const keyMetrics = [
    { label: 'Total Supply', value: '1,000,000,000 BERRY', icon: <Coins className="w-6 h-6" /> },
    { label: 'Token Standard', value: 'BEP-20', icon: <Zap className="w-6 h-6" /> },
    { label: 'Initial Presale Price', value: '$0.01', icon: <Wallet className="w-6 h-6" /> },
    { label: 'DEX Listing Price', value: '$0.015', icon: <TrendingDown className="w-6 h-6" /> },
  ];

  const allocation = [
    { category: 'Public Sale', percentage: '30%', amount: '300,000,000', color: 'bg-blue-500' },
    { category: 'Team & Advisors', percentage: '15%', amount: '150,000,000', color: 'bg-green-500' },
    { category: 'Marketing & Partnerships', percentage: '20%', amount: '200,000,000', color: 'bg-purple-500' },
    { category: 'Development & Operations', percentage: '15%', amount: '150,000,000', color: 'bg-yellow-500' },
    { category: 'Liquidity Pool', percentage: '10%', amount: '100,000,000', color: 'bg-red-500' },
    { category: 'Reserve Fund', percentage: '10%', amount: '100,000,000', color: 'bg-indigo-500' },
  ];

  const useCases = [
    {
      icon: <Coins className="w-6 h-6" />,
      title: 'Staking & Earning',
      description: 'Stake BERRY tokens to earn passive rewards and participate in liquidity pools'
    },
    {
      icon: <ArrowLeftRight className="w-6 h-6" />,
      title: 'Trading',
      description: 'Use BERRY for trading on BerrySwap DEX with reduced fees and premium features'
    },
    {
      icon: <Image className="w-6 h-6" />,
      title: 'NFT Utility',
      description: 'Purchase, trade, and stake NFTs in the BerryNFT marketplace ecosystem'
    },
    {
      icon: <Vote className="w-6 h-6" />,
      title: 'Governance',
      description: 'Vote on DAO proposals and shape the future direction of the Berry ecosystem'
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: 'Payments',
      description: 'Make payments through BerryPay for goods and services with instant settlement'
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: 'RWA Tokenization',
      description: 'Access tokenized real-world assets and participate in asset-backed investments'
    }
  ];

  return (
    <section id="tokenomics" className="section-padding bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Sustainable <span className="bg-gradient-to-r from-primary-600 to-berry-600 bg-clip-text text-transparent">Tokenomics</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Carefully designed economic model with deflationary mechanisms and balanced token distribution.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {keyMetrics.map((metric, index) => (
            <div key={index} className="card text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary-500 to-berry-500 rounded-full text-white mb-4">
                {metric.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {metric.label}
              </h3>
              <p className="text-xl font-bold text-primary-600 dark:text-primary-400">
                {metric.value}
              </p>
            </div>
          ))}
        </div>

        {/* Deflationary Feature */}
        <div className="card mb-16 bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 border-2 border-red-200 dark:border-red-800">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full text-white mb-4">
              <TrendingDown className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Deflationary Mechanism
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
              1% of every transaction is automatically burned, reducing total supply over time
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 inline-block">
              <span className="text-sm text-gray-600 dark:text-gray-400">This creates scarcity and potential value appreciation</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Token Allocation */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Token Allocation
            </h3>
            <div className="space-y-4">
              {allocation.map((item, index) => (
                <div key={index} className="card">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {item.category}
                    </span>
                    <span className="font-bold text-primary-600 dark:text-primary-400">
                      {item.percentage}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-2">
                    <div 
                      className={`h-3 rounded-full ${item.color}`}
                      style={{ width: item.percentage }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {item.amount} BERRY
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Use Cases */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Token Use Cases
            </h3>
            <div className="space-y-4">
              {useCases.map((useCase, index) => (
                <div key={index} className="card group hover:bg-primary-50 dark:hover:bg-primary-900/20">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform">
                      {useCase.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {useCase.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {useCase.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Accepted Currencies */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            Accepted Currencies
          </h3>
          <div className="flex justify-center space-x-8">
            {['USDT', 'BNB', 'ETH'].map((currency) => (
              <div key={currency} className="card text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-berry-500 rounded-full mx-auto mb-2 flex items-center justify-center text-white font-bold">
                  {currency.slice(0, 1)}
                </div>
                <span className="font-semibold text-gray-900 dark:text-white">{currency}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;