
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PRODUCTS, BUNDLES, TESTIMONIALS } from '../data';
import { ProductCard } from '../components/ProductCard';
import { ArrowRight, CheckCircle2, Zap, Layout as LayoutIcon, Camera, Paintbrush, X } from 'lucide-react';

const Hero = () => (
  <section className="relative py-20 lg:py-32 overflow-hidden bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
      <motion.div 
        className="flex-1 text-center lg:text-left space-y-8"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold"
        >
          <Zap className="w-4 h-4" />
          Akses Instan & Download Langsung
        </motion.div>
        <motion.h1 
          className="text-5xl lg:text-7xl font-bold font-serif text-slate-900 leading-[1.1]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Satu Klik Menuju <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-emerald-500">Produktivitas Sempurna</span>
        </motion.h1>
        <motion.p 
          className="text-lg text-slate-500 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          The Digital Asset Store menyediakan template Notion, Canva, UI Kit, dan Preset Lightroom premium untuk membantu Anda bekerja lebih cerdas.
        </motion.p>
        <motion.div 
          className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Link to="/shop" className="group bg-indigo-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 flex items-center gap-2">
            Mulai Sekarang
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link to="/bundles" className="text-slate-600 font-bold hover:text-indigo-600 transition-all flex items-center gap-2">
            Lihat Paket Hemat
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="flex-1 relative"
        initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(79,70,229,0.15)]">
          <img 
            src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=1000&q=80" 
            alt="Workspace" 
            className="w-full h-auto"
          />
        </div>
        <motion.div 
          className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-2xl hidden md:block"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">Instant Download</p>
              <p className="text-xs text-slate-500">No waiting time</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const Features = () => (
  <section className="py-24 bg-slate-50 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { icon: <LayoutIcon />, title: "Notion Templates", desc: "Sistem organisasi untuk personal & bisnis." },
          { icon: <Paintbrush />, title: "Canva Packs", desc: "Design estetik siap pakai untuk Instagram." },
          { icon: <Zap />, title: "UI Kits", desc: "Komponen modern untuk designer & developer." },
          { icon: <Camera />, title: "Lightroom Presets", desc: "Preset pro untuk edit foto sekejap." }
        ].map((feat, i) => (
          <motion.div 
            key={i} 
            className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-indigo-600 transition-colors group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <div className="w-14 h-14 bg-slate-50 text-slate-900 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all transform group-hover:rotate-6">
              {feat.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{feat.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{feat.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const FeaturedProducts = () => (
  <section className="py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold font-serif mb-4">Produk Pilihan</h2>
          <p className="text-slate-500">Paling banyak diunduh oleh para kreator minggu ini.</p>
        </motion.div>
        <Link to="/shop" className="text-indigo-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
          Lihat Semua Produk
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PRODUCTS.slice(0, 3).map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>
    </div>
  </section>
);

const BeforeAfterSection = () => (
  <section className="py-24 bg-slate-950 text-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="text-center mb-16 space-y-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl lg:text-5xl font-bold font-serif">Transformasi Alur Kerja Anda</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">Lihat perbedaan nyata setelah menggunakan sistem terstruktur kami.</p>
      </motion.div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <motion.div 
            className="bg-slate-900 p-8 rounded-3xl border-l-4 border-red-500/50"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-red-400 mb-4 uppercase tracking-widest text-xs">Sebelum Template</h3>
            <ul className="space-y-4 text-slate-400">
              <li className="flex gap-3"><X className="w-5 h-5 text-red-500 shrink-0" /><span>Pekerjaan berantakan.</span></li>
              <li className="flex gap-3"><X className="w-5 h-5 text-red-500 shrink-0" /><span>Habis waktu berjam-jam.</span></li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="bg-slate-900 p-8 rounded-3xl border-l-4 border-emerald-500/50 shadow-2xl shadow-indigo-500/10"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-emerald-400 mb-4 uppercase tracking-widest text-xs">Sesudah Template</h3>
            <ul className="space-y-4 text-slate-100">
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /><span>Sistem kerja rapi otomatis.</span></li>
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /><span>Hemat waktu 80%.</span></li>
            </ul>
          </motion.div>
        </div>
        
        <motion.div 
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="aspect-square bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl flex items-center justify-center p-8 text-center">
            <div className="space-y-6">
              <motion.span 
                className="text-6xl block"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >🚀</motion.span>
              <h4 className="text-2xl font-bold">Siap Upgrade?</h4>
              <Link to="/shop" className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-full font-bold shadow-lg hover:bg-indigo-50 transition-all">
                Ambil Sekarang
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const BundlePromo = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="bg-indigo-600 rounded-[2.5rem] p-8 lg:p-16 flex flex-col lg:flex-row items-center gap-12 relative overflow-hidden shadow-2xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex-1 space-y-6 text-white text-center lg:text-left relative z-10">
          <div className="inline-block bg-orange-500 text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-widest">Penawaran Terbatas</div>
          <h2 className="text-4xl lg:text-5xl font-bold font-serif">Hemat 70% dengan Paket Ultimate</h2>
          <p className="text-indigo-100 text-lg">Semua aset digital terbaik kami dalam satu paket super hemat.</p>
          <Link to={`/product/${BUNDLES[0].id}`} className="inline-flex items-center gap-2 bg-white text-indigo-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-indigo-50 transition-all">
            Beli Paket Hemat
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
        
        <motion.div 
          className="w-full lg:w-[400px] bg-white rounded-3xl p-8 shadow-2xl relative z-10"
          whileHover={{ scale: 1.02 }}
        >
          <div className="text-center space-y-4">
             <img src={BUNDLES[0].image} className="w-full h-48 object-cover rounded-xl mb-4" />
             <h3 className="text-2xl font-bold text-slate-900">{BUNDLES[0].name}</h3>
             <div className="flex items-center justify-center gap-4">
               <span className="text-slate-400 line-through text-lg">Rp 1.250.000</span>
               <span className="text-3xl font-black text-indigo-600">Rp 499k</span>
             </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold font-serif mb-4">Apa Kata Mereka?</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((t, i) => (
          <motion.div 
            key={t.id} 
            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <p className="text-slate-600 italic mb-8">"{t.content}"</p>
            <div className="flex items-center gap-4">
              <img src={t.avatar} className="w-12 h-12 rounded-full" />
              <div>
                <h4 className="font-bold text-slate-900">{t.name}</h4>
                <p className="text-xs text-slate-400 font-bold uppercase">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export const Home = () => {
  return (
    <div className="space-y-0">
      <Hero />
      <Features />
      <FeaturedProducts />
      <BeforeAfterSection />
      <BundlePromo />
      <Testimonials />
    </div>
  );
};
