
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Product } from '../types';
import { InstantBadge } from './Layout';
import { ArrowRight, ShoppingCart, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface Props {
  product: Product;
  index?: number;
}

export const ProductCard: React.FC<Props> = ({ product, index = 0 }) => {
  const { addToCart, cart } = useCart();
  const isInCart = cart.some(item => item.id === product.id);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group bg-white rounded-2xl overflow-hidden border border-slate-200 transition-shadow duration-300 hover:shadow-2xl flex flex-col h-full"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <motion.img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700"
          whileHover={{ scale: 1.1 }}
        />
        <div className="absolute top-4 left-4">
          <InstantBadge />
        </div>
        {product.isBestValue && (
          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="absolute top-4 right-4 bg-orange-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg"
          >
            Best Value
          </motion.div>
        )}
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest">{product.category}</span>
          <div className="text-right">
            {product.originalPrice && (
              <span className="block text-xs text-slate-400 line-through">Rp {product.originalPrice.toLocaleString('id-ID')}</span>
            )}
            <span className="text-lg font-bold text-slate-900">Rp {product.price.toLocaleString('id-ID')}</span>
          </div>
        </div>
        
        <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-600 transition-colors">{product.name}</h3>
        <p className="text-slate-500 text-sm line-clamp-2 mb-6 leading-relaxed">
          {product.description}
        </p>
        
        <div className="mt-auto grid grid-cols-5 gap-2">
          <Link 
            to={`/product/${product.id}`}
            className="col-span-4 flex items-center justify-center gap-2 bg-slate-900 text-white py-3 rounded-xl font-semibold transition-all hover:bg-indigo-600 group-hover:shadow-lg group-hover:shadow-indigo-100"
          >
            Detail Produk
            <ArrowRight className="w-4 h-4" />
          </Link>
          <button 
            onClick={() => addToCart(product)}
            disabled={isInCart}
            className={`col-span-1 flex items-center justify-center rounded-xl transition-all shadow-sm ${
              isInCart 
                ? 'bg-emerald-100 text-emerald-600 cursor-default' 
                : 'bg-indigo-50 text-indigo-600 hover:bg-indigo-600 hover:text-white'
            }`}
            title={isInCart ? "Sudah di keranjang" : "Masukkan ke keranjang"}
          >
            {isInCart ? <Check className="w-5 h-5" /> : <ShoppingCart className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </motion.div>
  );
};
