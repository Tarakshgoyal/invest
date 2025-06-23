'use client'
import Link from 'next/link';
import { TrendingUp, BarChart3, PieChart, ArrowRight, User } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0f0f0f', color: '#ddf1a5' }}>
      {/* Header with FeinAI Logo */}
      <header className="p-6 border-b border-gray-800">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#ddf1a5' }}>
              <span className="text-lg font-bold" style={{ color: '#0f0f0f' }}>F</span>
            </div>
            <h1 className="text-2xl font-bold">FeinAI</h1>
          </div>
          <nav className="flex items-center space-x-4">
            <Link 
              href={"/dashboard"}
              className="flex items-center space-x-2 text-gray-400 hover:text-gray-300 transition-colors"
            >
              <User className="w-4 h-4" />
              <span>Dashboard</span>
            </Link>
            <Link 
              href={"/investment"}
              className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors"
            >
              Get Started
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold mb-6">
            Smart Investment
            <br />
            <span className="bg-gradient-to-r from-green-400 to-yellow-300 bg-clip-text text-transparent">
              Analytics Platform
            </span>
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Track stocks, analyze mutual funds, and make informed investment decisions with real-time data and comprehensive analytics.
          </p>
          <div className="flex items-center justify-center space-x-4">
            <Link 
              href={"/dashboard"}
              className="inline-flex items-center space-x-2 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200 hover:scale-105"
              style={{ backgroundColor: '#ddf1a5', color: '#0f0f0f' }}
            >
              <User className="w-5 h-5" />
              <span>View Dashboard</span>
            </Link>
            <Link 
              href={"/investment"}
              className="inline-flex items-center space-x-2 px-8 py-4 text-lg font-semibold border-2 rounded-lg transition-all duration-200 hover:scale-105"
              style={{ 
                borderColor: '#ddf1a5', 
                color: '#ddf1a5',
                backgroundColor: 'transparent'
              }}
            >
              <span>Start Investing</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 text-center hover:border-gray-700 transition-colors">
            <div className="w-16 h-16 mx-auto mb-4 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#ddf1a5' }}>
              <TrendingUp className="w-8 h-8" style={{ color: '#0f0f0f' }} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Real-time Stock Tracking</h3>
            <p className="text-gray-400">Monitor stock prices, trends, and performance metrics with live market data and interactive charts.</p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 text-center hover:border-gray-700 transition-colors">
            <div className="w-16 h-16 mx-auto mb-4 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#ddf1a5' }}>
              <PieChart className="w-8 h-8" style={{ color: '#0f0f0f' }} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Mutual Fund Analysis</h3>
            <p className="text-gray-400">Analyze mutual funds and ETFs with detailed breakdowns, expense ratios, and sector allocations.</p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 text-center hover:border-gray-700 transition-colors">
            <div className="w-16 h-16 mx-auto mb-4 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#ddf1a5' }}>
              <BarChart3 className="w-8 h-8" style={{ color: '#0f0f0f' }} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Advanced Analytics</h3>
            <p className="text-gray-400">Access comprehensive market insights, performance comparisons, and AI-powered investment recommendations.</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to make smarter investments?</h3>
          <p className="text-gray-400 mb-8">Join thousands of investors using FeinAI to optimize their portfolios.</p>
          <Link 
            href={"/investment"}
            className="inline-flex items-center space-x-2 px-8 py-4 text-lg font-semibold border-2 rounded-lg transition-all duration-200 hover:scale-105"
            style={{ 
              borderColor: '#ddf1a5', 
              color: '#ddf1a5',
              backgroundColor: 'transparent'
            }}
          >
            <span>View Investment Dashboard</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
