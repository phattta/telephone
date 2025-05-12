'use client';

import React, { useEffect, useState } from 'react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                scrolled ? 'bg-white shadow-md' : 'bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                <div className={`font-bold text-xl ${
                    scrolled ? 'text-blue-600' : 'text-blue-400'
                }`}>
                    PhoneHub
                </div>

                {/* Desktop Navigation */}
                <nav className={`space-x-6 font-semibold hidden md:flex ${
                    scrolled ? 'text-gray-700' : 'text-white'
                }`}>
                    <a href="#" className="hover:text-blue-300">Home</a>
                    <a href="#" className="hover:text-blue-300">New Arrivals</a>
                    <a href="#" className="hover:text-blue-300">Promotions</a>
                    <a href="#" className="hover:text-blue-300">Smartphones</a>
                    <a href="#" className="hover:text-blue-300">Accessories</a>
                </nav>

                {/* Icons */}
                <div className="flex items-center gap-4">
                    <div className={`flex items-center space-x-4 ${
                        scrolled ? 'text-gray-700' : 'text-white'
                    }`}>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21 21-4.34-4.34" /><circle cx="11" cy="11" r="8" /></svg>
                        </button>
                        <button className="relative">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" /></svg>
                            <span className="absolute -top-2 -right-2 bg-blue-500 text-xs rounded-full w-5 h-5 flex items-center justify-center text-white">
                                3
                            </span>
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className={`md:hidden ${scrolled ? 'text-gray-700' : 'text-white'}`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            {isMenuOpen ? (
                                <path d="M18 6 6 18M6 6l12 12"/>
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16"/>
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <nav className={`md:hidden ${
                    scrolled ? 'bg-white text-gray-700' : 'bg-[#0a1a4f] text-white'
                } py-4`}>
                    <div className="flex flex-col space-y-4 px-4">
                        <a href="#" className="hover:text-blue-300">Home</a>
                        <a href="#" className="hover:text-blue-300">New Arrivals</a>
                        <a href="#" className="hover:text-blue-300">Promotions</a>
                        <a href="#" className="hover:text-blue-300">Smartphones</a>
                        <a href="#" className="hover:text-blue-300">Accessories</a>
                    </div>
                </nav>
            )}
        </header>
    );
}
