
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingCart, 
  Menu, 
  X, 
  Download, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Youtube 
} from 'lucide-react';
import { Logo } from './Logo';
import { useCart } from '../context/CartContext';

export const InstantBadge = () => (
  <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
    <Download className="w-3.5 h-3.5" />
    Instant Download
  </div>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { totalItems } = useCart();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Bundles', path: '/bundles' },
    { name: 'Cara Kerja', path: '/how-it-works' },
    { name: 'Testimoni', path: '/testimonials' },
    { name: 'FAQ', path: '/faq' },
  ];

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="hover:opacity-90 transition-opacity group">
            <Logo />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-bold transition-colors hover:text-indigo-600 uppercase tracking-wide ${
                  location.pathname === link.path ? 'text-indigo-600' : 'text-slate-500'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/cart" className="relative p-2 text-slate-600 hover:text-indigo-600 transition-colors">
              <ShoppingCart className="w-5 h-5" />
              <AnimatePresence>
                {totalItems > 0 && (
                  <motion.span 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    key={totalItems}
                    className="absolute -top-1 -right-1 bg-indigo-600 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold shadow-lg"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <Link to="/cart" className="relative p-2 text-slate-600">
              <ShoppingCart className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 bg-indigo-600 text-white text-[8px] w-3.5 h-3.5 flex items-center justify-center rounded-full font-bold">
                  {totalItems}
                </span>
              )}
            </Link>
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 p-2">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-b border-slate-200 py-6 px-4 space-y-4 shadow-xl absolute top-20 w-full left-0"
          >
            {[...navLinks, { name: 'Tentang', path: '/about' }, { name: 'Blog', path: '/blog' }].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block text-lg font-bold uppercase tracking-wider ${
                  location.pathname === link.path ? 'text-indigo-600' : 'text-slate-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => {
  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, label: 'Instagram', href: '#' },
    { icon: <Twitter className="w-5 h-5" />, label: 'Twitter', href: '#' },
    { icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn', href: '#' },
    { icon: <Youtube className="w-5 h-5" />, label: 'YouTube', href: '#' },
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 py-24 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
        <div className="space-y-8">
          <Link to="/" className="inline-block group">
            <Logo variant="light" className="scale-110 origin-left" />
          </Link>
          <p className="text-sm leading-relaxed max-w-xs text-slate-500">
            Marketplace aset digital premium. Solusi produktivitas instan untuk kreator, desainer, dan profesional masa kini.
          </p>
          <div className="space-y-4">
            <p className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.2em]">Koneksi Sosial</p>
            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-slate-500 hover:bg-indigo-600 hover:text-white transition-all transform hover:-translate-y-1"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Produk Kami</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li><Link to="/shop" className="hover:text-indigo-400 transition-colors">Notion Templates</Link></li>
            <li><Link to="/shop" className="hover:text-indigo-400 transition-colors">Canva Kits</Link></li>
            <li><Link to="/shop" className="hover:text-indigo-400 transition-colors">UI Dashboards</Link></li>
            <li><Link to="/bundles" className="hover:text-indigo-400 transition-colors">Special Bundles</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Perusahaan</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li><Link to="/about" className="hover:text-indigo-400 transition-colors">Tentang Kami</Link></li>
            <li><Link to="/how-it-works" className="hover:text-indigo-400 transition-colors">Cara Kerja</Link></li>
            <li><Link to="/blog" className="hover:text-indigo-400 transition-colors">Berita & Insight</Link></li>
            <li><Link to="/testimonials" className="hover:text-indigo-400 transition-colors">Apa Kata Klien</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">V.I.P Member</h4>
          <p className="text-sm mb-6 leading-relaxed text-slate-500">Dapatkan akses eksklusif ke produk gratis setiap bulannya.</p>
          <div className="flex flex-col gap-3">
            <input 
              type="email" 
              placeholder="Alamat Email Anda" 
              className="bg-slate-900 border-none rounded-xl px-5 py-3 text-sm focus:ring-2 focus:ring-indigo-500 w-full outline-none text-white placeholder:text-slate-600 font-medium"
            />
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-xl text-sm transition-colors font-bold w-full shadow-lg shadow-indigo-900/20">
              Langganan Sekarang
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-slate-600">
        <p>&copy; 2024 The Digital Asset Store. Didesain dengan Presisi.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Ketentuan Layanan</a>
          <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
        </div>
      </div>
    </footer>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};
