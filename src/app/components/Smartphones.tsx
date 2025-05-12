'use client';

import React from 'react';
import Image from 'next/image';

export default function Smartphones() {
    return (
        <section className="bg-[#f9fbfd] px-4 py-16">
            <div className="max-w-7xl mx-auto">
                <div className="bg-gradient-to-r from-[#2563eb] to-[#22d3ee] rounded-3xl overflow-hidden shadow-lg">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        {/* Left Side */}
                        <div className="text-white p-8 sm:p-12 flex flex-col justify-between">
                            <div>
                                <div className="inline-block bg-white/20 text-sm px-4 py-1 rounded-full mb-6">
                                    Special Promotion
                                </div>
                                <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-6">
                                    New<br />
                                    Smartphones<br />
                                    <span className="text-yellow-300">Up to 30%<br />OFF</span>
                                </h2>
                                <p className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl text-white/90 max-w-md mb-8">
                                    Purchase a new smartphone and get up to 30% discount plus exclusive free gifts
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button className="w-full sm:w-auto bg-white text-blue-600 font-semibold px-8 py-2 rounded-full hover:scale-105 transition">
                                        Shop Now
                                    </button>
                                    <button className="w-full sm:w-auto bg-white backdrop-blur-sm text-white font-semibold px-8 py-2 rounded-full hover:bg-white/30 border-2 transition-all duration-300">
                                        Promotion Details
                                    </button>
                                </div>
                            </div>

                            <div className="mt-8 flex justify-end">
                                <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                                    Ends May 31, 2025
                                </span>
                            </div>
                        </div>

                        {/* Right Side */}
                        <div className="relative h-[280px] sm:h-[400px] lg:h-auto">
                            <Image
                                src="/photo-1568706407142-cafe0c91e5a6.jpg"
                                alt="Promotion Phone"
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="bg-white/20 backdrop-blur-lg text-center px-6 sm:px-8 py-4 sm:py-6 rounded-full">
                                    <div className="text-sm font-medium text-white">Up to</div>
                                    <div className="text-3xl sm:text-4xl font-extrabold text-yellow-300">30%</div>
                                    <div className="text-sm font-medium text-white">OFF</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
