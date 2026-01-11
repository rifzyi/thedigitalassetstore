
import React from 'react';
import { ShoppingBag, CreditCard, Download, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const HowItWorks = () => {
  const steps = [
    {
      icon: <ShoppingBag className="w-8 h-8" />,
      title: "1. Pilih Produk",
      description: "Jelajahi koleksi template Notion, Canva, UI Kit, atau Preset kami yang telah dikurasi secara profesional."
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "2. Pembayaran Aman",
      description: "Lakukan pembayaran melalui berbagai metode instan (E-wallet, QRIS, atau Transfer Bank). Transaksi 100% aman."
    },
    {
      icon: <Download className="w-8 h-8" />,
      title: "3. Akses Instan",
      description: "Setelah pembayaran berhasil, link download akan muncul secara otomatis di layar dan dikirimkan ke email Anda."
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 space-y-4">
          <h1 className="text-5xl font-bold font-serif">Cara Kerja</h1>
          <p className="text-slate-500 max-w-xl mx-auto text-lg">Proses mudah dan cepat untuk meningkatkan produktivitas Anda dalam hitungan detik.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {steps.map((step, i) => (
            <div key={i} className="relative p-8 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col items-center text-center group hover:bg-white hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-indigo-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-indigo-100 group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-slate-500 leading-relaxed">{step.description}</p>
              {i < 2 && (
                <div className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 z-10">
                  <ArrowRight className="w-8 h-8 text-slate-200" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-slate-900 rounded-[2.5rem] p-12 text-center text-white space-y-6">
          <h2 className="text-3xl font-bold font-serif">Siap Untuk Memulai?</h2>
          <p className="text-slate-400 max-w-lg mx-auto">Bergabunglah dengan ribuan kreator yang sudah mengotomatisasi alur kerja mereka.</p>
          <Link to="/shop" className="inline-block bg-white text-slate-900 px-10 py-4 rounded-full font-bold hover:bg-indigo-50 transition-all">
            Lihat Semua Produk
          </Link>
        </div>
      </div>
    </div>
  );
};
