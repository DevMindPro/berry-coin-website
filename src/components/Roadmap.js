import React from 'react';
import { 
  FileText, 
  Users, 
  Shield, 
  TestTube, 
  Rocket, 
  Building, 
  Crown,
  CheckCircle,
  Clock,
  ArrowRight
} from 'lucide-react';

const Roadmap = () => {
  const phases = [
    {
      phase: '0',
      title: 'Concept & Foundation',
      status: 'completed',
      icon: <FileText className="w-6 h-6" />,
      objectives: [
        'Whitepaper & Branding',
        'Core Team Formation',
        'Legal Structure Setup'
      ]
    },
    {
      phase: '1',
      title: 'Tokenomics & Audit',
      status: 'completed',
      icon: <Shield className="w-6 h-6" />,
      objectives: [
        'Token contract creation (BEP-20)',
        'Smart contract audit',
        'KYC/AML compliance'
      ]
    },
    {
      phase: '2',
      title: 'Testnet Launch',
      status: 'in-progress',
      icon: <TestTube className="w-6 h-6" />,
      objectives: [
        'Testnet for token/staking',
        'Wallet integration (MetaMask/Trust Wallet)',
        'Beta platform demo'
      ]
    },
    {
      phase: '3',
      title: 'Presale & Public Sale',
      status: 'upcoming',
      icon: <Rocket className="w-6 h-6" />,
      objectives: [
        'Whitelist & marketing',
        'Public sale on launchpads',
        'DEX listing (PancakeSwap/Uniswap)'
      ]
    },
    {
      phase: '4',
      title: 'Ecosystem Expansion',
      status: 'upcoming',
      icon: <Building className="w-6 h-6" />,
      objectives: [
        'Launch BerrySwap & BerryStaking',
        'Introduce BerryNFT Marketplace',
        'Implement BerryDAO'
      ]
    },
    {
      phase: '5',
      title: 'RWA Integration',
      status: 'upcoming',
      icon: <Users className="w-6 h-6" />,
      objectives: [
        'Tokenize first real-world asset',
        'Launch Berry Wallet mobile app',
        'CEX listing (Gate.io/KuCoin)'
      ]
    },
    {
      phase: '6',
      title: 'DAO & Sustainability',
      status: 'upcoming',
      icon: <Crown className="w-6 h-6" />,
      objectives: [
        'Full DAO governance',
        'Treasury decentralization',
        'Launch Berry Foundation for ecosystem grants'
      ]
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'from-green-500 to-green-600';
      case 'in-progress':
        return 'from-yellow-500 to-orange-500';
      case 'upcoming':
        return 'from-gray-400 to-gray-500';
      default:
        return 'from-gray-400 to-gray-500';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-4 h-4" />;
      case 'in-progress':
        return <Clock className="w-4 h-4" />;
      case 'upcoming':
        return <ArrowRight className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <section id="roadmap" className="section-padding gradient-bg">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Roadmap to <span className="bg-gradient-to-r from-primary-600 to-berry-600 bg-clip-text text-transparent">Decentralization</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Our strategic development phases designed to build a sustainable and robust ecosystem.
          </p>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-8">
          {phases.map((phase, index) => (
            <div key={phase.phase} className="relative">
              <div className="flex items-start">
                {/* Timeline Column */}
                <div className="flex flex-col items-center mr-4 flex-shrink-0">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${getStatusColor(phase.status)} flex items-center justify-center text-white font-bold text-sm z-10 shadow-lg`}>
                    {phase.phase}
                  </div>
                  {index < phases.length - 1 && (
                    <div className="w-0.5 h-24 bg-gradient-to-b from-primary-500 to-berry-500 mt-3"></div>
                  )}
                </div>

                {/* Content Card */}
                <div className="flex-1 min-w-0">
                  <div className="card">
                    {/* Phase Header */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className={`p-2 rounded-lg bg-gradient-to-r ${getStatusColor(phase.status)} text-white`}>
                            {phase.icon}
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                              Phase {phase.phase}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {phase.title}
                            </p>
                          </div>
                        </div>
                        <div className={`flex items-center space-x-1 px-2 py-1 rounded-full bg-gradient-to-r ${getStatusColor(phase.status)} text-white text-xs flex-shrink-0`}>
                          {getStatusIcon(phase.status)}
                          <span className="capitalize hidden sm:inline">{phase.status.replace('-', ' ')}</span>
                        </div>
                      </div>
                    </div>

                    {/* Objectives */}
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Objectives:</h4>
                      <ul className="space-y-2">
                        {phase.objectives.map((objective, objIndex) => (
                          <li key={objIndex} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                            <span className="leading-relaxed">{objective}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-berry-500 rounded-full"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {phases.map((phase, index) => (
              <div key={phase.phase} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Content Card */}
                <div className="w-5/12">
                  <div className="card group hover:scale-105 transition-all duration-300">
                    {/* Phase Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${getStatusColor(phase.status)} text-white`}>
                          {phase.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                            Phase {phase.phase}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {phase.title}
                          </p>
                        </div>
                      </div>
                      <div className={`flex items-center space-x-1 px-2 py-1 rounded-full bg-gradient-to-r ${getStatusColor(phase.status)} text-white text-xs`}>
                        {getStatusIcon(phase.status)}
                        <span className="capitalize">{phase.status.replace('-', ' ')}</span>
                      </div>
                    </div>

                    {/* Objectives */}
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Objectives:</h4>
                      <ul className="space-y-2">
                        {phase.objectives.map((objective, objIndex) => (
                          <li key={objIndex} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                            {objective}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="w-2/12 flex justify-center">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${getStatusColor(phase.status)} flex items-center justify-center text-white font-bold text-sm z-10 relative shadow-lg`}>
                    {phase.phase}
                  </div>
                </div>

                {/* Spacer */}
                <div className="w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            Development Progress
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { label: 'Phases Completed', value: '2/7', percentage: '29%', color: 'from-green-500 to-green-600' },
              { label: 'In Progress', value: '1/7', percentage: '14%', color: 'from-yellow-500 to-orange-500' },
              { label: 'Upcoming', value: '4/7', percentage: '57%', color: 'from-gray-400 to-gray-500' }
            ].map((stat, index) => (
              <div key={index} className="card text-center">
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${stat.color} rounded-full text-white mb-4 font-bold`}>
                  {stat.value.split('/')[0]}
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {stat.label}
                </h4>
                <p className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-1">
                  {stat.percentage}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.value} phases
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;