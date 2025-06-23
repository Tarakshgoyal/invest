'use client'
import React from 'react';
import { useParams } from 'react-router-dom';
import Link from 'next/link';
import { ArrowLeft, TrendingUp, TrendingDown, BarChart3, DollarSign, Percent, PieChart } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart as RechartsPieChart, Cell } from 'recharts';

const FundDetail = () => {
  const { id } = useParams();

  // Mock data - in a real app, this would come from an API
  const fundData = {
    vti: {
      name: 'Vanguard Total Stock Market ETF',
      symbol: 'VTI',
      nav: 245.67,
      change: +1.23,
      changePercent: +0.50,
      aum: '1.3T',
      expenseRatio: 0.03,
      inception: '2001-05-24',
      yield: '1.31%',
      ytdReturn: '+18.42%',
      description: 'The investment seeks to track the performance of the CRSP US Total Market Index. The fund employs an indexing investment approach designed to track the performance of the CRSP US Total Market Index, which represents approximately 100% of the investable U.S. stock market.'
    },
    spy: {
      name: 'SPDR S&P 500 ETF Trust',
      symbol: 'SPY',
      nav: 472.31,
      change: +2.45,
      changePercent: +0.52,
      aum: '485.2B',
      expenseRatio: 0.09,
      inception: '1993-01-22',
      yield: '1.23%',
      ytdReturn: '+23.15%',
      description: 'The SPDR S&P 500 ETF Trust seeks to provide investment results that, before expenses, correspond generally to the price and yield performance of the S&P 500 Index.'
    },
    qqq: {
      name: 'Invesco QQQ Trust',
      symbol: 'QQQ',
      nav: 395.78,
      change: +3.21,
      changePercent: +0.82,
      aum: '244.8B',
      expenseRatio: 0.20,
      inception: '1999-03-10',
      yield: '0.52%',
      ytdReturn: '+28.67%',
      description: 'The investment seeks investment results that generally correspond to the price and yield performance of the NASDAQ-100 Index.'
    },
    voo: {
      name: 'Vanguard S&P 500 ETF',
      symbol: 'VOO',
      nav: 431.22,
      change: +1.87,
      changePercent: +0.44,
      aum: '421.3B',
      expenseRatio: 0.03,
      inception: '2010-09-07',
      yield: '1.28%',
      ytdReturn: '+22.89%',
      description: 'The investment seeks to track the performance of the Standard & Poor\'s 500 Index. The fund employs an indexing investment approach designed to track the performance of the S&P 500 Index.'
    },
    iwm: {
      name: 'iShares Russell 2000 ETF',
      symbol: 'IWM',
      nav: 196.45,
      change: -0.98,
      changePercent: -0.50,
      aum: '58.7B',
      expenseRatio: 0.19,
      inception: '2000-05-22',
      yield: '1.15%',
      ytdReturn: '+8.34%',
      description: 'The iShares Russell 2000 ETF seeks to track the investment results of the Russell 2000 Index, which measures the performance of the small-capitalization sector of the U.S. equity market.'
    },
    eem: {
      name: 'iShares MSCI Emerging Markets ETF',
      symbol: 'EEM',
      nav: 41.23,
      change: +0.45,
      changePercent: +1.10,
      aum: '24.1B',
      expenseRatio: 0.68,
      inception: '2003-04-07',
      yield: '2.84%',
      ytdReturn: '+12.45%',
      description: 'The iShares MSCI Emerging Markets ETF seeks to track the investment results of the MSCI Emerging Markets Index, which consists of stocks from emerging market countries.'
    }
  };

  const fund = fundData[id as keyof typeof fundData];

  if (!fund) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#0f0f0f', color: '#ddf1a5' }}>
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Fund not found</h1>
          <Link href="/investment" className="text-blue-400 hover:underline">Go back to Investment Dashboard</Link>
        </div>
      </div>
    );
  }

  // Mock chart data
  const chartData = [
    { time: 'Jan', price: fund.nav - 15 },
    { time: 'Feb', price: fund.nav - 12 },
    { time: 'Mar', price: fund.nav - 8 },
    { time: 'Apr', price: fund.nav - 5 },
    { time: 'May', price: fund.nav - 3 },
    { time: 'Jun', price: fund.nav - 1 },
    { time: 'Jul', price: fund.nav + 2 },
    { time: 'Aug', price: fund.nav + 1 },
    { time: 'Sep', price: fund.nav - 2 },
    { time: 'Oct', price: fund.nav + 3 },
    { time: 'Nov', price: fund.nav + 1 },
    { time: 'Dec', price: fund.nav },
  ];

  // Mock allocation data
  const allocationData = [
    { name: 'Technology', value: 28.5, color: '#ddf1a5' },
    { name: 'Healthcare', value: 13.2, color: '#a7f3d0' },
    { name: 'Financials', value: 12.8, color: '#86efac' },
    { name: 'Consumer Disc.', value: 10.4, color: '#65a30d' },
    { name: 'Industrials', value: 8.9, color: '#4d7c0f' },
    { name: 'Others', value: 26.2, color: '#365314' }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0f0f0f', color: '#ddf1a5' }}>
      {/* Header */}
      <header className="p-6 border-b border-gray-800">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/investment" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Dashboard</span>
            </Link>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#ddf1a5' }}>
              <span className="text-sm font-bold" style={{ color: '#0f0f0f' }}>F</span>
            </div>
            <h1 className="text-xl font-bold">FeinAI</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Fund Header */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <PieChart className="w-8 h-8 mr-3" />
            <div>
              <h1 className="text-4xl font-bold">{fund.symbol}</h1>
              <p className="text-xl text-gray-400">{fund.name}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <span className="text-5xl font-bold">${fund.nav}</span>
            <div className={`flex items-center space-x-2 ${fund.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
              {fund.change >= 0 ? <TrendingUp className="w-6 h-6" /> : <TrendingDown className="w-6 h-6" />}
              <span className="text-2xl font-semibold">
                {fund.change >= 0 ? '+' : ''}${fund.change} ({fund.change >= 0 ? '+' : ''}{fund.changePercent}%)
              </span>
            </div>
          </div>
        </div>

        {/* Performance Chart */}
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-semibold mb-4">12-Month Performance</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="time" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    color: '#ddf1a5'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="price" 
                  stroke="#ddf1a5" 
                  strokeWidth={2}
                  dot={{ fill: '#ddf1a5', strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Fund Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <div className="flex items-center mb-2">
              <DollarSign className="w-5 h-5 mr-2" />
              <span className="text-gray-400">AUM</span>
            </div>
            <span className="text-2xl font-bold">{fund.aum}</span>
          </div>
          
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <div className="flex items-center mb-2">
              <Percent className="w-5 h-5 mr-2" />
              <span className="text-gray-400">Expense Ratio</span>
            </div>
            <span className="text-2xl font-bold">{fund.expenseRatio}%</span>
          </div>
          
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <div className="flex items-center mb-2">
              <TrendingUp className="w-5 h-5 mr-2" />
              <span className="text-gray-400">Dividend Yield</span>
            </div>
            <span className="text-2xl font-bold">{fund.yield}</span>
          </div>
          
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <div className="flex items-center mb-2">
              <BarChart3 className="w-5 h-5 mr-2" />
              <span className="text-gray-400">YTD Return</span>
            </div>
            <span className="text-2xl font-bold text-green-400">{fund.ytdReturn}</span>
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Fund Details</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-400">Inception Date:</span>
                <span>{fund.inception}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Expense Ratio:</span>
                <span>{fund.expenseRatio}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Dividend Yield:</span>
                <span>{fund.yield}</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Sector Allocation</h3>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsPieChart>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1F2937', 
                      border: '1px solid #374151',
                      borderRadius: '8px',
                      color: '#ddf1a5'
                    }}
                  />
                  <RechartsPieChart data={allocationData} cx="50%" cy="50%" outerRadius={80}>
                    {allocationData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </RechartsPieChart>
                </RechartsPieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 space-y-2">
              {allocationData.map((item, index) => (
                <div key={index} className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded mr-2" style={{ backgroundColor: item.color }}></div>
                    <span>{item.name}</span>
                  </div>
                  <span>{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mt-8">
          <h3 className="text-xl font-semibold mb-4">About {fund.name}</h3>
          <p className="text-gray-300 leading-relaxed">{fund.description}</p>
        </div>
      </div>
    </div>
  );
};

export default FundDetail;
