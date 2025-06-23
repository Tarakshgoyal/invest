'use client'
import React from 'react';
import Link from 'next/link';
import { User, TrendingUp, TrendingDown, DollarSign, PieChart, BarChart3 } from 'lucide-react';

const UserDashboard = () => {
  const portfolioData = {
    totalValue: 125430.50,
    dayChange: +2345.67,
    dayChangePercent: +1.87,
    totalGainLoss: +15670.25,
    totalGainLossPercent: +14.25
  };

  const holdings = [
    {
      symbol: 'AAPL',
      name: 'Apple Inc.',
      shares: 50,
      currentPrice: 193.42,
      totalValue: 9671.00,
      gainLoss: +871.50,
      gainLossPercent: +9.88
    },
    {
      symbol: 'GOOGL',
      name: 'Alphabet Inc.',
      shares: 25,
      currentPrice: 138.21,
      totalValue: 3455.25,
      gainLoss: -245.30,
      gainLossPercent: -6.63
    },
    {
      symbol: 'MSFT',
      name: 'Microsoft Corporation',
      shares: 30,
      currentPrice: 378.85,
      totalValue: 11365.50,
      gainLoss: +1205.75,
      gainLossPercent: +11.86
    },
    {
      symbol: 'VTI',
      name: 'Vanguard Total Stock Market ETF',
      shares: 100,
      currentPrice: 245.67,
      totalValue: 24567.00,
      gainLoss: +2156.80,
      gainLossPercent: +9.63
    }
  ];

  const recentTransactions = [
    {
      type: 'Buy',
      symbol: 'AAPL',
      shares: 10,
      price: 190.25,
      date: '2024-06-20',
      total: 1902.50
    },
    {
      type: 'Sell',
      symbol: 'TSLA',
      shares: 5,
      price: 245.80,
      date: '2024-06-18',
      total: 1229.00
    },
    {
      type: 'Buy',
      symbol: 'VTI',
      shares: 20,
      price: 243.15,
      date: '2024-06-15',
      total: 4863.00
    }
  ];

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
            <Link href="/investment" className="text-gray-400 hover:text-gray-300">Investments</Link>
            <div className="flex items-center space-x-2 bg-gray-800 px-3 py-2 rounded-lg">
              <User className="w-5 h-5" />
              <span>Shah Rukh Khan</span>
            </div>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <h2 className="text-4xl font-bold mb-2">Dashboard</h2>
          <p className="text-gray-400">Welcome back! Here&apos;s your portfolio overview</p>
        </div>

        {/* Portfolio Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400 text-sm">Total Portfolio Value</span>
              <DollarSign className="w-5 h-5 text-gray-400" />
            </div>
            <div className="text-2xl font-bold">${portfolioData.totalValue.toLocaleString()}</div>
            <div className={`text-sm flex items-center mt-2 ${portfolioData.dayChange >= 0 ? 'text-green-400' : 'text-red-400'}`}>
              {portfolioData.dayChange >= 0 ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
              {portfolioData.dayChange >= 0 ? '+' : ''}${portfolioData.dayChange.toLocaleString()} ({portfolioData.dayChange >= 0 ? '+' : ''}{portfolioData.dayChangePercent}%) today
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400 text-sm">Total Gain/Loss</span>
              <TrendingUp className="w-5 h-5 text-gray-400" />
            </div>
            <div className={`text-2xl font-bold ${portfolioData.totalGainLoss >= 0 ? 'text-green-400' : 'text-red-400'}`}>
              {portfolioData.totalGainLoss >= 0 ? '+' : ''}${portfolioData.totalGainLoss.toLocaleString()}
            </div>
            <div className={`text-sm mt-2 ${portfolioData.totalGainLoss >= 0 ? 'text-green-400' : 'text-red-400'}`}>
              ({portfolioData.totalGainLoss >= 0 ? '+' : ''}{portfolioData.totalGainLossPercent}%) all time
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400 text-sm">Holdings</span>
              <PieChart className="w-5 h-5 text-gray-400" />
            </div>
            <div className="text-2xl font-bold">{holdings.length}</div>
            <div className="text-sm text-gray-400 mt-2">Active positions</div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400 text-sm">Cash Available</span>
              <DollarSign className="w-5 h-5 text-gray-400" />
            </div>
            <div className="text-2xl font-bold">$12,450</div>
            <div className="text-sm text-gray-400 mt-2">Ready to invest</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Holdings Section */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <BarChart3 className="w-6 h-6 mr-3" />
                <h3 className="text-2xl font-semibold">Your Holdings</h3>
              </div>
              <Link href="/investment" className="text-sm text-gray-400 hover:text-gray-300">View All</Link>
            </div>
            
            <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
              <div className="divide-y divide-gray-800">
                {holdings.map((holding) => (
                  <div key={holding.symbol} className="p-4 hover:bg-gray-800 transition-colors">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3">
                          <div>
                            <h4 className="font-semibold">{holding.symbol}</h4>
                            <p className="text-gray-400 text-sm">{holding.name}</p>
                          </div>
                        </div>
                        <div className="mt-2 text-sm text-gray-400">
                          {holding.shares} shares @ ${holding.currentPrice}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold">${holding.totalValue.toLocaleString()}</div>
                        <div className={`text-sm ${holding.gainLoss >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                          {holding.gainLoss >= 0 ? '+' : ''}${Math.abs(holding.gainLoss).toLocaleString()} ({holding.gainLoss >= 0 ? '+' : ''}{holding.gainLossPercent}%)
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Recent Transactions */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <BarChart3 className="w-6 h-6 mr-3" />
                <h3 className="text-2xl font-semibold">Recent Transactions</h3>
              </div>
              <button className="text-sm text-gray-400 hover:text-gray-300">View All</button>
            </div>
            
            <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
              <div className="divide-y divide-gray-800">
                {recentTransactions.map((transaction, index) => (
                  <div key={index} className="p-4 hover:bg-gray-800 transition-colors">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            transaction.type === 'Buy' ? 'bg-green-900 text-green-300' : 'bg-red-900 text-red-300'
                          }`}>
                            {transaction.type}
                          </span>
                          <div>
                            <h4 className="font-semibold">{transaction.symbol}</h4>
                            <p className="text-gray-400 text-sm">{transaction.shares} shares @ ${transaction.price}</p>
                          </div>
                        </div>
                        <div className="mt-2 text-sm text-gray-400">
                          {transaction.date}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold">${transaction.total.toLocaleString()}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Quick Actions */}
        {/* <section className="mt-8">
          <h3 className="text-2xl font-semibold mb-6">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link 
              to="/investment"
              className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors text-center"
            >
              <TrendingUp className="w-8 h-8 mx-auto mb-3" style={{ color: '#ddf1a5' }} />
              <h4 className="font-semibold mb-2">Explore Investments</h4>
              <p className="text-gray-400 text-sm">Discover new stocks and funds</p>
            </Link>
            
            <button className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors text-center">
              <DollarSign className="w-8 h-8 mx-auto mb-3" style={{ color: '#ddf1a5' }} />
              <h4 className="font-semibold mb-2">Add Funds</h4>
              <p className="text-gray-400 text-sm">Deposit money to your account</p>
            </button>
            
            <button className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors text-center">
              <Settings className="w-8 h-8 mx-auto mb-3" style={{ color: '#ddf1a5' }} />
              <h4 className="font-semibold mb-2">Account Settings</h4>
              <p className="text-gray-400 text-sm">Manage your profile and preferences</p>
            </button>
          </div>
        </section> */}
      </div>
    </div>
  );
};

export default UserDashboard;
