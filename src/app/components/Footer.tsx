'use client';

import {
    Facebook,
    Instagram,
    Twitter,
    Youtube,
    Phone,
    Mail,
    MapPin,
} from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[#0d111c] text-white text-sm pt-16 pb-8 px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                {/* Brand & Social */}
                <div>
                    <h2 className="text-white text-xl font-bold mb-4">PhoneHub</h2>
                    <p className="text-gray-400 mb-4">
                        The premier destination for high-quality smartphones and accessories, with special promotions and excellent after-sales service.
                    </p>
                    <div className="flex space-x-4 text-gray-300">
                        <Facebook className="w-5 h-5 hover:text-blue-400 cursor-pointer" />
                        <Instagram className="w-5 h-5 hover:text-pink-400 cursor-pointer" />
                        <Twitter className="w-5 h-5 hover:text-blue-400 cursor-pointer" />
                        <Youtube className="w-5 h-5 hover:text-red-400 cursor-pointer" />
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-white font-bold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-gray-400">
                        <li><a href="#" className="hover:text-white">Home</a></li>
                        <li><a href="#" className="hover:text-white">New Arrivals</a></li>
                        <li><a href="#" className="hover:text-white">Promotions</a></li>
                        <li><a href="#" className="hover:text-white">Smartphones</a></li>
                        <li><a href="#" className="hover:text-white">Accessories</a></li>
                        <li><a href="#" className="hover:text-white">Blog</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-white font-bold mb-4">Contact Us</h3>
                    <ul className="space-y-3 text-gray-400">
                        <li className="flex items-start gap-2">
                            <Phone className="w-5 h-5 mt-1" />
                            <span>
                                Call: 02-123-4567 <br />
                                Mon–Fri 9:00–18:00
                            </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <Mail className="w-5 h-5 mt-1" />
                            <span>info@phonehub.com</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <MapPin className="w-5 h-5 mt-1" />
                            <span>
                                123 Modern Building, 5th Floor<br />
                                Sukhumvit Road, Klongtoey<br />
                                Bangkok 10110
                            </span>
                        </li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="text-white font-bold mb-4">Newsletter</h3>
                    <p className="text-gray-400 mb-4">
                        Subscribe to our newsletter to receive updates and promotions
                    </p>
                    <div className="flex items-center bg-[#1a1f2c] rounded-lg overflow-hidden">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="bg-transparent px-4 py-2 flex-1 text-white outline-none"
                        />
                        <button className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-none font-semibold">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="max-w-7xl mx-auto">
                <div className="border-t border-gray-800 mt-10 pt-6 text-gray-500 text-sm">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                        <p>© 2025 PhoneHub. All rights reserved.</p>
                        <div className="space-x-6 mt-4 md:mt-0">
                            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                            <a href="#" className="hover:text-white transition-colors">Return Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
