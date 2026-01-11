
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PRODUCTS, BUNDLES } from '../data';
import { InstantBadge } from '../components/Layout';
import { CheckCircle2, ShoppingCart, ArrowLeft, Download, ShieldCheck, Clock, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';

export const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, cart } = useCart();
  const allProducts = [...PRODUCTS, ...BUNDLES];
  const product = allProducts.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6">
        <h2 className="text-2xl font-bold">Produk tidak ditemukan</h2>
        <Link to="/shop" className="text-indigo-600 font-bold underline">Kembali ke Toko</Link>
      </div>
    );
  }

  const isInCart = cart.some(item => item.id === product.id);

  const handleBuyNow = () => {
    addToCart(product);
    navigate('/checkout');
  };

  return (
    <div className="py-12 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/shop" className="inline-flex items-center gap-2 text-slate-500 hover:text-indigo-600 transition-colors mb-12 font-bold text-sm">
          <ArrowLeft className="w-4 h-4" />
          KEMBALI KE SEMUA PRODUK
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Image */}
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl"
            >
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </motion.div>
            <div className="grid grid-cols-3 gap-4">
              {[1,2,3].map(i => (
                <div key={i} className="aspect-square rounded-xl bg-slate-100 overflow-hidden">
                  <img src={`${product.image}&sig=${i}`} className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all cursor-pointer" />
                </div>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <InstantBadge />
              <h1 className="text-4xl lg:text-5xl font-bold font-serif text-slate-900">{product.name}</h1>
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-indigo-600">Rp {product.price.toLocaleString('id-ID')}</span>
                {product.originalPrice && (
                  <span className="text-xl text-slate-400 line-through">Rp {product.originalPrice.toLocaleString('id-ID')}</span>
                )}
              </div>
            </div>

            <p className="text-slate-600 text-lg leading-relaxed">
              {product.description}
            </p>

            <div className="space-y-4">
              <h3 className="font-bold text-slate-900 uppercase tracking-widest text-xs">Apa yang anda dapatkan:</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleBuyNow}
                className="flex-1 bg-slate-900 text-white py-5 rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-3"
              >
                Beli Sekarang
              </button>
              <button 
                onClick={() => addToCart(product)}
                disabled={isInCart}
                className={`flex-1 py-5 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-3 border-2 ${
                  isInCart 
                  ? 'border-emerald-500 text-emerald-600 bg-emerald-50' 
                  : 'border-indigo-600 text-indigo-600 hover:bg-indigo-50 shadow-xl shadow-indigo-100'
                }`}
              >
                {isInCart ? (
                  <>
                    <Check className="w-5 h-5" />
                    Sudah di Keranjang
                  </>
                ) : (
                  <>
                    <ShoppingCart className="w-5 h-5" />
                    Masukkan Keranjang
                  </>
                )}
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-200 text-center">
              <div className="space-y-2">
                <Download className="w-6 h-6 mx-auto text-slate-400" />
                <p className="text-[10px] font-bold text-slate-500 uppercase">Instant</p>
              </div>
              <div className="space-y-2">
                <ShieldCheck className="w-6 h-6 mx-auto text-slate-400" />
                <p className="text-[10px] font-bold text-slate-500 uppercase">Secure Pay</p>
              </div>
              <div className="space-y-2">
                <Clock className="w-6 h-6 mx-auto text-slate-400" />
                <p className="text-[10px] font-bold text-slate-500 uppercase">Life Access</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
