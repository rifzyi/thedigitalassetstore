
import React from 'react';
import { BUNDLES } from '../data';
import { ProductCard } from '../components/ProductCard';

export const Bundles = () => {
  return (
    <div className="py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Penawaran Paket</div>
          <h1 className="text-5xl font-bold font-serif">Bundle & Paket Hemat</h1>
          <p className="text-slate-500 max-w-xl mx-auto">Dapatkan koleksi lengkap dengan harga yang jauh lebih terjangkau dibanding beli satuan.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto gap-8">
          {BUNDLES.map(b => (
            <ProductCard key={b.id} product={b} />
          ))}
          <div className="bg-indigo-600 rounded-2xl p-8 text-white flex flex-col justify-center items-center text-center space-y-6">
            <h3 className="text-2xl font-bold">Butuh Paket Kustom?</h3>
            <p className="text-indigo-100">Beli minimal 3 produk satuan dan dapatkan diskon 30% otomatis di checkout.</p>
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-bold">Hubungi Kami</button>
          </div>
        </div>
      </div>
    </div>
  );
};
