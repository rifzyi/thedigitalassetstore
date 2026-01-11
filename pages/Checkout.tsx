
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { InstantBadge } from '../components/Layout';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Smartphone, 
  CheckCircle, 
  Lock,
  Landmark,
  QrCode,
  Copy,
  Loader2,
  RefreshCw,
  AlertCircle,
  ArrowLeft,
  ShieldCheck,
  Zap,
  Search
} from 'lucide-react';

type Step = 'form' | 'pending' | 'success';

export const Checkout = () => {
  const navigate = useNavigate();
  const { cart, totalPrice, clearCart } = useCart();
  const [step, setStep] = useState<Step>('form');
  const [paymentMethod, setPaymentMethod] = useState('QRIS');
  const [isDownloading, setIsDownloading] = useState(false);
  const [isChecking, setIsChecking] = useState(false);
  
  const orderId = React.useMemo(() => "DAS-" + Math.floor(Math.random() * 90000 + 10000), []);

  // DEMO LOGIC: Automatic success after 5 seconds when QR is shown
  useEffect(() => {
    let timeout: any;
    if (step === 'pending') {
      timeout = setTimeout(() => {
        setStep('success');
      }, 5000); // 5 seconds demo wait time
    }
    return () => clearTimeout(timeout);
  }, [step]);

  if (cart.length === 0 && step === 'form') {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center gap-6 text-center px-4">
        <h2 className="text-2xl font-bold">Checkout Kosong</h2>
        <p className="text-slate-500">Anda tidak memiliki produk untuk dibayar.</p>
        <Link to="/shop" className="text-indigo-600 font-bold underline">Kembali ke Toko</Link>
      </div>
    );
  }

  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => {
      // Use the first item's download URL as a demo
      if (cart.length > 0) {
        window.open(cart[0].downloadUrl, '_blank');
      }
      setIsDownloading(false);
    }, 1500);
  };

  if (step === 'success') {
    return (
      <div className="min-h-screen py-20 flex items-center justify-center bg-slate-50 px-4">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", damping: 20 }}
          className="max-w-md w-full bg-white p-12 rounded-[3rem] shadow-2xl text-center space-y-8 border border-slate-100 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-400 to-indigo-500"></div>
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto scale-110 shadow-lg shadow-emerald-100/50"
          >
            <CheckCircle className="w-12 h-12" />
          </motion.div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold font-serif text-slate-900">Pembayaran Berhasil!</h2>
            <p className="text-slate-500 leading-relaxed text-sm">Sistem kami mendeteksi pembayaran sebesar <strong>Rp {totalPrice.toLocaleString('id-ID')}</strong> secara real-time. Aset Anda siap diunduh.</p>
          </div>
          <div className="p-5 bg-slate-50 rounded-2xl flex items-center justify-between border border-slate-100">
             <div className="text-left">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Order ID</p>
                <p className="font-bold text-slate-900">#{orderId}</p>
             </div>
             <div className="scale-75 origin-right">
                <InstantBadge />
             </div>
          </div>
          <button 
            onClick={handleDownload}
            disabled={isDownloading}
            className="w-full bg-indigo-600 text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 disabled:opacity-70"
          >
            {isDownloading ? <Loader2 className="w-5 h-5 animate-spin" /> : <CheckCircle className="w-5 h-5" />}
            Akses Link Download
          </button>
          <Link to="/" onClick={clearCart} className="block text-slate-400 text-sm font-bold hover:text-indigo-600 uppercase tracking-widest">
            Kembali ke Beranda
          </Link>
        </motion.div>
      </div>
    );
  }

  if (step === 'pending') {
    const simulatorUrl = `${window.location.origin}/#/payment-simulator/${orderId}`;
    const qrSource = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(simulatorUrl)}`;

    return (
      <div className="py-20 bg-slate-50 min-h-screen px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100"
          >
            <div className="bg-slate-900 p-8 text-white text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-indigo-500"></div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Loader2 className="w-4 h-4 text-indigo-400 animate-spin" />
                <p className="text-indigo-400 font-bold uppercase tracking-widest text-[10px]">Menunggu Verifikasi Bank</p>
              </div>
              <h2 className="text-3xl font-bold font-serif">Pindai QRIS</h2>
            </div>
            
            <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6 text-center">
                <div className="space-y-6">
                  <div className="relative inline-block">
                    <motion.div 
                      animate={{ opacity: [0.05, 0.1, 0.05] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute -inset-12 bg-indigo-500 rounded-full blur-3xl"
                    ></motion.div>
                    
                    <div className="relative bg-white p-6 rounded-[2rem] border-4 border-slate-100 shadow-2xl overflow-hidden">
                      <img src={qrSource} alt="QRIS" className="w-56 h-56 md:w-64 md:h-64 mx-auto relative z-10" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-3">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Logo_QRIS.svg" className="h-6" alt="QRIS" />
                    <div className="flex items-center gap-2">
                       <p className="text-xs text-slate-400 font-bold uppercase tracking-widest text-[10px]">Sistem Menunggu Pembayaran</p>
                       <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 bg-slate-900 rounded-3xl text-left border border-slate-800">
                   <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Total yang harus dibayar</p>
                   <p className="text-3xl font-black text-white">Rp {totalPrice.toLocaleString('id-ID')}</p>
                </div>
              </div>

              <div className="flex flex-col justify-between space-y-8">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-slate-900">Instruksi Demo:</h3>
                    <div className="space-y-5">
                       {[
                         "Siapkan aplikasi pembayaran di HP Anda",
                         "Scan QR Code yang tampil di layar",
                         "Tunggu 5 detik untuk verifikasi otomatis",
                         "Sistem akan langsung mendeteksi dana Anda"
                       ].map((step, i) => (
                         <div key={i} className="flex gap-4 items-start">
                           <div className="w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center text-[10px] font-bold text-white shrink-0 mt-0.5">{i+1}</div>
                           <p className="text-sm text-slate-600 font-medium leading-relaxed">{step}</p>
                         </div>
                       ))}
                    </div>
                  </div>
                  
                  <div className="p-5 bg-indigo-50 rounded-2xl border border-indigo-100 flex gap-4 items-center">
                    <ShieldCheck className="w-6 h-6 text-indigo-600 shrink-0" />
                    <p className="text-xs text-indigo-800 font-bold leading-tight uppercase tracking-wider">Keamanan Terjamin oleh Digital Asset Store</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="w-full bg-slate-100 text-slate-400 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 border border-slate-200">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Menunggu Dana Masuk...
                  </div>
                  <p className="text-[10px] text-slate-300 text-center uppercase font-bold tracking-[0.3em]">
                    Order ID: {orderId}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-12">
          <Link to="/cart" className="p-2 bg-white rounded-full shadow-sm hover:text-indigo-600 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-4xl lg:text-5xl font-bold font-serif text-slate-900">Checkout</h1>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-200 space-y-8">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-6">
                <div className="w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                <h2 className="text-2xl font-bold text-slate-900">Informasi Pembeli</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" className="bg-slate-50 rounded-2xl px-6 py-4 outline-none border-none focus:ring-2 focus:ring-indigo-600" placeholder="Nama Lengkap" />
                <input type="email" className="bg-slate-50 rounded-2xl px-6 py-4 outline-none border-none focus:ring-2 focus:ring-indigo-600" placeholder="Email" />
                <input type="tel" className="md:col-span-2 bg-slate-50 rounded-2xl px-6 py-4 outline-none border-none focus:ring-2 focus:ring-indigo-600" placeholder="Nomor WhatsApp" />
              </div>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-200 space-y-8">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-6">
                <div className="w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                <h2 className="text-2xl font-bold text-slate-900">Metode Pembayaran</h2>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { id: 'QRIS', icon: <QrCode />, label: 'QRIS' },
                  { id: 'Bank', icon: <Landmark />, label: 'Bank Transfer' },
                  { id: 'E-Wallet', icon: <Smartphone />, label: 'OVO / Dana' }
                ].map(m => (
                  <button 
                    key={m.id} 
                    onClick={() => setPaymentMethod(m.id)}
                    className={`p-6 rounded-2xl border-2 flex flex-col items-center gap-3 transition-all ${paymentMethod === m.id ? 'border-indigo-600 bg-indigo-50 text-indigo-600' : 'border-slate-100 text-slate-400 hover:border-slate-200'}`}
                  >
                    {m.icon}
                    <span className="text-[10px] font-bold uppercase tracking-widest text-center leading-tight">{m.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white p-10 rounded-[3rem] shadow-2xl border border-slate-100 sticky top-24 space-y-8">
              <h2 className="text-2xl font-bold text-slate-900">Ringkasan</h2>
              <div className="space-y-4 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
                {cart.map(item => (
                  <div key={item.id} className="flex justify-between items-center p-3 bg-slate-50 rounded-2xl">
                    <span className="text-sm font-bold truncate pr-4">{item.name}</span>
                    <span className="text-sm font-bold text-indigo-600 shrink-0">Rp {item.price.toLocaleString('id-ID')}</span>
                  </div>
                ))}
              </div>
              <div className="pt-4 border-t border-slate-100 flex justify-between items-baseline">
                <span className="text-xl font-bold text-slate-900">Total</span>
                <span className="text-3xl font-black text-indigo-600">Rp {totalPrice.toLocaleString('id-ID')}</span>
              </div>
              <button onClick={() => setStep('pending')} className="w-full bg-indigo-600 text-white py-6 rounded-[2rem] font-bold text-xl hover:bg-indigo-700 shadow-2xl shadow-indigo-100">
                Lanjut ke QR Code
              </button>
              <div className="flex items-center justify-center gap-2 text-slate-400">
                <Lock className="w-3 h-3" />
                <span className="text-[10px] uppercase font-bold tracking-widest">Protected & Secured</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
