import React, { useState } from 'react'; // Tambah useState untuk FAQ
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PRODUCTS, BUNDLES, TESTIMONIALS } from '../data.ts';
import { ProductCard } from '../components/ProductCard.tsx';
import { ArrowRight, CheckCircle2, Zap, Layout as LayoutIcon, Camera, Paintbrush, X, ShoppingBag, CreditCard, Download, ChevronUp, ChevronDown } from 'lucide-react';

// --- KOMPONEN KECIL (FAQ ITEM) ---
const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-200">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-6 text-left hover:text-indigo-600 transition-colors"
      >
        <span className="text-lg font-bold">{question}</span>
        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>
      {isOpen && (
        <div className="pb-6 text-slate-500 leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
          {answer}
        </div>
      )}
    </div>
  );
};

// --- SECTIONS ---

const Hero = () => (
  <section id="home" className="relative py-20 lg:py-32 overflow-hidden bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
      <motion.div 
        className="flex-1 text-center lg:text-left space-y-8"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold">
          <Zap className="w-4 h-4" />
          Akses Instan & Download Langsung
        </div>
        <h1 className="text-5xl lg:text-7xl font-bold font-serif text-slate-900 leading-[1.1]">
          Satu Klik Menuju <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-emerald-500">Produktivitas Sempurna</span>
        </h1>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
          The Digital Asset Store menyediakan template Notion, Canva, UI Kit, dan Preset Lightroom premium untuk membantu Anda bekerja lebih cerdas.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
          <a href="#products" className="group bg-indigo-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 flex items-center gap-2">
            Mulai Sekarang
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#bundles" className="text-slate-600 font-bold hover:text-indigo-600 transition-all flex items-center gap-2">
            Lihat Paket Hemat
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </motion.div>
      
      {/* Bagian Gambar Hero tetap sama seperti sebelumnya */}
      <motion.div 
        className="flex-1 relative"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(79,70,229,0.15)]">
           <img 
            src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=1000&q=80" 
            alt="Workspace" 
            className="w-full h-auto"
          />
        </div>
      </motion.div>
    </div>
  </section>
);

const Features = () => (
  <section id="features" className="py-24 bg-slate-50 overflow-hidden">
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
            transition={{ delay: i * 0.1 }}
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

// Diambil dari pages/HowItWorks.tsx dan disederhanakan untuk Home
const HowItWorksSection = () => (
  <section id="how-it-works" className="py-24 bg-white border-t border-slate-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold font-serif mb-4">Cara Kerja</h2>
        <p className="text-slate-500">Tiga langkah mudah menuju produktivitas.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {[
          { icon: <ShoppingBag />, title: "1. Pilih Produk", desc: "Pilih template yang sesuai kebutuhan Anda." },
          { icon: <CreditCard />, title: "2. Bayar Aman", desc: "Support QRIS, E-Wallet & Transfer Bank." },
          { icon: <Download />, title: "3. Download", desc: "Link akses dikirim instan ke email Anda." }
        ].map((step, i) => (
          <div key={i} className="text-center group">
            <div className="w-20 h-20 mx-auto bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
              {React.cloneElement(step.icon as any, { className: "w-8 h-8" })}
            </div>
            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
            <p className="text-slate-500">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FeaturedProducts = () => (
  <section id="products" className="py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h2 className="text-4xl font-bold font-serif mb-4">Produk Pilihan</h2>
          <p className="text-slate-500">Paling banyak diunduh minggu ini.</p>
        </div>
        <Link to="/shop" className="text-indigo-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
          Lihat Katalog Lengkap
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
     {/* Konten Before After sama seperti file sebelumnya */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-4xl lg:text-5xl font-bold font-serif">Transformasi Workflow</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="bg-slate-900 p-6 rounded-2xl border-l-4 border-red-500">
             <h3 className="font-bold text-red-400 mb-2">Sebelum:</h3>
             <p className="text-slate-400">File berantakan, buang waktu cari dokumen, deadline terlewat.</p>
          </div>
          <div className="bg-slate-900 p-6 rounded-2xl border-l-4 border-emerald-500">
             <h3 className="font-bold text-emerald-400 mb-2">Sesudah:</h3>
             <p className="text-white">Semua terorganisir otomatis, hemat waktu 80%, pikiran tenang.</p>
          </div>
        </div>
        <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-8 text-center flex flex-col justify-center items-center min-h-[300px]">
           <h4 className="text-3xl font-bold mb-6">Rasakan Bedanya</h4>
           <a href="#products" className="bg-white text-indigo-600 px-8 py-3 rounded-full font-bold shadow-lg hover:bg-indigo-50 transition-all">
             Coba Sekarang
           </a>
        </div>
      </div>
    </div>
  </section>
);

const BundlePromo = () => (
  <section id="bundles" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="bg-indigo-600 rounded-[2.5rem] p-8 lg:p-16 flex flex-col lg:flex-row items-center gap-12 shadow-2xl overflow-hidden relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="flex-1 space-y-6 text-white text-center lg:text-left relative z-10">
          <span className="bg-orange-500 text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-widest">Limited Offer</span>
          <h2 className="text-4xl lg:text-5xl font-bold font-serif">Hemat 70% dengan Paket Ultimate</h2>
          <p className="text-indigo-100 text-lg">Semua aset digital terbaik kami dalam satu paket super hemat.</p>
          <Link to={`/product/${BUNDLES[0].id}`} className="inline-flex items-center gap-2 bg-white text-indigo-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-indigo-50 transition-all">
            Ambil Promonya
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
        <div className="w-full lg:w-[350px] bg-white rounded-3xl p-6 shadow-2xl relative z-10 rotate-3 hover:rotate-0 transition-transform duration-500">
             <img src={BUNDLES[0].image} className="w-full h-40 object-cover rounded-xl mb-4" alt="Bundle" />
             <div className="text-center">
               <span className="text-slate-400 line-through text-sm">Rp 1.250.000</span>
               <div className="text-3xl font-black text-indigo-600">Rp 499k</div>
             </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const TestimonialsSection = () => (
  <section id="testimonials" className="py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold font-serif mb-4">Kata Mereka</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((t, i) => (
          <motion.div 
            key={t.id} 
            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <p className="text-slate-600 italic mb-6">"{t.content}"</p>
            <div className="flex items-center gap-4">
              <img src={t.avatar} className="w-10 h-10 rounded-full" alt={t.name} />
              <div>
                <h4 className="font-bold text-slate-900 text-sm">{t.name}</h4>
                <p className="text-[10px] text-slate-400 font-bold uppercase">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// Diambil dari pages/FAQ.tsx
const FAQSection = () => {
  const faqs = [
    { question: "Cara terima produk?", answer: "Otomatis setelah bayar, link muncul di layar & email." },
    { question: "Ada biaya bulanan?", answer: "Tidak. Sekali bayar untuk akses selamanya." },
    { question: "Bisa diedit?", answer: "Ya, semua template fully editable di aplikasi masing-masing." },
    { question: "Garansi uang kembali?", answer: "Produk digital non-refundable, tapi kami bantu support 24/7 jika ada kendala." }
  ];
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-serif">FAQ</h2>
        </div>
        <div className="bg-slate-50 p-8 rounded-3xl">
          {faqs.map((faq, i) => <FAQItem key={i} {...faq} />)}
        </div>
      </div>
    </section>
  );
};

export const Home = () => {
  return (
    <div className="space-y-0">
      <Hero />
      <Features />
      <HowItWorksSection />
      <FeaturedProducts />
      <BeforeAfterSection />
      <BundlePromo />
      <TestimonialsSection />
      <FAQSection />
    </div>
  );
};
