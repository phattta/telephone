'use client';

import React from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-[#0a1a4f] to-[#123d8b] text-white min-h-screen pt-16">
      {/* Hero Section */}
      <div className="container max-w-7xl mx-auto px-4 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <div className="inline-block bg-[#2d3b6f] text-sm px-6 py-2 rounded-full">
              ⭐ Premium quality products with excellent after-sales service
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Experience the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Digital
              </span>{' '}
              <br />
              Future Today
            </h1>

            <p className="text-base md:text-lg font-medium text-white/100">
              Advanced technology, elegant design, at<br /> prices you can afford.
              Exclusive promotions<br /> only at PhoneHub
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex flex-col w-full gap-4 sm:flex-row sm:w-auto">
                <button className="w-full sm:w-auto bg-gradient-to-r from-[#2563eb] to-[#22d3ee] text-white px-8 py-2 rounded-full font-semibold text-lg hover:opacity-90 transition">
                  Shop Now
                </button>
                <button className="w-full sm:w-auto border-2 border-white/20 bg-white/5 backdrop-blur-sm px-8 py-2 rounded-full font-semibold text-lg hover:bg-white/10 transition">
                  Learn More
                </button>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="shrink-0"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                Free Nationwide Shipping
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="shrink-0"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                1-Year Warranty
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="shrink-0"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                0% Installment for 10 Months
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="relative flex justify-center md:justify-end">
            <Image
              src="/home.png"
              alt="phone"
              width={400}
              height={400}
              className="w-full max-w-[400px] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
