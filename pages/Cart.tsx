
import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Trash2, ArrowRight, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Cart = () => {
  const { cart, removeFromCart, totalPrice, totalItems } = useCart();

  if (totalItems === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center gap-8 px-4 text-center">
        <div className="w-24 h-24 bg-slate-100 text-slate-300 rounded-full flex items-center justify-center">
          <ShoppingBag className="w-12 h-12" />
        </div>
        <div className="space-y-2">
          <h2 className="text-3xl font-bold font-serif">Keranjang Kosong</h2>
          <p className="text-slate-500">Anda belum menambahkan aset digital apapun ke keranjang.</p>
        </div>
        <Link to="/shop" className="bg-indigo-600 text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-indigo-200">
          Mulai Belanja
        </Link>
      </div>
    );
  }

  return (
    <div className="py-20 bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-4xl font-bold font-serif">Keranjang Belanja</h1>
          <span className="bg-white px-4 py-1.5 rounded-full border border-slate-200 text-xs font-bold uppercase tracking-widest text-slate-500">
            {totalItems} Item terpilih
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Items List */}
          <div className="lg:col-span-2 space-y-4">
            <AnimatePresence>
              {cart.map((item) => (
                <motion.div 
                  key={item.id}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-white p-6 rounded-[2rem] border border-slate-200 flex items-center gap-6 shadow-sm group"
                >
                  <div className="w-24 h-24 rounded-2xl overflow-hidden bg-slate-100 shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-grow">
                    <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest">{item.category}</span>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">{item.name}</h3>
                    <p className="text-lg font-black text-indigo-600">Rp {item.price.toLocaleString('id-ID')}</p>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="p-3 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                    title="Hapus"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
            
            <Link to="/shop" className="inline-flex items-center gap-2 text-slate-500 hover:text-indigo-600 font-bold text-sm pt-4">
              <ArrowLeft className="w-4 h-4" />
              LANJUT BELANJA
            </Link>
          </div>

          {/* Order Summary */}
          <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl border border-slate-100 sticky top-24">
            <h2 className="text-xl font-bold mb-8">Ringkasan Pesanan</h2>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-slate-500">
                <span>Subtotal ({totalItems} item)</span>
                <span>Rp {totalPrice.toLocaleString('id-ID')}</span>
              </div>
              <div className="flex justify-between text-slate-500">
                <span>Diskon</span>
                <span className="text-emerald-500">Rp 0</span>
              </div>
              <div className="pt-4 border-t border-slate-100 flex justify-between items-end">
                <span className="font-bold">Total</span>
                <span className="text-2xl font-black text-indigo-600">Rp {totalPrice.toLocaleString('id-ID')}</span>
              </div>
            </div>
            
            <Link to="/checkout" className="w-full bg-indigo-600 text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 group">
              Checkout Sekarang
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <p className="text-[10px] text-slate-400 text-center uppercase tracking-widest font-bold mt-6">
              Akses Instan Setelah Pembayaran
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
