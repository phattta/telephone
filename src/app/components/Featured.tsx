'use client';

import {
  Truck,
  ShieldCheck,
  CreditCard,
  RotateCcw,
} from 'lucide-react';

const features = [
  {
    icon: <Truck className="w-8 h-8 text-blue-500" />,
    title: 'Free Shipping',
    description: 'Free nationwide shipping on all orders',
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-blue-500" />,
    title: '1-Year Warranty',
    description: 'Full warranty on all products',
  },
  {
    icon: <CreditCard className="w-8 h-8 text-blue-500" />,
    title: '0% Installment',
    description: '0% installment for up to 10 months',
  },
  {
    icon: <RotateCcw className="w-8 h-8 text-blue-500" />,
    title: '30-Day Returns',
    description: 'Not satisfied? Get a full refund or exchange',
  },
];

export default function Featured() {
  return (
    <section className="bg-[#f9fbfd] py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group text-center p-6 rounded-xl transition-all duration-300 hover:bg-white hover:shadow-md border border-transparent hover:border-blue-100"
          >
            <div className="flex justify-center mb-4">
              <div className="bg-white/40 rounded-full p-3 backdrop-blur-sm">
                {feature.icon}
              </div>
            </div>
            <h3 className="text-lg font-bold text-gray-900">{feature.title}</h3>
            <p className="text-sm text-gray-500 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
