'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { TrendingUp, TrendingDown, BarChart3, User } from 'lucide-react';

type Stock = {
  id: string;
  tradingsymbol: string;
  token: string;
  exchange: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  marketCap: string;
};

const Investment = () => {
  const [stocks, setStocks] = useState<Stock[]>([]);
  const [funds, setFunds] = useState([]);
  const [error, setError] = useState('');
  const stockList = [
    { id: 'aapl', tradingsymbol: 'AAPL', token: 'XXXX', exchange: 'NASDAQ' },
    { id: 'googl', tradingsymbol: 'GOOGL', token: 'YYYY', exchange: 'NASDAQ' },
    // Add others...
  ];

  const fundList = [
    { id: 'spy', tradingsymbol: 'SPY', token: 'ZZZZ', exchange: 'AMEX' },
    // Add more...
  ];
  const fetchStockData = async () => {
    try {
      const results = await Promise.all(
        stockList.map(async (stock) => {
          const res = await fetch('http://localhost:5000/angel/ltp', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              exchange: stock.exchange,
              symbol_token: stock.token,
              tradingsymbol: stock.tradingsymbol,
            }),
          });
          const data = await res.json();
          return {
            ...stock,
            name: stock.tradingsymbol,
            price: data.ltp || 0,
            change: data.change || 0,
            changePercent: data.change_percentage || 0,
            marketCap: '—',
          };
        })
      );
      setStocks(results);
    } catch (err) {
      setError('Error loading stocks.');
      console.error(err);
    }
  };

  const fetchFundData = async () => {
    // Implement similar to fetchStockData if you have ETF LTP tokens
    setFunds([]); // optional fallback
  };

  useEffect(() => {
    fetchStockData();
    fetchFundData();
  }, []);

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
                    {/* <h4 className="text-xl font-bold">{stock.symbol}</h4> */}
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
          
          
        </section>
      </div>
    </div>
  );
};

export default Investment;
