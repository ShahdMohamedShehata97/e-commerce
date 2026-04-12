'use client'

import React, { useState } from 'react';
import { FaCreditCard, FaMoneyBillWave, FaCheckCircle, FaLock, FaWallet } from 'react-icons/fa';
import { IoRadioButtonOff } from 'react-icons/io5';
import { SiVisa, SiMastercard, SiAmericanexpress } from 'react-icons/si';

export default function PaymentWay ()  {
  const [selected, setSelected] = useState('cash');

  return (
    <div className=" mx-auto mt-8 font-sans">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        
        {/* Header */}
        <div className="bg-[#1a9341] p-6 text-white">
          <div className="flex items-center gap-2 mb-1">
            <FaWallet size={20} />
            <h1 className="text-xl font-bold">Payment Method</h1>
          </div>
          <p className="text-sm opacity-90">Choose how you'd like to pay</p>
        </div>

        <div className="p-6 space-y-4">
          
          {/* Cash on Delivery Option */}
          <div 
            onClick={() => setSelected('cash')}
            className={`relative border-2 rounded-2xl p-5 flex items-center gap-4 cursor-pointer transition-all ${
              selected === 'cash' ? 'border-[#2ecc71] bg-white' : 'border-gray-100 bg-white'
            }`}
          >
            <div className={`p-3 rounded-xl shadow-sm ${selected === 'cash' ? 'bg-[#2ecc71] text-white' : 'bg-gray-100 text-gray-400'}`}>
              <FaMoneyBillWave size={24} />
            </div>
            <div className="flex-1">
              <h3 className={`font-bold ${selected === 'cash' ? 'text-[#1a9341]' : 'text-gray-800'}`}>Cash on Delivery</h3>
              <p className="text-gray-500 text-sm">Pay when your order arrives at your doorstep</p>
            </div>
            <div>
              {selected === 'cash' ? (
                <FaCheckCircle className="text-[#2ecc71]" size={24} />
              ) : (
                <IoRadioButtonOff className="text-gray-200" size={24} />
              )}
            </div>
          </div>

          {/* Pay Online Option */}
          <div 
            onClick={() => setSelected('online')}
            className={`relative border-2 rounded-2xl p-5 flex items-center gap-4 cursor-pointer transition-all ${
              selected === 'online' ? 'border-[#2ecc71] bg-white' : 'border-gray-100 bg-white'
            }`}
          >
            <div className={`p-3 rounded-xl ${selected === 'online' ? 'bg-[#2ecc71] text-white' : 'bg-gray-100 text-gray-400'}`}>
              <FaCreditCard size={24} />
            </div>
            <div className="flex-1">
              <h3 className={`font-bold ${selected === 'online' ? 'text-[#1a9341]' : 'text-gray-800'}`}>Pay Online</h3>
              <p className="text-gray-500 text-sm mb-2">Secure payment with Credit/Debit Card via Stripe</p>
              <div className="flex gap-2 text-blue-800">
                <SiVisa size={20} className="text-[#1A1F71]" />
                <SiMastercard size={20} className="text-[#EB001B]" />
                <SiAmericanexpress size={20} className="text-[#007CC3]" />
              </div>
            </div>
            <div>
              {selected === 'online' ? (
                <FaCheckCircle className="text-[#2ecc71]" size={24} />
              ) : (
                <IoRadioButtonOff className="text-gray-200" size={24} />
              )}
            </div>
          </div>

          {/* Secure & Encrypted Alert */}
          <div className="bg-[#f1fcf5] border border-green-50 rounded-2xl p-4 flex items-center gap-3">
            <div className="bg-[#dcfce7] text-[#1a9341] p-2 rounded-full">
              <FaLock size={14} />
            </div>
            <div>
              <h4 className="text-[#1a9341] text-sm font-bold">Secure & Encrypted</h4>
              <p className="text-[#2ecc71] text-xs">Your payment info is protected with 256-bit SSL encryption</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

