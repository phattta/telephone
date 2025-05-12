'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const products = [
    {
        name: 'Latest Pro Max Model',
        price: 45900,
        tag: 'New',
        category: 'Flagship',
        image: '/home.png',
    },
    {
        name: 'Popular Ultra Model',
        price: 35010,
        oldPrice: 38900,
        discount: '-10%',
        category: 'Flagship',
        image: '/photo-1616348436168-de43ad0db179.jpg',
    },
    {
        name: 'Budget Lite Model',
        price: 12900,
        category: 'Budget',
        image: '/photo-1565849904461-04a58ad377e0.jpg',
    },
    {
        name: 'Value Plus Model',
        price: 18900,
        category: 'Mid-range',
        image: '/photo-1585060544812-6b45742d762f.jpg',
    },
    {
        name: 'Special Gaming Edition',
        price: 28405,
        oldPrice: 29900,
        discount: '-5%',
        category: 'Gaming',
        image: '/photo-1607936854279-55e8a4c64888.jpg',
    },
    {
        name: 'Compact Mini Model',
        price: 22900,
        category: 'Mid-range',
        image: '/photo-1533228100845-08145b01de14.jpg',
    },
];

const categories = ['All', 'Flagship', 'Mid-range', 'Budget', 'Gaming'];

export default function Products() {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredProducts = activeCategory === 'All' 
        ? products 
        : products.filter(product => product.category === activeCategory);

    return (
        <section className="bg-white py-16 px-4">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    Featured Products
                </h2>
                <p className="text-lg text-gray-500">
                    Explore our carefully selected popular smartphone models
                </p>
            </div>

            {/* Category Filters */}
            <div className="max-w-7xl mx-auto mb-12">
                <div className="flex flex-wrap justify-center gap-4">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-2 rounded-full text-base font-medium transition-all duration-300 ${
                                activeCategory === category
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Products Grid */}
            <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {filteredProducts.map((product, idx) => (
                    <div
                        key={idx}
                        className="group bg-white rounded-3xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg"
                    >
                        <div className="relative">
                            <Image
                                src={product.image}
                                alt={product.name}
                                width={400}
                                height={400}
                                className="w-full h-[400px] object-cover"
                            />
                            {product.tag && (
                                <span className="absolute top-4 left-4 bg-[#00b4d8] text-white text-sm font-medium px-4 py-1 rounded-full">
                                    {product.tag}
                                </span>
                            )}
                            {product.discount && (
                                <span className="absolute top-4 left-4 bg-red-500 text-white text-sm font-medium px-4 py-1 rounded-full">
                                    {product.discount}
                                </span>
                            )}
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                                <button className="bg-white text-gray-900 w-[80%] py-3 rounded-full font-semibold flex items-center justify-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                                    Add to Cart
                                </button>
                            </div>
                            <button className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                            </button>
                        </div>
                        <div className="p-6">
                            <h3 className="font-semibold text-xl text-blue-500 hover:text-blue-600 mb-2">{product.name}</h3>
                            <div className="flex items-baseline gap-2">
                                <span className="text-xl font-bold text-gray-900">
                                    ฿{product.price.toLocaleString()}
                                </span>
                                {product.oldPrice && (
                                    <span className="text-base text-gray-400 line-through">
                                        ฿{product.oldPrice.toLocaleString()}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-12">
                <button className="px-6 py-3 border border-gray-300 rounded-full font-semibold hover:bg-blue-400 transition">
                    View All Products
                </button>
            </div>
        </section>
    );
}
