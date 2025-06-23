'use client'
import React from 'react';
import { useParams } from 'react-router-dom';
import Link from 'next/link';
import { ArrowLeft, TrendingUp, TrendingDown, BarChart3, DollarSign, Users, Calendar } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const StockDetail = () => {
  const { id } = useParams();

  // Mock data - in a real app, this would come from an API
  const stockData = {
    aapl: {
      symbol: 'AAPL',
      name: 'Apple Inc.',
      price: 193.42,
      change: +2.35,
      changePercent: +1.23,
      marketCap: '3.01T',
      volume: '52.3M',
      peRatio: '29.85',
      dividend: '0.94%',
      dayHigh: 195.12,
      dayLow: 191.33,
      weekHigh: 199.62,
      weekLow: 164.08,
      description: 'Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide.'
    },
    googl: {
      symbol: 'GOOGL',
      name: 'Alphabet Inc.',
      price: 138.21,
      change: -1.47,
      changePercent: -1.05,
      marketCap: '1.72T',
      volume: '28.7M',
      peRatio: '25.14',
      dividend: 'N/A',
      dayHigh: 140.15,
      dayLow: 137.22,
      weekHigh: 152.33,
      weekLow: 121.46,
      description: 'Alphabet Inc. provides online advertising services in the United States, Europe, the Middle East, Africa, the Asia-Pacific, Canada, and Latin America.'
    },
    msft: {
      symbol: 'MSFT',
      name: 'Microsoft Corporation',
      price: 378.85,
      change: +4.12,
      changePercent: +1.10,
      marketCap: '2.81T',
      volume: '31.2M',
      peRatio: '32.45',
      dividend: '0.68%',
      dayHigh: 380.22,
      dayLow: 375.14,
      weekHigh: 384.52,
      weekLow: 309.45,
      description: 'Microsoft Corporation develops, licenses, and supports software, services, devices, and solutions worldwide.'
    },
    tsla: {
      symbol: 'TSLA',
      name: 'Tesla Inc.',
      price: 248.50,
      change: +8.23,
      changePercent: +3.42,
      marketCap: '791.2B',
      volume: '89.4M',
      peRatio: '68.12',
      dividend: 'N/A',
      dayHigh: 252.14,
      dayLow: 242.33,
      weekHigh: 299.29,
      weekLow: 138.80,
      description: 'Tesla, Inc. designs, develops, manufactures, leases, and sells electric vehicles, and energy generation and storage systems.'
    },
    nvda: {
      symbol: 'NVDA',
      name: 'NVIDIA Corporation',
      price: 875.28,
      change: +15.67,
      changePercent: +1.82,
      marketCap: '2.16T',
      volume: '42.1M',
      peRatio: '73.22',
      dividend: '0.09%',
      dayHigh: 882.45,
      dayLow: 868.12,
      weekHigh: 950.02,
      weekLow: 394.13,
      description: 'NVIDIA Corporation operates as a computing company in the United States, Taiwan, China, Hong Kong, and internationally.'
    },
    amzn: {
      symbol: 'AMZN',
      name: 'Amazon.com Inc.',
      price: 145.86,
      change: -2.14,
      changePercent: -1.45,
      marketCap: '1.51T',
      volume: '35.8M',
      peRatio: '48.75',
      dividend: 'N/A',
      dayHigh: 148.22,
      dayLow: 144.33,
      weekHigh: 170.15,
      weekLow: 118.35,
      description: 'Amazon.com, Inc. engages in the retail sale of consumer products and subscriptions in North America and internationally.'
    }
  };

  const stock = stockData[id as keyof typeof stockData];

  if (!stock) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#0f0f0f', color: '#ddf1a5' }}>
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Stock not found</h1>
          <Link href="@/pages/Investment" className="text-blue-400 hover:underline">Go back to Investment Dashboard</Link>
        </div>
      </div>
    );
  }

  // Mock chart data
  const chartData = [
    { time: '9:30', price: stock.price - 8 },
    { time: '10:00', price: stock.price - 6 },
    { time: '10:30', price: stock.price - 4 },
    { time: '11:00', price: stock.price - 7 },
    { time: '11:30', price: stock.price - 3 },
    { time: '12:00', price: stock.price - 5 },
    { time: '12:30', price: stock.price - 2 },
    { time: '13:00', price: stock.price - 1 },
    { time: '13:30', price: stock.price + 1 },
    { time: '14:00', price: stock.price - 1 },
    { time: '14:30', price: stock.price + 2 },
    { time: '15:00', price: stock.price + 1 },
    { time: '15:30', price: stock.price },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0f0f0f', color: '#ddf1a5' }}>
      {/* Header */}
      <header className="p-6 border-b border-gray-800">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="@/pages/Investment" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
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
        {/* Stock Header */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <BarChart3 className="w-8 h-8 mr-3" />
            <div>
              <h1 className="text-4xl font-bold">{stock.symbol}</h1>
              <p className="text-xl text-gray-400">{stock.name}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <span className="text-5xl font-bold">${stock.price}</span>
            <div className={`flex items-center space-x-2 ${stock.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
              {stock.change >= 0 ? <TrendingUp className="w-6 h-6" /> : <TrendingDown className="w-6 h-6" />}
              <span className="text-2xl font-semibold">
                {stock.change >= 0 ? '+' : ''}${stock.change} ({stock.change >= 0 ? '+' : ''}{stock.changePercent}%)
              </span>
            </div>
          </div>
        </div>

        {/* Chart Section */}
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-semibold mb-4">Today&apos;s Performance</h3>
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

        {/* Stock Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <div className="flex items-center mb-2">
              <DollarSign className="w-5 h-5 mr-2" />
              <span className="text-gray-400">Market Cap</span>
            </div>
            <span className="text-2xl font-bold">{stock.marketCap}</span>
          </div>
          
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <div className="flex items-center mb-2">
              <Users className="w-5 h-5 mr-2" />
              <span className="text-gray-400">Volume</span>
            </div>
            <span className="text-2xl font-bold">{stock.volume}</span>
          </div>
          
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <div className="flex items-center mb-2">
              <BarChart3 className="w-5 h-5 mr-2" />
              <span className="text-gray-400">P/E Ratio</span>
            </div>
            <span className="text-2xl font-bold">{stock.peRatio}</span>
          </div>
          
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <div className="flex items-center mb-2">
              <Calendar className="w-5 h-5 mr-2" />
              <span className="text-gray-400">Dividend Yield</span>
            </div>
            <span className="text-2xl font-bold">{stock.dividend}</span>
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Price Ranges</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-400">Day Range:</span>
                <span>${stock.dayLow} - ${stock.dayHigh}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">52 Week Range:</span>
                <span>${stock.weekLow} - ${stock.weekHigh}</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">About {stock.name}</h3>
            <p className="text-gray-300 leading-relaxed">{stock.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockDetail;
