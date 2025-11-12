import React from 'react';
import { 
  Shield, 
  Users, 
  CheckCircle, 
  FileCheck,
  Lock,
  Globe,
  Award,
  Eye
} from 'lucide-react';

const Security = () => {
  const securityMeasures = [
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: 'Smart Contract Audit',
      description: 'Comprehensive security audit by top blockchain security firms',
      details: ['Code review by certified auditors', 'Vulnerability assessment', 'Gas optimization analysis'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: 'Multi-Signature Treasury',
      description: 'Multi-signature wallet protection for treasury funds',
      details: ['Multiple key holders required', 'Time-locked transactions', 'Community oversight'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'KYC Verification',
      description: 'Know Your Customer verification for presale participants',
      details: ['Identity verification process', 'Anti-money laundering checks', 'Regulatory compliance'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Regulatory Compliance',
      description: 'Full compliance with international cryptocurrency regulations',
      details: ['Legal framework adherence', 'Jurisdiction compliance', 'Regular legal reviews'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const trustIndicators = [
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Audited Code',
      value: '100%',
      description: 'Smart contracts audited'
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: 'Transparency',
      value: 'Full',
      description: 'Open-source development'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Security Score',
      value: 'A+',
      description: 'Top-tier security rating'
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Compliance',
      value: '100%',
      description: 'Regulatory adherence'
    }
  ];

  return (
    <section id="security" className="section-padding bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Trust and <span className="bg-gradient-to-r from-primary-600 to-berry-600 bg-clip-text text-transparent">Transparency</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Built with security-first principles and industry-leading compliance standards to ensure user protection and regulatory adherence.
          </p>
        </div>

        {/* Security Measures Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {securityMeasures.map((measure, index) => (
            <div key={index} className="card group hover:scale-105 transition-all duration-300">
              {/* Header */}
              <div className="flex items-center space-x-4 mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${measure.color} text-white group-hover:scale-110 transition-transform`}>
                  {measure.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {measure.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {measure.description}
              </p>

              {/* Details */}
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Key Features:
                </h4>
                <ul className="space-y-1">
                  {measure.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {trustIndicators.map((indicator, index) => (
            <div key={index} className="card text-center group hover:bg-primary-50 dark:hover:bg-primary-900/20">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary-500 to-berry-500 rounded-full text-white mb-4 group-hover:scale-110 transition-transform">
                {indicator.icon}
              </div>
              <h3 className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                {indicator.value}
              </h3>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                {indicator.title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {indicator.description}
              </p>
            </div>
          ))}
        </div>

        {/* Security Commitment */}
        <div className="card bg-gradient-to-r from-primary-50 to-berry-50 dark:from-primary-900/20 dark:to-berry-900/20 border-2 border-primary-200 dark:border-primary-800">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-berry-500 rounded-full text-white mb-6">
              <Shield className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Our Security Commitment
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 max-w-3xl mx-auto">
              We prioritize the security and protection of our community above all else. Every aspect of our platform 
              undergoes rigorous testing and verification before deployment.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {[
                { title: 'Continuous Monitoring', desc: '24/7 security monitoring and threat detection' },
                { title: 'Regular Updates', desc: 'Ongoing security patches and improvements' },
                { title: 'Community Reporting', desc: 'Bug bounty program for community-reported vulnerabilities' }
              ].map((commitment, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {commitment.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {commitment.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;