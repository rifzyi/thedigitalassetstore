
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, ShieldCheck, CreditCard, ChevronRight, XCircle } from 'lucide-react';
import { Logo } from '../components/Logo';

export const PaymentSimulator = () => {
  const { id } = useParams();
  const [status, setStatus] = useState<'selecting' | 'processing' | 'success'>('selecting');

  const handlePay = () => {
    setStatus('processing');
    
    // Simulate API call and signal to the other tab
    setTimeout(() => {
      // TRIGGER: Set success in local storage so the PC page detects it!
      localStorage.setItem(`payment_status_${id}`, 'success');
      setStatus('success');
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col p-6 items-center">
      <div className="w-full max-w-sm flex flex-col items-center gap-12 pt-12">
        <Logo iconOnly />
        
        <AnimatePresence mode="wait">
          {status === 'selecting' && (
            <motion.div 
              key="selecting"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="w-full bg-white rounded-[2.5rem] shadow-2xl p-8 border border-slate-100 space-y-8"
            >
              <div className="text-center space-y-2">
                 <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Order ID: #{id}</p>
                 <h1 className="text-2xl font-bold">Gerbang Pembayaran</h1>
              </div>

              <div className="space-y-4">
                 <button onClick={handlePay} className="w-full p-6 bg-indigo-600 text-white rounded-2xl flex items-center justify-between group transition-all shadow-xl shadow-indigo-100 border-2 border-transparent active:scale-95">
                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                          <CreditCard className="w-6 h-6" />
                       </div>
                       <div className="text-left">
                          <p className="font-bold">Bayar Sekarang</p>
                          <p className="text-[10px] opacity-70 uppercase font-bold tracking-widest">Klik untuk Simulasi</p>
                       </div>
                    </div>
                    <ChevronRight className="w-5 h-5" />
                 </button>
                 
                 <Link to="/" className="w-full p-6 bg-slate-50 rounded-2xl flex items-center justify-between group hover:bg-red-50 transition-all border border-slate-100">
                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-slate-300">
                          <XCircle className="w-6 h-6" />
                       </div>
                       <div className="text-left text-slate-400">
                          <p className="font-bold">Batalkan</p>
                       </div>
                    </div>
                 </Link>
              </div>

              <div className="flex items-center justify-center gap-2 text-slate-300">
                 <ShieldCheck className="w-4 h-4" />
                 <span className="text-[10px] font-bold uppercase tracking-widest text-center">Data Anda Terenkripsi 256-bit</span>
              </div>
            </motion.div>
          )}

          {status === 'processing' && (
            <motion.div 
              key="processing"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full bg-white rounded-[2.5rem] shadow-2xl p-12 text-center space-y-8"
            >
              <div className="relative w-24 h-24 mx-auto">
                 <div className="absolute inset-0 border-4 border-slate-100 rounded-full"></div>
                 <div className="absolute inset-0 border-4 border-indigo-600 rounded-full border-t-transparent animate-spin"></div>
              </div>
              <div className="space-y-2">
                 <h2 className="text-xl font-bold">Memverifikasi Saldo...</h2>
                 <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Sistem Sedang Bekerja</p>
              </div>
            </motion.div>
          )}

          {status === 'success' && (
            <motion.div 
              key="success"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full bg-white rounded-[2.5rem] shadow-2xl p-12 text-center space-y-8 border-4 border-emerald-50"
            >
              <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-emerald-100/50">
                 <CheckCircle className="w-12 h-12" />
              </div>
              <div className="space-y-4">
                 <h2 className="text-2xl font-bold">Sukses Terbayar!</h2>
                 <p className="text-sm text-slate-500 leading-relaxed">Silakan lihat layar komputer Anda. Halaman checkout akan otomatis beralih ke halaman download.</p>
              </div>
              <Link to="/" className="inline-block font-bold text-indigo-600 uppercase tracking-widest text-xs py-2 px-6 bg-indigo-50 rounded-full">Tutup</Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
