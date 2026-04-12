'use client'
import { useState } from 'react';

const PriceRange = () => {
  const [minPrice, setMinPrice] = useState('0');
  const [maxPrice, setMaxPrice] = useState('');

  const quickFilters = ["Under 500", "Under 1K", "Under 5K", "Under 10K"];

  return (
    <div className="mt-2 ">
      {/* Title */}
      <h3 className="text-sm font-bold text-[#0f172a] mb-2">Price Range</h3>

      {/* Input Fields */}
      <div className="flex gap-4 mb-4">
        <div className="flex-1">
          <label className="block text-sm text-slate-500 mb-2">Min (EGP)</label>
          <input
            type="text"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
          />
        </div>
        <div className="flex-1">
          <label className="block text-sm text-slate-500 mb-2">Max (EGP)</label>
          <input
            type="text"
            placeholder="No limit"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-400 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
          />
        </div>
      </div>

      {/* Quick Filter Tags */}
      <div className="flex flex-wrap gap-2">
        {quickFilters.map((filter) => (
          <button
            key={filter}
            className="px-4 py-2 bg-slate-50 text-slate-600 rounded-full text-sm font-medium hover:bg-slate-100 transition-colors border border-transparent active:scale-95"
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PriceRange;