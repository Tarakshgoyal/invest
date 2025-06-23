'use client'
import React from 'react';
import Link from 'next/link';
import { TrendingUp, TrendingDown, BarChart3, User } from 'lucide-react';

const Investment = () => {
  const stocks = [
    {
      id: 'aapl',
      symbol: 'AAPL',
      name: 'Apple Inc.',
      price: 193.42,
      change: +2.35,
      changePercent: +1.23,
      marketCap: '3.01T'
    },
    {
      id: 'googl',
      symbol: 'GOOGL',
      name: 'Alphabet Inc.',
      price: 138.21,
      change: -1.47,
      changePercent: -1.05,
      marketCap: '1.72T'
    },
    {
      id: 'msft',
      symbol: 'MSFT',
      name: 'Microsoft Corporation',
      price: 378.85,
      change: +4.12,
      changePercent: +1.10,
      marketCap: '2.81T'
    },
    {
      id: 'tsla',
      symbol: 'TSLA',
      name: 'Tesla Inc.',
      price: 248.50,
      change: +8.23,
      changePercent: +3.42,
      marketCap: '791.2B'
    },
    {
      id: 'nvda',
      symbol: 'NVDA',
      name: 'NVIDIA Corporation',
      price: 875.28,
      change: +15.67,
      changePercent: +1.82,
      marketCap: '2.16T'
    },
    {
      id: 'amzn',
      symbol: 'AMZN',
      name: 'Amazon.com Inc.',
      price: 145.86,
      change: -2.14,
      changePercent: -1.45,
      marketCap: '1.51T'
    }
  ];

  const mutualFunds = [
    {
      id: 'vti',
      name: 'Vanguard Total Stock Market ETF',
      symbol: 'VTI',
      nav: 245.67,
      change: +1.23,
      changePercent: +0.50,
      aum: '1.3T',
      expenseRatio: 0.03
    },
    {
      id: 'spy',
      name: 'SPDR S&P 500 ETF Trust',
      symbol: 'SPY',
      nav: 472.31,
      change: +2.45,
      changePercent: +0.52,
      aum: '485.2B',
      expenseRatio: 0.09
    },
    {
      id: 'qqq',
      name: 'Invesco QQQ Trust',
      symbol: 'QQQ',
      nav: 395.78,
      change: +3.21,
      changePercent: +0.82,
      aum: '244.8B',
      expenseRatio: 0.20
    },
    {
      id: 'voo',
      name: 'Vanguard S&P 500 ETF',
      symbol: 'VOO',
      nav: 431.22,
      change: +1.87,
      changePercent: +0.44,
      aum: '421.3B',
      expenseRatio: 0.03
    },
    {
      id: 'iwm',
      name: 'iShares Russell 2000 ETF',
      symbol: 'IWM',
      nav: 196.45,
      change: -0.98,
      changePercent: -0.50,
      aum: '58.7B',
      expenseRatio: 0.19
    },
    {
      id: 'eem',
      name: 'iShares MSCI Emerging Markets ETF',
      symbol: 'EEM',
      nav: 41.23,
      change: +0.45,
      changePercent: +1.10,
      aum: '24.1B',
      expenseRatio: 0.68
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
            <Link 
              href={"/dashboard"}
              className="flex items-center space-x-2 text-gray-400 hover:text-gray-300 transition-colors"
            >
              <User className="w-4 h-4" />
              <span>Dashboard</span>
            </Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <h2 className="text-4xl font-bold mb-2">Investment Dashboard</h2>
          <p className="text-gray-400">Track and analyze your investment portfolio</p>
        </div>

        {/* Stocks Section */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <BarChart3 className="w-6 h-6 mr-3" />
            <h3 className="text-2xl font-semibold">Stocks</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stocks.map((stock) => (
              <Link
                key={stock.id}
                href={`/stock/${stock.id}`}
                className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-all duration-200 hover:scale-105"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-bold">{stock.symbol}</h4>
                    <p className="text-gray-400 text-sm">{stock.name}</p>
                  </div>
                  <div className={`flex items-center ${stock.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {stock.change >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-2xl font-bold">${stock.price}</span>
                    <div className={`text-right ${stock.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                      <div className="text-sm">{stock.change >= 0 ? '+' : ''}${stock.change}</div>
                      <div className="text-xs">({stock.change >= 0 ? '+' : ''}{stock.changePercent}%)</div>
                    </div>
                  </div>
                  <div className="text-gray-400 text-sm">
                    Market Cap: {stock.marketCap}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Mutual Funds Section */}
        <section>
          <div className="flex items-center mb-6">
            <BarChart3 className="w-6 h-6 mr-3" />
            <h3 className="text-2xl font-semibold">Mutual Funds & ETFs</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mutualFunds.map((fund) => (
              <Link
                key={fund.id}
                href={`/fund/${fund.id}`}
                className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-all duration-200 hover:scale-105"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-bold">{fund.symbol}</h4>
                    <p className="text-gray-400 text-sm leading-tight">{fund.name}</p>
                  </div>
                  <div className={`flex items-center ${fund.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {fund.change >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-2xl font-bold">${fund.nav}</span>
                    <div className={`text-right ${fund.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                      <div className="text-sm">{fund.change >= 0 ? '+' : ''}${fund.change}</div>
                      <div className="text-xs">({fund.change >= 0 ? '+' : ''}{fund.changePercent}%)</div>
                    </div>
                  </div>
                  <div className="text-gray-400 text-sm space-y-1">
                    <div>AUM: {fund.aum}</div>
                    <div>Expense Ratio: {fund.expenseRatio}%</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Investment;
